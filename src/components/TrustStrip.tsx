import backersLogo from "@/assets/Prentix-backers.png";

const TrustStrip = () => {
  return (
    <section className="py-20">
      <div className="container flex items-center justify-center">
        <div className="flex items-center justify-center gap-8 px-8 py-4 border-2 border-border rounded-xl w-full max-w-[700px] mx-auto">
          <span className="text-muted-foreground text-xs sm:text-sm font-bold tracking-widest uppercase">
            Backed by
          </span>
          <img src={backersLogo} alt="ISB DLabs and AIC - Indian School of Business" className="h-12 sm:h16 md:h-20" />
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
