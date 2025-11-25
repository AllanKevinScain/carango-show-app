import React from "react";

interface DashboardCardProps {
  name: string;
  description: string | number;
  icon: React.ReactNode;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  name,
  description,
  icon,
}) => {
  return (
    <div
      className="
        flex 
        items-center 
        gap-4 
        bg-neutral-50
        p-6 
        rounded-xl 
        shadow-sm
        border
        border-neutral-200
      "
    >
      <div className="text-blue-600 text-3xl">{icon}</div>

      <div className="flex flex-col">
        <span className="text-blue-950 font-semibold text-lg">{name}</span>
        <span className="text-neutral-500 text-sm">{description}</span>
      </div>
    </div>
  );
};
