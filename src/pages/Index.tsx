
import Navbar from "@/components/Navbar";
import AppointmentWidget from "@/components/AppointmentWidget";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
      icon: "🦷"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with whitening, veneers, and other aesthetic procedures.",
      icon: "✨"
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with braces and other orthodontic treatments.",
      icon: "📏"
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency dental care for immediate attention when you need it most.",
      icon: "🚑"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            At Redental, we're committed to providing exceptional dental care in a
            comfortable and modern environment. Our team of experienced professionals
            uses the latest technology to ensure the best possible treatment for our patients.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="space-y-4">
            <p className="text-lg">📞 (123) 456-7890</p>
            <p className="text-lg">📍 123 Dental Street, Medical City, MC 12345</p>
            <p className="text-lg">✉️ contact@redental.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
