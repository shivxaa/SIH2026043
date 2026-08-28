import { challenges as initialChallenges } from '../data/challenges';

let challenges = [...initialChallenges];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const challengeService = {
  async getAllChallenges() {
    await delay(300);
    return [...challenges];
  },

  async getChallengeById(id) {
    await delay(300);
    return challenges.find(c => c.id === id) || null;
  },

  async searchChallenges(query) {
    await delay(300);
    const q = query.toLowerCase();
    return challenges.filter(c => 
      c.title.toLowerCase().includes(q) || 
      c.description.toLowerCase().includes(q)
    );
  },

  async filterChallenges(filters) {
    await delay(300);
    return challenges.filter(c => {
      let match = true;
      if (filters.category && c.category !== filters.category) match = false;
      if (filters.district && c.district !== filters.district) match = false;
      if (filters.priority && c.priority !== filters.priority) match = false;
      if (filters.status && c.status !== filters.status) match = false;
      if (filters.skills && filters.skills.length > 0) {
        const hasSkill = filters.skills.some(s => c.skills?.includes(s) || c.requiredSkills?.includes(s));
        if (!hasSkill) match = false;
      }
      return match;
    });
  },

  async submitChallenge(challengeData) {
    await delay(500);
    const newChallenge = {
      ...challengeData,
      id: `ch-${Date.now()}`,
      status: 'pending',
      submittedAt: new Date().toISOString(),
      upvotes: 0,
      views: 0
    };
    challenges.unshift(newChallenge);
    return newChallenge;
  },

  async updateChallengeStatus(id, status) {
    await delay(300);
    const index = challenges.findIndex(c => c.id === id);
    if (index !== -1) {
      challenges[index] = { ...challenges[index], status };
      return challenges[index];
    }
    throw new Error('Challenge not found');
  },

  async getChallengesByStatus(status) {
    await delay(300);
    return challenges.filter(c => c.status === status);
  },

  async getChallengesByDistrict(district) {
    await delay(300);
    return challenges.filter(c => c.district === district);
  }
};
