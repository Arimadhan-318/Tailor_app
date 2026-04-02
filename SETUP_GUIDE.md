# Tailor Management System - Complete Setup Guide

A complete web application for managing tailoring shop operations with customers, orders, and tailor assignments.

## 📁 Project Structure

```
tailoring_app/
├── server/                    # Node.js + Express backend
│   ├── config/
│   │   └── database.js       # Sequelize database configuration
│   ├── models/
│   │   ├── Customer.js       # Customer model
│   │   ├── Tailor.js         # Tailor model
│   │   ├── Order.js          # Order model with relationships
│   │   └── index.js          # Export all models
│   ├── controllers/
│   │   ├── customerController.js
│   │   ├── tailorController.js
│   │   └── orderController.js
│   ├── routes/
│   │   ├── customerRoutes.js
│   │   ├── tailorRoutes.js
│   │   └── orderRoutes.js
│   ├── index.js              # Main server file
│   ├── package.json
│   ├── .env.example          # Environment variables template
│   └── .gitignore
│
└── tailor_app/               # React frontend
    ├── src/
    │   ├── components/       # Reusable components
    │   │   ├── Navbar.js
    │   │   ├── OrderForm.js
    │   │   ├── TailorForm.js
    │   │   ├── OrdersTable.js
    │   │   ├── TailorsTable.js
    │   │   └── StatCard.js
    │   ├── pages/           # Page components
    │   │   ├── Dashboard.js
    │   │   ├── AddOrder.js
    │   │   ├── Orders.js
    │   │   └── Tailors.js
    │   ├── services/        # API services
    │   │   └── api.js       # Axios instance and API calls
    │   ├── utils/           # Helper functions
    │   │   └── helpers.js   # Utility functions for styling, date formatting
    │   ├── styles/          # CSS files for all components
    │   ├── App.js           # Main app with routing
    │   └── index.js
    ├── public/
    │   └── index.html       # Main HTML file
    ├── package.json
    ├── .env.local           # Frontend environment variables
    └── .gitignore
```

## 🛠️ Prerequisites

Before you start, make sure you have installed:

1. **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
2. **MySQL** (v5.7 or higher) - [Download](https://dev.mysql.com/downloads/mysql/)
3. **Git** (optional) - [Download](https://git-scm.com/)
4. **Code Editor** - VS Code recommended - [Download](https://code.visualstudio.com/)

### Verify Installation

```bash
node --version
npm --version
mysql --version
```

## 📋 Step-by-Step Setup Guide

### Phase 1: Database Setup

1. **Start MySQL Server**
   - Windows: Open MySQL Command Line Client or use MySQL Workbench
   - Mac/Linux: Run `mysql -u root -p` in terminal

2. **Create Database**
   ```sql
   CREATE DATABASE tailor_management_db;
   ```

3. **Create MySQL User (Optional but Recommended)**
   ```sql
   CREATE USER 'tailor_user'@'localhost' IDENTIFIED BY 'tailor_password_123';
   GRANT ALL PRIVILEGES ON tailor_management_db.* TO 'tailor_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

### Phase 2: Backend Setup

1. **Navigate to Server Folder**
   ```bash
   cd c:\Users\arimadhankumarv\Desktop\tailoring_app\server
   # Or for Mac/Linux users:
   # cd ~/Desktop/tailoring_app/server
   ```

2. **Create .env File from Template**
   ```bash
   # Copy .env.example to .env
   # Windows (PowerShell):
   Copy-Item .env.example .env
   
   # Mac/Linux:
   cp .env.example .env
   ```

3. **Configure .env File**
   Edit the `.env` file with your database credentials:
   ```
   DB_HOST=localhost
   DB_USER=root              # Or 'tailor_user' if you created one
   DB_PASSWORD=your_password # Your MySQL password
   DB_NAME=tailor_management_db
   DB_PORT=3306
   SERVER_PORT=5000
   NODE_ENV=development
   ```

4. **Install Backend Dependencies**
   ```bash
   npm install
   ```

5. **Start Backend Server**
   ```bash
   npm start
   ```
   
   Expected output:
   ```
   ✓ Database connection established
   ✓ Database synchronized
   ✓ Server running on http://localhost:5000
   ```

### Phase 3: Frontend Setup

1. **Open New Terminal/Command Prompt**

2. **Navigate to Frontend Folder**
   ```bash
   cd c:\Users\arimadhankumarv\Desktop\tailoring_app\tailor_app
   # Or for Mac/Linux:
   # cd ~/Desktop/tailoring_app/tailor_app
   ```

3. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

4. **Start Frontend Development Server**
   ```bash
   npm start
   ```
   
   The application will automatically open at `http://localhost:3000`

## ✅ Verification Checklist

After setup, verify everything is working:

- [ ] Both terminal windows show no errors
- [ ] Backend: "Server running on http://localhost:5000"
- [ ] Frontend: Browser opens to http://localhost:3000
- [ ] You can see the Tailor Management System navbar
- [ ] Dashboard loads with statistics cards
- [ ] No console errors in browser DevTools (F12)

## 🚀 Features Overview

### Dashboard Page
- View total orders count
- View pending, completed, and delivered orders
- See orders per tailor
- Quick action buttons to navigate to other pages

### Add Order Page
- Form to create new orders
- Customer information (name, phone, address)
- Dress type and tailor selection
- Given date and delivery date
- Notes field for additional information
- Form validation with error messages

### Orders Page
- View all orders in a table
- Filter by status (Pending, In Progress, Completed, Delivered)
- Filter by tailor
- Search by customer name, dress type, or order ID
- Color-coded status badges
- Overdue order highlighting in red
- Days left calculation
- Edit order status and delivery date
- Delete orders

### Tailors Page
- Add new tailors with name and phone
- View all tailors in a table
- Delete tailors

## 🎨 UI Features

### Status Color Coding
- **Pending**: Yellow (#FFD700)
- **In Progress**: Blue (#00A8FF)
- **Completed**: Green (#00C851)
- **Delivered**: Gray (#808080)

### Responsive Design
- Works on desktop (1200px+)
- Tablet friendly (768px - 1199px)
- Mobile responsive (< 768px)

### Visual Enhancements
- Overdue dates highlighted in red
- Days left calculation
- Hover effects on cards and buttons
- Smooth animations
- Professional color scheme

## 🔌 API Endpoints

### Customer API
- `POST /api/customers` - Create customer
- `GET /api/customers` - Get all customers
- `GET /api/customers/:id` - Get customer by ID
- `PUT /api/customers/:id` - Update customer
- `DELETE /api/customers/:id` - Delete customer

### Tailor API
- `POST /api/tailors` - Create tailor
- `GET /api/tailors` - Get all tailors
- `GET /api/tailors/:id` - Get tailor by ID
- `PUT /api/tailors/:id` - Update tailor
- `DELETE /api/tailors/:id` - Delete tailor

### Order API
- `POST /api/orders` - Create order
- `GET /api/orders` - Get all orders (with filters: status, tailorId)
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id` - Update order
- `DELETE /api/orders/:id` - Delete order
- `GET /api/orders/stats/dashboard` - Get dashboard statistics

## 🔄 Development Workflow

### During Development

1. **Keep Both Servers Running**
   - Terminal 1: Backend (`npm start` in server folder)
   - Terminal 2: Frontend (`npm start` in tailor_app folder)

2. **Making Changes**
   - Backend: Restart server after model/controller changes
   - Frontend: Changes hot-reload automatically

3. **Debugging**
   - Backend: Check console output in server terminal
   - Frontend: Use DevTools (F12 or Right-click → Inspect)

### Common Development Commands

**Backend:**
```bash
cd server
npm install              # Install dependencies
npm start               # Start development server
npm run dev             # Start with nodemon (auto-restart)
```

**Frontend:**
```bash
cd tailor_app
npm install             # Install dependencies
npm start               # Start development server
npm build               # Create production build
npm test                # Run tests
```

## 🐛 Troubleshooting

### Backend Issues

**Error: "ECONNREFUSED 127.0.0.1:3306"**
- MySQL is not running
- Solution: Start MySQL service

**Error: "Access denied for user 'root'@'localhost'"**
- Wrong MySQL password in .env file
- Solution: Update DB_PASSWORD in .env

**Error: "Database tailor_management_db doesn't exist"**
- Database not created
- Solution: Run the database creation SQL command

### Frontend Issues

**Error: "Cannot find module 'react-router-dom'"**
- Dependencies not installed
- Solution: Run `npm install` in tailor_app folder

**Error: "POST http://localhost:5000/api/... 404 Not Found"**
- Backend not running
- Solution: Start backend server in another terminal

**Blank white screen**
- Check browser console for errors (F12)
- Clear browser cache (Ctrl+Shift+Delete)
- Restart frontend server

## 📦 Dependencies

### Backend
- **express**: Web framework
- **sequelize**: ORM for database
- **mysql2**: MySQL database driver
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **nodemon**: Auto-restart on file changes (dev only)

### Frontend
- **react**: UI library
- **react-dom**: React DOM rendering
- **react-router-dom**: Routing library
- **axios**: HTTP client

## 📝 Environment Variables

### Backend (.env)
```
DB_HOST=localhost              # MySQL host
DB_USER=root                    # MySQL username
DB_PASSWORD=your_password       # MySQL password
DB_NAME=tailor_management_db    # Database name
DB_PORT=3306                    # MySQL port
SERVER_PORT=5000                # Backend server port
NODE_ENV=development            # Environment
```

### Frontend (.env.local)
```
REACT_APP_API_URL=http://localhost:5000/api  # Backend API URL
```

## 🚀 Ready to Deploy?

### For Production Deployment

#### Backend (Render)
1. Push code to GitHub
2. Create account on [Render](https://render.com)
3. Create new Web Service
4. Connect GitHub repository
5. Set environment variables
6. Deploy

#### Frontend (Vercel)
1. Push code to GitHub
2. Create account on [Vercel](https://vercel.com)
3. Import GitHub project
4. Update `REACT_APP_API_URL` to production backend URL
5. Deploy

#### Database (PlanetScale or AWS RDS)
- Create database instance
- Update connection details in backend

## 📚 File Descriptions

### Backend Files

**index.js**
- Main server entry point
- Initializes Express app
- Connects to database
- Sets up routes
- Starts server

**config/database.js**
- Sequelize configuration
- Database connection setup

**models/Customer.js**
- Customer table schema
- Fields: id, name, phone, address

**models/Tailor.js**
- Tailor table schema
- Fields: id, name, phone

**models/Order.js**
- Order table schema
- Relationships with Customer and Tailor
- Status enum (Pending, In Progress, Completed, Delivered)

**controllers/customerController.js**
- CRUD operations for customers
- Handles customer-related business logic

**controllers/tailorController.js**
- CRUD operations for tailors
- Handles tailor-related business logic

**controllers/orderController.js**
- CRUD operations for orders
- Dashboard statistics endpoint
- Filter and search logic

**routes/customerRoutes.js, tailorRoutes.js, orderRoutes.js**
- Express route definitions
- Maps HTTP methods to controller functions

### Frontend Files

**services/api.js**
- Axios instance configuration
- API call wrapper functions
- Organized by resource (customers, tailors, orders)

**utils/helpers.js**
- Helper functions for:
  - Status color mapping
  - Date formatting
  - Overdue checking
  - Days left calculation

**components/**
- Reusable navbar component
- Order and tailor form components
- Order and tailor table components
- Statistics card component

**pages/**
- Dashboard: Overview and statistics
- AddOrder: Create new orders
- Orders: View and manage all orders
- Tailors: Manage tailor database

**styles/**
- CSS for each component
- Responsive design
- Mobile-first approach

## 📞 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Review console errors and browser DevTools
3. Verify all prerequisites are installed
4. Check environment variable configuration
5. Ensure both servers are running

## ✨ Next Steps

After setup is complete:

1. Create a few test tailors
2. Add sample orders with different statuses
3. Test filtering and search functionality
4. Update order statuses to track workflow
5. Explore the dashboard statistics

## 📄 License

This project is open source and available under the MIT License.

---

**Congratulations! You have successfully set up the Tailor Management System! 🎉**
