import React from 'react';
import { Code2, GitBranch, GitCommit, GitPullRequest } from 'lucide-react';

interface CodeMetrics {
  maintainability: number;
  reliability: number;
  security: number;
  complexity: number;
  documentation: number;
  testCoverage: number;
}

interface CodeQualityProps {
  metrics: CodeMetrics;
  recommendations: string[];
}

export function CodeQualityAnalyzer({ metrics, recommendations }: CodeQualityProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Code Quality Analysis</h3>
        <Code2 className="w-6 h-6 text-indigo-600" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <span className={`font-semibold ${getScoreColor(value)}`}>
                {value}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  value >= 80 ? 'bg-green-500' :
                  value >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-gray-800">AI Recommendations</h4>
        <div className="space-y-2">
          {recommendations.map((rec, index) => (
            <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <GitBranch className="w-4 h-4 mt-1 text-indigo-500 flex-shrink-0" />
              <p>{rec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}