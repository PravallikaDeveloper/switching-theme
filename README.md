# Multi-Theme Switcher App

A React + TypeScript + Tailwind CSS web application with three distinct theme layouts.

## Features

- Theme switcher (Light, Dark with sidebar, Colorful card grid)
- Context API for theme management
- Theme persistence using localStorage
- Routing (Home, About, Contact)
- Fully responsive (Desktop and Mobile)
- API integration using [Fake Store API](https://fakestoreapi.com/products)
- Smooth animations when switching themes
- Basic secure practices
- Built using React, TypeScript, Tailwind CSS (No UI libraries)

## Themes

1. **Theme 1 (Default)**: Minimalist layout, light background, sans-serif font
2. **Theme 2**: Dark mode with sidebar layout, bold serif font
3. **Theme 3**: Colorful theme with card-based grid layout, playful Google Font (`Pacifico`)

## Folder Structure (Simplified)

src/
├── assets/
├── components/
│ ├── about/
│ ├── contact/
│ ├── header/
│ ├── home/
│ ├── product-list/
│ └── sidebar/
├── models/
├── services/
├── styles/
├── theme/
│ └── themecontext.tsx
├── App.tsx
├── index.tsx


## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- Context API
- Fake Store API

## Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/PravallikaDeveloper/switching-theme

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# or
npm start

# 4. Open in browser
http://localhost:3000


## Build & Run Production

npm run build
npm run preview

Deployed URL: https://switching-theme.vercel.app/

