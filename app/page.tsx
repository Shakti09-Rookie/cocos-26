"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Heart, Star, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [showHeroPhoneNumbers, setShowHeroPhoneNumbers] = useState(false)
  const [showCtaPhoneNumbers, setShowCtaPhoneNumbers] = useState(false)

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-card to-muted py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4 sm:mb-6">
            <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-accent mx-auto mb-3 sm:mb-4" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance px-2">
            Welcome to Coco's Nails & Beauty Station
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-pretty px-4">
            Where beauty meets elegance. Experience luxury treatments in a serene atmosphere designed to make you shine
            inside and out.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <div className="relative">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                onClick={() => setShowHeroPhoneNumbers(!showHeroPhoneNumbers)}
              >
                Call to Book Appointment
              </Button>
              {showHeroPhoneNumbers && (
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg p-3 sm:p-4 shadow-lg z-10 min-w-max">
                  <div className="flex flex-col gap-2 text-center">
                    <p className="font-semibold text-card-foreground text-sm sm:text-base">Call us now:</p>
                    <a
                      href="tel:8178316611"
                      className="text-primary hover:text-primary/80 font-medium text-sm sm:text-base"
                    >
                      8178316611
                    </a>
                    <a
                      href="tel:9810613222"
                      className="text-primary hover:text-primary/80 font-medium text-sm sm:text-base"
                    >
                      9810613222
                    </a>
                  </div>
                </div>
              )}
            </div>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent w-full sm:w-auto"
              onClick={scrollToServices}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance px-2">
              Our Signature Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
              Discover our range of premium beauty treatments designed to enhance your natural radiance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                  backgroundImage: `url('/elegant-hair-styling-salon-treatment.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <CardHeader className="relative z-10 p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground text-lg sm:text-xl">Hair Treatments</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Nourish, style, and transform your hair with our expert treatments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                  backgroundImage: `url('/bridal-makeup-artist-beauty-salon.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <CardHeader className="relative z-10 p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <CardTitle className="text-card-foreground text-lg sm:text-xl">Bridal Makeup</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Make your special day unforgettable with our bridal makeup artistry
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{
                  backgroundImage: `url('/beautiful-nail-art-manicure-pedicure-designs.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <CardHeader className="relative z-10 p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground text-lg sm:text-xl">Nails & Pedicure</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Perfect polished looks with our professional nail and pedicure services
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                  backgroundImage: `url('/facial-treatment-spa-skincare-relaxation.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <CardHeader className="relative z-10 p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <CardTitle className="text-card-foreground text-lg sm:text-xl">Facial Treatments</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Refresh, rejuvenate, and glow from within with our facial treatments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                  backgroundImage: `url('/permanent-makeup-eyebrow-lip-tint-beauty.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <CardHeader className="relative z-10 p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-card-foreground text-lg sm:text-xl">Permanent Makeup</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Effortless beauty that lasts with our eyebrow and lip tint services
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/luxury-salon-interior-elegant-spa.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 sm:mb-6 text-balance px-2">
            Ready to Experience Luxury?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8 text-pretty px-4">
            Book your appointment today and discover why Coco's is the premier destination for beauty and wellness.
          </p>
          <div className="relative inline-block px-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto"
              onClick={() => setShowCtaPhoneNumbers(!showCtaPhoneNumbers)}
            >
              Call to Book Your Visit
            </Button>
            {showCtaPhoneNumbers && (
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg p-3 sm:p-4 shadow-lg z-50 min-w-max">
                <div className="flex flex-col gap-2 text-center">
                  <p className="font-semibold text-card-foreground text-sm sm:text-base">Call us now:</p>
                  <a
                    href="tel:8178316611"
                    className="text-primary hover:text-primary/80 font-medium text-sm sm:text-base"
                  >
                    8178316611
                  </a>
                  <a
                    href="tel:9810613222"
                    className="text-primary hover:text-primary/80 font-medium text-sm sm:text-base"
                  >
                    9810613222
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2 text-base sm:text-lg">Call Us</h3>
              <p className="text-muted-foreground text-sm sm:text-base">8178316611</p>
              <p className="text-muted-foreground text-sm sm:text-base">9810613222</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2 text-base sm:text-lg">Visit Us</h3>
              <p className="text-muted-foreground text-sm sm:text-base">B-49/A Rajan Babu Road,</p>
              <p className="text-muted-foreground text-sm sm:text-base">Near SBI ATM, Adarsh Nagar,</p>
              <p className="text-muted-foreground text-sm sm:text-base">New Delhi - 110033</p>
            </div>
            <div className="flex flex-col items-center p-4 sm:col-span-2 md:col-span-1">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
              <h3 className="font-semibold text-card-foreground mb-2 text-base sm:text-lg">Hours</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Monday to Sunday:</p>
              <p className="text-muted-foreground text-sm sm:text-base">10:30am - 8:40pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
