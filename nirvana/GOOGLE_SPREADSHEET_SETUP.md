# Google Spreadsheet Integration Setup Guide

This guide will help you connect your Nirvana Gardens enquiry form to a Google Spreadsheet.

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Nirvana Gardens Enquiries"
4. Add the following headers in the first row:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Residency Type`
   - F1: `Comments`

## Step 2: Set up Google Apps Script

1. In your Google Spreadsheet, go to **Extensions** → **Apps Script**
2. Delete the default code and replace it with the content from `google-apps-script.js`
3. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID
   - To find your spreadsheet ID: Look at the URL when you're in the spreadsheet
   - It's the long string between `/d/` and `/edit` in the URL
   - Example: `https://docs.google.com/spreadsheets/d/1ABC123...XYZ/edit` → ID is `1ABC123...XYZ`

## Step 3: Deploy the Apps Script

1. Click **Deploy** → **New deployment**
2. Choose **Web app** as the type
3. Set the following:
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. Click **Deploy**
5. Copy the **Web app URL** that appears

## Step 4: Update Your Code

1. Open `src/services/formService.ts`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the Web app URL you copied
3. Save the file

## Step 5: Test the Integration

1. Run your React app: `npm run dev`
2. Fill out the enquiry form and submit
3. Check your Google Spreadsheet - you should see the new entry

## Troubleshooting

### Common Issues:

1. **CORS Error**: Make sure your Apps Script is deployed as a web app with "Anyone" access
2. **Spreadsheet not found**: Double-check your spreadsheet ID
3. **Permission denied**: Ensure the Apps Script has permission to access the spreadsheet

### Testing the Apps Script:

You can test your deployed script by visiting the Web app URL in a browser. You should see:
```json
{"message":"Nirvana Gardens Enquiry Form API is running"}
```

### Manual Testing:

You can test the script manually using curl or Postman:
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","phone":"1234567890","residencyType":"2 BHK","comments":"Test message"}' \
  YOUR_WEB_APP_URL
```

## Security Notes

- The form data will be stored in your Google Spreadsheet
- The Apps Script URL is public, so consider adding rate limiting if needed
- You can add additional validation in the Apps Script if required

## Customization

You can modify the `google-apps-script.js` file to:
- Add email notifications when new enquiries are received
- Add data validation
- Format the spreadsheet automatically
- Add additional fields

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify the Apps Script URL is correct
3. Ensure the spreadsheet ID is correct
4. Check that the Apps Script is deployed as a web app 