import { useState } from "react";
import { X, Loader2 } from "lucide-react";

const INTERNSHIP_OPTIONS = [
  { id: "software-engineering", label: "Software engineering" },
  { id: "ui-ux-design", label: "UI/UX design" },
  { id: "product-management", label: "Product management" },
  { id: "prompt-engineering", label: "Prompt engineering" },
  { id: "data-science", label: "Data science" },
  { id: "data-engineering", label: "Data engineering" },
  { id: "management-consulting", label: "Management consulting" },
  { id: "brand-marketing", label: "Brand marketing" },
  { id: "digital-marketing", label: "Digital marketing" },
  { id: "academic-research", label: "Academic research" },
];

interface InterestSelectionProps {
  onSubmit: (interests: string[]) => void;
  onSkip: () => void;
  onClose: () => void;
  isSubmitting: boolean;
}

const InterestSelection = ({
  onSubmit,
  onSkip,
  onClose,
  isSubmitting,
}: InterestSelectionProps) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );

    // Analytics event
    if (typeof window !== "undefined") {
      console.log("Analytics: interest_toggled", {
        option: id,
        selected: !selectedInterests.includes(id),
      });
    }
  };

  const handleSubmit = () => {
    onSubmit(selectedInterests);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="interest-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-card border border-border rounded-2xl p-8 animate-scale-in shadow-soft max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2
            id="interest-modal-title"
            className="text-3xl font-bold text-foreground mb-2"
          >
            You're all set!
          </h2>
          <p className="text-muted-foreground">
            What do you want to explore?
          </p>
        </div>

        {/* Selection counter */}
        <div className="text-right mb-4">
          <span className="text-sm text-muted-foreground">
            Selected: {selectedInterests.length}
          </span>
        </div>

        {/* Interest grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {INTERNSHIP_OPTIONS.map((option) => {
            const isSelected = selectedInterests.includes(option.id);
            return (
              <button
                key={option.id}
                onClick={() => toggleInterest(option.id)}
                disabled={isSubmitting}
                role="button"
                aria-pressed={isSelected}
                className={`
                  p-4 rounded-lg border text-left transition-all duration-150
                  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background
                  ${
                    isSelected
                      ? "bg-primary/10 border-primary text-primary shadow-md"
                      : "bg-muted/50 border-border text-muted-foreground hover:bg-muted hover:border-muted-foreground/30 hover:-translate-y-0.5 hover:shadow-lg"
                  }
                  ${isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                `}
              >
                <span className="font-medium">{option.label}</span>
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full max-w-xs btn-primary py-4 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </span>
            ) : (
              "Submit"
            )}
          </button>

          <button
            onClick={onSkip}
            disabled={isSubmitting}
            className="text-muted-foreground hover:text-foreground text-sm transition-colors disabled:opacity-50"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterestSelection;
