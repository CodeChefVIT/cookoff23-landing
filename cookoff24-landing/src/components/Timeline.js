const Timeline = () => {
  const events = [
    { time: "9:00 AM", event: "Event Starts" },
    { time: "10:00 AM", event: "Placeholder" },
    { time: "11:00 AM", event: "Placeholder" },
    { time: "12:00 PM", event: "Placeholder" },
    { time: "2:00 PM", event: "Event Commences" },
  ];
  console.log(100/events.length);
  return (
    <div className="h-[100vh]">
      <div className="text-lg font-normal tracking-[7px] ml-40 text-grey">TIMELINE</div>
      <div className="flex flex-col h-[90%]">
        {events.map((e) => {
          return (<div 
            // className={`flex ml-40 h-[20%]`}
            className={`flex ml-40 h-[${100/events.length}%] border-b-2 border-grey gap-44 text-grey text-3xl font-semibold`}
          
          >
            <div className=" flex flex-col justify-center">{e.time}</div>
            <div className="flex flex-col justify-center">{e.event}</div>
          </div>);
        })}
      </div>
    </div>
  );
};

export default Timeline;
