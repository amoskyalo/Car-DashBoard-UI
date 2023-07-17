import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`p-8 space-y-4 relative ${className}`}>{children}</div>
  );
};

export default Container;
