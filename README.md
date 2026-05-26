# Personal Portfolio Website

This project is a full-stack portfolio website built with React, Node.js, Express, and MongoDB.

## Features
- React frontend with sections for projects, skills, and contact.
- Express backend serving a MongoDB-powered `/api/projects` endpoint.
- Full-stack development workflow with local and production-ready builds.

## Getting Started

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Install dependencies:
   ```bash
   npm install
   npm run install-client
   ```

3. Start the app locally:
   ```bash
   npm start
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Backend API

- `GET /api/projects` - fetch all saved projects
- `POST /api/projects` - add a new project
- `GET /api/health` - health check endpoint

## Deployment

- Deploy the React frontend and Express server together on platforms like Heroku or Railway.
- Use a MongoDB Atlas cluster for the database in production.
- Set environment variables `MONGO_URI` and `PORT` in the deployment settings.

## Notes

- The frontend uses the CRA proxy setting so requests to `/api/projects` route to the Express backend during development.
- Add project data through the backend or seed MongoDB directly to show project cards in the UI.
