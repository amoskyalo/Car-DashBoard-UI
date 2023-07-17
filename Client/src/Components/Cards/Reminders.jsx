import React from "react";
import DeaultButton from "../Buttons/Deault";
import ReminderTable from "../Tables/RemindersTable";

const Reminders = () => {
  return (
    <div className="bg-white p-6 rounded-2xl w-full space-y-3">
      <div className="flex flex-row items-center justify-between">
        <h2 className="font-semibold text-lg">Reminder</h2>
        <DeaultButton title="+ Add New" color="#A162F7" />
      </div>
      <ReminderTable />
    </div>
  );
};

export default Reminders;
