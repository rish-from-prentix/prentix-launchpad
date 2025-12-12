interface LongFormCopyProps {
  onOpenModal: () => void;
}

const LongFormCopy = ({ onOpenModal }: LongFormCopyProps) => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Persuasive Copy */}
          <div className="space-y-8 mb-16">
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                The world's changed.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The world doesn't reward talkers anymore.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The good companies - the ones that actually matter - don't hire people who just say they can.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                They hire doers. Builders. Problem solvers. The ones who've done something real.
              </p>
            </div>

            <div className="h-px bg-border/50 my-8" />

            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-semibold text-primary">So what should you do as a student?</p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">Well, stop talking about potential.</p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                Start showing performance.
              </p>
            </div>

            <div className="h-px bg-border/50 my-8" />

            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Solve real-world problems faced by top brands.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                Build a portfolio that speaks louder than your résumé.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 md:p-12 rounded-2xl bg-gradient-to-b from-muted/50 to-muted/20 border border-border/50">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Start Building Your Proof of Hustle</h3>
            <button onClick={onOpenModal} className="btn-primary text-base md:text-lg px-8 py-4">
              START YOUR FIRST INTERNSHIP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongFormCopy;
