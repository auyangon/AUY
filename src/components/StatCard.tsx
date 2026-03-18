import React from 'react';
import { Card } from './Card'; // matches the named export now
import { IconType } from 'react-icons';

type StatCardProps = {
  title: string;
  value: string | number;
  icon: IconType | null;
  change?: string;
};

export const StatCard = ({ title, value, icon: Icon, change }: StatCardProps) => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-2xl font-bold">{value}</p>
          {change && <p className="text-sm text-gray-500">{change}</p>}
        </div>
        {Icon && <Icon className="text-3xl text-green-500" />}
      </div>
    </Card>
  );
};