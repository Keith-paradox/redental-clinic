
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import OperatingHours from "@/components/OperatingHours";
import ContactWidget from "@/components/ContactWidget";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-t from-blue-50/30 via-white to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to ReDental</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your trusted partner in dental care. We provide comprehensive dental services
            with a gentle touch and state-of-the-art technology.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-purple-50/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <ServiceCard {...service} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* About Section with subtle background */}
      <section id="about" className="py-16 px-4 bg-gradient-to-b from-purple-50/20 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            At ReDental, we're committed to providing exceptional dental care in a
            comfortable and modern environment. Our team of experienced professionals
            uses the latest technology to ensure the best possible treatment for our patients.
          </p>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-b from-blue-50/30 via-white to-white">
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
      
      {/* Contact Widget */}
      {/* <ContactWidget /> */}
    </div>
  );
};

export default Index;
