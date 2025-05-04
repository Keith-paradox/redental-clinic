
import { Clock } from "lucide-react";

const OperatingHours = () => {
  const hours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-[#00ced1] mb-4">
        <Clock className="text-[#00ced1] w-5 h-5" />
        <h3 className="font-semibold">Operating Hours</h3>
      </div>
      {hours.map((schedule) => (
        <div key={schedule.day} className="flex justify-between">
          <span className="text-gray-700">{schedule.day}</span>
          <span className="text-gray-600">{schedule.time}</span>
        </div>
      ))}
    </div>
  );
};

export default OperatingHours;
