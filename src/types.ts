export interface ProfileData {
  github: {
    contributions: number;
    repositories: number;
    stars: number;
    followers: number;
  };
  leetcode: {
    problemsSolved: number;
    contestRating: number;
    ranking: number;
  };
  codeforces: {
    rating: number;
    rank: string;
    problemsSolved: number;
  };
  linkedin: {
    connections: number;
    posts: number;
    engagement: number;
  };
}

export interface ScoreBreakdown {
  technicalSkills: number;
  communityEngagement: number;
  projectDiversity: number;
  professionalPresence: number;
}

export interface ProfileInsight {
  category: string;
  score: number;
  status: 'strength' | 'weakness';
  recommendation: string;
}

export interface SkillData {
  name: string;
  children: {
    name: string;
    size: number;
    proficiency: number;
    color: string;
  }[];
}

export interface CodeMetrics {
  maintainability: number;
  reliability: number;
  security: number;
  complexity: number;
  documentation: number;
  testCoverage: number;
}

export interface CreativityMetrics {
  innovationScore: number;
  efficiencyRating: number;
  problemSolvingStyle: string;
  uniqueApproaches: number;
  futureReadiness: number;
}

export interface Breakthrough {
  title: string;
  description: string;
  impact: number;
}