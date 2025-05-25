# Technical Overview: Blood Bank Fullstack App

## Stack
- **Frontend:** React (Vite, TailwindCSS, Axios, React Router)
- **Backend:** Django + Django REST Framework + JWT (SimpleJWT)
- **Database:** SQLite (dev), PostgreSQL (prod)
- **Dev Tools:** Postman, Django Admin

## Core Concepts
- **Models:** Donor, Prospect, BloodInventory, Donation
- **APIs:** RESTful endpoints for all entities. Auth with JWT.
- **Frontend:** SPA with pages for login, donors, prospects, dashboard, etc.
- **Security:** All sensitive endpoints require JWT tokens.
- **Emails:** Handled via Django email backend (add Celery for async jobs).

## Development Workflow
1. **Design your models and API endpoints (write them down first!)**
2. **Implement backend models, serializers, views, and URLs.**
3. **Build and test APIs with Postman.**
4. **Build frontend pages and connect to APIs.**
5. **Add authentication and permissions.**
6. **Write docs and prepare for deployment.**

## References
- [Django REST Framework Quickstart](https://www.django-rest-framework.org/tutorial/quickstart/)
- [React Docs](https://react.dev/)
- [DRF SimpleJWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
