import backersLogo from "@/assets/Prentix-backers.png";

const TrustStrip = () => {
  return (
    <section className="py-20">
      <div className="container flex items-center justify-center gap-10">
        <span className="text-muted-foreground text-sm font-bold tracking-widest uppercase">Backed by</span>
        <img src={backersLogo} alt="ISB DLabs and AIC - Indian School of Business" className="h-20 md:h-24" />
      </div>
    </section>
  );
};

export default TrustStrip;
