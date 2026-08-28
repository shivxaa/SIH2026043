import { citizens, students, mentors, faculty, admins } from '../data/users';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Create demo users for all 6 roles (including university and industry which aren't in user data)
const demoUsers = {
  citizen: { ...citizens[0], role: 'citizen' },
  student: { ...students[0], role: 'student' },
  mentor: { ...mentors[0], role: 'mentor' },
  faculty: { ...faculty[0], role: 'faculty' },
  admin: { ...admins[0], role: 'admin' },
  university: {
    id: 'usr-u1',
    name: 'Prof. S. K. Das',
    email: 'skdas@university.edu',
    role: 'university',
    avatar: null,
    organization: 'Ranchi Institute of Technology',
    department: 'Computer Science',
    location: 'Ranchi',
    joinedDate: '2025-12-01'
  },
  industry: {
    id: 'usr-i1',
    name: 'Vikash Agarwal',
    email: 'vikash@techsolutions.in',
    role: 'industry',
    avatar: null,
    organization: 'Tech Solutions India Pvt Ltd',
    department: 'Partnerships',
    location: 'Jamshedpur',
    joinedDate: '2026-01-15'
  }
};

const allUsers = [...citizens, ...students, ...mentors, ...faculty, ...admins];

export const authService = {
  async login(email, password, role) {
    await delay(500);

    // For demo: if a role is provided, just log in as that role's demo user
    if (role && demoUsers[role]) {
      const user = { ...demoUsers[role], role };
      const authData = { user, token: `mock-token-${Date.now()}` };
      localStorage.setItem('authData', JSON.stringify(authData));
      return authData;
    }

    // Try to find by email in all users
    const user = allUsers.find(u => u.email === email);
    if (user) {
      const authData = {
        user: { ...user },
        token: `mock-token-${Date.now()}`
      };
      localStorage.setItem('authData', JSON.stringify(authData));
      return authData;
    }

    throw new Error('Invalid credentials');
  },

  async logout() {
    await delay(200);
    localStorage.removeItem('authData');
  },

  getCurrentUser() {
    try {
      const authData = localStorage.getItem('authData');
      return authData ? JSON.parse(authData).user : null;
    } catch {
      return null;
    }
  },

  async register(userData) {
    await delay(800);
    const newUser = {
      ...userData,
      id: `u-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    return {
      user: newUser,
      token: `mock-token-${Date.now()}`
    };
  },

  getDemoUsers() {
    return demoUsers;
  }
};
