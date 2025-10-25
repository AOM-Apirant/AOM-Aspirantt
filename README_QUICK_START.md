# AOM Aspirant - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Create `.env.local` file in the project root:

```bash
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-here

# MongoDB
MONGODB_URI=your-mongodb-connection-string

# Email (Optional)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_ENABLED=true
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### 3. Start Development Server

```bash
npm run dev
```

Visit: `http://localhost:3000`

## 📝 Create Your Account

1. Go to `http://localhost:3000/register`
2. Fill in:
   - Name
   - Email
   - Password (minimum 6 characters)
   - Optional: Designation, Department, etc.
3. Click "Register"
4. You'll be automatically logged in!

## 👑 Make Yourself Admin

**After registering**, run this command:

```bash
node scripts/make-admin.mjs your-email@example.com
```

**Example:**
```bash
node scripts/make-admin.mjs admin@aomaspirant.in
```

Then logout and login again. You'll see an "Admin" button in the navbar!

## 🎯 Key Features

### For All Users:
- 📚 Study Materials & Notes
- 📝 Quizzes
- 📊 Progress Dashboard
- 📄 PDF Resources
- 📞 Contact Form

### For Admins Only:
- 👥 View All Registered Users
- 📧 Manage Contact Messages
- 📊 User Statistics
- ✅ Update Message Status

## 📂 Important Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Landing page |
| Register | `/register` | Create new account |
| Login | `/login` | Login to account |
| Quiz | `/quiz` | Take quizzes |
| Dashboard | `/dashboard` | User progress |
| Admin | `/admin` | Admin dashboard (admins only) |
| Contact | `/contact` | Contact form |

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm start            # Start production server

# Admin Management
node scripts/make-admin.mjs user@email.com      # Make admin
node scripts/remove-admin.mjs user@email.com    # Remove admin
```

## 📖 Documentation Files

- `ADMIN_SETUP.md` - Complete admin setup guide
- `CREATE_ADMIN.md` - Quick admin creation guide
- `AUTHENTICATION_GUIDE.md` - Authentication details
- `README.md` - Full project documentation

## 🎓 Typical Workflow

### For Students/Users:

1. Register → Login
2. Browse study materials
3. Take quizzes
4. Track progress in dashboard
5. Download PDFs for offline study

### For Admins:

1. Register → Make yourself admin
2. Login → See Admin button
3. Access Admin Dashboard
4. View registered users
5. Manage contact messages
6. Track user engagement

## 🆘 Need Help?

### Login Issues:
- Email/Password must match what you registered with
- Check your internet connection
- Clear browser cache

### Admin Button Not Showing:
- Make sure you ran the admin script
- Logout and login again
- Clear browser cache

### Database Connection Error:
- Check `MONGODB_URI` in `.env.local`
- Verify MongoDB is accessible
- Check network connection

## 📱 Mobile Friendly

The entire application is responsive and works great on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktops

## 🔐 Security

- ✅ Password hashing (bcryptjs)
- ✅ JWT-based sessions
- ✅ Protected routes
- ✅ Admin role-based access
- ✅ Input validation
- ✅ XSS protection

## 🌐 Production Deployment

See main `README.md` for deployment instructions to:
- Vercel
- Netlify
- Other hosting platforms

## ⚡ Quick Tips

1. **Use strong passwords** (recommended: 8+ characters)
2. **Make only trusted users admins**
3. **Backup your MongoDB database regularly**
4. **Keep `.env.local` secure** (never commit to git)
5. **Update dependencies regularly** (`npm update`)

## 🎉 You're Ready!

Start exploring the platform and enjoy learning! 📚✨

---

**Website**: https://aomaspirant.in  
**Purpose**: Comprehensive learning platform for AOM aspirants

