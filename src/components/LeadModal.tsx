import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import InterestSelection from "./InterestSelection";
import SuccessScreen from "./SuccessScreen";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalStep = "form" | "interests" | "success";

interface LeadData {
  name: string;
  email: string;
  phone: string;
}

const LeadModal = ({ isOpen, onClose }: LeadModalProps) => {
  const [step, setStep] = useState<ModalStep>("form");
  const [formData, setFormData] = useState<LeadData>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // Honeypot field
  const [honeypot, setHoneypot] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[+]?[\d\s-]{10,}$/.test(phone);
  };

  const sendLeadEmail = async (
    data: LeadData,
    interests: string[] = [],
    emailStep: "initial" | "interests"
  ) => {
    try {
      const { error } = await supabase.functions.invoke("send-lead-email", {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          interests,
          pageUrl: window.location.href,
          step: emailStep,
        },
      });

      if (error) {
        console.error("Email send error:", error);
        throw error;
      }
    } catch (err) {
      console.error("Failed to send lead email:", err);
      // Show non-blocking toast but continue flow
      toast({
        title: "Note",
        description: "We received your submission. We'll be in touch soon!",
        variant: "default",
      });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) return;

    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Send initial email
    await sendLeadEmail(formData, [], "initial");

    // Analytics event
    if (typeof window !== "undefined") {
      console.log("Analytics: lead_submitted_initial", formData);
    }

    setIsSubmitting(false);
    setStep("interests");

    // Analytics event
    if (typeof window !== "undefined") {
      console.log("Analytics: interests_shown");
    }
  };

  const handleInterestsSubmit = async (interests: string[]) => {
    setIsSubmitting(true);
    setSelectedInterests(interests);

    // Send updated email with interests
    await sendLeadEmail(formData, interests, "interests");

    // Analytics event
    if (typeof window !== "undefined") {
      console.log("Analytics: interests_submitted", { interests });
    }

    setIsSubmitting(false);
    setStep("success");

    // Analytics event
    if (typeof window !== "undefined") {
      console.log("Analytics: success_shown");
    }
  };

  const handleSkip = () => {
    setSelectedInterests([]);
    setStep("success");

    // Analytics event
    if (typeof window !== "undefined") {
      console.log("Analytics: success_shown");
    }
  };

  const handleClose = () => {
    // If on interests step and user closes, show success
    if (step === "interests") {
      setStep("success");
      return;
    }

    // Reset and close
    setFormData({ name: "", email: "", phone: "" });
    setErrors({});
    setStep("form");
    setSelectedInterests([]);
    onClose();
  };

  const handleSuccessClose = () => {
    setFormData({ name: "", email: "", phone: "" });
    setErrors({});
    setStep("form");
    setSelectedInterests([]);
    onClose();
  };

  if (!isOpen) return null;

  // Success screen (full-screen)
  if (step === "success") {
    return (
      <SuccessScreen
        hasSelectedInterests={selectedInterests.length > 0}
        onClose={handleSuccessClose}
      />
    );
  }

  // Interest selection screen
  if (step === "interests") {
    return (
      <InterestSelection
        onSubmit={handleInterestsSubmit}
        onSkip={handleSkip}
        onClose={handleClose}
        isSubmitting={isSubmitting}
      />
    );
  }

  // Initial form
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/90 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl p-8 animate-scale-in shadow-soft">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <h2
          id="modal-title"
          className="text-2xl font-bold text-foreground mb-2"
        >
          Start Your Internship
        </h2>
        <p className="text-muted-foreground mb-6">
          Enter your details and we'll help you get started.
        </p>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          {/* Honeypot - hidden from users */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              placeholder="you@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              placeholder="+91 XXXXX XXXXX"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary py-4 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
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
        </form>
      </div>
    </div>
  );
};

export default LeadModal;
