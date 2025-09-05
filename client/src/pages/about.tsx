import Navbar from "@/components/navbar";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="py-12 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              About CFNA Marketing
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner for digital marketing success in København and beyond
            </p>
          </div>
        </div>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}