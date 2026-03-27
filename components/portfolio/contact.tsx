"use client"

import { useState } from "react"
import { Mail, Github, Linkedin, MapPin, Send, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import emailjs from "@emailjs/browser"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kossoufranck6@gmail.com",
    href: "mailto:kossoufranck6@gmail.com",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Benin, Abomey-calavi",
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Dieudonne6",
    href: "https://github.com/Dieudonne6/",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })


const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID!,
    process.env.NEXT_PUBLIC_TEMPLATE_ID!,
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    process.env.NEXT_PUBLIC_PUBLIC_KEY!
  )
  .then(() => {
    alert("Message envoyé avec succès ✅")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  })
  .catch((error) => {
    console.error(error)
    alert("Erreur lors de l'envoi ❌")
  })
}

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">{"Contact"}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
            Me contacter
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Vous avez un projet en tete ou une opportunite a discuter ?
            N&apos;hesitez pas a me contacter.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Informations
            </h3>

            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Suivez-moi sur les reseaux
              </p>
              <div className="flex gap-3">
                <Link
                  href="https://github.com/Dieudonne6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="mailto:kossoufranck6@gmail.com"
                  className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 bg-card border border-border rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Envoyez-moi un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Decrivez votre projet ou opportunite..."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
