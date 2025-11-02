import { Event } from '../types';

interface FiltersProps {
  events: Event[];
  searchQuery: string;
  selectedCompany: string;
  selectedDate: string;
  onSearchChange: (query: string) => void;
  onCompanyChange: (company: string) => void;
  onDateChange: (date: string) => void;
  onExportRSVP: () => void;
}

export function Filters({
  events,
  searchQuery,
  selectedCompany,
  selectedDate,
  onSearchChange,
  onCompanyChange,
  onDateChange,
  onExportRSVP,
}: FiltersProps) {
  const companies = Array.from(new Set(events.map(e => e.company))).sort();
  const dates = Array.from(new Set(events.map(e => e.start.split('T')[0]))).sort();
  const rsvpedCount = events.filter(e => e.status === 'rsvped' || e.status === 'attended').length;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sticky top-4 z-10 border border-gray-200">
      <div className="space-y-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Search Events
          </label>
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by company or title..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Company
            </label>
            <select
              id="company"
              value={selectedCompany}
              onChange={(e) => onCompanyChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            >
              <option value="all">All Companies</option>
              {companies.map(company => (
                <option key={company} value={company}>{company}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Date
            </label>
            <select
              id="date"
              value={selectedDate}
              onChange={(e) => onDateChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            >
              <option value="all">All Dates</option>
              {dates.map(date => {
                const dateObj = new Date(date);
                const formatted = dateObj.toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric'
                });
                return (
                  <option key={date} value={date}>{formatted}</option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            {rsvpedCount} event{rsvpedCount !== 1 ? 's' : ''} RSVP'd or Attended
          </p>
          <button
            onClick={onExportRSVP}
            disabled={rsvpedCount === 0}
            className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Export RSVP'd List
          </button>
        </div>
      </div>
    </div>
  );
}
