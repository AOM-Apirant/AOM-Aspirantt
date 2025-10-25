# How to Create Admin User - Quick Guide

## Prerequisites

1. ✅ User must be registered first (via `/register` page)
2. ✅ MongoDB must be running and accessible
3. ✅ `.env.local` file must have `MONGODB_URI` configured

## Steps to Create Admin

### Step 1: Register User (if not already registered)

1. Go to `http://localhost:3000/register`
2. Fill in the registration form with your details
3. Click "Register"

### Step 2: Run Admin Script

Open terminal in your project directory and run:

```bash
node scripts/make-admin.mjs your-email@example.com
```

**Replace `your-email@example.com` with the actual email you used to register!**

### Example:

If you registered with email `admin@aomaspirant.in`, run:

```bash
node scripts/make-admin.mjs admin@aomaspirant.in
```

### Step 3: Verify

You should see output like:

```
📡 Connecting to MongoDB...
✅ Connected to MongoDB
🔍 Looking for user with email: admin@aomaspirant.in
⚙️  Updating user...
✅ Success! User admin@aomaspirant.in is now an admin!

User Details:
  Name: Your Name
  Email: admin@aomaspirant.in
  Admin: true

✅ Database connection closed
```

### Step 4: Login and Check

1. Log out if you're logged in
2. Log in again with your credentials
3. You should now see an "Admin" button in the navbar
4. Click it to access the Admin Dashboard at `/admin`

## Common Errors and Solutions

### ❌ Error: "User with email xxx not found"

**Problem**: User hasn't registered yet

**Solution**: Go to `/register` and create an account first

### ❌ Error: "MONGODB_URI not found in .env.local"

**Problem**: Environment variable not set

**Solution**: 
1. Create `.env.local` file in project root
2. Add: `MONGODB_URI=your-mongodb-connection-string`

### ❌ Error: "Cannot find module"

**Problem**: Dependencies not installed

**Solution**: Run `npm install`

### ℹ️ "User xxx is already an admin"

This is fine! The user already has admin privileges.

## Quick Commands Reference

### Make user admin:
```bash
node scripts/make-admin.mjs user@example.com
```

### Remove admin privileges:
```bash
node scripts/remove-admin.mjs user@example.com
```

### Check if script exists:
```bash
ls scripts/make-admin.mjs
```

## Example Workflow

```bash
# 1. Make sure you're in the project directory
cd aom-aspirant

# 2. Check your .env.local has MONGODB_URI
cat .env.local | grep MONGODB_URI

# 3. Run the script with your email
node scripts/make-admin.mjs myemail@example.com

# 4. Start your dev server (if not running)
npm run dev

# 5. Login and check for Admin button in navbar
```

## Video Tutorial Steps

1. 📝 Register at `/register` with email: `admin@aomaspirant.in`
2. 💻 Open terminal
3. ▶️ Run: `node scripts/make-admin.mjs admin@aomaspirant.in`
4. 🔄 Logout and login again
5. ✅ See Admin button in navbar!

## Need Help?

If the script doesn't work:

1. Check that Node.js is installed: `node --version`
2. Ensure you're in the project root directory
3. Verify MongoDB connection in `.env.local`
4. Make sure the user is registered in the database

## Security Note

🔒 **Never share admin access!** Only trusted users should be made admins.

