export const projects = [
  {
    id: 'proj-002',
    challengeId: 'ch-002',
    title: 'Smart Water Monitoring for Rural Communities',
    status: 'team_formation',
    university: 'Jamshedpur Engineering College',
    team: { name: 'AquaTrackers', members: ['Priya Das', 'Amit Kumar'] },
    mentor: 'Smriti Ranjan',
    industry: null,
    startDate: '2026-08-15',
    expectedEndDate: '2026-12-15',
    progress: 10,
    milestones: [
      { id: 'ms1', title: 'Requirements Gathering', status: 'completed', dueDate: '2026-08-20', completedDate: '2026-08-20' },
      { id: 'ms2', title: 'Hardware Selection', status: 'in_progress', dueDate: '2026-09-05', completedDate: null },
      { id: 'ms3', title: 'Initial Prototype', status: 'pending', dueDate: '2026-10-15', completedDate: null }
    ],
    deliverables: [
      { title: 'Project Proposal', status: 'submitted', submittedDate: '2026-08-18' }
    ]
  },
  {
    id: 'proj-003',
    challengeId: 'ch-003',
    title: 'Low-Cost Agricultural Disease Detection',
    status: 'prototype',
    university: 'Ranchi Institute of Technology',
    team: { name: 'AgriVision', members: ['Rahul Verma', 'Sneha Patel', 'John Doe'] },
    mentor: 'Ravi Shekhar',
    industry: 'AgriTech Startup',
    startDate: '2026-07-01',
    expectedEndDate: '2026-11-30',
    progress: 55,
    milestones: [
      { id: 'ms1', title: 'Data Collection', status: 'completed', dueDate: '2026-07-31', completedDate: '2026-07-28' },
      { id: 'ms2', title: 'Model Training', status: 'completed', dueDate: '2026-08-20', completedDate: '2026-08-22' },
      { id: 'ms3', title: 'App UI Integration', status: 'in_progress', dueDate: '2026-09-15', completedDate: null }
    ],
    deliverables: [
      { title: 'Dataset Documentation', status: 'submitted', submittedDate: '2026-07-30' },
      { title: 'V1 Model Weights', status: 'submitted', submittedDate: '2026-08-25' }
    ]
  },
  {
    id: 'proj-005',
    challengeId: 'ch-005',
    title: 'Rural Sanitation Monitoring System',
    status: 'prototype',
    university: 'Bokaro Institute of Technology',
    team: { name: 'CleanTech', members: ['Kavita Singh', 'Rohan Das'] },
    mentor: 'Vivek Sharma',
    industry: null,
    startDate: '2026-07-15',
    expectedEndDate: '2026-11-15',
    progress: 40,
    milestones: [
      { id: 'ms1', title: 'System Architecture', status: 'completed', dueDate: '2026-07-30', completedDate: '2026-07-29' },
      { id: 'ms2', title: 'Backend API Dev', status: 'in_progress', dueDate: '2026-08-30', completedDate: null }
    ],
    deliverables: [
      { title: 'Architecture Diagram', status: 'submitted', submittedDate: '2026-07-30' }
    ]
  },
  {
    id: 'proj-006',
    challengeId: 'ch-006',
    title: 'Air Quality Monitoring Network',
    status: 'testing',
    university: 'Dhanbad School of Mines',
    team: { name: 'EcoSensors', members: ['Neha Gupta', 'Vikash Kumar', 'Pooja Singh'] },
    mentor: 'Dr. Alok Nath',
    industry: 'Tech Solutions India',
    startDate: '2026-06-01',
    expectedEndDate: '2026-10-31',
    progress: 80,
    milestones: [
      { id: 'ms1', title: 'Sensor Calibration', status: 'completed', dueDate: '2026-06-30', completedDate: '2026-06-28' },
      { id: 'ms2', title: 'Dashboard Deployment', status: 'completed', dueDate: '2026-07-31', completedDate: '2026-08-02' },
      { id: 'ms3', title: 'Field Testing', status: 'in_progress', dueDate: '2026-09-15', completedDate: null }
    ],
    deliverables: [
      { title: 'Hardware Schematics', status: 'submitted', submittedDate: '2026-06-20' },
      { title: 'Beta Dashboard Link', status: 'submitted', submittedDate: '2026-08-05' }
    ]
  },
  {
    id: 'proj-010',
    challengeId: 'ch-010',
    title: 'Waste Management Optimization',
    status: 'mentor_assigned',
    university: 'Bokaro Institute of Technology',
    team: { name: 'RouteOptimizers', members: ['Amit Sharma', 'Priya Singh'] },
    mentor: 'Vivek Sharma',
    industry: null,
    startDate: '2026-08-20',
    expectedEndDate: '2027-01-20',
    progress: 15,
    milestones: [
      { id: 'ms1', title: 'Algorithm Research', status: 'in_progress', dueDate: '2026-09-10', completedDate: null }
    ],
    deliverables: []
  },
  {
    id: 'proj-011',
    challengeId: 'ch-011',
    title: 'Maternal Health Tracking System',
    status: 'deployment',
    university: 'Jharkhand Medical & Tech College',
    team: { name: 'CareTrack', members: ['Sanjay Munda', 'Dr. Ravi'] },
    mentor: 'Dr. Meena Iyer',
    industry: 'City Hospital',
    startDate: '2026-02-01',
    expectedEndDate: '2026-08-31',
    progress: 95,
    milestones: [
      { id: 'ms1', title: 'App Development', status: 'completed', dueDate: '2026-04-30', completedDate: '2026-04-25' },
      { id: 'ms2', title: 'Pilot Testing', status: 'completed', dueDate: '2026-06-30', completedDate: '2026-07-10' },
      { id: 'ms3', title: 'Full Rollout', status: 'in_progress', dueDate: '2026-08-31', completedDate: null }
    ],
    deliverables: [
      { title: 'Source Code', status: 'submitted', submittedDate: '2026-05-01' },
      { title: 'User Manual', status: 'submitted', submittedDate: '2026-07-15' }
    ]
  },
  {
    id: 'proj-014',
    challengeId: 'ch-014',
    title: 'Public Grievance Resolution Dashboard',
    status: 'completed',
    university: 'Jharkhand Central University',
    team: { name: 'GovTech Innovators', members: ['Anita Das', 'Ramesh Kumar'] },
    mentor: 'Prof. S. K. Das',
    industry: null,
    startDate: '2026-01-15',
    expectedEndDate: '2026-05-15',
    progress: 100,
    milestones: [
      { id: 'ms1', title: 'Requirement Analysis', status: 'completed', dueDate: '2026-02-15', completedDate: '2026-02-10' },
      { id: 'ms2', title: 'Development', status: 'completed', dueDate: '2026-04-15', completedDate: '2026-04-12' },
      { id: 'ms3', title: 'UAT & Handover', status: 'completed', dueDate: '2026-05-15', completedDate: '2026-05-14' }
    ],
    deliverables: [
      { title: 'Final Application', status: 'submitted', submittedDate: '2026-05-14' }
    ]
  },
  {
    id: 'proj-015',
    challengeId: 'ch-015',
    title: 'Flood Early Warning System',
    status: 'prototype',
    university: 'Hazaribagh Tech Institute',
    team: { name: 'AlertMakers', members: ['Aarti Kumari', 'Rohan Gupta'] },
    mentor: 'Smriti Ranjan',
    industry: null,
    startDate: '2026-08-01',
    expectedEndDate: '2026-11-30',
    progress: 30,
    milestones: [
      { id: 'ms1', title: 'Hardware Procurement', status: 'completed', dueDate: '2026-08-15', completedDate: '2026-08-18' },
      { id: 'ms2', title: 'Node Assembly', status: 'in_progress', dueDate: '2026-09-15', completedDate: null }
    ],
    deliverables: [
      { title: 'Bill of Materials', status: 'submitted', submittedDate: '2026-08-10' }
    ]
  }
];
