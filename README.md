# Tailor Management System

A complete full-stack web application for managing tailoring shop operations including customers, orders, and tailor assignments.

## 🚀 Quick Start (3 Steps)

### Step 1: Database Setup
```sql
CREATE DATABASE tailor_management_db;
```

### Step 2: Start Backend
```bash
cd server
# Edit .env with your MySQL credentials
npm install
npm start
```

### Step 3: Start Frontend
```bash
cd tailor_app
npm install
npm start
```

**That's it!** Your application will open at `http://localhost:3000`

## 📖 Full Documentation

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed setup instructions, troubleshooting, and deployment guide.

## ✨ Features

- 📊 **Dashboard** - View statistics and order overview
- ➕ **Add Orders** - Create new tailoring orders with customer info
- 📋 **Manage Orders** - View, edit, filter, and delete orders
- 👥 **Manage Tailors** - Add and manage tailor profiles
- 🎨 **Color-Coded Status** - Visual status indicators (Pending, In Progress, Completed, Delivered)
- ⏰ **Overdue Tracking** - Automatic highlighting of overdue orders
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile

## 🏗️ Tech Stack

### Backend
- Node.js with Express
- Sequelize ORM
- MySQL Database
- CORS enabled for frontend communication

### Frontend
- React with Functional Components & Hooks
- React Router for navigation
- Axios for API calls
- Responsive CSS styling

## 📁 Project Structure

```
tailoring_app/
├── server/                # Node.js + Express backend
│   ├── config/           # Database configuration
│   ├── models/           # Sequelize models (Customer, Tailor, Order)
│   ├── controllers/      # Business logic
│   ├── routes/           # API routes
│   ├── index.js          # Main server file
│   ├── package.json
│   └── .env              # Environment variables
│
└── tailor_app/           # React frontend
    ├── src/
    │   ├── components/   # Reusable components
    │   ├── pages/        # Page components (Dashboard, Orders, etc.)
    │   ├── services/     # API service layer
    │   ├── utils/        # Helper functions
    │   ├── styles/       # CSS files
    │   └── App.js        # Main app with routing
    ├── public/
    ├── package.json
    └── .env.local        # Environment variables
```

## 🔌 API Endpoints

### Customers
- `POST /api/customers` - Create customer
- `GET /api/customers` - Get all customers
- `PUT /api/customers/:id` - Update customer
- `DELETE /api/customers/:id` - Delete customer

### Tailors
- `POST /api/tailors` - Create tailor
- `GET /api/tailors` - Get all tailors
- `PUT /api/tailors/:id` - Update tailor
- `DELETE /api/tailors/:id` - Delete tailor

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get all orders (supports filters: status, tailorId)
- `PUT /api/orders/:id` - Update order status/dates
- `DELETE /api/orders/:id` - Delete order
- `GET /api/orders/stats/dashboard` - Get dashboard statistics

## 🛠️ Development

### Backend Development
```bash
cd server
npm install              # First time only
npm start               # Production mode
npm run dev             # Development mode with auto-restart
```

### Frontend Development
```bash
cd tailor_app
npm install              # First time only
npm start               # Start dev server
npm build               # Create production build
```

## ⚙️ Configuration

### Backend (.env)
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=tailor_management_db
DB_PORT=3306
SERVER_PORT=5000
NODE_ENV=development
```

### Frontend (.env.local)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🎨 UI Features

### Status Badges
- **Pending** - Yellow
- **In Progress** - Blue
- **Completed** - Green
- **Delivered** - Gray

### Features
- Overdue orders highlighted in red
- Days left calculation
- Responsive design
- Smooth animations
- Form validation with error messages
- Modal dialogs for editing orders
- Search and filter functionality

## 📝 Database Schema

### Customers Table
- id (PK, Auto Increment)
- name (String, Required)
- phone (String)
- address (Text)
- timestamps

### Tailors Table
- id (PK, Auto Increment)
- name (String, Required)
- phone (String)
- timestamps

### Orders Table
- id (PK, Auto Increment)
- customerId (FK → Customers)
- tailorId (FK → Tailors)
- dressType (String, Required)
- givenDate (Date)
- deliveryDate (Date)
- status (Enum: Pending, In Progress, Completed, Delivered)
- notes (Text)
- timestamps

## 🐛 Troubleshooting

### MySQL Connection Fails
- Verify MySQL is running
- Check credentials in .env
- Ensure database exists

### API Calls Fail
- Check if backend is running on port 5000
- Verify API_URL in frontend .env.local
- Check browser console for error details

### Frontend Blank Page
- Press F12 to open DevTools
- Check for JavaScript errors
- Clear browser cache and reload
- Verify all npm packages installed

## 📚 Prerequisites

- Node.js v14+ ([Download](https://nodejs.org/))
- MySQL 5.7+ ([Download](https://dev.mysql.com/downloads/mysql/))
- Git (optional) ([Download](https://git-scm.com/))
- Code Editor (VS Code recommended)

## 🚀 Deployment

### Production Build (Frontend)
```bash
cd tailor_app
npm run build
# Deploy 'build' folder to Vercel or similar
```

### Production Setup (Backend)
1. Deploy to Render, Heroku, or similar service
2. Set environment variables on hosting platform
3. Use cloud database (PlanetScale, AWS RDS, etc.)

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed deployment instructions.

## 📞 Support

For issues or questions:
1. Check [SETUP_GUIDE.md](./SETUP_GUIDE.md) troubleshooting section
2. Review browser DevTools console
3. Check backend console for errors
4. Verify database connection

## 📄 License

MIT License - Open source and free to use

---

**Built with ❤️ for tailoring shop management**
