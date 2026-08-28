import { projects as initialProjects } from '../data/projects';

let projects = [...initialProjects];
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const projectService = {
  async getAllProjects() {
    await delay(300);
    return [...projects];
  },

  async getProjectById(id) {
    await delay(300);
    return projects.find(p => p.id === id) || null;
  },

  async getProjectsByUniversity(universityId) {
    await delay(300);
    return projects.filter(p => p.universityId === universityId);
  },

  async getProjectsByStudent(studentId) {
    await delay(300);
    return projects.filter(p => p.team?.some(t => t.id === studentId));
  },

  async getProjectsByMentor(mentorId) {
    await delay(300);
    return projects.filter(p => p.mentorId === mentorId);
  },

  async updateMilestone(projectId, milestoneId, status) {
    await delay(400);
    const pIndex = projects.findIndex(p => p.id === projectId);
    if (pIndex !== -1) {
      const project = { ...projects[pIndex] };
      if (project.milestones) {
        const mIndex = project.milestones.findIndex(m => m.id === milestoneId);
        if (mIndex !== -1) {
          project.milestones[mIndex] = { ...project.milestones[mIndex], status };
          projects[pIndex] = project;
          return project.milestones[mIndex];
        }
      }
    }
    throw new Error('Project or milestone not found');
  },

  async addDeliverable(projectId, deliverable) {
    await delay(400);
    const pIndex = projects.findIndex(p => p.id === projectId);
    if (pIndex !== -1) {
      const project = { ...projects[pIndex] };
      const newDeliverable = {
        ...deliverable,
        id: `d-${Date.now()}`,
        submittedAt: new Date().toISOString()
      };
      project.deliverables = [...(project.deliverables || []), newDeliverable];
      projects[pIndex] = project;
      return newDeliverable;
    }
    throw new Error('Project not found');
  },

  async getProjectTimeline(projectId) {
    await delay(300);
    return [
      { stage: 'Ideation', status: 'completed', date: '2026-01-15' },
      { stage: 'Prototyping', status: 'in_progress', date: '2026-02-01' },
      { stage: 'Development', status: 'pending', date: '2026-03-01' },
      { stage: 'Testing', status: 'pending', date: '2026-04-01' },
      { stage: 'Deployment', status: 'pending', date: '2026-05-01' }
    ];
  }
};
