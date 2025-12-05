import type React from "react";

interface BadgetProps {
    children: React.ReactNode;
}

export default function Badget({children}: BadgetProps) {
  return (
    <div className="bg-badget text-badget-text w-min h-min px-3 py-2 rounded-[40px] flex justify-center items-center">
      <p className="text-xs  whitespace-pre">
        {children}
      </p>
    </div>
  );
}