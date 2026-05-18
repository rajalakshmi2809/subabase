import React from 'react';

const GroupCard = ({ icon, title, summary }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-64 border border-gray-200 hover:shadow-lg transition-shadow">
      {/* Icon Area */}
      <div className="text-4xl mb-4 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full">
        {icon}
      </div>

      {/* Group Info */}
      <h3 className="text-lg font-bold text-gray-800 mb-1">
        {title}
      </h3>
      <p className="text-gray-500 text-sm">
        {summary}
      </p>
    </div>
  );
};

export default GroupCard;