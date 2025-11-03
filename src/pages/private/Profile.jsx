import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="p-8">
      <div className="max-w-4xl">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          {/* Profile Header */}
          <div className="bg-linear-to-r from-gray-900 to-gray-700 px-8 py-12">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-4xl font-bold border-4 border-white/30">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {user?.name}
                </h2>
                <p className="text-gray-200 mb-3">{user?.email}</p>
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white capitalize">
                  {user?.role}
                </span>
              </div>
            </div>
          </div>

          {/* Account Information */}
          <div className="p-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Account Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoItem label="User ID" value={user?.id} />
              <InfoItem label="Email" value={user?.email} />
              <InfoItem label="Name" value={user?.name} />
              <InfoItem label="Role" value={user?.role} capitalize />
            </div>
          </div>

          {/* Account Settings */}
          <div className="p-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Account Settings
            </h3>
            <div className="space-y-4">
              <SettingItem
                title="Email Notifications"
                description="Receive email updates about your account"
                defaultChecked
              />
              <SettingItem
                title="Two-Factor Authentication"
                description="Add an extra layer of security to your account"
              />
              <SettingItem
                title="Marketing Emails"
                description="Receive promotional content and updates"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="p-8 flex gap-4 flex-wrap bg-gray-50">
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all">
              Update Profile
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value, capitalize }) => (
  <div>
    <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
      {label}
    </label>
    <p className={`text-base text-gray-900 ${capitalize ? "capitalize" : ""}`}>
      {value}
    </p>
  </div>
);

const SettingItem = ({ title, description, defaultChecked = false }) => (
  <div className="flex items-start justify-between gap-4 p-4 bg-white border border-gray-200 rounded-lg">
    <div className="flex-1">
      <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <label className="relative inline-flex items-center cursor-pointer shrink-0">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-900"></div>
    </label>
  </div>
);

export default Profile;
