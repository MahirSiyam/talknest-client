# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# TalkNest - Tutor Booking Platform

**Live Website:** [https://talknest-ab7a1.web.app/myBookedTutors](https://talknest-ab7a1.web.app/myBookedTutors)

## 📚 Project Purpose

TalkNest is a modern web application that allows students to easily book tutors based on their language preferences and availability. It features a seamless experience for both users and admins, supporting functionalities like booking management, reviews, and secure authentication.

This project was built as part of the Programming Hero Web Development Course (Assignment 11).

---

## 🚀 Key Features

- 🔐 **Authentication & Authorization**: Users can register and log in securely using Firebase.
- 📚 **Tutor Listing & Search**: Browse tutors by language or name.
- 📅 **Booking System**: Students can book tutors, see their booked list, and cancel bookings.
- ⭐ **Review Counter**: Track how many times a tutor has been reviewed.
- 🧑‍💼 **Role Management**: Admins can assign roles (admin/tutor) and manage users.
- 🌓 **Dark/Light Mode**: Toggle themes with preference saved in localStorage.
- 📦 **Protected Routes**: Routes are guarded based on user roles and login status.

---

## 🛠️ Technologies & Packages Used

### Frontend (React + TailwindCSS)
- `react-router-dom`
- `axios`
- `firebase`
- `react-hot-toast`
- `react-icons`
- `lottie-react`
- `sweetalert2`
- `daisyui`
- `tailwindcss`
- `vite`

### Backend (Node.js + Express + MongoDB)
- `express`
- `cors`
- `dotenv`
- `jsonwebtoken`
- `mongoose`
- `cookie-parser`
- `stripe`
