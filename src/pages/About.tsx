import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { Quote } from "lucide-react";
import aboutCandid from "@/assets/about-candid.jpg";
import cecilia from "@/assets/cecilia.jpg";
import cecilia2 from "@/assets/cecilia-2.jpg";
import cecilia3 from "@/assets/cecilia-3.jpg";
import cecilia4 from "@/assets/cecilia-4.jpg";
import practiceOffice from "@/assets/practice-office.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";

const focusAreas = [
  "Teaching counseling psychology",
  "Student mentorship",
  "Research supervision",
  "Mental health training",
  "Community counseling",
  "Academic advising",
];

const About = () => {
  return (
    <PageLayout breadcrumbs={[{ label: "About" }]}>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionHeading title="About Cecilia" centered={false} />
              <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                <p>
                  Cecilia Wambui Mboya is an experienced counseling psychologist and lecturer with over 12 years of experience in academia and mental health practice. She is dedicated to mentoring students, supervising research, providing therapy, and developing wellness programs for individuals and organizations.
                </p>
                <p>
                  Cecilia W. Mboya is the founder of Springboard Mental Health Counseling & Consultancy Ltd and a licensed counselor. She serves as the lead counselor at the Karen office location, offering professional support for individuals, families, and organizations.
                </p>
              </div>

              {/* Mission Quote */}
              <div className="mt-10 bg-card rounded-xl p-8 shadow-card border-l-4 border-primary">
                <Quote className="text-primary mb-3" size={28} />
                <p className="font-display text-lg italic text-foreground leading-relaxed">
                  "My mission is to empower individuals to achieve emotional wellness and personal growth through professional counseling and mentorship."
                </p>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[cecilia, cecilia2, cecilia3, cecilia4, aboutCandid, practiceOffice].map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Cecilia photo ${idx + 1}`}
                    className="rounded-2xl shadow-card w-full h-full object-cover aspect-[3/2] hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4">
                <img
                  src={heroPortrait}
                  alt="Cecilia portrait"
                  className="rounded-2xl shadow-card w-full h-full object-cover aspect-[4/3]"
                />
              </div>

              {/* Focus Areas */}
              <div className="bg-card rounded-xl p-8 shadow-card">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">Key Focus Areas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {focusAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mt-20 max-w-3xl mx-auto text-center">
            <SectionHeading title="Professional Philosophy" />
            <p className="font-body text-muted-foreground leading-relaxed">
              Cecilia's counseling approach is rooted in the belief that every individual has the inherent capacity for growth and healing. She integrates Person-Centered Therapy, Cognitive Behavioral Therapy, and mindfulness-based techniques to create a safe, non-judgmental space where clients can explore their challenges and develop resilience. Her academic work reflects this same philosophy—nurturing students to become competent, ethical mental health professionals.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
