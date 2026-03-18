import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import { useAuth } from '../contexts/AuthContext';
import { Card } from '../components/Card';
import { Loader } from '../components/Loader';
import { motion } from 'framer-motion';
import { postData } from '../services/api';
import toast from 'react-hot-toast';

export const Requests: React.FC = () => {
  const { requests, loading, refresh } = useData();
  const { userEmail } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [type, setType] = useState('Transcript');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;
    setSubmitting(true);
    try {
      await postData('Requests', {
        requestId: 'R' + Date.now(),
        email: userEmail,
        type,
        status: 'pending',
        submittedAt: new Date().toISOString().split('T')[0],
        resolvedAt: '',
        adminNote: ''
      });
      toast.success('Request submitted');
      setShowForm(false);
      refresh();
    } catch (error) {
      toast.error('Failed to submit');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">My Requests</h1>
        <button onClick={() => setShowForm(!showForm)} className="px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition">
          + New Request
        </button>
      </div>

      {showForm && (
        <Card className="mb-6">
          <form onSubmit={handleSubmit}>
            <label className="block mb-2 text-sm font-medium">Request Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)} className="w-full p-2 border rounded-lg mb-4">
              <option>Transcript</option>
              <option>Leave of Absence</option>
              <option>Enrollment Verification</option>
              <option>Other</option>
            </select>
            <div className="flex justify-end gap-3">
              <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 text-sm border rounded-full">Cancel</button>
              <button type="submit" disabled={submitting} className="px-4 py-2 bg-black text-white rounded-full text-sm disabled:opacity-50">
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </Card>
      )}

      <div className="space-y-4">
        {requests.map(req => (
          <Card key={req.requestId}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{req.type}</h3>
                <p className="text-sm text-gray-600">Submitted: {req.submittedAt}</p>
                {req.resolvedAt && <p className="text-xs text-gray-500">Resolved: {req.resolvedAt}</p>}
              </div>
              <span className={\px-2 py-1 text-xs rounded-full \\}>
                {req.status}
              </span>
            </div>
            {req.adminNote && <p className="text-sm mt-2 text-gray-700">Note: {req.adminNote}</p>}
          </Card>
        ))}
      </div>
    </motion.div>
  );
};
