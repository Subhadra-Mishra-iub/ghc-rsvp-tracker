import { motion } from 'framer-motion';
import { Event, EventStatus } from '../types';

interface EventCardProps {
  event: Event;
  onStatusChange: (id: number, status: EventStatus) => void;
}

export function EventCard({ event, onStatusChange }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getStatusColor = (status: EventStatus) => {
    switch (status) {
      case 'planned':
        return 'bg-gray-100 text-gray-700 hover:bg-gray-200';
      case 'rsvped':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
      case 'attended':
        return 'bg-green-100 text-green-700 hover:bg-green-200';
    }
  };

  const getStatusLabel = (status: EventStatus) => {
    switch (status) {
      case 'planned':
        return 'Plan to Attend';
      case 'rsvped':
        return 'RSVP\'d';
      case 'attended':
        return 'Attended';
    }
  };

  const cycleStatus = () => {
    const nextStatus: EventStatus = 
      event.status === 'planned' ? 'rsvped' :
      event.status === 'rsvped' ? 'attended' : 'planned';
    onStatusChange(event.id, nextStatus);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{event.title}</h3>
          <p className="text-lg text-primary-600 font-semibold">{event.company}</p>
        </div>

        {/* Date & Time */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{formatDate(event.start)}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{formatTime(event.start)} - {formatTime(event.end)}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="flex-1">{event.location}</span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <button
            onClick={cycleStatus}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${getStatusColor(event.status)}`}
          >
            {getStatusLabel(event.status)}
          </button>
          <a
            href={event.rsvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors text-center"
          >
            View RSVP Link
          </a>
        </div>
      </div>
    </motion.div>
  );
}
