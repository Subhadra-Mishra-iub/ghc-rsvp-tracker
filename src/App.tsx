import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Event, EventStatus } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { defaultEvents } from './data/defaultEvents';
import { EventCard } from './components/EventCard';
import { Filters } from './components/Filters';
import { Uploader } from './components/Uploader';
import { EmptyState } from './components/EmptyState';

function App() {
  const [events, setEvents] = useLocalStorage<Event[]>('ghc-events', defaultEvents);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');

  // Filter events based on search, company, and date
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      // Search filter
      const matchesSearch = 
        searchQuery === '' ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.company.toLowerCase().includes(searchQuery.toLowerCase());

      // Company filter
      const matchesCompany = 
        selectedCompany === 'all' || event.company === selectedCompany;

      // Date filter
      const matchesDate = 
        selectedDate === 'all' || event.start.startsWith(selectedDate);

      return matchesSearch && matchesCompany && matchesDate;
    });
  }, [events, searchQuery, selectedCompany, selectedDate]);

  // Handle status change
  const handleStatusChange = (id: number, status: EventStatus) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, status } : event
    ));
  };

  // Handle events upload
  const handleEventsUploaded = (newEvents: Event[]) => {
    // Merge with existing events, avoiding duplicates based on ID
    const existingIds = new Set(events.map(e => e.id));
    const uniqueNewEvents = newEvents.filter(e => !existingIds.has(e.id));
    setEvents([...events, ...uniqueNewEvents]);
  };

  // Export RSVP'd events
  const handleExportRSVP = () => {
    const rsvpedEvents = events.filter(
      event => event.status === 'rsvped' || event.status === 'attended'
    );

    if (rsvpedEvents.length === 0) {
      alert('No RSVP\'d events to export.');
      return;
    }

    const dataStr = JSON.stringify(rsvpedEvents, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ghc-rsvped-events-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            My GHC Event Tracker 💫
          </h1>
          <p className="text-lg text-gray-600">
            Track your Grace Hopper Celebration after-hours events and networking sessions
          </p>
        </motion.div>

        {/* Uploader */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Uploader onEventsUploaded={handleEventsUploaded} />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Filters
            events={events}
            searchQuery={searchQuery}
            selectedCompany={selectedCompany}
            selectedDate={selectedDate}
            onSearchChange={setSearchQuery}
            onCompanyChange={setSelectedCompany}
            onDateChange={setSelectedDate}
            onExportRSVP={handleExportRSVP}
          />
        </motion.div>

        {/* Events Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-4 text-sm text-gray-600"
        >
          Showing {filteredEvents.length} of {events.length} event{events.length !== 1 ? 's' : ''}
        </motion.div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <EmptyState />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredEvents.map(event => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onStatusChange={handleStatusChange}
                  />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-sm text-gray-500">
        <p>Built for Grace Hopper Celebration 2025 🎉</p>
      </footer>
    </div>
  );
}

export default App;
