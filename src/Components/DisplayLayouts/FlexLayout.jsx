const FlexLayout = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`flex flex-row items-center space-x-4 justify-between ${className}`}
    >
      {children}
    </div>
  );
};

export default FlexLayout;
