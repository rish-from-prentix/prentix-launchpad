import isbLogo from '@/assets/isb-logo.png';

const TrustStrip = () => {
  return (
    <section className="py-16">
      <div className="container flex justify-center">
        <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-white/20">
          <span className="text-neutral-500 text-base font-medium">Backed by</span>
          
          <img 
            src={isbLogo} 
            alt="ISB - Indian School of Business" 
            className="h-9"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
