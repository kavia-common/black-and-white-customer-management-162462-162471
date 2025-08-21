# Customer Frontend (Black & White)

Minimal React frontend for session-authenticated login/logout and customer CRUD.

## Features
- Login/Logout (session-based auth)
- List customers
- Add/Edit/Delete customer
- Minimalistic black-and-white theme

## Backend Connectivity
- Dev proxy is set to `http://localhost:3001` (see `package.json`). All API calls go to `/api/...` and will be forwarded to the Django backend on port 3001.
- Alternatively, set `REACT_APP_API_BASE` to an absolute URL (e.g., `http://localhost:3001`) to bypass the proxy.

Create a `.env` file (do not commit) based on `.env.example` if you want to override the API base URL.

## Development
1) Install dependencies:
   npm install

2) Start dev server:
   npm start
   - Frontend: http://localhost:3000
   - Backend (expected): http://localhost:3001

3) Build for production:
   npm run build

4) Run tests (CI-friendly):
   npm test

## Notes
- This app uses `fetch` with `credentials: 'include'` to send cookies required by Django session authentication.
- Ensure Django allows:
  - CORS and CSRF for http://localhost:3000
  - Session cookie to be sent with credentials (set SameSite and CSRF tokens appropriately)
- Backend endpoints used:
  - POST /api/auth/login/
  - POST /api/auth/logout/
  - GET /api/customers/
  - GET /api/customers/{id}/
  - POST /api/customers/
  - PUT /api/customers/{id}/
  - DELETE /api/customers/{id}/
