const RiskAssessment = () => {
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
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Risk Assessment Page
        </h2>
        <p className="text-gray-600">This page is under development</p>
      </div>
    </div>
  );
};

export default RiskAssessment;
