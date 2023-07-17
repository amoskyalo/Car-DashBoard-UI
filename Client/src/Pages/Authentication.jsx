import { Button } from "@mui/material";
import FlexLayout from "../Components/DisplayLayouts/FlexLayout";
import google from "../Assets/Icons/google.svg";
import facebook from "../Assets/Icons/facebook.svg";
import Checkbox from "@mui/material/Checkbox";
import DeaultButton from "../Components/Buttons/Deault";

const Authentication = ({
  setUserName,
  handleLoginUser,
}) => {
  const socialLogin = [
    {
      icon: google,
      name: "Google",
    },
    {
      icon: facebook,
      name: "Facebook",
    },
  ];
  return (
      <div className="h-screen overflow-hidden">
        <FlexLayout className="h-full !flex-col !justify-center w-full mx-auto md:w-1/2 lg:w-1/3">
          <div className="w-full space-y-3 p-4">
            <div>
              <h2 className="font-semibold text-xl">Get Started</h2>
              <p className="text-[14px] text-primaryGray font-[500]">
                Dont have an account?{" "}
                <span className="text-primaryColor">Sign up</span>
              </p>
            </div>
            <FlexLayout className="!mt-6">
              {socialLogin.map((el, i) => (
                <Button
                  key={i}
                  variant={i === 0 ? `outlined` : `contained`}
                  className={`w-full space-x-2 !capitalize !text-[12px] !py-2 ${
                    i === 0 ? `!text-primaryGray !border-gray-300` : ``
                  }`}
                >
                  <img src={el.icon} alt="" className="h-4" />
                  <p>Sign in With {el.name}</p>
                </Button>
              ))}
            </FlexLayout>

            <FlexLayout>
              <div className="flex-1 border border-gray-300" />
              <p className="font-semibold text-[14px] text-primaryGray">or</p>
              <div className="flex-1 border border-gray-300" />
            </FlexLayout>

            <div className="bg-white p-6 rounded-lg !space-y-6">
              {[
                {
                  name: "Name",
                  type: "text",
                  placeholder: "John Smith",
                  onChange: (e) => setUserName(e.target.value),
                },
                {
                  name: "Email",
                  type: "email",
                  placeholder: "youremail@gmail.com",
                },
                {
                  name: "Password",
                  type: "password",
                  defaultValue: "vjglytflyfffui",
                },
              ].map((inp, i) => (
                <div key={i}>
                  <label className="font-semibold text-[14px] text-primaryGray">
                    {inp.name}
                    <input
                      type={inp.type}
                      className="border border-gray-300 block w-full py-2 px-4 font-normal rounded"
                      placeholder={inp.placeholder}
                      defaultValue={inp.defaultValue}
                      onChange={inp.onChange}
                      required
                    />
                  </label>
                </div>
              ))}
            </div>

            <FlexLayout className="text-[12px] text-primaryGray">
              <FlexLayout className="!space-x-0 !justify-start">
                <Checkbox
                  className="!text-primaryColor"
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                />
                <p>Remember me</p>
              </FlexLayout>
              <p className="text-primaryColor">Forgot your password</p>
            </FlexLayout>

            <DeaultButton
              title="Sign in"
              color="#A162F7"
              className="w-full"
              onClick={handleLoginUser}
            />
          </div>
        </FlexLayout>
      </div>
  );
};

export default Authentication;
