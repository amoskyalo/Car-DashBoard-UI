import React from "react";

const GridLayout = ({ children, columnGap = 32, rowGap = 32, colCount, ...props }) => {
  const childrenCount = React.Children.count(children);
  return (
    <div
      {...props}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${colCount ? colCount : childrenCount}, 1fr)`,
        columnGap,
        rowGap
      }}
    >
      {children}
    </div>
  );
};

export default GridLayout;
