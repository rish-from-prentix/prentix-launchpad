import isbLogo from "@/assets/isb-logo.png";

const TrustStrip = () => {
  return (
    <section className="py-20">
      <div className="container flex justify-center">
        <div className="flex items-center gap-6 px-12 py-6 bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.12),0_1px_4px_rgba(0,0,0,0.06)] w-full mx-auto">
          <span className="text-neutral-400 text-sm font-bold tracking-wide uppercase">Backed by</span>
          <div className="w-px h-8 bg-neutral-200" />
          <img src={isbLogo} alt="ISB DLabs and AIC - Indian School of Business" className="h-14" />
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
