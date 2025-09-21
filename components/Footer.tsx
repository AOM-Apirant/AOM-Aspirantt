'use client';

import React, { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

interface UserCountData {
  totalUsers: number;
  googleUsers: number;
  credentialUsers: number;
  lastUpdated: string;
}

const Footer = () => {
  const [userCount, setUserCount] = useState<UserCountData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch('/api/users/count');
        const data = await response.json();
        if (data.success) {
          setUserCount(data.data);
        }
      } catch (error) {
        console.error('Error fetching user count:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserCount();
    
    // Update every 30 seconds
    const interval = setInterval(fetchUserCount, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm">
               AOM Aspirant Copyright © {new Date().getFullYear()}. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1 flex items-center justify-center md:justify-end space-x-1">
              <span>Made with</span>
              <span className="text-rose-600 animate-pulse">❤️</span>
              <span>for Aspirants</span>
            </p>
          </div>

          {/* User Count Section */}
          <div className="text-center md:text-left">
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-pulse bg-gray-600 h-4 w-16 rounded"></div>
                <div className="animate-pulse bg-gray-600 h-4 w-12 rounded"></div>
              </div>
            ) : userCount ? (
              <div className="flex items-center justify-center text-center md:justify-start space-x-2 bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 px-6 py-1.5 rounded-full shadow-lg border border-green-400/30">
                  <div className="flex items-center justify-center space-x-1">
                    <GraduationCap className="h-4 w-4 text-green-300 -mt-0.5" />
                    <span className="text-gray-300 text-sm font-medium">{userCount.googleUsers}</span>
                  </div>
                  <div className="text-xs text-green-300">
                    Aspirants
                  </div>
                </div>
            ) : (
              <div className="text-xs text-gray-400">Loading Google users...</div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer