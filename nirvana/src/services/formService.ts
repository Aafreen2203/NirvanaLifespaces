// Form submission service for Google Apps Script integration

const GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'; // Replace with your deployed script URL

export interface FormData {
  name: string;
  email: string;
  phone: string;
  residencyType: string;
  comments: string;
}

export interface FormResponse {
  success: boolean;
  message: string;
}

export const submitEnquiryForm = async (formData: FormData): Promise<FormResponse> => {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'Failed to submit enquiry. Please try again later.',
    };
  }
}; 