import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "After spending months going through courses online, I was still feeling lost. Solving problems here in a structured fashion changed that for me!",
    name: "Arjun K",
    role: "CRED",
  },
  {
    quote: "The internship was truly a gamechanger for me. I went from not knowing how to approach solving problems to cracking my dream offer in 2 months!",
    name: "Muskan A",
    role: "Google",
  },
  {
    quote: "Everytime I was stuck, I used to spam my mentor until I got the concepts cleared. I really understood how big firms approach problems.",
    name: "Leena",
    role: "Wells Fargo",
  },
  {
    quote: "The mentor insights hit different. One conversation with my mentor & I realised I’d been thinking about problems the wrong way & totally flipped my perspective. That alone made the internship worth it.",
    name: "Pradyu M",
    role: "BCG-X",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subheading mb-4">Success Stories</p>
          <h2 className="section-heading text-foreground">Hear from the users themselves:</h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="absolute -top-4 -left-2 md:-left-8 w-12 h-12 text-primary/20" />

            {/* Testimonial Card */}
            <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 min-h-[280px] flex flex-col justify-center">
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
