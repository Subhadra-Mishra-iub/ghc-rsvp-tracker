import { useState } from 'react';
import { Event } from '../types';

interface UploaderProps {
  onEventsUploaded: (events: Event[]) => void;
}

export function Uploader({ onEventsUploaded }: UploaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [jsonText, setJsonText] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const events = JSON.parse(text);
        if (Array.isArray(events)) {
          // Validate and add status if missing
          const validatedEvents = events.map((event: any, index: number) => ({
            ...event,
            id: event.id || Date.now() + index,
            status: event.status || 'planned',
          }));
          onEventsUploaded(validatedEvents);
          setIsOpen(false);
          setJsonText('');
          alert(`Successfully imported ${validatedEvents.length} events!`);
        } else {
          alert('Invalid JSON format. Expected an array of events.');
        }
      } catch (error) {
        alert('Error parsing JSON file. Please check the format.');
        console.error(error);
      }
    };
    reader.readAsText(file);
  };

  const handlePaste = () => {
    try {
      const events = JSON.parse(jsonText);
      if (Array.isArray(events)) {
        const validatedEvents = events.map((event: any, index: number) => ({
          ...event,
          id: event.id || Date.now() + index,
          status: event.status || 'planned',
        }));
        onEventsUploaded(validatedEvents);
        setIsOpen(false);
        setJsonText('');
        alert(`Successfully imported ${validatedEvents.length} events!`);
      } else {
        alert('Invalid JSON format. Expected an array of events.');
      }
    } catch (error) {
      alert('Error parsing JSON. Please check the format.');
      console.error(error);
    }
  };

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
      >
        {isOpen ? 'Cancel' : '📥 Import Events (JSON)'}
      </button>

      {isOpen && (
        <div className="mt-4 bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Import Events</h3>
          <div className="space-y-4">
            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload JSON File
              </label>
              <input
                type="file"
                accept=".json,application/json"
                onChange={handleFileUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
              />
            </div>

            {/* Or Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* Paste JSON */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Paste JSON
              </label>
              <textarea
                value={jsonText}
                onChange={(e) => setJsonText(e.target.value)}
                placeholder='[{"id": 1, "company": "Google", "title": "...", ...}]'
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none font-mono text-sm"
                rows={6}
              />
              <button
                onClick={handlePaste}
                disabled={!jsonText.trim()}
                className="mt-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Import
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
