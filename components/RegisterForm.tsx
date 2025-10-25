'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerSchema } from '@/schemas/authSchema';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { ZodError, ZodIssue } from 'zod';

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    department: '',
    division: '',
    zone: '',
    address: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      // Validate form data
      const validatedData = registerSchema.parse(formData);

      // Call registration API
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // Auto login after successful registration
      const result = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result?.error) {
        setErrors({ form: 'Registration successful but login failed. Please login manually.' });
        setTimeout(() => router.push('/'), 2000);
      } else {
        router.push('/quiz');
      }
    } catch (error: unknown) {  
      if (error instanceof Error && 'errors' in error) {
        const fieldErrors: Record<string, string> = {};
        (error as ZodError).errors.forEach((err: ZodIssue) => {
          if (err.path[0]) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        setErrors({ form: error instanceof Error ? error.message : 'Registration failed. Please try again.' });
      }
    } finally {
      setIsLoading(false);
    } 
  };

  // Removed zones and designations for simplicity as per instructions.
  const departments = ['Operating', 'Commercial', 'Mechanical', 'Electrical', 'S&T', 'Civil', 'Accounts', 'Personnel', 'Other'];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Beautiful Header */}
      <div className="text-center mb-8">
        <div className="mb-4">
          <div className="lg:w-20 lg:h-20 w-10 h-10 bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl animate-pulse">
            <svg className="lg:w-10 lg:h-10 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
        </div>
        
        <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
          Join AOM Aspirant
        </h1>
        <p className="text-gray-600 lg:text-lg text-base font-medium">
          Start your journey to become an AOM
        </p>
        
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-full"></div>
        </div>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.form && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-red-700 font-medium">{errors.form}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ✦ Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-3 border-2 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 ${
                errors.name ? 'border-red-400' : 'border-gray-200'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          {/* Designation */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ✦ Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className={`w-full px-3 py-3 border-2 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 ${
                errors.designation ? 'border-red-400' : 'border-gray-200'
              }`}
              placeholder="Enter your designation"
            />
            {errors.designation && <p className="mt-1 text-sm text-red-500">{errors.designation}</p>}
          </div>

          {/* Department */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ✦ Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={`w-full px-3 py-3 border-2 rounded-lg focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-300 ${
                errors.department ? 'border-red-400' : 'border-gray-200'
              }`}
            >
              <option value="">Select Department</option>
              {departments.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            {errors.department && <p className="mt-1 text-sm text-red-500">{errors.department}</p>}
          </div>

          {/* Division */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ✦ Division
            </label>
            <input
              type="text"
              name="division"
              value={formData.division}
              onChange={handleChange}
              className={`w-full px-3 py-3 border-2 rounded-lg focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-300 ${
                errors.division ? 'border-red-400' : 'border-gray-200'
              }`}
              placeholder="e.g., Secunderabad"
            />
            {errors.division && <p className="mt-1 text-sm text-red-500">{errors.division}</p>}
          </div>

          {/* Zone */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ✦ Zone
            </label>
            <input
              type="text"
              name="zone"
              value={formData.zone}
              onChange={handleChange}
              className={`w-full px-3 py-3 border-2 rounded-lg focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 ${
                errors.zone ? 'border-red-400' : 'border-gray-200'
              }`}
              placeholder="Enter your zone"
            />
            {errors.zone && <p className="mt-1 text-sm text-red-500">{errors.zone}</p>}
          </div>

          {/* Phone Number */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ✦ Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full px-3 py-3 border-2 rounded-lg focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 ${
                errors.phoneNumber ? 'border-red-400' : 'border-gray-200'
              }`}
              placeholder="10 digit mobile number"
              maxLength={10}
            />
            {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>}
          </div>
        </div>

        {/* Address - Full Width */}
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            ✦ Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className={`w-full px-3 py-3 border-2 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 resize-none ${
              errors.address ? 'border-red-400' : 'border-gray-200'
            }`}
            placeholder="Enter your address"
          />
          {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ✦ Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-3 border-2 rounded-lg focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-300 ${
                errors.email ? 'border-red-400' : 'border-gray-200'
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ✦ Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-3 border-2 rounded-lg focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all duration-300 ${
                  errors.password ? 'border-red-400' : 'border-gray-200'
                }`}
                placeholder="Minimum 6 characters"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-base hover:shadow-2xl hover:shadow-blue-300 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating Account...
            </>
          ) : (
            <>
              
              Register Now
            </>
          )}
        </button>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-gray-600 lg:text-base text-sm">
            Already have an account?{' '}
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </form>

      {/* Features */}
      
    </div>
  );
} 