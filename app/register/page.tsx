"use client"

import React from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, MapPin, Users, Heart, Clock, UtensilsCrossed } from "lucide-react"
import { EVENT_SCHEDULE } from "@/lib/constants"
import { config } from "@/lib/config"
import { useState } from "react"

const SESSION_OPTIONS = [
  { value: "full", label: "Full conference (both days)" },
  { value: "cantu", label: "Thu 7:30 PM – Francisco Cantú (Opening Speaker)" },
  { value: "golash-boza", label: "Fri 1:00 PM – Tanya Golash-Boza" },
  { value: "vazquez-scolari", label: "Fri 2:20 PM – Laurie Vázquez Scolari" },
  { value: "blodgett", label: "Fri 3:20 PM – Lauren Blodgett" },
  { value: "adeyemo", label: "Fri 7:30 PM – Dr. Lola Adeyemo (Keynote Speaker)" },
  { value: "panels", label: "Panel discussions" },
  { value: "other", label: "Other / Not sure yet" },
]

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "student",
    institutionalAffiliation: "",
    sessionsOfInterest: [] as string[],
    howHeard: "",
    agreeToTerms: false,
    agreeToCodeOfConduct: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch(config.googleSheetScriptUrl, {
        method: "POST",
        mode: "no-cors", // Google Apps Script requires no-cors for public access
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone || "",
          role: formData.role,
          institutionalAffiliation: formData.institutionalAffiliation || "",
          sessionsOfInterest: formData.sessionsOfInterest.join(", ") || "",
          howHeard: formData.howHeard || "",
          agreeToTerms: formData.agreeToTerms ? "Yes" : "No",
          agreeToCodeOfConduct: formData.agreeToCodeOfConduct ? "Yes" : "No",
        }),
      })

      // With no-cors mode, we can't read the response, so assume success
      // The Google Script will handle the submission
      setSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("There was an error submitting your registration. Please try again or contact pac@principia.edu for assistance.")
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#F8F4EC] pt-24 pb-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-[#E5DED3]">
              <div className="w-20 h-20 bg-[#788668]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-[#788668]" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4">
                Thank You for Registering!
              </h1>
              <p className="text-lg text-[#5c5c5c] mb-6">
                We are thrilled to have you join us for Journeys of Hope. A confirmation email has been sent to your inbox with all the event details.
              </p>
              <div className="bg-[#F8F4EC] rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-[#788668] mb-3">Event Details</h3>
                <p className="text-[#3D3D3D] font-medium">April 2–3, 2026</p>
                <p className="text-[#3D3D3D]">Wanamaker Hall, Principia College</p>
                <div className="mt-4 pt-4 border-t border-[#E5DED3]">
                  <p className="text-sm font-medium text-[#788668] mb-2">Schedule</p>
                  {EVENT_SCHEDULE.map((item, index) => (
                    <p key={index} className="text-sm text-[#3D3D3D]">
                      {item.day} {item.time} – {item.speaker}
                      {item.role ? ` (${item.role})` : ""}
                    </p>
                  ))}
                </div>
              </div>
              <Button
                asChild
                className="bg-[#788668] hover:bg-[#788668]/90 text-white px-8 py-3"
              >
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F4EC]">
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-[#A3C2B8]/20 to-[#F8F4EC]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block bg-[#788668]/10 text-[#788668] px-4 py-2 rounded-full text-sm font-medium mb-6">
              Join Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D3D3D] mb-6 text-balance">
              Register for{" "}
              <span className="text-[#788668]">Journeys of Hope</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5c5c5c] max-w-2xl mx-auto mb-8">
              Be part of a meaningful dialogue about immigration, hope, and the human experience. Reserve your spot today.
            </p>

            {/* Event Info Cards */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-[#E5DED3]">
                <Calendar className="w-5 h-5 text-[#D9A87E]" />
                <span className="text-[#3D3D3D] font-medium">April 2–3, 2026</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-[#E5DED3]">
                <MapPin className="w-5 h-5 text-[#D9A87E]" />
                <span className="text-[#3D3D3D] font-medium">Wannamaker Hall, Principia College</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-[#E5DED3]">
                <Users className="w-5 h-5 text-[#D9A87E]" />
                <span className="text-[#3D3D3D] font-medium">Free Admission</span>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-8 md:py-12">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5DED3]">
              <h2 className="text-2xl font-bold text-[#3D3D3D] mb-2 flex items-center gap-2">
                <Clock className="w-6 h-6 text-[#788668]" />
                Event Schedule
              </h2>
              <p className="text-[#5c5c5c] mb-6">
                Join us across two days of powerful conversations.
              </p>
              <div className="space-y-3">
                {EVENT_SCHEDULE.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3 border-b border-[#E5DED3] last:border-0"
                  >
                    <div className="font-medium text-[#3D3D3D]">{item.speaker}</div>
                    <div className="flex items-center gap-2 text-[#5C5C5C] text-sm">
                      <span>{item.day}</span>
                      <span>·</span>
                      <span>{item.time}</span>
                      {item.role && (
                        <>
                          <span>·</span>
                          <span className="text-[#788668] font-medium">{item.role}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Event Information - Meals, audience, housing, etc. */}
        <section className="py-8 md:py-12">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5DED3]">
              <h2 className="text-2xl font-bold text-[#3D3D3D] mb-2 flex items-center gap-2">
                <UtensilsCrossed className="w-6 h-6 text-[#788668]" />
                Event Information
              </h2>
              <div className="space-y-6 text-[#3D3D3D] text-sm mt-6">
                <div>
                  <p className="font-semibold text-[#788668] mb-1">Meals Provided</p>
                  <ul className="list-disc list-inside space-y-0.5">
                    <li>Thursday: Lunch and Dinner</li>
                    <li>Friday: Breakfast, Lunch, and Dinner</li>
                    <li>Saturday: Breakfast</li>
                  </ul>
                  <p className="mt-1 text-[#5c5c5c]">Note: Snacks will not be provided.</p>
                  <p className="mt-1 text-[#5c5c5c]">Participants may stay Thursday and Friday night.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#788668] mb-1">Type of audience</p>
                  <p>Community members, High school students, College students and Faculty, Principia Alumni.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#788668] mb-1">Housing and Eligibility</p>
                  <p>High school students and Community members are not permitted to stay on campus.</p>
                </div>
                <div>
                  <p className="font-semibold text-[#788668] mb-1">Additional Information</p>
                  <p>Registered participants will receive event merchandise.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#E5DED3]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-2">
                Registration Form
              </h2>
              <p className="text-[#5c5c5c] mb-8">
                Please fill out the form below to secure your spot at the conference.
              </p>

              {/* Personal Information */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-[#788668] mb-4 pb-2 border-b border-[#E5DED3]">
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="fullName" className="text-[#3D3D3D]">
                      Full Name <span className="text-[#D9A87E]">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="border-[#E5DED3] focus:border-[#788668] focus:ring-[#788668]"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#3D3D3D]">
                      Email Address <span className="text-[#D9A87E]">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-[#E5DED3] focus:border-[#788668] focus:ring-[#788668]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#3D3D3D]">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-[#E5DED3] focus:border-[#788668] focus:ring-[#788668]"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* I am registering as (before institutional affiliation) */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-[#788668] mb-4 pb-2 border-b border-[#E5DED3]">
                  Registration Type
                </h3>
                <div className="space-y-3">
                  <Label className="text-[#3D3D3D]">I am registering as a:</Label>
                  <RadioGroup
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3"
                  >
                    {[
                      { value: "student", label: "Student" },
                      { value: "faculty-staff", label: "Faculty/Staff" },
                      { value: "community", label: "Community Member" },
                      { value: "principia-alumni", label: "Principia Alumni" },
                    ].map((option) => (
                      <div key={option.value} className="flex items-center">
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="border-[#788668] text-[#788668]"
                        />
                        <Label
                          htmlFor={option.value}
                          className="ml-2 text-[#3D3D3D] cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              {/* Institutional Affiliation */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-[#788668] mb-4 pb-2 border-b border-[#E5DED3]">
                  Institutional Affiliation
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="institutionalAffiliation" className="text-[#3D3D3D]">
                    Please indicate your home institution if applicable. (Community members may leave this blank.)
                  </Label>
                  <Input
                    id="institutionalAffiliation"
                    value={formData.institutionalAffiliation}
                    onChange={(e) => setFormData({ ...formData, institutionalAffiliation: e.target.value })}
                    className="border-[#E5DED3] focus:border-[#788668] focus:ring-[#788668]"
                    placeholder="e.g., Principia College, High School Name"
                  />
                </div>
              </div>

              {/* Session(s) of Interest - multi-select */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-[#788668] mb-4 pb-2 border-b border-[#E5DED3]">
                  Session(s) of Interest
                </h3>
                <div className="space-y-3">
                  <Label className="text-[#3D3D3D]">
                    Which session(s) are you interested in? (Select all that apply)
                  </Label>
                  <div className="space-y-3">
                    {SESSION_OPTIONS.map((opt) => (
                      <div key={opt.value} className="flex items-center gap-3">
                        <Checkbox
                          id={`session-${opt.value}`}
                          checked={formData.sessionsOfInterest.includes(opt.value)}
                          onCheckedChange={(checked) => {
                            setFormData((prev) => ({
                              ...prev,
                              sessionsOfInterest: checked
                                ? [...prev.sessionsOfInterest, opt.value]
                                : prev.sessionsOfInterest.filter((v) => v !== opt.value),
                            }))
                          }}
                          className="border-[#788668] data-[state=checked]:bg-[#788668]"
                        />
                        <Label
                          htmlFor={`session-${opt.value}`}
                          className="cursor-pointer text-[#3D3D3D]"
                        >
                          {opt.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* How did you hear about us */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-[#788668] mb-4 pb-2 border-b border-[#E5DED3]">
                  Additional Information
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="howHeard" className="text-[#3D3D3D]">
                    How did you hear about Journeys of Hope?
                  </Label>
                  <Input
                    id="howHeard"
                    value={formData.howHeard}
                    onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
                    className="border-[#E5DED3] focus:border-[#788668] focus:ring-[#788668]"
                    placeholder="e.g., Social media, Friend, Campus flyer"
                  />
                </div>
              </div>

              {/* Participation Agreement - Code of Conduct */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#788668] mb-2">Participation Agreement</h3>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="codeOfConduct"
                    checked={formData.agreeToCodeOfConduct}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, agreeToCodeOfConduct: checked as boolean })
                    }
                    className="mt-1 border-[#788668] data-[state=checked]:bg-[#788668]"
                  />
                  <Label htmlFor="codeOfConduct" className="text-[#5c5c5c] leading-relaxed cursor-pointer">
                    All participants must agree to abide by Principia&apos;s{" "}
                    <a
                      href="https://www.principiacollege.edu/fs/resource-manager/view/e0fd4a66-45d7-4420-862e-1733bae7b8bb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#788668] hover:underline font-medium"
                    >
                      Code of Conduct
                    </a>
                    . <span className="text-[#D9A87E]">*</span>
                  </Label>
                </div>
              </div>

              {/* Terms */}
              <div className="mb-8">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, agreeToTerms: checked as boolean })
                    }
                    className="mt-1 border-[#788668] data-[state=checked]:bg-[#788668]"
                  />
                  <Label htmlFor="terms" className="text-[#5c5c5c] leading-relaxed cursor-pointer">
                    I agree to be photographed and/or recorded during the event, and I consent to the use of these materials for promotional purposes by PAC and Principia College. <span className="text-[#D9A87E]">*</span>
                  </Label>
                </div>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">{submitError}</p>
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                disabled={!formData.agreeToTerms || !formData.agreeToCodeOfConduct || !formData.fullName || !formData.email || isSubmitting}
                className="w-full bg-[#788668] hover:bg-[#788668]/90 text-white py-6 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Complete Registration"}
              </Button>

              <p className="text-center text-sm text-[#5c5c5c] mt-4">
                By registering, you will receive event updates and reminders via email.
              </p>
            </form>

            {/* Contact Info */}
            <div className="mt-8 text-center">
              <p className="text-[#5c5c5c]">
                Questions about registration?{" "}
                <a href="mailto:pac@principia.edu" className="text-[#788668] hover:underline font-medium">
                  Contact us at pac@principia.edu
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
