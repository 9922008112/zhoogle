import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import type { ProfileInsight } from '../types';

interface InsightCardProps {
  insight: ProfileInsight;
}

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{insight.category}</h3>
        <div className={`flex items-center ${
          insight.status === 'strength' ? 'text-green-500' : 'text-red-500'
        }`}>
          {insight.status === 'strength' ? (
            <ArrowUp className="w-5 h-5" />
          ) : (
            <ArrowDown className="w-5 h-5" />
          )}
          <span className="ml-1 font-medium">{insight.score.toFixed(1)}</span>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{insight.recommendation}</p>
    </div>
  );
}