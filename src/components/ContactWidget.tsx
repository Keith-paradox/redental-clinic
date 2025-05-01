
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

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {showAppointmentButton && <AppointmentWidget />}

      <div className="flex gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="default" 
              size="lg"
              className="rounded-full shadow-lg flex items-center justify-center w-12 h-12"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="sr-only">Chat with us</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Chat with Redental</SheetTitle>
            </SheetHeader>
            <div className="mt-4 h-[calc(100vh-12rem)] flex flex-col">
              <div className="bg-gray-100 rounded-lg p-4 flex-grow overflow-y-auto">
                <div className="bg-white p-3 rounded-lg mb-3 max-w-[80%]">
                  <p className="text-sm text-gray-700">Welcome to Redental! How can we help you today?</p>
                  <span className="text-xs text-gray-500 mt-1 block">10:30 AM</span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message here..."
                  className="flex-grow rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button size="sm">Send</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

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
