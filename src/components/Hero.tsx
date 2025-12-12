import PrentixIcon from "./PrentixIcon";
interface HeroProps {
  onOpenModal: () => void;
}
const Hero = ({
  onOpenModal
}: HeroProps) => {
  return <section className="min-h-screen flex items-center justify-center pt-20 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-block mb-8 animate-float">
            <PrentixIcon size={100} />
          </div>

          {/* Subheading */}
          <p className="section-subheading mb-6 opacity-0 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            FULLY AI-MENTORED VIRTUAL INTERNSHIPS WITH TOP BRANDS!
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-8 opacity-0 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            Start your dream<br />
            <span className="text-gradient">internship today!</span>
          </h1>

          {/* CTA Button */}
          <div className="opacity-0 animate-fade-in" style={{
          animationDelay: "0.6s"
        }}>
            <button onClick={onOpenModal} className="btn-primary text-base md:text-lg px-8 py-4 animate-glow">START YOUR FIRST INTERNSHIP NOW</button>
          </div>

          {/* Microcopy */}
          <p className="mt-6 text-muted-foreground text-sm opacity-0 animate-fade-in" style={{
          animationDelay: "0.8s"
        }}>
            No rejection. Start instantly.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{
      animationDelay: "1s"
    }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>;
};
export default Hero;