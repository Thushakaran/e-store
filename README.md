# 🛒 E-Commerce Platform

A modern, full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, product management, shopping cart functionality, and responsive design.

## 🚀 Features

### Frontend Features

- **Modern UI/UX**: Built with React 19 and styled with Bootstrap
- **State Management**: Redux Toolkit for centralized state management
- **Routing**: React Router for seamless navigation
- **Responsive Design**: Mobile-first approach with responsive components
- **Shopping Cart**: Persistent cart functionality with local storage sync
- **User Authentication**: Login/Signup with JWT token management
- **Product Browsing**: Product listing, details, and search functionality
- **User Profile**: User account management and profile customization

### Backend Features

- **RESTful API**: Express.js server with structured API endpoints
- **Database**: MongoDB with Mongoose ODM for data persistence
- **Authentication**: JWT-based authentication with bcrypt password hashing
- **File Upload**: Multer middleware for product and user image uploads
- **Error Handling**: Comprehensive error middleware and validation
- **Security**: CORS configuration, input validation, and secure headers
- **File Storage**: Static file serving for uploaded images

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │◄──►│   Backend       │◄──►│   Database      │
│   (React)       │    │   (Express)     │    │   (MongoDB)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📁 Project Structure

```
e-Commerce/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── redux/          # Redux store and slices
│   │   ├── services/       # API service layer
│   │   └── assets/         # Static assets
│   ├── public/             # Public assets
│   └── package.json
├── backend/                 # Express.js server
│   ├── controllers/        # Request handlers
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── middlewares/       # Custom middleware
│   ├── config/            # Configuration files
│   ├── uploads/           # File uploads
│   └── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Backend Setup

1. **Navigate to backend directory**

   ```bash
   cd backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the `backend/config/` directory:

   ```env
   NODE_ENV=development
   PORT=8000
   DB_LOCAL_URL=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=7d
   ```

4. **Start the server**

   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔐 Authentication Flow

1. **Registration**: User creates account with email/password
2. **Login**: User authenticates and receives JWT token
3. **Token Storage**: JWT stored in localStorage
4. **API Requests**: Token automatically included in headers
5. **Protected Routes**: Backend validates token for secure endpoints

## 🛒 Shopping Cart Features

- **Persistent Storage**: Cart data saved in localStorage
- **Real-time Updates**: Redux state management for instant updates
- **Quantity Management**: Add, remove, and update item quantities
- **Price Calculation**: Automatic total calculation
- **Cart Synchronization**: Cross-component cart state sync

## 🔧 Development

### Available Scripts

**Backend:**

```bash
npm run dev    # Start development server with nodemon
npm start      # Start production server
```

**Frontend:**

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run lint   # Run ESLint
npm run preview # Preview production build
```

**Note**: This is a full-stack e-commerce application designed for learning and development purposes. For production use, additional security measures, error handling, and testing should be implemented.
