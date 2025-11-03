const Applications = () => {
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Applications Page
        </h2>
        <p className="text-gray-600">This page is under development</p>
      </div>
    </div>
  );
};

export default Applications;
