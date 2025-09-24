import React from "react";

export const AnimationMove = ({ children, className }) => {
  return (
    <div
      className={`transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {children}
    </div>
  );
};
