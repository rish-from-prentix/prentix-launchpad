import backersLogo from "@/assets/Prentix-backers.png";

const TrustStrip = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-0 flex items-center justify-center">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 md:gap-8 px-4 md:px-8 py-4 border-2 border-border rounded-xl w-full max-w-[1100px] mx-auto">
          <span className="text-muted-foreground text-sm font-bold tracking-widest uppercase">Backed by</span>
          <img
            src={backersLogo}
            alt="ISB DLabs and AIC - Indian School of Business"
            className="block object-contain w-full max-w-[160px] sm:max-w-[240px] md:w-[600px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
