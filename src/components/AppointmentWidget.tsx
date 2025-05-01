
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

const AppointmentWidget = () => {
  return (
    <Button 
      size="lg" 
      className="shadow-lg flex items-center space-x-2"
      onClick={() => window.location.href = '#book'}
    >
      <Calendar className="w-5 h-5" />
      <span>Book Appointment</span>
    </Button>
  );
};

export default AppointmentWidget;
