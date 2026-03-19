import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Clock, Car, Bus, Accessibility } from "lucide-react";
import practiceOffice from "@/assets/practice-office.jpg";

const Practice = () => {
  return (
    <PageLayout breadcrumbs={[{ label: "Professional Practice" }]}>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Springboard Mental Health Counseling & Consultancy Ltd"
            subtitle="A private practice offering professional mental health services, therapy, counseling, and consultancy to individuals, families, groups, and organizations."
          />

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            <div>
              <img
                src={practiceOffice}
                alt="Springboard Mental Health office"
                className="rounded-2xl shadow-card w-full object-cover aspect-video mb-8"
              />

              <div className="bg-card rounded-xl p-8 shadow-card space-y-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    To provide accessible, evidence-based mental health services that empower individuals and communities to achieve holistic well-being and resilience.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Approach</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    We combine integrative counseling techniques with a client-centered philosophy, ensuring that each individual receives personalized care tailored to their unique needs and circumstances.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Location Details */}
              <div className="bg-card rounded-xl p-8 shadow-card">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-primary" /> Location
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  Springboard Mental Health Counseling & Consultancy Ltd<br />
                  Dagoretti Road, Karen<br />
                  Nairobi, Kenya
                </p>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.913851201699!2d36.7461!3d-1.3107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a3b1f5e83a5%3A0x1c36c9c3f3f8c2d3!2sSpringboard%20Mental%20Health%20Counseling%20%26%20Consultancy%20Ltd!5e0!3m2!1sen!2ske!4v1700353959610!5m2!1sen!2ske"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Springboard Mental Health location"
                />
              </div>

              {/* Getting Here */}
              <div className="bg-card rounded-xl p-8 shadow-card space-y-4">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Getting Here</h3>
                <div className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                  <Car size={18} className="shrink-0 text-primary mt-0.5" />
                  <p><strong className="text-foreground">By Car:</strong> Ample parking available on premises. Located off Dagoretti Road near Karen Shopping Centre.</p>
                </div>
                <div className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                  <Bus size={18} className="shrink-0 text-primary mt-0.5" />
                  <p><strong className="text-foreground">Public Transport:</strong> Accessible via matatu routes serving the Karen area from Nairobi CBD.</p>
                </div>
                <div className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                  <Accessibility size={18} className="shrink-0 text-primary mt-0.5" />
                  <p><strong className="text-foreground">Accessibility:</strong> Ground-floor office with wheelchair-accessible entrance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Practice;
