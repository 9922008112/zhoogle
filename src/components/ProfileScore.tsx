import React from 'react';
import { CircleSlash, Github, Linkedin, Code2, Trophy } from 'lucide-react';
import type { ProfileData, ScoreBreakdown } from '../types';

interface ProfileScoreProps {
  profileData: ProfileData;
  scoreBreakdown: ScoreBreakdown;
}

export function ProfileScore({ profileData, scoreBreakdown }: ProfileScoreProps) {
  const totalScore = Object.values(scoreBreakdown).reduce((a, b) => a + b, 0) / 4;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Profile Analysis</h2>
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-indigo-600">{totalScore.toFixed(1)}</span>
          <span className="text-gray-500">/10</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <Github className="w-8 h-8 text-gray-700" />
          <div>
            <p className="font-medium text-gray-800">GitHub</p>
            <p className="text-sm text-gray-600">{profileData.github.repositories} repos</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <Linkedin className="w-8 h-8 text-blue-600" />
          <div>
            <p className="font-medium text-gray-800">LinkedIn</p>
            <p className="text-sm text-gray-600">{profileData.linkedin.connections} connections</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <Code2 className="w-8 h-8 text-green-600" />
          <div>
            <p className="font-medium text-gray-800">LeetCode</p>
            <p className="text-sm text-gray-600">{profileData.leetcode.problemsSolved} solved</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <Trophy className="w-8 h-8 text-yellow-600" />
          <div>
            <p className="font-medium text-gray-800">Codeforces</p>
            <p className="text-sm text-gray-600">Rating: {profileData.codeforces.rating}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Score Breakdown</h3>
        {Object.entries(scoreBreakdown).map(([key, score]) => (
          <div key={key} className="relative pt-1">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-700">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="text-sm font-medium text-indigo-600">{score.toFixed(1)}/10</div>
            </div>
            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${(score / 10) * 100}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}