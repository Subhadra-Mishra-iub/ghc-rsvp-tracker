# Demo Guide - GHC RSVP Tracker

## 🎬 Perfect Demo Flow (5 Minutes)

Use this guide to showcase your app to recruiters and attendees at GHC 2025.

---

## 📋 Pre-Demo Setup

1. **Open your live app** (GitHub Pages URL or localhost:5173)
2. **Have sample JSON ready** (from `public/sample-events.json`)
3. **Clear localStorage** (optional - to show fresh state):
   - Open browser DevTools (F12)
   - Console tab → Run: `localStorage.clear()`
   - Refresh page

---

## 🎯 Demo Script

### Introduction (30 seconds)
> "Hi! I built this GHC Event Tracker to help manage all the after-hours events and networking sessions during the conference. It's a React app with TypeScript, and I can track which events I've RSVP'd to, filter by company, and export my list."

### Feature 1: View Events (30 seconds)
**Action:** Show the default events loaded
**Say:**
> "When you open the app, you see all your events displayed as cards. Each card shows the company, event title, date, time, location, and RSVP link."

**Highlights:**
- Point out the responsive grid layout
- Show hover effects on cards
- Mention it works on mobile too

### Feature 2: Filtering (1 minute)
**Action:** Demonstrate each filter
**Say:**
> "You can filter events in three ways:"

**Demo:**
1. **Search Filter:**
   - Type "Google" in search bar
   - "See how it instantly filters to show only Google events"

2. **Company Filter:**
   - Select "McDonald's" from dropdown
   - "Filter by specific companies you're interested in"

3. **Date Filter:**
   - Select a date
   - "See events happening on specific days of the conference"

**Say:**
> "All filters work together, so you can find exactly what you're looking for."

### Feature 3: Status Tracking (1 minute)
**Action:** Click status button on an event
**Say:**
> "This is the core feature - tracking your RSVPs. Click the status button to cycle through states:"

**Demo:**
- Click once: "Plan to Attend" (gray)
- Click twice: "RSVP'd" (blue) 
- Click three times: "Attended" (green)
- Refresh page: "Notice the status persists even after refresh - it's saved to localStorage"

**Say:**
> "This helps me stay organized and remember which events I've committed to attending."

### Feature 4: Import Events (1 minute)
**Action:** Show import functionality
**Say:**
> "You can import events from JSON files or paste JSON directly."

**Demo:**
1. Click "📥 Import Events (JSON)"
2. Either:
   - Upload `sample-events.json` file
   - OR paste JSON in the text area
3. Show alert: "Successfully imported X events!"
4. Show new events appear in the list

**Say:**
> "This makes it easy to add events from spreadsheets or other sources."

### Feature 5: Export RSVP'd List (30 seconds)
**Action:** Export functionality
**Say:**
> "When you want to share your RSVP'd events or keep a backup, you can export them."

**Demo:**
1. Mark a few events as "RSVP'd"
2. Click "Export RSVP'd List"
3. Show the downloaded JSON file

**Say:**
> "This downloads a JSON file with all events you've RSVP'd to or attended."

### Closing (30 seconds)
**Say:**
> "The whole app is built with React and TypeScript, styled with Tailwind CSS, and uses Framer Motion for smooth animations. It's fully client-side - no backend needed - and all data persists in the browser. Perfect for a quick personal organizer at conferences!"

**Highlight:**
- Mobile responsiveness (resize browser window)
- Clean, modern UI
- Fast and lightweight

---

## 🎨 Visual Highlights to Point Out

1. **Gradient Background** - Modern, professional look
2. **Card Animations** - Smooth hover effects and transitions
3. **Sticky Filters** - Filters stay visible while scrolling
4. **Responsive Design** - Show mobile view (narrow window)
5. **Color-coded Status** - Gray/Blue/Green for visual organization

---

## 💡 Talking Points for Recruiters

### If Asked: "Why did you build this?"
> "I wanted a lightweight tool specifically for managing conference events. Existing solutions were either too complex or required backends. This is pure React with localStorage - fast, simple, and perfect for the use case."

### If Asked: "What technologies did you use?"
> "React 18 with TypeScript for type safety, Vite for fast builds, Tailwind CSS for styling, and Framer Motion for animations. All client-side with localStorage for persistence."

### If Asked: "What would you improve?"
> "I'd add Google Calendar integration to sync RSVP'd events, dark mode support, and maybe collaborative features to share event lists with friends. But for a quick personal tool, this covers all the essentials."

---

## ✅ Success Indicators (What Shows It Works)

After your demo, they should see:

1. ✅ **Events load and display correctly**
2. ✅ **Filters respond instantly** (no lag)
3. ✅ **Status persists after refresh** (localStorage working)
4. ✅ **Import adds new events** (JSON parsing works)
5. ✅ **Export downloads valid JSON** (file structure correct)
6. ✅ **App is responsive** (works on mobile)
7. ✅ **Animations are smooth** (no janky transitions)

---

## 📱 Mobile Demo (Bonus)

If you have a phone handy:

1. **Open the app on mobile browser**
2. **Show:** Filters stack vertically
3. **Show:** Cards are single column
4. **Show:** Everything is touch-friendly
5. **Say:** "It's fully responsive and works great on phones during the actual conference!"

---

## 🎬 Quick Demo (2-Minute Version)

If you only have 2 minutes:

1. Show default events (10s)
2. Filter by company (20s)
3. Change status and refresh to show persistence (30s)
4. Import new events (30s)
5. Export RSVP'd list (20s)
6. Mention tech stack (10s)

---

**Good luck with your demos! 🚀**
