import React from 'react';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

interface PathwayNavigatorProps {
  username: string;
  isAnalyzing: boolean;
  profileStatus: {
    github: boolean;
    linkedin: boolean;
    leetcode: boolean;
    codeforces: boolean;
  };
}

export function PathwayNavigator({ username, isAnalyzing, profileStatus }: PathwayNavigatorProps) {
  if (!username) return null;

  return (
    <div className="max-w-xl mx-auto mt-4 bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between space-x-4">
        {Object.entries(profileStatus).map(([platform, found], index) => (
          <React.Fragment key={platform}>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-600 capitalize mb-2">{platform}</span>
              {isAnalyzing ? (
                <Loader2 className="w-5 h-5 text-indigo-600 animate-spin" />
              ) : found ? (
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
            {index < Object.entries(profileStatus).length - 1 && (
              <div className="flex-1 h-0.5 bg-gray-200 relative">
                <div 
                  className={`absolute inset-0 bg-indigo-600 transition-all duration-500 ${
                    isAnalyzing ? 'animate-pulse' : found ? 'opacity-100' : 'opacity-0'
                  }`} 
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}