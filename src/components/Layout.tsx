import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiBook, FiAward, FiFolder, FiCalendar, FiBell, FiMail, FiMenu, FiX, FiSearch, FiUser } from 'react-icons/fi';
import { useAuth } from '../contexts/AuthContext';

const navItems = [
  { path: '/', label: 'Dashboard', icon: FiHome },
  { path: '/courses', label: 'Courses', icon: FiBook },
  { path: '/quests', label: 'Quests', icon: FiAward },
  { path: '/materials', label: 'Materials', icon: FiFolder },
  { path: '/schedule', label: 'Schedule', icon: FiCalendar },
  { path: '/announcements', label: 'Announcements', icon: FiBell },
  { path: '/requests', label: 'Requests', icon: FiMail },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { userEmail } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      <aside className={\ixed lg:static inset-y-0 left-0 w-64 bg-white/80 backdrop-blur-md border-r border-gray-200 z-50 transform \ lg:translate-x-0 transition-transform duration-200 ease-in-out\}>
        <div className="p-6">
          <h1 className="text-xl font-bold">AUY Portal</h1>
        </div>
        <nav className="mt-6">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={\lex items-center gap-3 px-6 py-3 text-sm \ transition\}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-4 lg:px-6">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg hover:bg-black/5 lg:hidden">
            <FiMenu className="w-5 h-5" />
          </button>
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black/10" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-black/5">
              <FiBell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <FiUser className="w-4 h-4 text-gray-600" />
              </div>
              <span className="text-sm hidden md:inline">{userEmail}</span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
