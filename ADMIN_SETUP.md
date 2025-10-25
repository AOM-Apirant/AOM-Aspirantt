# Admin Dashboard Setup Guide

## Overview

The Admin Dashboard allows administrators to view and manage:
- **Registered Users**: View all users who have registered on the platform
- **Contact Messages**: View and manage all messages submitted through the contact form

## Features

### Admin Dashboard
- Beautiful, modern UI with dark theme
- Real-time statistics:
  - Total Users
  - Total Messages
  - Unread Messages
  - Replied Messages
- Searchable user and message lists
- Filter messages by status (unread, read, replied)
- Update message status with one click
- Responsive design for mobile and desktop

### Access Control
- Only users with `isAdmin: true` can access the dashboard
- Protected API routes with authentication and authorization
- Admin link appears in navbar only for admin users

## Making a User an Admin

### Method 1: Using MongoDB Compass or mongosh

1. Connect to your MongoDB database
2. Navigate to the `users` collection
3. Find the user you want to make admin
4. Update the document by adding/modifying:
   ```json
   {
     "isAdmin": true
   }
   ```

### Method 2: Using MongoDB Shell (mongosh)

```bash
mongosh

use your_database_name

db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { isAdmin: true } }
)
```

### Method 3: Using Node.js Script (Recommended) ⭐

We've included ready-to-use scripts in the `scripts/` directory.

**Important**: User must be registered first via `/register` page!

#### Step-by-Step:

1. **Register the user** (if not already registered):
   - Go to `http://localhost:3000/register`
   - Fill in all details and submit
   - Remember the email you used!

2. **Run the admin script**:
   ```bash
   node scripts/make-admin.mjs your-email@example.com
   ```

3. **Example** (replace with your actual email):
   ```bash
   node scripts/make-admin.mjs admin@aomaspirant.in
   ```

4. **Verify**:
   - Log out and log in again
   - You should see "Admin" button in navbar
   - Click to access `/admin` dashboard

#### Troubleshooting:

- **"User not found"** → Register the user first at `/register`
- **"MONGODB_URI not found"** → Add it to `.env.local`
- **Script runs but no Admin button** → Clear cache and logout/login again

📖 **See `CREATE_ADMIN.md` for detailed guide with examples**

## Removing Admin Privileges

If you need to remove admin privileges from a user:

```bash
node scripts/remove-admin.mjs your-email@example.com
```

## Accessing the Admin Dashboard

1. Make sure you're logged in with an admin account
2. The "Admin" button will appear in the navbar next to the Login/Logout button (visible only to admins)
3. Click on "Admin" to navigate to the dashboard at `/admin`
4. View and manage users and contact messages

## Admin Dashboard Features

### Users Tab
- View all registered users
- See user details:
  - Name
  - Email
  - Designation
  - Division
  - Phone Number
  - Registration Date
- Admin badge for admin users
- Search users by name or email

### Contact Messages Tab
- View all contact form submissions
- Message details:
  - Sender name and email
  - Subject
  - Full message
  - Submission date and time
  - Current status
- Update message status:
  - Mark as Read
  - Mark as Replied
  - Mark as Unread
- Filter messages by status
- Search messages by name, email, or subject
- View full message in a modal

## API Endpoints

### Get All Users (Admin Only)
```
GET /api/admin/users
```

### Get All Contact Messages (Admin Only)
```
GET /api/admin/contacts
```

### Update Contact Message Status (Admin Only)
```
PATCH /api/admin/contacts
Body: { contactId: string, status: "unread" | "read" | "replied" }
```

### Get Current User Info
```
GET /api/users
```

## Security

- All admin routes are protected with authentication
- Only users with `isAdmin: true` can access admin endpoints
- Unauthorized access returns 401 or 403 status codes
- Passwords are never exposed in API responses

## Troubleshooting

### Admin Link Not Showing in Navbar
1. Make sure you're logged in
2. Verify your user has `isAdmin: true` in the database
3. Clear browser cache and refresh the page

### Can't Access Admin Dashboard
1. Check if you're authenticated
2. Verify admin status in database
3. Check browser console for errors
4. Verify MongoDB connection

### Contact Messages Not Loading
1. Check MongoDB connection
2. Verify Contact model is properly configured
3. Check API endpoint `/api/admin/contacts` in browser console

## Next Steps

1. Set up your admin account using one of the methods above
2. Log in and navigate to `/admin`
3. Start managing users and contact messages!

## Support

For issues or questions, contact the development team or check the main README.md file.

