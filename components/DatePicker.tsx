import React, { Fragment, useState } from 'react'
import DatePicker from "react-DatePicker"
import "react-datepicker/dist/react-datepicker.css";


const DatePickerComponent = () => {
    
  const [startDate, setStartDate] = useState(new Date());
  const [exitDate, setExitDate]= useState(new Date());
  return (
    <Fragment>
        <div className='relative h-2/6 lg:w-2/6 flex  flex-col lg:flex-row-reverse lg:gap-2'>
        <div className="relative flex h-1/2 w-full flex-col items-end border-b border-solid border-shade lg:h-full lg:w-1/2 lg:border-l lg:border-b-0">
          <p className="py-2 text-xs font-bold text-primary">تاريخ الوصول </p>
          <div className="flex h-full w-full flex-row justify-between">
            <i className=" icon-calendar_today_black_24dp-3 font-sm flex cursor-pointer items-center px-2 text-lg text-dark"></i>
            <div className="flex w-16 items-center text-sm font-bold text-secondary">
            <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
            </div>
          </div>
        </div>
        <div className="relative flex h-1/2 w-full flex-col items-end border-b border-solid border-shade lg:h-full lg:w-1/2 lg:border-l lg:border-b-0">
          <p className="py-2 text-xs font-bold text-primary">تاريخ المغادرة </p>
          <div className="flex h-full w-full flex-row justify-between">
            <i className=" icon-calendar_today_black_24dp-3 font-sm flex cursor-pointer items-center px-2 text-lg text-dark"></i>
            <div className="flex w-16 items-center text-sm font-bold text-secondary">
            <DatePicker selected={exitDate} onChange={(date:Date) => setExitDate(date)} />
            </div>
          </div>
        </div>
    </div>
    </Fragment>
  )
}

export default DatePickerComponent