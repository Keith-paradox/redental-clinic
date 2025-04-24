
import Navbar from "@/components/Navbar";
import AppointmentWidget from "@/components/AppointmentWidget";
import ServiceCard from "@/components/ServiceCard";
import OperatingHours from "@/components/OperatingHours";
import { MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "General Consultation",
      description: "Comprehensive dental examination and treatment planning for your oral health.",
      icon: "🦷"
    },
    {
      title: "Teeth Cleaning",
      description: "Professional cleaning to remove plaque and maintain oral hygiene.",
      icon: "✨"
    },
    {
      title: "Teeth Whitening",
      description: "Advanced whitening treatments for a brighter, more confident smile.",
      icon: "💫"
    },
    {
      title: "Root Canal Treatment",
      description: "Expert care for infected or damaged tooth pulp to save your natural tooth.",
      icon: "🔬"
    },
    {
      title: "Braces Consultation",
      description: "Orthodontic assessment and treatment planning for teeth alignment.",
      icon: "📏"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <AppointmentWidget />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Redental</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your trusted partner in dental care. We provide comprehensive dental services
            with a gentle touch and state-of-the-art technology.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            At Redental, we're committed to providing exceptional dental care in a
            comfortable and modern environment. Our team of experienced professionals
            uses the latest technology to ensure the best possible treatment for our patients.
          </p>
        </div>
      </section>

      {/* Contact & Hours Section - MOVED TO BOTTOM */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <p className="text-lg">123 Smile Avenue, Denton, TX 75001, USA</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-lg">info@redentalclinic.com</p>
              </div>
            </div>
            <OperatingHours />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
