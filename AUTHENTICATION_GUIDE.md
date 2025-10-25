# Authentication Guide - Email & Password Only

## Overview

This application uses **email and password authentication** only. Google OAuth has been completely removed from the system.

## User Registration

Users can register using the registration form with the following fields:

### Required Fields:
- **Name**: Full name
- **Email**: Valid email address
- **Password**: Minimum 6 characters

### Optional Fields:
- Designation
- Department
- Division
- Zone
- Address
- Phone Number

## User Login

Users can log in using:
- **Email**: The email used during registration
- **Password**: The password set during registration

## Authentication Flow

1. **Registration** → `/register`
   - User fills out registration form
   - Password is hashed using bcryptjs
   - User data is saved to MongoDB
   - User is automatically logged in after successful registration

2. **Login** → `/login`
   - User enters email and password
   - Credentials are verified against database
   - Session is created using NextAuth.js
   - User is redirected to quiz page

3. **Logout**
   - User clicks Logout button in navbar
   - Session is destroyed
   - User is redirected to home page

## Admin Access

To make a user an admin:

```bash
node scripts/make-admin.mjs user-email@example.com
```

Admin users get access to:
- Admin Dashboard (`/admin`)
- User management
- Contact message management

## Protected Routes

The following routes require authentication:
- `/quiz` - Quiz pages
- `/dashboard` - User dashboard
- `/admin` - Admin dashboard (requires admin role)

## Environment Variables

Required environment variables in `.env.local`:

```bash
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# MongoDB
MONGODB_URI=your-mongodb-connection-string

# Email (Optional - for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_ENABLED=true
```

### Generate NEXTAUTH_SECRET:

```bash
openssl rand -base64 32
```

Or using Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## Security Features

- ✅ Password hashing using bcryptjs
- ✅ JWT-based session management
- ✅ 30-day session expiry
- ✅ Protected API routes
- ✅ Admin role-based access control
- ✅ Input validation using Zod schemas

## API Routes

### Registration
```
POST /api/auth/register
Body: { name, email, password, ...optional fields }
```

### Login
Uses NextAuth.js credentials provider

### Get Current User
```
GET /api/users
```

### Admin Routes (Admin only)
```
GET /api/admin/users
GET /api/admin/contacts
PATCH /api/admin/contacts
```

## Password Requirements

- Minimum 6 characters
- No special character requirements (can be added if needed)

## Session Management

- Sessions use JWT strategy
- Maximum age: 30 days
- Automatic session refresh
- Secure cookie storage

## Troubleshooting

### "Invalid email or password" Error
- Check that email is correct
- Verify password is correct
- Ensure user is registered

### "Registration failed" Error
- Email may already be in use
- Check MongoDB connection
- Verify all required fields are filled

### Session Expires Quickly
- Check NEXTAUTH_SECRET is set
- Verify browser allows cookies
- Clear browser cache and cookies

## Future Enhancements

Possible additions:
- Password reset functionality
- Email verification
- Two-factor authentication
- Password strength requirements
- Account lockout after failed attempts

## Support

For authentication issues:
1. Check environment variables are set correctly
2. Verify MongoDB connection
3. Check browser console for errors
4. Review server logs

## No Google Authentication

**Important**: This application does NOT support Google OAuth or any third-party authentication providers. Users must register with email and password.

