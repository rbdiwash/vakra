# Vakra - Modern React Application

A production-ready React application template featuring authentication, routing, and state management with modern best practices.

## 🚀 Features

- **Authentication System**: Complete login/logout flow with protected routes
- **React Router v7**: Client-side routing with clean route organization using Outlet pattern
- **TanStack Query (React Query)**: Powerful data fetching, caching, and synchronization
- **Context API**: Global state management for authentication
- **Tailwind CSS**: Modern utility-first CSS framework for rapid UI development
- **Vite**: Lightning-fast build tool and development server
- **Organized Structure**: Scalable folder organization following best practices

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── common/        # Common shared components
│   └── layout/        # Layout components (Navbar, Layout)
├── contexts/          # React Context providers
│   └── AuthContext.jsx
├── hooks/             # Custom React hooks
│   ├── useUsers.js
│   └── usePosts.js
├── pages/             # Page components
│   ├── public/        # Public pages (Home, Login, About)
│   └── private/       # Protected pages (Dashboard, Profile)
├── routes/            # Routing configuration
│   ├── index.jsx      # Main routes configuration
│   ├── publicRoutes.jsx   # Public routes
│   ├── privateRoutes.jsx  # Private/protected routes
│   ├── ProtectedRoute.jsx # Protected route guard
│   └── PublicRoute.jsx    # Public route guard
├── services/          # API services
│   └── api.js
├── utils/             # Utility functions
│   ├── constants.js   # App constants
│   └── helpers.js     # Helper functions
├── config/            # Configuration files
│   └── queryClient.js
├── App.jsx            # Main app component with providers
└── main.jsx          # App entry point
```

## 🛠️ Tech Stack

- **React 19** - Latest React with improved performance
- **React Router v7** - Declarative routing with Outlet pattern (no wrapper components needed)
- **TanStack Query v5** - Powerful async state management
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite 7** - Next generation frontend tooling
- **ESLint** - Code quality and consistency

## 📦 Installation

```bash
# Install dependencies
yarn install

# or with npm
npm install
```

## 🚀 Development

```bash
# Start development server
yarn dev

# or with npm
npm run dev
```

Visit `http://localhost:5173` to view the app.

## 🏗️ Build

```bash
# Build for production
yarn build

# Preview production build
yarn preview
```

## 🔐 Authentication

The authentication system is built with React Context and provides:

- **Login/Logout functionality**
- **Persistent sessions** using localStorage
- **Protected routes** that require authentication
- **Public routes** accessible to everyone
- **Redirect to intended destination** after login

### Demo Login

Use any email and password to login. The authentication is mocked for demonstration purposes.

## 🛣️ Routing

### Public Routes

- `/` - Home page (accessible to all)
- `/about` - About page (accessible to all)
- `/login` - Login page (redirects to dashboard if already logged in)

### Protected Routes (require authentication)

- `/dashboard` - Main dashboard
- `/profile` - User profile page

## 🔄 State Management

### Authentication State (Context API)

Global authentication state managed through `AuthContext`:

- User information
- Login/logout methods
- Authentication status

### Server State (TanStack Query)

API data managed through React Query:

- Automatic caching
- Background refetching
- Loading and error states
- Data synchronization

## 📡 API Integration

Example API service with TanStack Query hooks:

```javascript
// Using the custom hook
import { useUsers } from './hooks/useUsers';

function Component() {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data.map(user => ...)}</div>;
}
```

## 🎨 Styling

The application uses Tailwind CSS with:

- Utility-first approach for rapid development
- Custom color palette with primary brand colors
- Responsive design with mobile-first approach
- Dark mode as default theme
- Custom components layer for reusable styles
- Smooth transitions and animations

## 🔧 Customization

### Adding New Routes

The routing system uses React Router's Outlet pattern - no need to wrap each route individually!

1. Create your page component in `src/pages/public` or `src/pages/private`
2. Add the route to the appropriate route configuration file:

**For Public Routes** (`src/routes/publicRoutes.jsx`):

```jsx
export const publicRoutes = [
  {
    path: "/your-route",
    element: <YourComponent />,
    restricted: false, // or true if it should redirect authenticated users
  },
];
```

**For Protected Routes** (`src/routes/privateRoutes.jsx`):

```jsx
export const privateRoutes = [
  {
    path: "/your-route",
    element: <YourComponent />,
  },
];
```

That's it! The route guards are applied automatically at the parent level using Outlet.

### Adding API Endpoints

1. Add the endpoint in `src/services/api.js`
2. Create a custom hook in `src/hooks/` using TanStack Query

```javascript
// In src/services/api.js
export const api = {
  getData: () => fetchAPI("/your-endpoint"),
};

// In src/hooks/useYourData.js
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useYourData = () => {
  return useQuery({
    queryKey: ["your-data"],
    queryFn: api.getData,
  });
};
```

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://your-api-url.com
```

## 🧪 Best Practices Implemented

- ✅ Separation of concerns with organized folder structure
- ✅ Custom hooks for reusable logic
- ✅ Protected routes for authentication
- ✅ Centralized API service layer
- ✅ React Query for efficient data fetching
- ✅ Context API for global state
- ✅ Error handling and loading states
- ✅ Responsive and modern UI design

## 📄 License

MIT

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using React, Vite, and modern web technologies.
