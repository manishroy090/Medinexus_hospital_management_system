"use client";
import FullCalendar, { useCalendarController } from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/monarch"; // YOUR THEME
import dayGridPlugin from "@fullcalendar/react/daygrid";
import { useEffect, useRef, useState } from "react";
import timeGridPlugin from "@fullcalendar/react/timegrid";
import listPlugin from "@fullcalendar/react/list";
import { ChevronRight, ChevronLeft } from "lucide-react";

import "@fullcalendar/react/skeleton.css"; // ALWAYS NEED SKELETON
import "@fullcalendar/react/themes/monarch/theme.css"; // YOUR THEME
import "@fullcalendar/react/themes/monarch/palettes/purple.css";

function renderEventContent(eventInfo) {
  return (
    <>
      <div className="flex space-x-4 items-center justify-center w-full bg-yellow-200 text-black">
        <img src={"/hrm_image/female.jpg"} className="h-8 w-8 rounded-full" />
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </div>
    </>
  );
}

const Calendar = () => {
  const calendarRef = useRef(null);
  const handleDateClick = (info: any) => {
    alert(info.dateStr);
  };

  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [isdatechanges, setIsdatechanges] = useState(false);

  const controller = useCalendarController();
  const buttons = controller.getButtonState();

  function goNext() {
    const calendarApi = calendarRef.current.getApi();
    setIsdatechanges((prev) => !prev);
    calendarApi.next();
  }

  function prevBtn() {
    const calendarApi = calendarRef.current.getApi();
    setIsdatechanges((prev) => !prev);
    calendarApi.prev();
  }

  const handleDateSelect = (selectInfo) => {
    alert(`Selected dates: ${selectInfo.startStr} to ${selectInfo.endStr}`);
    // You can open a modal here to add an event
  };

  const handleEventClick = (clickInfo) => {
    alert(`Event clicked: ${clickInfo.event.title}`);
  };

  const handleTodayClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
  };

  useEffect(() => {
    console.log("use effect called");
    const getDateDetails = () => {
      if (calendarRef.current) {
        const calendarApi = calendarRef.current.getApi();

        const currentDate = calendarApi.getDate();
        console.log("currentDate", currentDate);

        const year = currentDate.getFullYear();
        const month = currentDate.toLocaleString("default", { month: "long" });

        setYear(year);
        setMonth(month);
      }
    };

    getDateDetails();
  }, [isdatechanges]);

  const switchPlugin = (plugin) => {
    if (calendarRef.current) {
      let calendarApi = calendarRef.current.getApi();

      switch (plugin) {
        case "week":
          calendarApi.changeView("timeGridWeek");
          break;
        case "month":
          calendarApi.changeView("dayGridMonth");
          break;
        case "day":
          calendarApi.changeView("timeGridDay");
          break;
        case "list":
          calendarApi.changeView("listMonth");
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="p-10 flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center  space-x-4 mb-4">
          <button onClick={prevBtn}>
            <ChevronLeft />
          </button>
          <button onClick={goNext}>
            <ChevronRight />
          </button>

          <button className="bg-[#14967f] p-2 text-white" onClick={handleTodayClick}>Today</button>
        </div>

        <div className="text-xl font-semibold">
          {year} {month}
        </div>

        <div className="flex space-x-4">
          <button
            className="bg-[#14967f] p-1 px-4 text-white"
            onClick={() => switchPlugin("month")}
          >
            month
          </button>
          <button
            className="bg-[#14967f] p-1 px-4 text-white"
            onClick={() => switchPlugin("week")}
          >
            Week
          </button>
          <button
            className="bg-[#14967f] p-1 px-4 text-white"
            onClick={() => switchPlugin("day")}
          >
            Day
          </button>
          <button
            className="bg-[#14967f] p-1 px-4 text-white"
            onClick={() => switchPlugin("list")}
          >
            List
          </button>
        </div>
      </div>

      <FullCalendar
        plugins={[themePlugin, timeGridPlugin, dayGridPlugin, listPlugin]}
        ref={calendarRef}
        editable={true}
        selectable={true}
        selectMirror={true}
        events={[
          { title: "event 1", date: "2026-07-16" },
          { title: "event 2", date: "2026-07-02" },
        ]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        select={handleDateSelect}
        eventClick={handleEventClick}
        // slotMinTime="08:00:00"
        // slotMaxTime="20:00:00"
      />
    </div>
  );
};

export default Calendar;
