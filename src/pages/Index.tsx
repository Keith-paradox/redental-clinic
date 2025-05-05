
import Navbar from "@/components/Navbar";
import OperatingHours from "@/components/OperatingHours";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Index = () => {
  const services = [
    {
      title: "General Consultation",
      description: "Comprehensive dental examination and treatment planning for your oral health.",
      icon: "src/images/dental.png"
    },
    {
      title: "Teeth Cleaning",
      description: "Professional cleaning to remove plaque and maintain oral hygiene.",
      icon: "src/images/cleaning.png"
    },
    {
      title: "Teeth Whitening",
      description: "Advanced whitening treatments for a brighter, more confident smile.",
      icon: "src/images/whitening.png"
    },
    {
      title: "Root Canal Treatment",
      description: "Expert care for infected or damaged tooth pulp to save your natural tooth.",
      icon: "src/images/root_canal.png"
    },
    {
      title: "Braces Consultation",
      description: "Orthodontic assessment and treatment planning for teeth alignment.",
      icon: "src/images/braces.png"
    }
    // {
    //   title: "Dental Implants",
    //   description: "Permanent tooth replacement with natural-looking dental implants.",
    //   icon: "src/images/implant.png"
    // },
    // {
    //   title: "Wisdom Tooth Extraction",
    //   description: "Safe and painless removal of impacted or problematic wisdom teeth.",
    //   icon: "src/images/tooth-extraction.png"
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-t from-cyan-100/10 to-cyan-100/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to ReDental</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your trusted partner in dental care. We provide comprehensive dental services
            with a gentle touch and state-of-the-art technology.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gradient-to-b from-slate-100/10 to-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/4">

                  <Card className="h-full bg-cream-light hover:shadow-lg transition-shadow">
                    <div className="w-full flex items-center justify-center py-4">
                      <img 
                        src={service.icon} 
                        alt={service.title}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl font-semibold text-teak">{service.title}</CardTitle>
                      <CardDescription className="text-sage-dark">{service.description}</CardDescription>
                    </CardHeader>
                  </Card>

                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
          </Carousel>
          
        </div>
      </section>

      {/* About Section with subtle background */}
      <section id="about" className="py-16 px-4 bg-gradient-to-b from-slate-200/50 to-slate-100/10">
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
      <section id="contact" className="py-16 px-4 bg-gradient-to-b from-cyan-100/10 to-cyan-100/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#00ced1]" />
                <p className="text-lg">123 Smile Avenue, Denton, TX 75001, USA</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00ced1]" />
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00ced1]" />
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
