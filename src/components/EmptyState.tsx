export function EmptyState() {
  return (
    <div className="text-center py-12 px-4">
      <div className="max-w-md mx-auto">
        <svg
          className="mx-auto h-24 w-24 text-gray-400 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
        <p className="text-gray-600 mb-4">
          Try adjusting your filters or import some events to get started.
        </p>
        <p className="text-sm text-gray-500">
          Click "📥 Import Events (JSON)" to add your event list.
        </p>
      </div>
    </div>
  );
}
