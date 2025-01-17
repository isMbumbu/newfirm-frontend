# LawConnect Platform

LawConnect is a comprehensive web application designed to streamline case management and enhance communication between lawyers and their clients. This platform allows users to manage cases efficiently, upload and share documents, and assign tasks with ease. 

## Features

### User Dashboard
- Access personal case information.
- Upload documents relevant to your case.
- Send inquiries or updates to the admin directly.

### Admin Panel
- View and manage user information.
- Delete users if necessary.
- Manage cases, documents, and tasks efficiently.

### Authentication
- Users and admins can securely log in to access their respective dashboards.
- Admin credentials for demonstration purposes:
  - **Email:** `mbumbuzi@gmail.com`
  - **Password:** `mbumbuzi`

### Case and Document Management
- Users can upload case-related documents, which are stored securely.
- Admins have the ability to oversee all uploaded documents and update case statuses as needed.

## Setup Instructions

### Prerequisites
Ensure the following tools are installed on your system:
- Node.js (v14+)
- npm or yarn
- Git

### Backend Setup
1. Navigate to the `lawconnect-backend` directory:
   ```bash
   cd newfirm-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up a `.env` file in the backend directory with the necessary environment variables (e.g., database connection, JWT secret).
4. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run at `http://localhost:5000` by default.

### Frontend Setup
1. Navigate to the `newfirm-frontend` directory:
   ```bash
   cd lawconnect-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update the API URL in the frontend code to point to your backend deployment or local server:
   ```javascript
   const API_BASE_URL = "http://localhost:5000"; // Replace with your backend URL if hosted
   ```
4. Start the React development server:
   ```bash
   npm run dev
   ```
   The frontend will run at `http://localhost:5173` by default.

## Deployment

### Frontend Hosting
You can deploy the frontend to platforms like Netlify or Vercel:
1. Build the project:
   ```bash
   npm run build
   ```
2. Upload the `build` folder to your hosting platform.

### Backend Hosting
Deploy the backend to platforms like Render or Railway:
1. Push your backend directory to a Git repository.
2. Follow the platform's instructions to set up a Node.js web service.

## How It Works
- The **login functionality** is central to the platform. Users must log in to access their dashboards, while the admin has exclusive access to the admin panel for management tasks.
- Admins can log in using the provided credentials to:
  - Oversee user information.
  - Manage and assign tasks.
  - Handle case-related documentation.

## Contact
For further assistance, please contact:
- **Email:** `ambukaa93@gmail.com`
- **Phone:** `0115781276`
- **Office Location:** West End Towers, Waiyaki Way, Nairobi, Kenya

---
We hope you find LawConnect beneficial for your legal practice. Feel free to reach out with any feedback or inquiries!
