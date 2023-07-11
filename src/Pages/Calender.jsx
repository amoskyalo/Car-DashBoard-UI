import FlexLayout from "../Components/DisplayLayouts/FlexLayout";
import GridLayout from "../Components/DisplayLayouts/GridLayout";
import Container from "../Components/Container/Container";
import DropDownButtons from "../Components/DropDownMenu/DropDownButtons";
import Heading from "../Components/Heading/Heading";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState, useEffect, useRef } from "react";
import { handleClickOutside } from "../_Functions/Functions";
import { HiCalendarDays } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { events } from "../_DB/db";
import { Avatar, AvatarGroup } from "@mui/material";

const Calender = () => {
  const dayRef = useRef(null);
  const [value, setValue] = useState({ $d: new Date() });
  const [calender, setCalender] = useState(false);

  useEffect(() => {
    handleClickOutside((event) => {
      if (dayRef.current && !dayRef.current.contains(event.target)) {
        setCalender(false);
      }
    });
  }, []);

  const getEventsInGivenTime = (time) => {
    let hourlyEvent = [];
    events.forEach((ev) => {
      if (ev.time === time + 1) {
        hourlyEvent.push(ev);
      }
    });
    return hourlyEvent;
  };


  const images = [
    "https://amoskyalo.netlify.app/static/media/amos.e2e93ed7e619bfefafd4.png",
    "https://avatars.githubusercontent.com/u/91586973?v=4",
    "https://amoskyalo.netlify.app/static/media/tomiyoka.dcd36053827576ad7ac7.jpg"
  ]
  return (
    <Container>
      <GridLayout colCount={3}>
        <Heading title="Calender" />
        <FlexLayout>
          {["Toyota", "Time", "Status"].map((c, i) => (
            <DropDownButtons
              key={i}
              text={c}
              containerStyles="!px-4 !rounded-lg"
            />
          ))}
        </FlexLayout>
      </GridLayout>

      <GridLayout colCount={3}>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                className="!w-full"
                dayOfWeekFormatter={(day) => {
                  const days = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ];
                  const d = days.find((x) => day === x.slice(0, 2));
                  return d.slice(0, 3);
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="bg-white rounded-2xl p-6 space-y-3">
            <h2 className="font-semibold text-lg">Upcoming Events</h2>
            {[8, 9, 10, 11].map((t, i) => (
              <FlexLayout
                className="h-16 max-h-16 !justify-start !items-start text-sm font-[500] text-primaryGray border-t"
                key={i}
              >
                <p>{t}:00</p>
                {t === 11 && (
                  <div className="bg-primaryGreen py-1 px-2 text-white text-[12px] w-full rounded space-y-2">
                    <h2>Drift Series Firs Round</h2>
                    <FlexLayout>
                      <p>JDM</p>
                      <AvatarGroup total={24}>
                         {images.map((img, i) => (
                           <Avatar alt="users"  src={img} key={i}/>
                         ))}
                      </AvatarGroup>
                    </FlexLayout>
                  </div>
                )}
              </FlexLayout>
            ))}
          </div>
        </div>
        <div className="col-span-2 bg-white overflow-hidden rounded-2xl w-full h-max sticky top-24">
          <FlexLayout className="bg-primaryBlue py-2 px-4 relative">
            <DropDownButtons
              text="Day"
              containerStyles="!py-1 !px-2 !space-x-1 !rounded-lg !bg-[#549CFD]"
              className="!text-white"
              onClick={(e) => {
                e.stopPropagation();
                setCalender(!calender);
              }}
            />
            {calender && (
              <div className="absolute left-0 top-0 mt-10 z-50" ref={dayRef}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    className="!bg-white shadow-2xl !rounded-2xl"
                    onChange={(value) => setValue(value)}
                  />
                </LocalizationProvider>
              </div>
            )}

            <FlexLayout className="!bg-[#549CFD] py-1 px-2 rounded-lg text-white !space-x-1">
              <HiCalendarDays className="" />
              <p className="text-[12px]">
                {value?.$d.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                  day: "numeric",
                })}
              </p>
            </FlexLayout>

            <FlexLayout className="!bg-[#549CFD] py-1 px-2 rounded-lg text-white !space-x-1">
              <IoIosArrowBack className="cursor-pointer" />
              <IoIosArrowForward className="cursor-pointer" />
            </FlexLayout>
          </FlexLayout>

          <div className="px-6 py-6 max-h-[500px] overflow-scroll">
            {Array(24)
              .fill(0)
              .map((__, i) => (
                <FlexLayout
                  className="!justify-start !space-x-2 !items-start relative border-b h-16 max-h-16 text-primaryGray text-[14px] last-of-type:border-none"
                  key={i}
                >
                  <div className="border-r-2 h-full w-12 pt-1">
                    <p className="text-[10px] font-[500]">{`${
                      i < 12
                        ? i + 1 + " " + "AM"
                        : i === 12 + " " + "AM"
                        ? i
                        : i - 12 + " " + "PM"
                    }`}</p>
                  </div>
                  <div className="relative w-full flex-1">
                    <GridLayout>
                      {getEventsInGivenTime(i).map((event, i) => (
                        <div
                          className="bg-primaryBlue px-2 py-1 rounded text-white text-[11px] cursor-pointer duration-500 hover:scale-95"
                          key={i}
                        >
                          <FlexLayout>
                            <h2>
                              0{event.time.toString().split(":")[0]}:00 AM
                            </h2>
                            <p>{event.duration}</p>
                          </FlexLayout>
                          <p>{event.name}</p>
                        </div>
                      ))}
                    </GridLayout>
                  </div>
                </FlexLayout>
              ))}
          </div>
        </div>
      </GridLayout>
    </Container>
  );
};

export default Calender;
