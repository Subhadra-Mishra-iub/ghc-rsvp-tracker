# 📥 How to Use Different Input Files

## 🎯 Understanding Input Files

Your app accepts event data in **JSON format**. There are several ways to provide input:

### Input File Locations

1. **Default Events (Pre-loaded):**
   - Location: `src/data/defaultEvents.ts`
   - These events load automatically when you open the app
   - These are hardcoded in the app

2. **Sample JSON File (Reference):**
   - Location: `public/sample-events.json`
   - This is a reference file showing the correct JSON format
   - You can upload this file to test the import feature

3. **User-Provided JSON:**
   - Upload any `.json` file through the app
   - OR paste JSON directly into the text area

---

## 🧪 Testing with Different Input Files

### Method 1: Upload a JSON File

1. **Create your own JSON file:**
   - Create a new file (e.g., `my-events.json`)
   - Use this format:
   ```json
   [
     {
       "id": 10,
       "company": "Netflix",
       "title": "Netflix Women in Engineering Mixer",
       "start": "2025-11-07T19:00:00",
       "end": "2025-11-07T21:00:00",
       "location": "Chicago Convention Center",
       "rsvpUrl": "https://netflix.com/careers/ghc",
       "status": "planned"
     },
     {
       "id": 11,
       "company": "Stripe",
       "title": "Stripe Developer Night",
       "start": "2025-11-08T18:00:00",
       "end": "2025-11-08T20:00:00",
       "location": "The Aviary Chicago",
       "rsvpUrl": "https://stripe.com/jobs/ghc",
       "status": "planned"
     }
   ]
   ```

2. **Import it:**
   - Open the app (live or local)
   - Click "📥 Import Events (JSON)"
   - Click "Upload JSON File"
   - Select your `my-events.json` file
   - Done! New events are added to your list

### Method 2: Paste JSON Directly

1. **Copy JSON text** (from any source)
2. **In the app:**
   - Click "📥 Import Events (JSON)"
   - Click "OR" divider
   - Paste JSON into the text area
   - Click "Import"
   - Done!

### Method 3: Modify Default Events (For Development)

If you want to change the default events that load automatically:

1. **Open:** `src/data/defaultEvents.ts`
2. **Edit the array** of events
3. **Save the file**
4. **Restart dev server:** `npm run dev`
5. New default events will load

**Example:**
```typescript
export const defaultEvents: Event[] = [
  {
    id: 1,
    company: "Your Company",
    title: "Your Event",
    // ... rest of fields
  },
  // Add more events here
];
```

---

## 📋 Required JSON Format

Each event object **must** have these fields:

```json
{
  "id": 1,                    // Unique number (required)
  "company": "Company Name",  // String (required)
  "title": "Event Title",      // String (required)
  "start": "2025-11-06T18:00:00",  // ISO date-time string (required)
  "end": "2025-11-06T20:00:00",    // ISO date-time string (required)
  "location": "Venue Name",    // String (required)
  "rsvpUrl": "https://...",    // URL string (required)
  "status": "planned"          // "planned" | "rsvped" | "attended" (optional, defaults to "planned")
}
```

### Field Details:

- **id**: Unique identifier (number). If missing, will be auto-generated.
- **company**: Company name (string)
- **title**: Event name/title (string)
- **start**: Start date/time in ISO format: `YYYY-MM-DDTHH:mm:ss`
- **end**: End date/time in ISO format: `YYYY-MM-DDTHH:mm:ss`
- **location**: Physical location or venue (string)
- **rsvpUrl**: Link to RSVP or event page (URL string)
- **status**: Event status - must be one of:
  - `"planned"` - Default, gray color
  - `"rsvped"` - RSVP'd, blue color
  - `"attended"` - Attended, green color

---

## 🎯 Quick Test Examples

### Test Example 1: Single Event

Create `test-single.json`:
```json
[
  {
    "id": 100,
    "company": "Tesla",
    "title": "Tesla Engineering Showcase",
    "start": "2025-11-09T17:00:00",
    "end": "2025-11-09T19:00:00",
    "location": "Chicago Auto Show",
    "rsvpUrl": "https://tesla.com/careers",
    "status": "planned"
  }
]
```

### Test Example 2: Multiple Events

Create `test-multiple.json`:
```json
[
  {
    "id": 101,
    "company": "Apple",
    "title": "Apple Women in Tech",
    "start": "2025-11-10T18:00:00",
    "end": "2025-11-10T20:00:00",
    "location": "Chicago Apple Store",
    "rsvpUrl": "https://apple.com/jobs",
    "status": "planned"
  },
  {
    "id": 102,
    "company": "Apple",
    "title": "Apple Developer Mixer",
    "start": "2025-11-11T19:00:00",
    "end": "2025-11-11T21:00:00",
    "location": "Chicago Tech Hub",
    "rsvpUrl": "https://apple.com/careers",
    "status": "rsvped"
  }
]
```

---

## 💡 Tips

1. **ID Conflicts:** If you import events with IDs that already exist, they won't be added again (prevents duplicates)

2. **Auto-Generated IDs:** If you don't specify an `id`, the app will auto-generate one using timestamp + index

3. **Status Default:** If `status` is missing, it defaults to `"planned"`

4. **Date Format:** Always use ISO format: `YYYY-MM-DDTHH:mm:ss`
   - Example: `2025-11-06T18:00:00` (November 6, 2025 at 6:00 PM)

5. **Multiple Imports:** You can import multiple JSON files - they'll all be merged together

6. **Clear Data:** To start fresh, clear your browser's localStorage:
   - Open DevTools (F12)
   - Console tab
   - Type: `localStorage.clear()`
   - Refresh page

---

## 📁 File Structure Summary

```
ghc-rsvp-tracker/
├── public/
│   └── sample-events.json      ← Reference file (shows format)
├── src/
│   └── data/
│       └── defaultEvents.ts   ← Default events (load automatically)
└── [Any JSON file you create]  ← Your custom input files
```

---

**That's it! You can now test with any JSON file you create! 🚀**
