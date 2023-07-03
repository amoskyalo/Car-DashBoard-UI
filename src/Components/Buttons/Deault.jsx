import { Button } from "@mui/material";
const DeaultButton = ({ title, color, ...props }) => {
  return (
    <Button
      {...props}
      className="!text-white !py-1.5 !rounded-lg !text-[14px] !px-5 !capitalize"
      style={{ backgroundColor: color }}
    >
      {title}
    </Button>
  );
};

export default DeaultButton;
