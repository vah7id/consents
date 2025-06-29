# Consent Manager

A React application built with TypeScript, Material-UI, and React Query for managing user consents.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-mui-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Application

**Development mode:**

```bash
npm start
```

The app will be available at `http://localhost:3000`

**Production build:**

```bash
npm run build
```

### Testing

**Run tests:**

```bash
npm test
```

## 🏗️ Application Structure

```
src/
├── features/                    # Business features (domain-driven)
│   └── consent/                # Consent management feature
│       ├── api/                # API calls and data fetching
│       ├── components/         # Feature-specific components
│       │   ├── ConsentForm/    # Consent form component
│       │   └── ConsentList/    # Consent list component
│       ├── hooks/              # Feature-specific hooks
│       ├── types/              # Feature-specific types
│       ├── utils/              # Feature-specific utilities
│       └── index.ts            # Feature exports
├── shared/                     # Shared across features
│   ├── ui/                     # Reusable UI components
│   │   ├── Button/
│   │   ├── TextField/
│   │   ├── Checkbox/
│   │   ├── Table/
│   │   ├── Pagination/
│   │   ├── ErrorBoundary/
│   │   ├── LoadingSpinner/
│   │   └── NotificationSystem/
│   ├── types/                  # Shared type definitions
│   ├── utils/                  # Shared utilities
│   └── index.ts                # Shared exports
├── components/                 # Layout and app-level components
│   ├── layout/                 # Layout components
│   ├── sidebar/                # Navigation sidebar
├── config/                     # Application configuration
│   ├── theme.ts                # Material-UI theme
│   ├── queryClient.ts          # React Query configuration
│   ├── providers.tsx           # App providers wrapper
│   └── index.ts                # Configuration exports
├── router/                     # Routing configuration
│   ├── routes.tsx              # Route definitions
│   └── index.ts                # Router exports
├── context/                    # Global state management
│   ├── AppContext/             # App context and providers
│   └── index.ts                # Context exports
├── mocks/                      # Mock data and API simulation
│   ├── mockFetch.ts            # Mock fetch implementation
│   └── index.ts                # Mocks exports
└── index.ts                    # Main app exports
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Material-UI (MUI)** - Component library
- **React Query** - Data fetching and caching
- **React Router** - Navigation
- **Feature-Sliced Architecture** - Scalable organization

## 🔧 Development Notes

- The app uses **barrel exports** for clean imports throughout
- **Feature-sliced architecture** makes it easy to add new features
- **Material-UI theme** is customized and centralized in `src/config/theme.ts`
