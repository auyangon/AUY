import React from 'react';
import { Card } from './Card';
import { IconType } from 'react-icons';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: IconType;
  change?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, change }) => {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          {change && <p className="text-xs text-green-600 mt-2">{change}</p>}
        </div>
        <div className="p-3 bg-black/5 rounded-2xl">
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </Card>
  );
};



