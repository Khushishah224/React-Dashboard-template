# React Router Layout & Outlet Demo

This project demonstrates the implementation of layouts and nested routing using React Router's Outlet component.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. Create a project directory
```bash
mkdir client
cd client
```

2. Clone the repository
```bash
git clone https://github.com/Khushishah224/React-Dashboard-template.git
```

3. Install dependencies
```bash
npm install
```

4. Start development server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📖 Layout & Outlet Implementation

This project showcases:
- Nested routing with React Router v6
- Parent-child route relationships
- Shared layout patterns using `Layout.jsx`
- Dynamic content rendering with `<Outlet/>`

### Basic Layout Setup
```jsx
// src/Layout.jsx
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <nav>{/* Navigation components */}</nav>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  )
}
```

## 📁 Project Structure
```
client/
├── src/
│   ├── components/    # Reusable components
│   ├── styles/        # CSS styles
│   ├── App.jsx        # Main app component
│   ├── Layout.jsx     # Layout wrapper
│   ├── index.css      # Global styles
│   └── main.jsx       # Entry point
├── public/            # Static assets
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── .gitignore
```
