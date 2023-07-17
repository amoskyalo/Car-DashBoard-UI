import { Button } from "@mui/material";
const DeaultButton = ({ className, title, color, ...props }) => {
  return (
    <Button
      {...props}
      className={`!text-white !py-2 !rounded-lg !text-[14px] !px-5 !capitalize ${className}`}
      style={{ backgroundColor: color }}
    >
      {title}
    </Button>
  );
};

export default DeaultButton;
