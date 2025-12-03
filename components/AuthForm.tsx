'use client';

import LoginForm from './LoginForm';
import { Suspense } from 'react';

export default function AuthForm() {
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Form */}
      <div className="animate-slide-in-left">
        <Suspense fallback={
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}