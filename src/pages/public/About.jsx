const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Vakra
          </h1>
          <p className="text-xl text-gray-600">
            Bringing Scientific Rigor to Agentic AI
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          <Section
            title="🎯 Our Mission"
            description="At Vakra, we believe that AI agents must operate with the same scientific rigor and accountability as any critical enterprise system. We're building the governance framework that brings measurability, verifiability, repeatability, and traceability to agentic AI."
          />

          <Section title="🔬 Core Principles">
            <ul className="space-y-4">
              <PrincipleItem
                title="Measurability"
                description="Every aspect of agent performance must be quantifiable with precise metrics and KPIs"
              />
              <PrincipleItem
                title="Verifiability"
                description="All agent decisions must be validatable through transparent audit trails and evidence"
              />
              <PrincipleItem
                title="Repeatability"
                description="Agent behavior must be consistent and reproducible across multiple executions"
              />
              <PrincipleItem
                title="Traceability"
                description="Complete observability into every decision, action, and outcome throughout the agent lifecycle"
              />
            </ul>
          </Section>

          <Section title="🛠️ Technology Stack">
            <ul className="space-y-3">
              <TechItem
                name="React 19"
                description="Latest version with improved performance and concurrent features"
              />
              <TechItem
                name="React Router v7"
                description="Declarative routing with clean Outlet pattern - no wrapper components needed"
              />
              <TechItem
                name="TanStack Query v5"
                description="Powerful server state management with automatic caching and background updates"
              />
              <TechItem
                name="Context API"
                description="Global state management for authentication and app-wide state"
              />
              <TechItem
                name="Tailwind CSS v4"
                description="Modern utility-first CSS framework for rapid UI development"
              />
              <TechItem
                name="Vite 7"
                description="Lightning-fast build tool and development server with HMR"
              />
            </ul>
          </Section>

          <Section title="✨ Features">
            <ul className="space-y-3">
              <FeatureItem text="Complete authentication system with secure login/logout" />
              <FeatureItem text="Protected routes for authenticated users" />
              <FeatureItem text="Public routes accessible to everyone" />
              <FeatureItem text="Persistent login state with localStorage" />
              <FeatureItem text="Clean and organized folder structure" />
              <FeatureItem text="Reusable components and custom hooks" />
              <FeatureItem text="Modern and responsive UI design" />
              <FeatureItem text="Enterprise-grade architecture" />
            </ul>
          </Section>

          <Section title="📁 Project Structure">
            <div className="bg-gray-900 text-gray-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
              <pre>{`src/
├── components/     # Reusable UI components
├── contexts/       # React Context providers
├── hooks/          # Custom React hooks
├── pages/          # Page components
│   ├── public/     # Public pages
│   └── private/    # Protected pages
├── routes/         # Route configuration
├── services/       # API services
├── utils/          # Utility functions
└── config/         # Configuration files`}</pre>
            </div>
          </Section>

          <Section
            title="🎯 Why Vakra?"
            description="In a world where AI agents are becoming increasingly autonomous, the need for governance has never been more critical. Vakra provides the framework to ensure your AI systems are:"
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <BestPracticeItem text="Accountable" />
              <BestPracticeItem text="Transparent" />
              <BestPracticeItem text="Auditable" />
              <BestPracticeItem text="Reliable" />
              <BestPracticeItem text="Compliant" />
              <BestPracticeItem text="Performant" />
              <BestPracticeItem text="Observable" />
              <BestPracticeItem text="Trustworthy" />
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, description, children }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
    <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
    {description && (
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
    )}
    {children}
  </div>
);

const PrincipleItem = ({ title, description }) => (
  <li className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
    <div className="flex-1">
      <span className="font-semibold text-gray-900 text-lg">{title}:</span>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </li>
);

const TechItem = ({ name, description }) => (
  <li className="flex gap-3 pb-3 border-b border-gray-100 last:border-0">
    <div className="flex-1">
      <span className="font-semibold text-gray-900">{name}:</span>
      <span className="text-gray-600 ml-2">{description}</span>
    </div>
  </li>
);

const FeatureItem = ({ text }) => (
  <li className="flex items-start gap-3">
    <svg
      className="w-5 h-5 text-green-600 mt-0.5 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
    <span className="text-gray-700">{text}</span>
  </li>
);

const BestPracticeItem = ({ text }) => (
  <li className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
    <svg
      className="w-4 h-4 text-blue-600"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-sm text-gray-700">{text}</span>
  </li>
);

export default About;
