'use client';

import React, { useState, useEffect } from 'react';

import DigitalCounter from './DigitalCounter';

interface VisitorData {
  totalVisitors: number;
  lastUpdated: string;
}

const Footer = () => {
  const [visitorData, setVisitorData] = useState<VisitorData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitors/count', {
          credentials: 'include', // Important for cookies
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Check if response is ok
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Check if response has content
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }

        const data = await response.json();
        if (data.success && data.data) {
          setVisitorData(data.data);
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        // Set loading to false even on error so UI doesn't stay in loading state
        setIsLoading(false);
        // Optionally set a fallback value or keep visitorData as null
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch immediately on mount to track visit
    fetchVisitorCount();
    
    // Update every 30 seconds to show real-time updates
    const interval = setInterval(fetchVisitorCount, 30000);
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

          {/* Visitor Count Section */}
          <div className="text-center md:text-left">
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-pulse bg-gray-600 h-4 w-16 rounded"></div>
                <div className="animate-pulse bg-gray-600 h-4 w-12 rounded"></div>
              </div>
            ) : visitorData ? (
              <div className="flex items-center justify-center text-center md:justify-start bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 px-4 sm:px-6 py-2.5 sm:py-2 rounded-lg shadow-lg border border-green-400/30 backdrop-blur-sm">
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                    <span className="lg:text-base text-sm text-green-300 font-semibold tracking-wide">
                      Visitors:
                    </span>
                    <DigitalCounter 
                      value={visitorData.totalVisitors} 
                      duration={1500}
                      digits={8}
                      className=""
                    />
                  </div>
                </div>
            ) : (
              <div className="text-xs text-gray-400">Loading visitors...</div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer