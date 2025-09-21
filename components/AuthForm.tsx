'use client';

import LoginForm from './LoginForm';

export default function AuthForm() {
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Form */}
      <div className="animate-slide-in-left">
        <LoginForm />
      </div>
    </div>
  );
}