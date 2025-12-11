import { Check, ExternalLink } from "lucide-react";

interface SuccessScreenProps {
  hasSelectedInterests: boolean;
  onClose: () => void;
}

const SuccessScreen = ({ hasSelectedInterests, onClose }: SuccessScreenProps) => {
  const subtext = hasSelectedInterests
    ? "Thanks for sharing your interests. Our team will reach out shortly with your next steps."
    : "Thanks for signing up! Our team will reach out shortly with your next steps.";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
    >
      <div className="text-center max-w-lg animate-fade-in">
        {/* Checkmark icon */}
        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8">
          <Check className="w-12 h-12 text-primary" strokeWidth={3} />
        </div>

        {/* Heading */}
        <h1
          id="success-title"
          className="text-4xl md:text-5xl font-bold text-foreground mb-6"
        >
          You're all set!
        </h1>

        {/* Subtext */}
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          {subtext}
        </p>

        {/* LinkedIn CTA */}
        <a
          href="https://www.linkedin.com/company/prentix"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-10"
        >
          <span>Follow us on LinkedIn for updates</span>
          <ExternalLink size={16} />
        </a>

        {/* Close button */}
        <div>
          <button
            onClick={onClose}
            className="btn-primary px-12 py-4 text-base font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
