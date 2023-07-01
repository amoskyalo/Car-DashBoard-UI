import React from 'react'
import DeaultButton from '../Buttons/Deault'

const Reminders = () => {
  return (
    <div className='bg-white p-6 rounded-2xl w-full'>
        <div className="flex flex-row items-center justify-between">
        <h2 className="font-semibold text-lg">Reminder</h2>
        <DeaultButton title="+ Add New" color="#A162F7"/>
        </div>
    </div>
  )
}

export default Reminders