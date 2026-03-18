// src/pages/Requests.tsx
import React from 'react';
import { useStudentData } from '../hooks/useStudentData';
import StatCard from '../components/StatCard';

const Requests: React.FC = () => {
  const { requests } = useStudentData();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Requests</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {requests.map(request => (
          <StatCard
            key={request.requestId}
            title={request.type}
            value={request.status}
            icon={null}
          />
        ))}
      </div>
    </div>
  );
};

export default Requests;