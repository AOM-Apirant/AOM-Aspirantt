// Register function for credentials
export async function registerUser(
  name: string,
  email: string,
  password: string,
  designation?: string,
  department?: string,
  division?: string,
  zone?: string,
  address?: string,
  phoneNumber?: string
) {
  // Use dynamic imports to avoid loading Mongoose in Edge Runtime
  const { default: connectDB } = await import("./db");
  const { default: User } = await import("@/models/User");
  const bcrypt = await import("bcryptjs");

  await connectDB();

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create new user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    designation,
    department,
    division,
    zone,
    address,
    phoneNumber,
  });

  return { id: user._id.toString(), name: user.name, email: user.email };
}

