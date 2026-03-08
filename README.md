# NewsReader Final Project

NewsReader is a React single page application built with Vite that allows users to browse, search, and save news articles. This project improves on my MVP by adding authentication, protected routes, better testing, improved responsive design, and more complete documentation.

## Project Purpose

The goal of this application is to give users a clean way to view news content, search for articles, and save articles they want to return to later. It also demonstrates frontend skills expected in a more production-ready React project.

## Features

- Multi-page routing with React Router
- Home page, search page, login page, saved articles page, admin page, and not found page
- Authentication with login and logout
- Protected routes for saved articles and admin content
- Role-based user support for regular and admin users
- Article saving by logged-in user
- Context API for authentication and article state management
- External API integration for fetching article data
- Responsive layout for desktop, tablet, and mobile screens
- Unit testing with Vitest and React Testing Library
- Deployment on Vercel

## Tech Stack

- React
- Vite
- React Router
- Context API
- JavaScript
- CSS
- Vitest
- React Testing Library
- Vercel

## Project Structure

- `src/components` - reusable UI components
- `src/pages` - route-level pages
- `src/context` - auth and article context providers
- `src/services` - API logic
- `src/__tests__` - unit tests

## Authentication

This project includes a simple frontend authentication system using context and localStorage.

Demo accounts:
- Regular user: `regular` / `regular`
- Admin user: `admin` / `admin`

Users must log in to access protected pages such as Saved Articles and Admin Page.

## Security Notes

This project includes frontend security-minded practices such as:
- Protected routes for restricted pages
- Basic handling of user session data
- Environment variable usage for sensitive configuration
- Avoiding unsafe direct HTML injection

Because this is a frontend student project, the authentication is simulated on the client side for demonstration purposes.

## API Integration

The app connects to an external API to fetch and display article data. Search functionality allows users to look up articles and view results dynamically.

## Responsive Design

The layout is designed to work across multiple screen sizes using flexible layouts and CSS media queries. This includes:
- Mobile-friendly navigation
- Stacked search controls on smaller screens
- Single-column article layout on smaller devices
- Improved spacing and text sizing for phones and tablets

## Testing

This project uses Vitest and React Testing Library.

Current tests cover:
- App rendering
- Route rendering
- Protected route redirect behavior
- Invalid login handling

To run tests:

```bash
npm run test