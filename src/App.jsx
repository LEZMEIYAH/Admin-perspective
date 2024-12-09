import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Admin/Dashboard';
import MyCalendar from './pages/Admin/Calendar';
import Profile from './pages/Admin/Profile';
import Settings from './pages/Admin/Settings';
import Patients from './pages/Admin/Patients';
import Users from './pages/Admin/Users';
import Prescriptions from './pages/Admin/Prescriptions';

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap Layout for all routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calendar" element={<MyCalendar />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="patients" element={<Patients />} />
          <Route path="users" element={<Users />} />
          <Route path="prescriptions" element={<Prescriptions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
