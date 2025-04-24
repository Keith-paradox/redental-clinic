
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-primary text-2xl font-bold">Redental</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary">Services</a>
            <a href="#about" className="text-gray-600 hover:text-primary">About</a>
            <a href="#contact" className="text-gray-600 hover:text-primary">Contact</a>
            <Button>Book Appointment</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
