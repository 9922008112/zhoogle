import React from 'react';
import { Brain, Lightbulb, Zap, Trophy } from 'lucide-react';

interface CreativityMetrics {
  innovationScore: number;
  efficiencyRating: number;
  problemSolvingStyle: string;
  uniqueApproaches: number;
  futureReadiness: number;
}

interface AlgorithmicCreativityProps {
  metrics: CreativityMetrics;
  breakthroughs: Array<{
    title: string;
    description: string;
    impact: number;
  }>;
}

export function AlgorithmicCreativity({ metrics, breakthroughs }: AlgorithmicCreativityProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Algorithmic Creativity Analysis</h3>
        <Brain className="w-6 h-6 text-indigo-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Innovation Score</span>
            <span className="font-semibold text-indigo-600">{metrics.innovationScore}/100</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Efficiency Rating</span>
            <span className="font-semibold text-green-500">{metrics.efficiencyRating}x</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Problem Solving Style</span>
            <span className="font-medium text-purple-600">{metrics.problemSolvingStyle}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Unique Approaches</span>
            <span className="font-semibold text-blue-500">{metrics.uniqueApproaches}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Future Readiness</span>
            <span className="font-semibold text-orange-500">{metrics.futureReadiness}%</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            <h4 className="font-semibold text-gray-800">Innovation Curve</h4>
          </div>
          <div className="relative h-32">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 opacity-20 bg-gradient-to-t from-indigo-500 to-transparent rounded-t-lg"></div>
            <div className="absolute bottom-0 left-0 w-2/3 h-1 bg-indigo-500"></div>
            <div className="absolute bottom-1 left-2/3 transform -translate-x-1/2">
              <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-gray-800 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-500" />
          Breakthrough Insights
        </h4>
        <div className="space-y-3">
          {breakthroughs.map((breakthrough, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-medium text-gray-800">{breakthrough.title}</h5>
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-600">
                    Impact: {breakthrough.impact}/10
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{breakthrough.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}