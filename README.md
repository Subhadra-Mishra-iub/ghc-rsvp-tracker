# GHC After-Hours RSVP Tracker 💫

A lightweight, beautiful web application to help you track company events, after-hours gatherings, and networking sessions during the Grace Hopper Celebration 2025. Perfect for staying organized and showcasing your project management skills to recruiters!

## 🌟 Features

- **📥 Import Events**: Upload JSON files or paste event data directly
- **🎯 Smart Filtering**: Filter by company, date, or search by text
- **✅ Status Tracking**: Mark events as "Plan to Attend", "RSVP'd", or "Attended"
- **💾 Persistent Storage**: All data saved to browser localStorage (survives refresh)
- **📤 Export Functionality**: Download your RSVP'd events as JSON
- **📱 Responsive Design**: Works beautifully on desktop, tablet, and mobile
- **🎨 Modern UI**: Clean interface with smooth animations powered by Framer Motion
- **🚀 Fast & Lightweight**: Built with Vite for lightning-fast development and builds

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm (or yarn)

### Installation

1. **Clone or download this repository**

```bash
cd ghc-rsvp-tracker
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 📋 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/` folder)
- `npm run preview` - Preview the production build locally
- `npm run deploy` - Build and deploy to GitHub Pages (requires `gh-pages` package)

## 🎯 How to Use

### 1. Import Events

Click the **"📥 Import Events (JSON)"** button and either:
- Upload a JSON file from your computer
- Paste JSON data directly into the text area

**Example JSON format:**
```json
[
  {
    "id": 1,
    "company": "Google",
    "title": "Google After-Hours Tech Meetup",
    "start": "2025-11-06T18:00:00",
    "end": "2025-11-06T20:00:00",
    "location": "Chicago HQ",
    "rsvpUrl": "https://events.google.com/ghc",
    "status": "planned"
  }
]
```

### 2. Filter Events

- **Search Bar**: Type to search by company name or event title
- **Company Filter**: Select a specific company from the dropdown
- **Date Filter**: Filter events by date

### 3. Track Your RSVPs

Click the status button on any event card to cycle through:
- **Plan to Attend** (gray) → **RSVP'd** (blue) → **Attended** (green)

All changes are automatically saved to localStorage!

### 4. Export Your RSVP'd List

Click **"Export RSVP'd List"** to download a JSON file containing all events you've marked as RSVP'd or Attended.

## ✅ Verification Steps

To verify everything works correctly:

1. **Open the website locally**
   ```bash
   npm run dev
   ```
   ✓ Website loads with default sample events

2. **Test Import**
   - Click "Import Events (JSON)"
   - Upload `public/sample-events.json` or paste JSON
   ✓ Events appear in the list

3. **Test Filtering**
   - Search for "Google" → Only Google events show
   - Select "McDonald's" from company filter → Only McDonald's events show
   - Select a date → Only events on that date show

4. **Test Status Updates**
   - Click status button on an event → Status cycles through states
   - Refresh the page → Status persists

5. **Test Export**
   - Mark some events as RSVP'd
   - Click "Export RSVP'd List" → JSON file downloads with correct events

## 🚀 Live Website

**🌐 Your website is live at:** [https://subhadra-mishra-iub.github.io/ghc-rsvp-tracker/](https://subhadra-mishra-iub.github.io/ghc-rsvp-tracker/)

Visit the link above to use the website!

## 🚀 Deployment to GitHub Pages

**Already deployed!** The website is live and accessible.

For future deployments:
1. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```
2. **Enable GitHub Pages** (if not already enabled)
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Select "gh-pages" branch
   - Save

## 📁 Project Structure

```
ghc-rsvp-tracker/
├── public/
│   └── sample-events.json      # Sample event data
├── src/
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # React entry point
│   ├── index.css                # Global styles + Tailwind
│   ├── types.ts                 # TypeScript type definitions
│   ├── components/
│   │   ├── EventCard.tsx        # Individual event card component
│   │   ├── Filters.tsx          # Filter panel component
│   │   ├── Uploader.tsx         # JSON import component
│   │   └── EmptyState.tsx       # Empty state message
│   ├── hooks/
│   │   └── useLocalStorage.ts   # Custom hook for localStorage
│   └── data/
│       └── defaultEvents.ts     # Default sample events
├── index.html                   # HTML entry point
├── package.json                  # Dependencies and scripts
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── README.md                    # This file
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **localStorage** - Client-side persistence

## 🎨 Design Features

- **Responsive Grid**: Adapts from 1 column (mobile) to 3 columns (desktop)
- **Sticky Filters**: Filter panel stays visible while scrolling
- **Smooth Animations**: Cards animate in/out when filtered
- **Modern Color Scheme**: Beautiful gradient background with primary color theme
- **Accessible**: Semantic HTML and proper ARIA labels

## 🔮 Future Enhancements

Ideas for extending this project:

- [ ] **Google Calendar Integration**: Sync RSVP'd events to your calendar
- [ ] **User Authentication**: Multi-user support with cloud sync
- [ ] **Event Reminders**: Browser notifications for upcoming events
- [ ] **QR Code Sharing**: Generate QR codes to share your event list
- [ ] **Dark Mode**: Toggle between light and dark themes
- [ ] **Event Categories/Tags**: Organize events by type (networking, tech talk, etc.)
- [ ] **Collaborative Lists**: Share and collaborate on event lists with friends
- [ ] **Analytics Dashboard**: Track which companies you've engaged with most

## 📝 Notes

- All data is stored locally in your browser's localStorage
- No backend or database required
- Works offline after initial load
- Data persists across browser sessions

## 🤝 Contributing

Feel free to fork this project and customize it for your needs! Some ideas:
- Add your own company colors/branding
- Customize the event fields (add categories, tags, etc.)
- Integrate with other calendar services
- Add more filter options

## 📄 License

This project is open source and available under the MIT License.

## 💬 Support

If you have questions or run into issues:
1. Check that all dependencies are installed: `npm install`
2. Make sure you're using Node.js 18+
3. Clear your browser cache and localStorage if data seems corrupted

---

**Built with ❤️ for Grace Hopper Celebration 2025**

Good luck with your interviews and networking! 🎉
