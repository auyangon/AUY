// src/components/StatCard.tsx
import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  title: string;
  value: string | number;
  icon?: IconType;
};

const StatCard = ({ title, value, icon: Icon }: Props) => {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-6">
      {Icon && <Icon className="text-2xl mb-2" />}
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-xl">{value}</p>
    </div>
  );
};

export default StatCard; // ✅ default export