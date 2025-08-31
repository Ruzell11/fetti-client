# Fetti Backend

## 🏗 Architecture Overview
The Fetti backend is built with the following stack:

- **Next.js → React framework for server-side rendering and routing
- **TypeScript → Strict typing and maintainability
- **Tailwind CSS → Utility-first CSS framework
- **shadcn/ui → Component library for consistent UI
- **React Query → Data fetching and caching

### Folder Structure

```
fetti-frontend/
├── modules/                   # Feature-based modules
│   ├── auth/                  # Authentication module
│   │   ├── pages/             # Pages for auth
│   │   │   ├── login.tsx
│   │   │   └── register.tsx
│   │   ├── components/        # Module-specific components
│   │   │   ├── login-form.tsx
│   │   │   └── register-form.tsx
│   │   └── service.ts    # Handles API calls for auth
│   │
│   ├── user/                  # User module
│   │   ├── pages/
│   │   │   └── profile.tsx
│   │   ├── components/
│   │   │   └── user-card-component.tsx
│   │   └── service.ts
│   │
│   └── ... other modules
│
├── common/                    # Shared components used across modules
│   ├── header-component.tsx
│   ├── footer-component.tsx
│   ├── modal-component.tsx
│   └── button-component.tsx
│
├── hooks/                     # Custom React hooks
│   └── useAuth.ts
│
├── context/                   # React context providers
│   └── AuthContext.tsx
│
├── utils/                     # Utility/helper functions
│   └── date-utils.ts
│
├── pages/                     # Optional top-level pages for Next.js routing
│   └── _app.tsx
│
├── public/                    # Static assets (images, fonts)
│
├── styles/                    # Global styles / CSS modules
│   └── globals.css
│
├── package.json
├── tsconfig.json
└── README.md

```

yaml
Copy code

---

## ⚙️ Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/fetti-frontend.git
cd fetti-backend
```

### 2. Install Dependencies
```bash
npm install
```


## Run Development Server
```bash
npm run dev
```
