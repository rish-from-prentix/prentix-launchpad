import isbLogo from "@/assets/isb-logo.png";

const TrustStrip = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col items-center gap-6">
        <span className="text-foreground text-sm font-bold tracking-widest uppercase">Backed by</span>
        <img src={isbLogo} alt="ISB DLabs and AIC - Indian School of Business" className="h-16" />
      </div>
    </section>
  );
};

export default TrustStrip;
