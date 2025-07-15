import React, { useState, useRef, useEffect } from 'react';

type Message = {
  text: string;
  isBot: boolean;
  time: string;
  id: string; // Added unique ID for better key management
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      addBotMessage("Hello! Welcome to Nirvana Gardens. How can I help you today?");
    }
  };

  const getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const generateId = (): string => {
    return Math.random().toString(36).substring(2, 9);
  };

  const addMessage = (text: string, isBot: boolean) => {
    setMessages((prev) => [...prev, { 
      text, 
      isBot, 
      time: getCurrentTime(),
      id: generateId()
    }]);
  };

  const addBotMessage = (text: string) => addMessage(text, true);
  const addUserMessage = (text: string) => addMessage(text, false);

  const sendMessage = async () => {
    if (!userInput.trim() || isTyping) return;

    const messageToSend = userInput;
    addUserMessage(messageToSend);
    setUserInput('');
    setIsTyping(true);
    
    // Add temporary typing indicator
    const typingId = generateId();
    setMessages(prev => [...prev, { 
      text: '...', 
      isBot: true, 
      time: getCurrentTime(),
      id: typingId
    }]);

    try {
      const response = await fetch('/chat', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageToSend }),
        credentials: 'include' // Important for CORS with credentials
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();
      
      // Remove typing indicator and add actual response
      setMessages(prev => [
        ...prev.filter(msg => msg.id !== typingId),
        {
          text: data.response || "I didn't understand that. Could you rephrase?",
          isBot: true,
          time: getCurrentTime(),
          id: generateId()
        }
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev.filter(msg => msg.id !== typingId),
        {
          text: "Sorry, I'm having trouble connecting. Please try again later.",
          isBot: true,
          time: getCurrentTime(),
          id: generateId()
        }
      ]);
      console.error('Chat error:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isTyping) {
      sendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <>
      <div className="chat-icon" onClick={toggleChat}>💬</div>
      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            Nirvana Gardens AI Assistant
            <span className="close-btn" onClick={toggleChat}>×</span>
          </div>
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
                <div>{msg.text}</div>
                <div className="timestamp">{msg.time}</div>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder={isTyping ? "Assistant is typing..." : "Type a message..."}
              disabled={isTyping}
            />
            <button 
              onClick={sendMessage} 
              disabled={!userInput.trim() || isTyping}
            >
              {isTyping ? (
                <span className="spinner"></span>
              ) : (
                'Send'
              )}
            </button>
          </div>
        </div>
      )}

      <style>{`
        .chat-icon {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background: rgba(40, 65, 57, 0.9);
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(40, 65, 57, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 999;
          font-size: 30px;
          transition: transform 0.3s ease;
          border: 2px solid #F8D794;
          color: #F8D794;
        }

        .chat-icon:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(40, 65, 57, 0.6);
        }

        .chat-popup {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 320px;
          height: 450px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(40, 65, 57, 0.25);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 999;
          border: 1px solid rgba(248, 215, 148, 0.3);
          transform: translateY(20px);
          opacity: 0;
          animation: fadeIn 0.3s ease forwards;
        }

        @keyframes fadeIn {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .chat-header {
          background: rgba(40, 65, 57, 0.9);
          color: #F8D794;
          padding: 15px;
          text-align: center;
          font-weight: bold;
          position: relative;
          font-size: 16px;
          font-family: 'Merriweather', serif;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          cursor: pointer;
          font-size: 20px;
          transition: transform 0.2s ease;
          color: #F8D794;
        }

        .close-btn:hover {
          transform: scale(1.2);
          color: white;
        }

        .chat-body {
          flex: 1;
          padding: 15px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: rgba(248, 215, 148, 0.05);
        }

        .chat-input {
          display: flex;
          padding: 10px;
          background: rgba(248, 215, 148, 0.1);
          border-top: 1px solid rgba(248, 215, 148, 0.2);
          backdrop-filter: blur(20px);
        }

        .chat-input input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #B86830;
          border-radius: 20px;
          outline: none;
          font-size: 14px;
          transition: all 0.3s ease;
          background: rgba(255,255,255,0.8);
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);
          font-family: 'Merriweather', serif;
        }

        .chat-input input:disabled {
          background: rgba(255,255,255,0.4);
          color: #666;
        }

        .chat-input input:focus {
          border: 2px solid rgba(40, 65, 57, 0.8);
          box-shadow: 0 0 5px rgba(40, 65, 57, 0.3);
          background: rgba(255,255,255,0.9);
        }

        .chat-input button {
          margin-left: 8px;
          padding: 0 16px;
          min-width: 60px;
          background: rgba(40, 65, 57, 0.9);
          border: none;
          color: #F8D794;
          border-radius: 20px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Merriweather', serif;
        }

        .chat-input button:disabled {
          background: #ccc;
          cursor: not-allowed;
          opacity: 0.7;
        }

        .chat-input button:hover:not(:disabled) {
          background: #B86830;
          color: white;
        }

        .message {
          max-width: 80%;
          margin: 5px 0;
          padding: 12px 16px;
          border-radius: 15px;
          word-wrap: break-word;
          font-size: 14px;
          line-height: 1.4;
          animation: fadeInUp 0.3s ease;
          font-family: 'Merriweather', serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bot {
          background: rgba(248, 215, 148, 0.9);
          color: #284139;
          align-self: flex-start;
          border-bottom-left-radius: 5px;
          box-shadow: 0 1px 3px rgba(40, 65, 57, 0.1);
          border: 1px solid rgba(184, 104, 48, 0.2);
        }

        .user {
          background: rgba(40, 65, 57, 0.9);
          color: #F8D794;
          align-self: flex-end;
          border-bottom-right-radius: 5px;
          border: 1px solid rgba(248, 215, 148, 0.3);
        }

        .timestamp {
          font-size: 10px;
          color: #B86830;
          text-align: right;
          margin-top: 4px;
          opacity: 0.8;
        }

        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(248, 215, 148, 0.3);
          border-radius: 50%;
          border-top-color: #F8D794;
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
};

export default ChatBot; 