import Navbar from "@/components/navbar";
import PortfolioSection from "@/components/portfolio-section";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="py-12 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Our Portfolio
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results for real businesses across Denmark and internationally
            </p>
          </div>
        </div>
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
}