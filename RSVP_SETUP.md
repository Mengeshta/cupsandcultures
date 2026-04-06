# Google Sheets Setup for Cups & Cultures

## Overview

The website uses Google Sheets as a free, unlimited backend for three form types:

| Form | Sheet | Purpose |
|------|-------|---------|
| RSVP | `RSVP` | First 40 event reservations |
| Waitlist | `Waitlist` | Overflow after 40 RSVPs |
| Newsletter | `Newsletter` | Email subscribers from Connect section |

---

## Step-by-Step Setup

### 1. Prepare your Google Sheet

Open your existing Google Sheet and create **three tabs** (sheets) named exactly:
- `RSVP`
- `Waitlist`
- `Newsletter`

Add these headers to **Row 1** of each tab:

**RSVP & Waitlist tabs:**
| A | B | C |
|---|---|---|
| Name | Email | Timestamp |

**Newsletter tab:**
| A | B |
|---|---|
| Email | Timestamp |

### 2. Add the Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code
3. Paste the following:

```javascript
function doGet(e) {
  var action = e.parameter.action;

  if (action === 'count') {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('RSVP');
    var count = Math.max(0, sheet.getLastRow() - 1); // subtract header row
    return ContentService
      .createTextOutput(JSON.stringify({ count: count }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ error: 'Unknown action' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var action = data.action; // 'rsvp', 'waitlist', or 'newsletter'

    if (action === 'rsvp') {
      var sheet = ss.getSheetByName('RSVP');
      sheet.appendRow([data.name, data.email, data.timestamp]);
    } else if (action === 'waitlist') {
      var sheet = ss.getSheetByName('Waitlist');
      sheet.appendRow([data.name, data.email, data.timestamp]);
    } else if (action === 'newsletter') {
      var sheet = ss.getSheetByName('Newsletter');
      sheet.appendRow([data.email, data.timestamp]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Save the script (Ctrl+S / Cmd+S)

### 3. Deploy the Web App

1. Click **Deploy → New Deployment**
2. Click the gear icon → select **Web app**
3. Set:
   - **Description**: `Cups & Cultures Forms`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. Click **Deploy**
5. Authorize when prompted (click through the "unsafe" warning — this is your own script)
6. **Copy the Web App URL**

### 4. Add the URL to the Code

Open `src/utils/googleSheets.js` and replace:

```javascript
const SHEETS_URL = 'YOUR_GOOGLE_SHEETS_WEBHOOK_URL'
```

with your actual URL:

```javascript
const SHEETS_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec'
```

---

## How It Works

- **RSVP form** (Events section): Checks the RSVP sheet count on page load. Shows "X of 40 spots remaining". After 40, the form switches to "Join the Waitlist" mode and writes to the Waitlist sheet instead.
- **Newsletter form** (Connect section): Email-only signup. Writes to the Newsletter sheet.
- All submissions include timestamps for tracking.

## Re-deploying After Changes

If you edit the Apps Script:
1. Go to **Deploy → Manage deployments**
2. Click the pencil icon on your deployment
3. Change **Version** to `New version`
4. Click **Deploy**

The URL stays the same.
