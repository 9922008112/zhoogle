import React from 'react';
import { TrendingUp, Star, GitFork, Code2 } from 'lucide-react';

interface TrendData {
  category: string;
  trend: number;
  impact: number;
  potential: number;
}

interface PortfolioIntelligenceProps {
  trends: TrendData[];
  unknownPotential: number;
}

export function PortfolioIntelligence({ trends, unknownPotential }: PortfolioIntelligenceProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Portfolio Intelligence</h3>
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          <span className="text-sm font-medium text-gray-600">
            Unknown Potential Score: {unknownPotential}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trends.map((trend, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-800">{trend.category}</h4>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">{trend.impact}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Trend</span>
                <div className="flex items-center">
                  <GitFork className="w-4 h-4 text-indigo-500 mr-1" />
                  <span className="text-sm font-medium">
                    {trend.trend > 0 ? '+' : ''}{trend.trend}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Future Potential</span>
                <div className="flex items-center">
                  <Code2 className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm font-medium">{trend.potential}%</span>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-indigo-600 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${trend.potential}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}