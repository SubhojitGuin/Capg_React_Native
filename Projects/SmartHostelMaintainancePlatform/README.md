# Smart Hostel Maintenance Platform

Smart Hostel Maintenance Platform is a React + Vite application for managing hostel service requests. Students can log in, raise maintenance requests, and track their status. The warden/admin can view and manage requests through role-based dashboards.

## Features

- Role-based authentication for student and warden/admin users
- Student dashboard for creating and tracking requests
- Admin dashboard for reviewing and updating request status
- Request details page and protected routes
- Mock backend powered by JSON Server

## Tech Stack

- React 19
- Vite
- React Router
- Formik and Yup
- Axios
- Bootstrap
- JSON Server

## Prerequisites

- Node.js
- npm

## Setup

This project includes a `package-lock.json`, so install dependencies with `npm ci` to use the locked versions exactly.

```bash
cd smart-hostel-maintainance-platform
npm ci
```

## Run the backend

The app expects a local JSON Server API on `http://localhost:5000`.

```bash
cd "../JSON Server"
npx json-server --watch db.json --port 5000
```

## Run the frontend

Open a second terminal and start the Vite app:

```bash
cd smart-hostel-maintainance-platform
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

## Demo Credentials

Use these seeded accounts from the JSON Server data:

| Role | Email | Password |
| --- | --- | --- |
| Student | aarav@student.com | 1234 |
| Student | diya@student.com | 1234 |
| Warden / Admin | warden@hostel.com | admin123 |

## Data Source

The mock API data lives in `JSON Server/db.json` and contains users, maintenance requests, and categories. Updating that file changes the app data immediately when JSON Server is running.

## Available Scripts

From the frontend project folder:

```bash
npm run dev
npm run build
npm run preview
npm run lint
```
