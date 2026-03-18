import React from 'react';
import { useData } from '../contexts/DataContext';
import { Card } from '../components/Card';
import { Loader } from '../components/Loader';
import { motion } from 'framer-motion';

export const Materials: React.FC = () => {
  const { materials, loading } = useData();

  if (loading) return <Loader />;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Course Materials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map(mat => (
          <Card key={mat.materialId}>
            <h2 className="font-semibold">{mat.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{mat.courseCode} • Week {mat.week}</p>
            <p className="text-xs text-gray-500 mt-2">Type: {mat.type}</p>
            <a href={mat.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm mt-3 inline-block">
              View Material →
            </a>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};
