# AOM Aspirant

Your ultimate learning companion for AOM preparation. Master concepts, ace quizzes, and track your progress.

## Features

- 📚 **Study Materials**: Comprehensive notes and PDFs
- 🧠 **Interactive Quizzes**: Test your knowledge with quizzes
- 📊 **Progress Tracking**: Monitor your learning journey
- 👤 **User Authentication**: Secure login with Google OAuth
- 📧 **Contact Form**: Get in touch with email notifications
- 📱 **Mobile Responsive**: Works perfectly on all devices
- **Smart Quizzes**: AI-powered adaptive learning with instant feedback
- **Premium Resources**: Curated study materials and expert notes
- **Advanced Analytics**: Detailed insights into your learning journey

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Gmail account for email notifications

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd aom-aspirant
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Setup**

Create a `.env.local` file in the root directory:

```env
# Email Configuration
EMAIL_USER=aomaspirant@gmail.com
EMAIL_PASS=your_gmail_app_password_here

# Database
MONGODB_URI=your_mongodb_atlas_connection_string

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Email Setup

1. **Gmail App Password**:

   - Go to your Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password for "Mail"
   - Use this password in `EMAIL_PASS`

2. **Gmail Settings**:
   - Enable "Less secure app access" or use App Passwords
   - The contact form will send emails to `aomaspirant@gmail.com`

### Database Setup

1. **MongoDB Atlas**:

   - Create a free MongoDB Atlas account
   - Create a new cluster
   - Get your connection string
   - Add it to `MONGODB_URI`

2. **Collections**:
   - The app will automatically create required collections:
     - `users` - User accounts
     - `userprogress` - Quiz progress
     - `contacts` - Contact form submissions

### Google OAuth Setup

1. **Google Cloud Console**:
   - Create a new project
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google`
     - `https://yourdomain.com/api/auth/callback/google`

### Running the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Contact Form Features

- ✅ **Email Notifications**: Instant email to admin
- ✅ **Auto-Reply**: Confirmation email to user
- ✅ **Database Storage**: All messages saved in MongoDB
- ✅ **Spam Prevention**: Rate limiting (1 message per hour per email)
- ✅ **Validation**: Email format and required field validation
- ✅ **Error Handling**: User-friendly error messages

## API Endpoints

- `POST /api/contact` - Contact form submission
- `POST /api/auth/register` - User registration
- `POST /api/progress` - Save quiz progress

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, MongoDB, Mongoose
- **Authentication**: NextAuth.js, Google OAuth
- **Email**: Nodemailer, Gmail SMTP
- **Database**: MongoDB Atlas
- **Styling**: Tailwind CSS, Lucide Icons
- **Deployment**: Vercel

## Deployment

This project is deployed on Vercel with automatic deployments from GitHub.

---

_Last updated: December 2024_

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email aomaspirant@gmail.com or use the contact form on the website.
