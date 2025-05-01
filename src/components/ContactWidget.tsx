
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar, MessageCircle, Phone } from "lucide-react";
import AppointmentWidget from "./AppointmentWidget";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ContactWidget = () => {
  const [showAppointmentButton, setShowAppointmentButton] = useState(false);
  
  const openExternalChatbot = () => {
    window.open("https://n8n.8genticai.de/webhook/81345ff4-927b-4816-a6d2-3691c60826a6/chat", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {showAppointmentButton && <AppointmentWidget />}

      <div className="flex gap-2">
        <Button 
          variant="default" 
          size="lg"
          className="rounded-full shadow-lg flex items-center justify-center w-12 h-12"
          onClick={openExternalChatbot}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="sr-only">Chat with us</span>
        </Button>

        <Button
          variant="default"
          size="lg"
          className="rounded-full shadow-lg flex items-center justify-center w-12 h-12"
          onClick={() => setShowAppointmentButton(!showAppointmentButton)}
        >
          <Phone className="w-5 h-5" />
          <span className="sr-only">Book appointment</span>
        </Button>
      </div>
    </div>
  );
};

export default ContactWidget;
