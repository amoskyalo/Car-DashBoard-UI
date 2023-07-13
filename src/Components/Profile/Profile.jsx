import TextField from "@mui/material/TextField";
import GridLayout from "../DisplayLayouts/GridLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FlexLayout from "../DisplayLayouts/FlexLayout";

const Profile = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#242731",
      },
    },
  });

  const inputs = [
    {
      label: "Live in",
      defaultValue: "Nairobi, Kenya",
    },
    {
      label: "Street address",
      defaultValue: "01200",
    },
    {
      label: "Email address",
      defaultValue: "amoskyalo@gmail.com",
    },
    {
      label: "Phone number",
      defaultValue: "+254 794433701",
    },
    {
      label: "Date of Birth",
      defaultValue: "03/12/2002",
    },
    {
      label: "Gender",
      defaultValue: "Male",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="pb-4 border-b-2 border-gray-200">
        <h2 className="font-semibold text-lg">Profile</h2>
        <p className="text-primaryGray text-sm">
          Update your photo and personal details here.
        </p>
      </div>
      <ThemeProvider theme={theme}>
        <div className="pb-12 pt-4 border-b-2 border-gray-200">
          <GridLayout colCount={3}>
            {inputs.map((el, i) => (
              <TextField
                key={i}
                label={el.label}
                id="outlined-size-small"
                size="small"
                color="primary"
                defaultValue={el.defaultValue}
                fullWidth
                InputProps={{
                  sx: {
                    "&:hover fieldset": {
                      border: "1px solid #7C7C8D!important",
                      borderRadius: 1,
                    },
                    "&:focus-within fieldset, &:focus-visible fieldset": {
                      border: "1px solid #7C7C8D!important",
                    },
                  },
                }}
                inputProps={{
                  sx: {
                    color: "#242731",
                    fontSize: "14px",
                    fontWeight: "normal",
                    padding: "10px",
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "primary",
                    fontWeight: "normal",
                  },
                }}
              />
            ))}
          </GridLayout>
        </div>
      </ThemeProvider>

      <div className="pb-6 border-b-2 border-gray-200">
        <FlexLayout>
          <FlexLayout className="!space-x-16">
            <div>
              <h2 className="font-semibold">Your Photo</h2>
              <p className="text-[14px]">
                This will be displayed on your profile
              </p>
            </div>
            <img
              src="https://avatars.githubusercontent.com/u/91586973?v=4"
              alt=""
              className="h-12 w-12 rounded-full"
            />
          </FlexLayout>
          <FlexLayout>
            <p className="text-primaryGray font-semibold cursor-pointer">
              Delete
            </p>
            <p className="text-primaryColor font-semibold cursor-pointer">
              Update
            </p>
          </FlexLayout>
        </FlexLayout>
      </div>
    </div>
  );
};

export default Profile;
