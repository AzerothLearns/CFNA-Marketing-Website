import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services-section";
import Footer from "@/components/footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="py-12 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to help your business thrive online
            </p>
          </div>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}