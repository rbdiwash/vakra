const AuditLogs = () => {
  return (
    <div className="p-8">
      <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
        <svg
          className="w-16 h-16 text-gray-400 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Audit Logs Page
        </h2>
        <p className="text-gray-600">This page is under development</p>
      </div>
    </div>
  );
};

export default AuditLogs;
