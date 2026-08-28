import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import useAuth from './hooks/useAuth'

// Layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Public Pages
import LandingPage from './pages/public/LandingPage'
import AboutPage from './pages/public/AboutPage'
import HowItWorksPage from './pages/public/HowItWorksPage'
import ExploreChallengesPage from './pages/public/ExploreChallengesPage'
import ChallengeDetailPage from './pages/public/ChallengeDetailPage'
import ImpactPage from './pages/public/ImpactPage'
import LoginPage from './pages/public/LoginPage'
import RegisterPage from './pages/public/RegisterPage'

// Citizen Pages
import CitizenDashboard from './pages/citizen/CitizenDashboard'
import SubmitChallengePage from './pages/citizen/SubmitChallengePage'
import MyChallengesPage from './pages/citizen/MyChallengesPage'
import ChallengeTrackingPage from './pages/citizen/ChallengeTrackingPage'

// University Pages
import UniversityDashboard from './pages/university/UniversityDashboard'
import RecommendedChallengesPage from './pages/university/RecommendedChallengesPage'
import ApplicationsPage from './pages/university/ApplicationsPage'
import ProjectManagementPage from './pages/university/ProjectManagementPage'

// Student Pages
import StudentDashboard from './pages/student/StudentDashboard'
import AIRecommendedPage from './pages/student/AIRecommendedPage'
import MyApplicationsPage from './pages/student/MyApplicationsPage'
import MyProjectsPage from './pages/student/MyProjectsPage'
import TasksPage from './pages/student/TasksPage'

// Mentor Pages
import MentorDashboard from './pages/mentor/MentorDashboard'
import AssignedProjectsPage from './pages/mentor/AssignedProjectsPage'
import ProjectReviewPage from './pages/mentor/ProjectReviewPage'
import MilestoneFeedbackPage from './pages/mentor/MilestoneFeedbackPage'

// Industry Pages
import IndustryDashboard from './pages/industry/IndustryDashboard'
import OpportunitiesPage from './pages/industry/OpportunitiesPage'
import CollaborationRequestsPage from './pages/industry/CollaborationRequestsPage'
import SupportedProjectsPage from './pages/industry/SupportedProjectsPage'

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard'
import ChallengeManagementPage from './pages/admin/ChallengeManagementPage'
import ProjectMonitoringPage from './pages/admin/ProjectMonitoringPage'
import AnalyticsPage from './pages/admin/AnalyticsPage'
import UserManagementPage from './pages/admin/UserManagementPage'

/* ───────────────────────────────────────────────
   Protected Route wrapper
   ─────────────────────────────────────────────── */
function ProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, role } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to={getDashboardPath(role)} replace />
  }

  return children
}

/* ───────────────────────────────────────────────
   Helper: role → dashboard path
   ─────────────────────────────────────────────── */
function getDashboardPath(role) {
  const dashboards = {
    citizen: '/citizen/dashboard',
    university: '/university/dashboard',
    student: '/student/dashboard',
    mentor: '/mentor/dashboard',
    industry: '/industry/dashboard',
    admin: '/admin/dashboard',
  }
  return dashboards[role] || '/'
}

/* ───────────────────────────────────────────────
   Redirect /dashboard to role-specific dashboard
   ─────────────────────────────────────────────── */
function DashboardRedirect() {
  const { isAuthenticated, role } = useAuth()
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return <Navigate to={getDashboardPath(role)} replace />
}

/* ───────────────────────────────────────────────
   App Layout — Navbar always visible, Footer on
   public pages only
   ─────────────────────────────────────────────── */
function AppLayout() {
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  // Dashboard routes don't show the public footer
  const isDashboardRoute =
    location.pathname.startsWith('/citizen') ||
    location.pathname.startsWith('/university') ||
    location.pathname.startsWith('/student') ||
    location.pathname.startsWith('/mentor') ||
    location.pathname.startsWith('/industry') ||
    location.pathname.startsWith('/admin')

  // Don't show Navbar on login/register (they have their own minimal headers)
  const hideNavbar =
    location.pathname === '/login' || location.pathname === '/register'

  return (
    <>
      {!hideNavbar && <Navbar />}

      <main style={{ flex: 1 }}>
        <Routes>
          {/* ─── Public Routes ─── */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/challenges" element={<ExploreChallengesPage />} />
          <Route path="/challenges/:id" element={<ChallengeDetailPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* ─── Dashboard Redirect ─── */}
          <Route path="/dashboard" element={<DashboardRedirect />} />

          {/* ─── Citizen Routes ─── */}
          <Route
            path="/citizen/dashboard"
            element={
              <ProtectedRoute allowedRoles={['citizen']}>
                <CitizenDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/submit-challenge"
            element={
              <ProtectedRoute allowedRoles={['citizen']}>
                <SubmitChallengePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/citizen/challenges"
            element={
              <ProtectedRoute allowedRoles={['citizen']}>
                <MyChallengesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/citizen/challenges/:id/track"
            element={
              <ProtectedRoute allowedRoles={['citizen']}>
                <ChallengeTrackingPage />
              </ProtectedRoute>
            }
          />

          {/* ─── University Routes ─── */}
          <Route
            path="/university/dashboard"
            element={
              <ProtectedRoute allowedRoles={['university']}>
                <UniversityDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/university/recommended"
            element={
              <ProtectedRoute allowedRoles={['university']}>
                <RecommendedChallengesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/university/marketplace"
            element={
              <ProtectedRoute allowedRoles={['university']}>
                <ExploreChallengesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/university/applications"
            element={
              <ProtectedRoute allowedRoles={['university']}>
                <ApplicationsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/university/projects"
            element={
              <ProtectedRoute allowedRoles={['university']}>
                <ProjectManagementPage />
              </ProtectedRoute>
            }
          />

          {/* ─── Student Routes ─── */}
          <Route
            path="/student/dashboard"
            element={
              <ProtectedRoute allowedRoles={['student']}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/recommended"
            element={
              <ProtectedRoute allowedRoles={['student']}>
                <AIRecommendedPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/applications"
            element={
              <ProtectedRoute allowedRoles={['student']}>
                <MyApplicationsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/projects"
            element={
              <ProtectedRoute allowedRoles={['student']}>
                <MyProjectsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/tasks"
            element={
              <ProtectedRoute allowedRoles={['student']}>
                <TasksPage />
              </ProtectedRoute>
            }
          />

          {/* ─── Mentor Routes ─── */}
          <Route
            path="/mentor/dashboard"
            element={
              <ProtectedRoute allowedRoles={['mentor']}>
                <MentorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentor/projects"
            element={
              <ProtectedRoute allowedRoles={['mentor']}>
                <AssignedProjectsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentor/projects/:id/review"
            element={
              <ProtectedRoute allowedRoles={['mentor']}>
                <ProjectReviewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentor/milestones"
            element={
              <ProtectedRoute allowedRoles={['mentor']}>
                <MilestoneFeedbackPage />
              </ProtectedRoute>
            }
          />

          {/* ─── Industry Routes ─── */}
          <Route
            path="/industry/dashboard"
            element={
              <ProtectedRoute allowedRoles={['industry']}>
                <IndustryDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/industry/opportunities"
            element={
              <ProtectedRoute allowedRoles={['industry']}>
                <OpportunitiesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/industry/requests"
            element={
              <ProtectedRoute allowedRoles={['industry']}>
                <CollaborationRequestsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/industry/supported"
            element={
              <ProtectedRoute allowedRoles={['industry']}>
                <SupportedProjectsPage />
              </ProtectedRoute>
            }
          />

          {/* ─── Admin Routes ─── */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/challenges"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ChallengeManagementPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/universities"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ProjectMonitoringPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/projects"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ProjectMonitoringPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/analytics"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AnalyticsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <UserManagementPage />
              </ProtectedRoute>
            }
          />

          {/* ─── Catch-all ─── */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!isDashboardRoute && !hideNavbar && <Footer />}
    </>
  )
}

function App() {
  return <AppLayout />
}

export default App