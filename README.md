# FullStack BloodBank Application(@InnovateIntern Task)

A modern web application to manage blood donors, prospects, blood inventory, and donation logistics for a blood bank. Built with a React frontend, Node.js/Express backend, and background services for automation.

---

## Features

- User Authentication (Admins, Staff)
- Donor Management: Add, edit, search, and manage donors
- Prospect Management: Handle new prospects and eligibility
- Blood Inventory Tracking: Track available blood types and units
- Donation Scheduling: Schedule, remind, and log donations
- Admin Dashboard: Visualize stats and charts
- Automated Emails: Reminders, follow-ups, and notifications
- Secure API with JWT tokens
- Responsive UI (TailwindCSS)
- Background Services (cron jobs)

---

## Project Structure

```
/Frontend           # React app (Vite, Redux, Tailwind)
/Backend            # Express.js API
/BackgroundServices # Node scripts for email, reminders, etc.
.env.example        # Sample environment configuration
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup

1. `cd Backend`
2. Copy `.env.example` to `.env` and configure your DB and secrets
3. `npm install`
4. `npm start`

### Frontend Setup

1. `cd Frontend/react`
2. `npm install`
3. `npm run dev`

### Background Services

1. `cd BackgroundServices`
2. `npm install`
3. `npm start`

---

## API Endpoints

| Method | Endpoint                | Description                |
|--------|-------------------------|----------------------------|
| POST   | /api/v1/auth/register   | Register new user          |
| POST   | /api/v1/auth/login      | Login and get JWT          |
| GET    | /api/v1/donors          | List all donors            |
| POST   | /api/v1/donors          | Add new donor              |
| ...    | ...                     | ...                        |

---

## Feature Checklist

- [x] User authentication (JWT)
- [x] Donor registration form
- [ ] Admin: List/search donors
- [ ] Donor edit/delete functionality
- [ ] Prospect management
- [ ] Blood inventory UI & API
- [ ] Donation scheduling
- [ ] Email reminders (background jobs)
- [ ] Error handling and validation
- [ ] Test coverage (unit/integration)
- [ ] Deployment docs (.env, Docker, CI/CD)

---

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feat/feature-name`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## License

MIT

---

## Maintainer

- [EngineerRohit01](https://github.com/EngineerRohit01)
