export type EventStatus = 'planned' | 'rsvped' | 'attended';

export interface Event {
  id: number;
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  rsvpUrl: string;
  status: EventStatus;
}

export type FilterDate = 'all' | string;
