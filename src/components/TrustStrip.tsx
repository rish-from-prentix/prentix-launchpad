import backersLogo from "@/assets/Prentix-backers.png";

const TrustStrip = () => {
  return (
    <section className="py-16">
      <div className="container flex items-center justify-center gap-8">
        <span className="text-muted-foreground text-sm font-bold tracking-widest uppercase">Backed by</span>
        <img src={backersLogo} alt="ISB DLabs and AIC - Indian School of Business" className="h-12" />
      </div>
    </section>
  );
};

export default TrustStrip;
