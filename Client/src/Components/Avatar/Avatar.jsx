import FlexLayout from "../DisplayLayouts/FlexLayout";

const Avatar = ({
  avatarUrl = "https://avatars.githubusercontent.com/u/91586973?v=4",
  children,
  showActiveIcon = false,
}) => {
  return (
    <FlexLayout className="space-x-1 !items-start">
      <div className="relative">
        <img src={avatarUrl} alt="" className="h-9 w-9 rounded-full" />
        {showActiveIcon && (
          <div className="absolute bottom-0 right-0 border border-white bg-primaryGreen p-1 rounded-full" />
        )}
      </div>
      {children}
    </FlexLayout>
  );
};

export default Avatar;
