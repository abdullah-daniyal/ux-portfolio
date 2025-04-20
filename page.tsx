import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Github, Linkedin, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import CursorTracer from "@/components/cursor-tracer"
import TextRandomizer from "@/components/text-randomizer"
import ValueCircles from "@/components/value-circles"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <CursorTracer />

      {/* Background Gradients */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-gradient-to-r from-purple-100/30 to-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[60vw] h-[40vh] bg-gradient-to-l from-indigo-100/30 to-pink-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/4"></div>
        <div className="absolute top-1/2 right-1/4 w-[30vw] h-[30vh] bg-gradient-to-b from-cyan-100/20 to-teal-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Abdullah Daniyal</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      <main className="container py-8 space-y-24">
        {/* Hero Section with Enhanced Gradient */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center space-y-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/15 rounded-3xl -z-10"></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl -z-10">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>
          </div>
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Creating{" "}
              <TextRandomizer
                words={["Meaningful", "Intuitive", "Beautiful", "Engaging", "Impactful"]}
                className="text-primary"
              />{" "}
              Digital Experiences
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              UX Designer passionate about crafting intuitive and beautiful user experiences that solve real problems.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#about">About Me</Link>
            </Button>
          </div>
          <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image src="/ux-dashboard-hero.jpg" alt="UX Design Work" fill className="object-cover" />
          </div>
        </section>

        {/* About Me Section with Value Circles */}
        <section id="about" className="py-12 scroll-mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/30 via-primary/10 to-blue-100/30 rounded-3xl -z-10"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side with value circles */}
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <ValueCircles />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">About Me</h2>
                <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
              </div>
              <p className="text-lg text-muted-foreground">
                Hello! I'm Abdullah Daniyal, a UX designer with a passion for creating intuitive and engaging digital
                experiences. Currently in my final year of Software Engineering at FAST NUCES, I've developed a deep
                love for UI/UX design.
              </p>
              <p className="text-lg text-muted-foreground">
                My design philosophy centers around user-centered design principles. I believe that great design should
                be invisible, allowing users to accomplish their goals effortlessly while enjoying the journey.
              </p>
              <p className="text-lg text-muted-foreground">
                I approach each project with empathy and curiosity, seeking to understand user needs deeply before
                crafting solutions that are both functional and delightful.
              </p>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:contact@example.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section with Enhanced Gradient */}
        <section id="projects" className="py-12 scroll-mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-indigo-100/20 rounded-3xl -z-10"></div>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Case Studies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed explorations of my design process, from research to final implementation.
            </p>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          {/* Case Study 1 */}
          <div className="mb-24 space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-3xl -z-10"></div>
              <div className="space-y-6 order-2 md:order-1 p-6">
                <h3 className="text-2xl font-bold">Personal UX Portfolio</h3>
                <div className="flex gap-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    UX Design
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Web Development
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Responsive Design
                  </span>
                </div>
                <p className="text-muted-foreground">
                  A comprehensive redesign of my personal portfolio to better showcase my UX work and design process.
                </p>
                <Button asChild>
                  <Link href="/case-study-1">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="ml-4">
                  <Link href="https://abdullahdaniyal.vercel.app" target="_blank">
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                <Image src="/portfolio-showcase.jpg" alt="Personal Portfolio Project" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-primary/15 rounded-3xl -z-10"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image src="/digital-marketing-platform.jpg" alt="Pixfolio Project" fill className="object-cover" />
              </div>
              <div className="space-y-6 p-6">
                <h3 className="text-2xl font-bold">Pixfolio - Digital Marketing Platform</h3>
                <div className="flex flex-wrap gap-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    UI/UX
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Digital Marketing
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Web Platform
                  </span>
                </div>
                <p className="text-muted-foreground">
                  A digital marketing platform focused on UI/UX services, designed to showcase creative work and attract
                  clients.
                </p>
                <Button asChild>
                  <Link href="/case-study-2">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="ml-4">
                  <Link href="https://pixfolio.us" target="_blank">
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with Enhanced Engagement */}
        <section id="contact" className="py-16 scroll-mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-purple-100/30 rounded-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-gradient-to-tl from-blue-100/30 to-transparent rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-0 left-0 w-[30vw] h-[30vh] bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-3xl -z-10"></div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter">Get In Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
              </p>
              <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-8 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg">
              {/* Contact Form */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Send a Message</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full">
                    Send Message <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">contact@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <p className="text-muted-foreground">linkedin.com/in/abdullahdaniyal</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <p className="text-muted-foreground">github.com/abdullahdaniyal</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours. Looking forward to connecting with you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Large Black Footer */}
      <footer className="bg-black text-white mt-24 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold">Abdullah Daniyal</h3>
              <p className="text-gray-400 max-w-md">
                UX Designer passionate about creating intuitive and beautiful user experiences that solve real problems.
                Let's work together to bring your vision to life.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-white/20 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-white/20 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-white/20 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="mailto:contact@example.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-3">
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Me
                </Link>
                <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
                <Link href="/case-study-1" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio Case Study
                </Link>
                <Link href="/case-study-2" className="text-gray-400 hover:text-white transition-colors">
                  Pixfolio Case Study
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-3">
                <p className="text-gray-400">contact@example.com</p>
                <p className="text-gray-400">Lahore, Pakistan</p>
              </div>
              <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© {new Date().getFullYear()} Abdullah Daniyal. All rights reserved.</p>
            <p className="text-gray-400 text-sm">Designed and developed with passion</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
