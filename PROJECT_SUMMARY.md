# Project Summary - GHC After-Hours RSVP Tracker

## 💡 What Inspired This Project?

As an attendee of Grace Hopper Celebration 2025, I found myself overwhelmed by the sheer number of company after-hours events, networking sessions, and tech meetups happening throughout the conference. Keeping track of which events I wanted to attend, which ones I'd already RSVP'd to, and which companies I'd engaged with became a challenge. I needed a simple, lightweight tool that could help me stay organized without the complexity of full-featured calendar applications or event management platforms. This project was born from that practical need - a personal event organizer that's fast, beautiful, and works entirely in the browser with no backend required. It's designed to be something I can quickly access on my phone during the conference, update on the go, and share with other attendees who face the same challenge.

## 📥 Input

The app accepts event data in JSON format, either:
- **Uploaded JSON files** containing an array of event objects
- **Pasted JSON text** directly into the import interface
- **Default sample events** pre-loaded for demonstration

Each event object contains:
- `id`: Unique identifier
- `company`: Company name hosting the event
- `title`: Event title/name
- `start`: ISO date-time string for event start
- `end`: ISO date-time string for event end
- `location`: Physical location or venue
- `rsvpUrl`: URL to RSVP or learn more
- `status`: Current status (`planned`, `rsvped`, or `attended`)

## 📤 Output

The app provides:
- **Visual Event Cards**: Responsive grid display of all events with company, date, time, location, and RSVP links
- **Filtered Views**: Subset of events matching search query, company filter, or date filter
- **Status Tracking**: Visual indication (color-coded) of event status with ability to cycle through states
- **Exported JSON**: Downloadable file containing all events marked as RSVP'd or Attended

## 🔧 What It Does

The GHC RSVP Tracker is a client-side React application that helps conference attendees:

1. **Organize Events**: View all after-hours events in a clean, card-based interface
2. **Filter & Search**: Quickly find events by company name, date, or keyword search
3. **Track RSVPs**: Mark events as "Plan to Attend", "RSVP'd", or "Attended" with visual status indicators
4. **Persist Data**: Automatically saves all changes to browser localStorage, so your data persists across sessions
5. **Import Events**: Add events from JSON files or paste JSON data directly
6. **Export Lists**: Download your RSVP'd events as a JSON file for backup or sharing

The entire application runs in the browser with no backend infrastructure, making it fast, reliable, and perfect for conference use where internet connectivity might be variable.

## 🛠️ Technologies Used

- **React 18**: Modern UI library for building component-based interfaces
- **TypeScript**: Type-safe JavaScript for better code quality and developer experience
- **Vite**: Lightning-fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive styling
- **Framer Motion**: Production-ready animation library for smooth UI transitions
- **localStorage API**: Browser storage API for client-side data persistence
- **GitHub Pages**: Static site hosting for deployment

## 🚀 Next Steps (May Do Later If Feel Like)

- **Google Calendar Integration**: Sync RSVP'd events directly to user's Google Calendar
- **Dark Mode Toggle**: Add light/dark theme switcher for better viewing in different lighting
- **Event Reminders**: Browser notification system for upcoming events
- **QR Code Sharing**: Generate QR codes to share event lists with other attendees
- **Event Categories/Tags**: Add tags or categories (networking, tech talk, social, etc.) for better organization
- **Multi-user Support**: Authentication system with cloud sync for collaborative event tracking
- **Analytics Dashboard**: Track engagement metrics (which companies, event types attended most)
- **Event Recommendations**: Suggest events based on companies user has interacted with
- **Mobile App**: Convert to Progressive Web App (PWA) with offline support
- **Calendar View**: Add calendar/agenda view in addition to card grid
