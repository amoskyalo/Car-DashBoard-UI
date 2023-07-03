import React from "react";

const GridLayout = ({ children, gap = 32, colCount, ...props }) => {
  const count = React.Children.count(children);
  return (
    <div
      {...props}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${colCount ? colCount : count}, 1fr)`,
        columnGap: gap,
      }}
    >
      {children}
    </div>
  );
};

export default GridLayout;
