// src/pages/Materials.tsx
import React from 'react';
import { useStudentData } from '../hooks/useStudentData';
import StatCard from '../components/StatCard';

const Materials: React.FC = () => {
  const { materials } = useStudentData();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Materials</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {materials.map(material => (
          <StatCard
            key={material.materialId}
            title={material.title}
            value={material.type}
            icon={null}
          />
        ))}
      </div>
    </div>
  );
};

export default Materials;


