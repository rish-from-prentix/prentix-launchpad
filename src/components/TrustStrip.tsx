import backersLogo from "@/assets/Prentix-backers.png";

const TrustStrip = () => {
  return (
    <section className="py-20">
      <div className="container flex items-center justify-center">
        <div className="flex items-center gap-8 px-8 py-4 border border-border rounded-xl">
          <span className="text-muted-foreground text-sm font-bold tracking-widest uppercase">Backed by</span>
          <img src={backersLogo} alt="ISB DLabs and AIC - Indian School of Business" className="h-16 md:h-20" />
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
