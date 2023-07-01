const DeaultButton = ({ title, color, ...props }) => {
  return (
    <button
      {...props}
      className="text-white py-1.5 rounded-lg text-[14px] font-[500] px-5"
      style={{ backgroundColor: color }}
    >
      {title}
    </button>
  );
};

export default DeaultButton;
