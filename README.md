# Men'ger — English Learning Platform (Backend)

Backend API for Men'ger, an online platform for learning English through courses, leveled word tasks, and organization-based onboarding. Built with NestJS and MongoDB as a thesis project.

## Frontend

The web client for this API lives at [menger-frontend-react](https://github.com/adi1zhexen0v/menger-frontend-react).

## Tech Stack

- NestJS + TypeScript
- MongoDB with Mongoose
- JWT authentication
- class-validator for request validation
- Swagger for API documentation

## Features

- **Authentication & accounts** — registration with email activation codes, JWT-based login, and password hashing with bcrypt.
- **Role-based access control** — student, manager, and admin roles enforced through a custom guard and route decorators.
- **Courses & curriculum** — courses are broken down into levels, levels into word tasks, and each task is backed by a dictionary word with audio and transcription.
- **Personal learning** — users build a personal word dictionary and earn points and diamonds as they progress.
- **Shopping cart** — users can add courses to a cart and transfer purchased courses into their account.
- **Organizations** — managers can onboard student and manager accounts, upload branding assets, and attach courses to an organization.
- **Partner applications** — organizations can apply to join the platform, and approved applications get an onboarding call scheduled automatically.
- **API documentation** — interactive Swagger UI available at `/api`.

## Integrations

- **OpenAI GPT-4** — generates IPA transcriptions and wrong-answer options for vocabulary quizzes.
- **Google Cloud Text-to-Speech** — generates pronunciation audio for words.
- **Google Cloud Storage** — stores uploaded images and generated audio files.
- **Google Translate** — translates text on demand.
- **Zoom API** — creates meetings for organization onboarding calls.
- **Nodemailer + EJS templates** — sends activation codes, credentials, and meeting links by email.
