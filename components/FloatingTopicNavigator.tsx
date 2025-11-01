'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, X } from 'lucide-react';

interface Topic {
  name: string;
  href: string;
  icon: string;
}

export default function FloatingTopicNavigator() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // All topics in alphabetical order
  const allTopics: Topic[] = [
    { name: 'Abbreviations', href: '/abbreviations', icon: '📝' },
    { name: 'Accident Manual', href: '/accident', icon: '🚨' },
    { name: 'Accident Manual Amendments', href: '/accident-amendment', icon: '📋' },
    { name: 'Accounts', href: '/accounts', icon: '💰' },
    { name: 'AOM Syllabus', href: '/syllabus', icon: '📚' },
    { name: 'Appendixes', href: '/appendix', icon: '📄' },
    { name: 'Authorities', href: '/authorities', icon: '🏛️' },
    { name: 'Block Working Manual', href: '/bwm', icon: '📋' },
    { name: 'BWM Amendments', href: '/bwm-amendment', icon: '📝' },
    { name: 'Circulars', href: '/circulars', icon: '📢' },
    { name: 'Commercial', href: '/commercial', icon: '🏢' },
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Definitions', href: '/definitions', icon: '📖' },
    { name: 'Disaster Management Act - 2005', href: '/disaster-act', icon: '🚨' },
    { name: 'Establishment Rules', href: '/establishment', icon: '🏛️' },
    { name: 'Factories Act - 1948', href: '/factories-act', icon: '🏭' },
    { name: 'G&SR', href: '/gsr', icon: '📜' },
    { name: 'G&SR Amendments', href: '/gsr-amendments', icon: '📜' },
    { name: 'Indian Railway Act - 1989', href: '/ir-act', icon: '🚂' },
    { name: 'Industrial Disputes Act - 1947', href: '/disputes-act', icon: '⚖️' },
    { name: 'Industrial Relations Code - 2020', href: '/industrial-code', icon: '🏭' },
    { name: 'IT Applications', href: '/it-apps', icon: '💻' },
    { name: 'JPOs', href: '/jpo', icon: '📄' },
    { name: 'Miscellaneous', href: '/miscellaneous', icon: '📦' },
    { name: 'Operating', href: '/operating', icon: '⚙️' },
    { name: 'Operating Manual', href: '/optg-manual', icon: '📖' },
    { name: 'Previous Papers', href: '/previous', icon: '📚' },
    { name: 'Quizzes', href: '/quiz', icon: '✅' },
    { name: 'Rajabhasha', href: '/rajabhasha', icon: '🌐' },
    { name: 'Railway Compensation Act - 2010', href: '/ec-act', icon: '💰' },
    { name: 'Railway Services Conduct Rules - 1966', href: '/conduct-rules', icon: '⚖️' },
    { name: 'Railway Servants DA Rules - 1968', href: '/da-rules', icon: '📋' },
    { name: 'Railway Servants Pass Rules - 1986', href: '/pass-rules', icon: '🎫' },
    { name: 'Railway Servants Rest Rules - 2005', href: '/rest-rules', icon: '🛏️' },
    { name: 'Right To Information Act - 2005', href: '/rti-act-2005', icon: '📋' },
    { name: 'Station Working Rules', href: '/swr', icon: '🚉' },
    { name: 'Trade Union Act - 1926', href: '/trade-union', icon: '🏛️' },
    { name: 'Workmen Compensation Act - 1923', href: '/workmen-act', icon: '💰' },
    { name: 'Working Time Table', href: '/wtt', icon: '⏰' },
  ];

  const handleTopicClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 bg-gradient-to-tr ${
          isOpen ? 'from-red-600 via-red-400 to-red-700' : 'from-blue-800 via-blue-400 to-blue-700'
        } text-white p-1 rounded-full shadow-2xl border-2 border-white hover:scale-110 hover:brightness-110 transition-all duration-300 z-50 flex items-center justify-center `}
        aria-label="Topics Navigator"
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Plus className="w-5 h-5" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 z-50 w-[90vw] max-w-md bg-white rounded-xl shadow-2xl border border-blue-200 overflow-hidden animate-slideUp backdrop-blur-xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white px-6 py-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold">All Topics</h3>
              </div>
              <p className="text-xs text-white/90 mt-1">Select any topic to navigate quickly</p>
            </div>
          </div>

          {/* Topics List */}
          <div className="max-h-[60vh] overflow-y-auto p-1">
            <div className="space-y-1.5">
              {allTopics.map((topic, index) => (
                <button
                  key={topic.href}
                  onClick={() => handleTopicClick(topic.href)}
                  className="w-full flex items-center space-x-3 px-1 py-1 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200 text-left group border border-transparent hover:border-blue-200 hover:shadow-md"
                  style={{ animationDelay: `${index * 20}ms` }}
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100 rounded-sm group-hover:scale-110 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-200">
                    <span className="ltext-base">
                      {topic.icon}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors duration-200 flex-1">
                    {topic.name}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-0 group-hover:translate-x-1">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 border-t border-blue-200">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              <p className="text-xs font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {allTopics.length} Topics Available
              </p>
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

