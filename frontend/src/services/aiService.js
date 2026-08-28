const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const aiService = {
  analyzeChallenge: analyzeChallengeImpl,
  getUniversityMatches: getUniversityMatchesImpl,
  getStudentMatches: getStudentMatchesImpl,
  getSolutionSuggestions: getSolutionSuggestionsImpl,
  getImpactPrediction: getImpactPredictionImpl,
};

async function analyzeChallengeImpl(challengeData) {
  await delay(1500);
  const category = challengeData.category || 'Infrastructure';
  
  return {
    category,
    confidence: 0.85 + Math.random() * 0.1,
    priority: Math.random() > 0.5 ? 'High' : 'Medium',
    priorityScore: 75 + Math.floor(Math.random() * 20),
    priorityReasons: [
      'Matches regional development goals',
      'High potential for community impact',
      'Aligns with current government initiatives'
    ],
    keywords: ['development', category.toLowerCase(), 'community', 'innovation'],
    requiredSkills: ['Project Management', 'Data Analysis', 'Web Development'],
    suggestedTechnologies: ['React', 'Node.js', 'Python', 'IoT'],
    suggestedSolutions: [
      'Develop a community-driven web platform',
      'Implement automated monitoring systems',
      'Create a localized mobile application'
    ],
    impactPrediction: {
      beneficiaries: 1000 + Math.floor(Math.random() * 5000),
      timeframe: '6-12 months'
    },
    similarChallenges: Math.floor(Math.random() * 5),
    duplicateWarning: Math.random() > 0.9
  };
}

async function getUniversityMatchesImpl(challengeId) {
  await delay(800);
  return [
    {
      universityId: 'u1',
      name: 'IIT Dhanbad',
      matchScore: 92,
      reasons: ['Strong engineering department', 'Previous similar projects']
    },
    {
      universityId: 'u2',
      name: 'NIT Jamshedpur',
      matchScore: 85,
      reasons: ['Local presence', 'Available faculty expertise']
    }
  ];
}

async function getStudentMatchesImpl(challengeId) {
  await delay(600);
  return [
    {
      studentId: 's1',
      name: 'Rahul Kumar',
      matchScore: 95,
      skills: ['React', 'Node.js', 'UI/UX']
    },
    {
      studentId: 's2',
      name: 'Priya Singh',
      matchScore: 88,
      skills: ['Python', 'Machine Learning', 'Data Analysis']
    }
  ];
}

async function getSolutionSuggestionsImpl(challengeId) {
  await delay(700);
  return [
    'Build a mobile application for real-time reporting',
    'Create an automated dashboard using IoT sensors',
    'Develop a community-driven web portal'
  ];
}

async function getImpactPredictionImpl(challengeId) {
  await delay(500);
  return {
    beneficiaries: 5000,
    timeframe: '6 months',
    confidence: 0.85
  };
}

// Named exports for direct imports
export const analyzeChallenge = analyzeChallengeImpl;
export const getUniversityMatches = getUniversityMatchesImpl;
export const getStudentMatches = getStudentMatchesImpl;
export const getSolutionSuggestions = getSolutionSuggestionsImpl;
export const getImpactPrediction = getImpactPredictionImpl;

