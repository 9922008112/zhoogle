import React, { useState, useEffect } from 'react';
import { Search, RefreshCw } from 'lucide-react';
import { ProfileScore } from './components/ProfileScore';
import { InsightCard } from './components/InsightCard';
import { Logo } from './components/Logo';
import { PathwayNavigator } from './components/PathwayNavigator';
import { SkillHeatmap } from './components/SkillHeatmap';
import { PortfolioIntelligence } from './components/PortfolioIntelligence';
import { CodeQualityAnalyzer } from './components/CodeQualityAnalyzer';
import { AlgorithmicCreativity } from './components/AlgorithmicCreativity';
import type { ProfileData, ScoreBreakdown, ProfileInsight, SkillData, CodeMetrics, CreativityMetrics, Breakthrough } from './types';

// Mock data for demonstration
const mockProfileData: ProfileData = {
  github: { contributions: 847, repositories: 25, stars: 156, followers: 89 },
  leetcode: { problemsSolved: 245, contestRating: 1756, ranking: 45678 },
  codeforces: { rating: 1824, rank: "Expert", problemsSolved: 387 },
  linkedin: { connections: 500, posts: 23, engagement: 78 }
};

const mockScoreBreakdown: ScoreBreakdown = {
  technicalSkills: 8.5,
  communityEngagement: 7.2,
  projectDiversity: 6.8,
  professionalPresence: 7.9
};

const mockInsights: ProfileInsight[] = [
  {
    category: "Open Source Contribution",
    score: 8.5,
    status: "strength",
    recommendation: "Your consistent GitHub activity shows strong open-source engagement. Consider maintaining this pace while focusing on more diverse project types."
  },
  {
    category: "Problem Solving",
    score: 7.2,
    status: "strength",
    recommendation: "Strong performance in competitive programming. Try tackling more dynamic programming problems to round out your skill set."
  },
  {
    category: "Project Diversity",
    score: 6.8,
    status: "weakness",
    recommendation: "Most of your projects use similar tech stacks. Consider exploring different frameworks or languages to demonstrate versatility."
  }
];

const mockSkillData: SkillData = {
  name: "Skills",
  children: [
    {
      name: "Frontend",
      size: 400,
      proficiency: 85,
      color: "#4F46E5",
      children: [
        { name: "React", size: 200, proficiency: 90, color: "#818CF8" },
        { name: "Vue", size: 100, proficiency: 75, color: "#A5B4FC" },
        { name: "Angular", size: 100, proficiency: 70, color: "#C7D2FE" }
      ]
    },
    {
      name: "Backend",
      size: 300,
      proficiency: 75,
      color: "#7C3AED",
      children: [
        { name: "Node.js", size: 150, proficiency: 85, color: "#A78BFA" },
        { name: "Python", size: 100, proficiency: 80, color: "#C4B5FD" },
        { name: "Java", size: 50, proficiency: 60, color: "#DDD6FE" }
      ]
    }
  ]
};

const mockTrends = [
  {
    category: "Frontend Development",
    trend: 15,
    impact: 4.8,
    potential: 85
  },
  {
    category: "Cloud Architecture",
    trend: 25,
    impact: 4.2,
    potential: 92
  },
  {
    category: "Machine Learning",
    trend: 10,
    impact: 3.9,
    potential: 78
  },
  {
    category: "DevOps",
    trend: 20,
    impact: 4.5,
    potential: 88
  }
];

const mockCodeMetrics: CodeMetrics = {
  maintainability: 85,
  reliability: 78,
  security: 92,
  complexity: 72,
  documentation: 68,
  testCoverage: 76
};

const mockCodeRecommendations = [
  "Consider implementing more comprehensive error handling in the authentication flow",
  "Add TypeScript interfaces for better type safety in data processing functions",
  "Improve code documentation coverage, especially for complex business logic",
  "Consider breaking down larger components into smaller, more maintainable pieces"
];

const mockCreativityMetrics: CreativityMetrics = {
  innovationScore: 87,
  efficiencyRating: 2.4,
  problemSolvingStyle: "Adaptive Innovator",
  uniqueApproaches: 12,
  futureReadiness: 85
};

const mockBreakthroughs: Breakthrough[] = [
  {
    title: "Novel Authentication Pattern",
    description: "Implemented a unique approach to JWT refresh token rotation that improved security while reducing database load.",
    impact: 8
  },
  {
    title: "Optimization Algorithm",
    description: "Developed a custom caching strategy that reduced API calls by 45% while maintaining data freshness.",
    impact: 9
  },
  {
    title: "Architecture Innovation",
    description: "Created a hybrid state management pattern combining local and global state for optimal performance.",
    impact: 7
  }
];

function App() {
  const [username, setUsername] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [profileStatus, setProfileStatus] = useState({
    github: false,
    linkedin: false,
    leetcode: false,
    codeforces: false
  });

  useEffect(() => {
    if (isAnalyzing) {
      const platforms = ['github', 'linkedin', 'leetcode', 'codeforces'];
      platforms.forEach((platform, index) => {
        setTimeout(() => {
          setProfileStatus(prev => ({
            ...prev,
            [platform]: true
          }));
        }, index * 500);
      });
    } else {
      setProfileStatus({
        github: false,
        linkedin: false,
        leetcode: false,
        codeforces: false
      });
    }
  }, [isAnalyzing]);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setShowResults(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-12">
          <Logo />
          <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">
            Developer Profile Analyzer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
            Get comprehensive insights about your digital presence across GitHub, 
            LeetCode, Codeforces, and LinkedIn.
          </p>
        </div>

        <form onSubmit={handleAnalyze} className="max-w-xl mx-auto mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your GitHub username"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              disabled={isAnalyzing || !username}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 flex items-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Analyze Profile'
              )}
            </button>
          </div>
        </form>

        <PathwayNavigator 
          username={username}
          isAnalyzing={isAnalyzing}
          profileStatus={profileStatus}
        />

        {showResults && (
          <div className="space-y-8 mt-12">
            <div className="flex justify-center">
              <ProfileScore
                profileData={mockProfileData}
                scoreBreakdown={mockScoreBreakdown}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SkillHeatmap data={mockSkillData} />
              <PortfolioIntelligence 
                trends={mockTrends}
                unknownPotential={92}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CodeQualityAnalyzer
                metrics={mockCodeMetrics}
                recommendations={mockCodeRecommendations}
              />
              <AlgorithmicCreativity
                metrics={mockCreativityMetrics}
                breakthroughs={mockBreakthroughs}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockInsights.map((insight, index) => (
                  <InsightCard key={index} insight={insight} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;