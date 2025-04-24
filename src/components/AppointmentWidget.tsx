
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

const AppointmentWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        size="lg" 
        className="shadow-lg flex items-center space-x-2 animate-bounce"
        onClick={() => window.location.href = '#book'}
      >
        <Calendar className="w-5 h-5" />
        <span>Book Appointment</span>
      </Button>
    </div>
  );
};

export default AppointmentWidget;
