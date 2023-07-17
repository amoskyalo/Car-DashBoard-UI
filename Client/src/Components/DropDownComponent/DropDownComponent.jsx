import React from "react";

const DropDownComponent = ({ className, children, ...props }) => {
  return (
    <div
      {...props}
      className={`bg-white shadow-2xl z-50 top-0 absolute min-w-[200px] rounded-xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default DropDownComponent;
