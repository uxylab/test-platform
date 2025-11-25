# Frontend Prototype

A React-based frontend prototype with reusable UI components for rapid prototyping.

## Components

- **Navbar** - Navigation and header controls
- **LoginForm** - Login entry form
- **RegisterForm** - Registration form  
- **Dashboard** - Dashboard overview with stats cards
- **UserTable** - Simple user data table
- **SettingsModal** - Modal for theme/settings
- **ConfirmationDialog** - Simple modal confirmation UI

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm 7+

### Installation

```bash
cd frontend-prototype
npm install
```

### Development

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
```

## Features

- React functional components with TypeScript
- Light/Dark theme support
- Responsive design
- Dummy user data for prototyping
- Modal dialogs
- Form validation

## Styling

The app uses plain CSS for styling. The main stylesheet is `src/App.css` which includes:

- Button styles
- Form styles  
- Card/dashboard styles
- Table styles
- Modal styles
- Responsive breakpoints

## Usage

Import components individually for prototyping:

```tsx
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
// etc.
```
