import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-white to-gray-50 pt-16 md:pt-20 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span>
              Scientific: Measurability. Verifiability. Repeatability.
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight max-w-5xl mx-auto px-2">
            Bringing Measurability, Verifiability, Repeatability and
            Traceability to Agentic AI
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Enterprise-grade governance for AI agents with scientific rigor and
            complete observability
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap mb-16 sm:mb-20 px-4">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="btn btn-primary text-sm sm:text-base"
              >
                Go to Dashboard
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-primary text-sm sm:text-base"
                >
                  Get Started
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <Link
                  to="/about"
                  className="btn btn-secondary text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Core Scientific Principles Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16">
            Core Scientific Principles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <PrincipleCard
              icon={<ChartBarIcon />}
              bgColor="bg-blue-100"
              iconColor="text-blue-600"
              title="Measurability"
              description="Quantify agent performance, resource usage, and outcomes with precise metrics"
            />
            <PrincipleCard
              icon={<CheckCircleIcon />}
              bgColor="bg-green-100"
              iconColor="text-green-600"
              title="Verifiability"
              description="Validate agent decisions and actions against established compliance frameworks"
            />
            <PrincipleCard
              icon={<ActivityIcon />}
              bgColor="bg-purple-100"
              iconColor="text-purple-600"
              title="Repeatability"
              description="Ensure consistent agent behavior across runs with deterministic execution"
            />
            <PrincipleCard
              icon={<DocumentIcon />}
              bgColor="bg-orange-100"
              iconColor="text-orange-600"
              title="Traceability"
              description="Track every agent decision from input to output with complete audit trails"
            />
          </div>
        </div>
      </section>

      {/* Enterprise AI Governance Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16">
            Enterprise AI Governance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <GovernanceCard
              icon={<ShieldIcon />}
              title="Compliance Management"
              description="Monitor AI agents against SOC 2, GDPR, ISO 27001, and other regulatory frameworks"
            />
            <GovernanceCard
              icon={<ChartIcon />}
              title="Risk Assessment"
              description="Identify and mitigate risks in AI agent behavior with continuous monitoring"
            />
            <GovernanceCard
              icon={<FileTextIcon />}
              title="Audit & Traceability"
              description="Complete audit trails for every agent decision and action across your organization"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to govern your AI agents?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Start bringing scientific rigor to your agentic AI systems today
          </p>
          <Link
            to={isAuthenticated ? "/dashboard" : "/login"}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all text-base sm:text-lg"
          >
            Enter Dashboard
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

// Icon Components
const ChartBarIcon = () => (
  <svg
    className="w-7 h-7 sm:w-8 sm:h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    className="w-7 h-7 sm:w-8 sm:h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ActivityIcon = () => (
  <svg
    className="w-7 h-7 sm:w-8 sm:h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
    />
  </svg>
);

const DocumentIcon = () => (
  <svg
    className="w-7 h-7 sm:w-8 sm:h-8"
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
);

const ShieldIcon = () => (
  <svg
    className="w-6 h-6 sm:w-7 sm:h-7"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const ChartIcon = () => (
  <svg
    className="w-6 h-6 sm:w-7 sm:h-7"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const FileTextIcon = () => (
  <svg
    className="w-6 h-6 sm:w-7 sm:h-7"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

// Card Components
const PrincipleCard = ({ icon, bgColor, iconColor, title, description }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-200">
    <div
      className={`${bgColor} ${iconColor} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6`}
    >
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
      {title}
    </h3>
    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

const GovernanceCard = ({ icon, title, description }) => (
  <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-white hover:shadow-md transition-all duration-200">
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-200 rounded-xl flex items-center justify-center text-gray-700 mb-6">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
      {title}
    </h3>
    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

export default Home;
