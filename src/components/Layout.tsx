import React, { useState } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside className="fixed lg:static inset-y-0 left-0 w-64 bg-white/80 backdrop-blur-md border-r border-gray-200 z-50 transform lg:translate-x-0 transition-transform duration-200 ease-in-out">
        <div className="p-6">
          <h1 className="text-xl font-bold">AUY Portal</h1>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
};

export default Layout;