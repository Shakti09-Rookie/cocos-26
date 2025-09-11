"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Star, Users, Award, Leaf } from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [showPhoneNumbers, setShowPhoneNumbers] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-card to-muted py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Heart className="w-16 h-16 text-accent mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            About Coco's Nails & Beauty Station
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Where beauty is more than just a service—it's an experience
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground leading-relaxed mb-8 text-pretty">
              At Coco's Nails & Beauty Station, beauty is more than just a service—it's an experience. We believe every
              client deserves to feel confident, cared for, and truly pampered. From the perfect manicure to soothing
              skincare and indulgent treatments, we're here to help you shine inside and out.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-8 text-pretty">
              Our salon combines modern trends with timeless techniques, ensuring that every detail—from the colours you
              choose to the finish you leave with—is tailored to your style. With a passionate team of trained
              professionals, we focus not just on delivering high-quality beauty services, but also on creating a warm
              and relaxing atmosphere where you feel at home.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-12 text-pretty">
              Whether you're here for a quick touch-up, a glamorous transformation, or a moment of self-care, Coco's
              Nails & Beauty Station is your go-to destination for elegance, relaxation, and a little sparkle in your
              everyday.
            </p>

            <div className="text-center bg-primary/5 p-8 rounded-lg border border-primary/20">
              <p className="text-2xl font-semibold text-primary mb-2">
                Because at Coco's, beauty isn't just done—it's celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4 text-balance">
              What Makes Us Special
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our commitment to excellence, attention to detail, and passion for beauty sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border text-center">
              <CardContent className="pt-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Expert Team</h3>
                <p className="text-muted-foreground text-pretty">
                  Our skilled professionals combine expertise with passion for detail, ensuring every visit is
                  exceptional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="pt-8">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Quality Promise</h3>
                <p className="text-muted-foreground text-pretty">
                  We use only the finest products and latest techniques to deliver results that exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="pt-8">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Relaxing Atmosphere</h3>
                <p className="text-muted-foreground text-pretty">
                  Our warm, welcoming environment is designed to help you unwind and feel completely at home.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Complete Service Menu
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              At Coco's, we specialize in a wide range of services designed to bring out your best
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border">
              <Sparkles className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Hair Treatments</h3>
                <p className="text-muted-foreground text-pretty">
                  Professional hair treatments that nourish, style, and transform your look with expert care and
                  attention.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border">
              <Heart className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Bridal Makeup</h3>
                <p className="text-muted-foreground text-pretty">
                  Specially crafted bridal makeup services to make your big day truly unforgettable and picture-perfect.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border">
              <Star className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Nails, Manicure & Pedicure</h3>
                <p className="text-muted-foreground text-pretty">
                  Complete nail care services for that perfect polished look, from classic manicures to luxurious
                  pedicures.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border">
              <Sparkles className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Facial Treatments</h3>
                <p className="text-muted-foreground text-pretty">
                  Rejuvenating facial treatments to refresh your skin and help you glow from within with natural
                  radiance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border">
              <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Permanent Makeup</h3>
                <p className="text-muted-foreground text-pretty">
                  Long-lasting beauty solutions including eyebrow enhancement and lip tint for effortless, everyday
                  elegance.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20 text-center">
            <p className="text-lg text-foreground mb-4 text-pretty">
              Our team of skilled professionals combines expertise with a passion for detail, ensuring every visit is a
              relaxing, pampering experience. Step into our salon and step out feeling glamorous, confident, and
              refreshed.
            </p>
            <p className="text-xl font-semibold text-primary">
              At Coco's Nails & Beauty Station, beauty isn't just a service—it's a promise.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Experience the Coco's Difference
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
            Ready to celebrate your beauty? Book your appointment and discover why our clients keep coming back.
          </p>
          <div className="relative inline-block">
            <Button
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setShowPhoneNumbers(!showPhoneNumbers)}
            >
              Call to Book Appointment
            </Button>
            {showPhoneNumbers && (
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg p-4 shadow-lg z-50 min-w-max">
                <div className="flex flex-col gap-2 text-center">
                  <p className="font-semibold text-card-foreground">Call us now:</p>
                  <a href="tel:8178316611" className="text-primary hover:text-primary/80 font-medium">
                    8178316611
                  </a>
                  <a href="tel:9810613222" className="text-primary hover:text-primary/80 font-medium">
                    9810613222
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
