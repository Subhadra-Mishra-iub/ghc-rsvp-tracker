import { Event } from '../types';

export const defaultEvents: Event[] = [
  {
    id: 1,
    company: "Google",
    title: "Google After-Hours Tech Meetup",
    start: "2025-11-06T18:00:00",
    end: "2025-11-06T20:00:00",
    location: "Chicago HQ",
    rsvpUrl: "https://events.google.com/ghc",
    status: "planned"
  },
  {
    id: 2,
    company: "McDonald's",
    title: "Unbound: Own Your Path",
    start: "2025-11-06T17:00:00",
    end: "2025-11-06T19:30:00",
    location: "MHQ - Hamburger University",
    rsvpUrl: "https://mcdghc.com",
    status: "rsvped"
  },
  {
    id: 3,
    company: "Microsoft",
    title: "Microsoft Women in Tech Networking",
    start: "2025-11-07T19:00:00",
    end: "2025-11-07T21:00:00",
    location: "Chicago Convention Center - Room 301",
    rsvpUrl: "https://microsoft.com/ghc-events",
    status: "planned"
  },
  {
    id: 4,
    company: "Amazon",
    title: "Amazon Web Services: Building Cloud Careers",
    start: "2025-11-07T18:30:00",
    end: "2025-11-07T20:30:00",
    location: "The Ritz-Carlton Chicago",
    rsvpUrl: "https://aws.amazon.com/ghc",
    status: "planned"
  },
  {
    id: 5,
    company: "Meta",
    title: "Meta Connect: VR & AR Showcase",
    start: "2025-11-08T17:00:00",
    end: "2025-11-08T19:00:00",
    location: "Chicago Marriott Downtown",
    rsvpUrl: "https://meta.com/ghc-2025",
    status: "rsvped"
  },
  {
    id: 6,
    company: "Apple",
    title: "Apple Engineering Excellence Panel",
    start: "2025-11-08T18:00:00",
    end: "2025-11-08T20:00:00",
    location: "Chicago Apple Store",
    rsvpUrl: "https://apple.com/careers/ghc",
    status: "planned"
  }
];
