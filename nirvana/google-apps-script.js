// Google Apps Script for Nirvana Gardens Enquiry Form
// Deploy this as a web app in Google Apps Script

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet (you'll need to replace this with your actual spreadsheet ID)
    const spreadsheetId = 'YOUR_SPREADSHEET_ID_HERE'; // Replace with your actual spreadsheet ID
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Get current timestamp
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata'
    });
    
    // Prepare the row data
    const rowData = [
      timestamp,           // Timestamp
      data.name,          // Name
      data.email,         // Email
      data.phone,         // Phone
      data.residencyType, // Residency Type
      data.comments || '' // Comments (optional)
    ];
    
    // Append the data to the spreadsheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Enquiry submitted successfully!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error submitting enquiry: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Nirvana Gardens Enquiry Form API is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
} 