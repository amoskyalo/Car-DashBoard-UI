import { useState } from "react";
import Container from "../Components/Container/Container";
import FlexLayout from "../Components/DisplayLayouts/FlexLayout";
import Heading from "../Components/Heading/Heading";
import Profile from "../Components/Profile/Profile";

const Settings = () => {
  const [active, setActive] = useState(0);
  return (
    <Container>
      <div className="bg-white p-6 space-y-6">
        <Heading title="Settings" />
        <FlexLayout className="!justify-start !space-x-6">
          {["Profile", "My details", "Password", "Email", "Notifications"].map(
            (el, i) => (
              <p
                key={i}
                onClick={() => setActive(i)}
                className={`text-primaryGray font-semibold py-1.5 px-4 rounded text-[14px] cursor-pointer ${
                  i === active ? `bg-[#A162F71A]` : ``
                }`}
              >
                {el}
              </p>
            )
          )}
        </FlexLayout>
        {active === 0 && <Profile />}

        {active !== 0 && (
          <div className="py-4">
            <img
              src="https://st3.depositphotos.com/1001599/32031/v/600/depositphotos_320313024-stock-illustration-digital-presentation-concept-vector-illustration.jpg"
              alt=""
              className="mx-auto"
            />
            <p className="text-[16px] font-semibold text-primaryGray text-center">
              Page under maintainance!
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Settings;
