/**
 * Script to make a user an admin
 * 
 * Usage:
 * 1. Make sure you have a .env.local file with MONGODB_URI
 * 2. Run: node scripts/make-admin.mjs your-email@example.com
 */

import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '.env.local') });

// Define User Schema (same as in models/User.ts)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: false },
  image: { type: String, required: false },
  designation: { type: String, required: false },
  department: { type: String, required: false },
  division: { type: String, required: false },
  zone: { type: String, required: false },
  address: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

async function makeAdmin(email) {
  try {
    if (!email) {
      console.error('❌ Error: Please provide an email address');
      console.log('Usage: node scripts/make-admin.mjs your-email@example.com');
      process.exit(1);
    }

    if (!process.env.MONGODB_URI) {
      console.error('❌ Error: MONGODB_URI not found in .env.local');
      process.exit(1);
    }

    console.log('📡 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    console.log(`🔍 Looking for user with email: ${email}`);
    const user = await User.findOne({ email: email });

    if (!user) {
      console.log(`❌ User with email ${email} not found`);
      console.log('💡 Make sure the user has registered first');
      await mongoose.connection.close();
      process.exit(1);
    }

    if (user.isAdmin) {
      console.log(`ℹ️  User ${email} is already an admin`);
      await mongoose.connection.close();
      process.exit(0);
    }

    console.log(`⚙️  Updating user...`);
    user.isAdmin = true;
    await user.save();

    console.log(`✅ Success! User ${email} is now an admin!`);
    console.log('\nUser Details:');
    console.log(`  Name: ${user.name}`);
    console.log(`  Email: ${user.email}`);
    console.log(`  Admin: ${user.isAdmin}`);

    await mongoose.connection.close();
    console.log('\n✅ Database connection closed');
  } catch (error) {
    console.error('❌ Error:', error.message);
    await mongoose.connection.close();
    process.exit(1);
  }
}

// Get email from command line arguments
const email = process.argv[2];
makeAdmin(email);

