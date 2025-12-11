import backersLogo from "@/assets/Prentix-backers.png";

const TrustStrip = () => {
  return (
    <section className="py-20 border-t border-border/20">
      <div className="container flex flex-col items-center justify-center gap-6">
        <span className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase">Backed by</span>
        <img 
          src={backersLogo} 
          alt="ISB DLabs and AIC - Indian School of Business" 
          className="h-16 md:h-20 lg:h-24 w-auto" 
        />
      </div>
    </section>
  );
};

export default TrustStrip;
