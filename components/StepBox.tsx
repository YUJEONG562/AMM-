
import React from 'react';

interface StepBoxProps {
  id: number;
  title: string;
  description: string;
  placeholder: string;
  value: string;
  onChange: (id: number, val: string) => void;
  className?: string;
  rows?: number;
}

const StepBox: React.FC<StepBoxProps> = ({
  id,
  title,
  description,
  placeholder,
  value,
  onChange,
  className = "",
  rows = 4
}) => {
  return (
    <div className={`flex flex-col bg-white p-5 rounded-2xl clean-border shadow-sm ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="step-title text-base font-bold tracking-tight">{title}</h3>
      </div>
      <p className="text-gray-500 text-[11px] mb-3 whitespace-pre-line leading-relaxed">
        {description}
      </p>
      <textarea
        className="flex-grow w-full p-3 text-sm text-gray-800 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:ring-0 resize-none placeholder-gray-300 leading-normal"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        rows={rows}
      />
    </div>
  );
};

export default StepBox;
