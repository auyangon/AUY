import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import { Toaster } from 'react-hot-toast';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Courses } from './pages/Courses';
import { Quests } from './pages/Quests';
import { Materials } from './pages/Materials';
import { Schedule } from './pages/Schedule';
import { Announcements } from './pages/Announcements';
import { Requests } from './pages/Requests';

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/quests" element={<Quests />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/requests" element={<Requests />} />
            </Routes>
          </Layout>
        </BrowserRouter>
        <Toaster position="top-right" />
      </DataProvider>
    </AuthProvider>
  );
}

export default App;