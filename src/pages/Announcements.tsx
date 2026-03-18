import React from 'react';
import { useData } from '../contexts/DataContext';
import { Card } from '../components/Card';
import { Loader } from '../components/Loader';
import { motion } from 'framer-motion';

export const Announcements: React.FC = () => {
  const { announcements, loading } = useData();

  if (loading) return <Loader />;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Announcements</h1>
      <div className="space-y-4">
        {announcements.map(ann => (
          <Card key={ann.announcementId}>
            <h2 className="font-semibold text-lg">{ann.title}</h2>
            <p className="text-sm text-gray-700 mt-2">{ann.content}</p>
            <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
              <span>By {ann.createdBy}</span>
              <span>{new Date(ann.createdAt).toLocaleDateString()}</span>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};
