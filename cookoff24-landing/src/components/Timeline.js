const Timeline = () => {
  const events = [
    { time: "9:00 AM", event: "Event Starts" },
    { time: "10:00 AM", event: "Placeholder" },
    { time: "11:00 AM", event: "Placeholder" },
    { time: "12:00 PM", event: "Placeholder" },
    { time: "2:00 PM", event: "Event Commences" },
  ];
  return (
    <div className="h-[100vh]">
      <div className="text-lg font-normal tracking-[7px]">TIMELINE</div>
      <div className="flex flex-col">
        {events.map((e) => {
          return (<div className="flex justify-between ml-20">
            <div>{e.time}</div>
            <div>{e.event}</div>
          </div>);
        })}
      </div>
    </div>
  );
};

export default Timeline;
