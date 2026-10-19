# Employee Management System

A web application for managing employee records. Authenticated users can add, view, update, and delete employees. The frontend is built with React and Vite, and Firebase provides authentication and the database.

**Live Demo:** [https://myemsproject-d8b9d.web.app](https://myemsproject-d8b9d.web.app)
<img width="1897" height="872" alt="image" src="https://github.com/user-attachments/assets/a80bde04-05e4-4723-953b-96fad7cbc458" />
<img width="1890" height="867" alt="image" src="https://github.com/user-attachments/assets/9f109d18-a8bc-4455-b7a9-e2789088523e" />
<img width="1917" height="515" alt="image" src="https://github.com/user-attachments/assets/8fff482d-5bf4-4b33-befd-ee74dde85fd2" />
<img width="1882" height="876" alt="image" src="https://github.com/user-attachments/assets/1546f54b-a894-456b-90e9-a2ed1d245939" />
<!-- Add 2-3 screenshots here: login page, employee table, add/edit form -->

## Features

- **User authentication:** register, log in, and log out with Firebase Authentication (email and password)
- **Employee management (CRUD):** add new employees, view all employees in a table, edit existing records, and delete records
- **Delete confirmation:** prevents records from being removed by accident
- **Protected routes:** employee pages are available only to logged-in users, and logged-out visitors are redirected to the login page
- **Session persistence:** users stay logged in after a page refresh, using Firebase's auth state listener
- **Form validation:** user inputs are checked before data is saved
- **Responsive UI:** styled with Bootstrap and custom CSS

## Tech Stack

| Area | Technologies |
| --- | --- |
| Frontend | React, Vite, JavaScript, HTML, CSS, Bootstrap |
| Routing | React Router |
| State management | React Hooks (`useState`, `useEffect`, `useContext`), Context API |
| Backend and database | Firebase Authentication, Cloud Firestore |
| Hosting | Firebase Hosting |
| Version control | Git, GitHub |

## How It Works

- **Authentication:** Firebase Authentication handles registration, login, and logout. The logged-in user is stored in a React Context, so any component can check who is signed in.
- **Session handling:** the Context provider listens to Firebase's `onAuthStateChanged`, so the user is restored after a refresh. A loading state prevents redirects before Firebase has checked the session.
- **Data layer:** employee records are stored in a Firestore collection named `Employees`. A service file wraps the Firestore operations (`getDocs`, `addDoc`, `updateDoc`, `deleteDoc`) so the components stay clean.
- **Routing:** React Router maps URLs to pages, and a `ProtectedRoute` component guards the pages that show or change employee data.

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- A Firebase project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aryangupta-455/employee_management_system.git
   cd employee_management_system
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Firebase:
   - Create a project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Authentication → Email/Password**.
   - Create a **Cloud Firestore** database.
   - Register a web app and copy its config values into the project's Firebase config file.
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Recommended Firestore Security Rules

Frontend route protection only hides pages, so restrict database access in Firestore Rules as well:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /Employees/{doc} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Deployment

The app is deployed on Firebase Hosting:

```bash
npm run build
firebase deploy --only hosting
```

## Future Improvements

- Role-based access (Admin and User)
- Search and pagination for the employee list
- Export employee data to CSV
- Real-time updates with Firestore `onSnapshot`
- Better state management with React Query or Redux for larger data sets

## Author

**Aryan Gupta**
GitHub: [@aryangupta-455](https://github.com/aryangupta-455)
