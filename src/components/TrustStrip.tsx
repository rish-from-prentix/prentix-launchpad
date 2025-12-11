import isbLogo from '@/assets/isb-logo.png';

const TrustStrip = () => {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <span className="text-muted-foreground text-lg">Backed by</span>
          
          <img 
            src={isbLogo} 
            alt="ISB - Indian School of Business" 
            className="h-10"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
