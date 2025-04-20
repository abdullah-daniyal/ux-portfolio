import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import CursorTracer from "@/components/cursor-tracer"

export default function CaseStudy1() {
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
            <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm">
            <Link href="/#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      <main className="container py-8">
        {/* Case Study Header */}
        <div className="mb-12">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Personal UX Portfolio</h1>
          <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          <div className="flex flex-wrap gap-4 mb-6">
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
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl mb-8">
            <Image src="/portfolio-hero-image.jpg" alt="Personal Portfolio Project" fill className="object-cover" />
          </div>
          <div className="flex justify-end">
            <Button asChild>
              <Link href="https://abdullahdaniyal.vercel.app" target="_blank">
                Visit Live Website <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Overview with Enhanced Gradient */}
        <section className="mb-16 relative p-8 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-purple-100/20 rounded-3xl -z-10"></div>
          <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Problem Statement</h3>
              <p className="text-muted-foreground">
                My previous portfolio lacked a clear presentation of my UX process and didn't effectively showcase my
                design skills. It was also not optimized for potential employers and clients to quickly understand my
                capabilities.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Project Goals</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Create a portfolio that clearly demonstrates my UX design process</li>
                <li>Showcase my projects in a visually appealing way</li>
                <li>Improve navigation and user flow</li>
                <li>Ensure responsive design across all devices</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">My Role</h3>
              <p className="text-muted-foreground">
                I was the sole designer and developer for this project, responsible for all aspects from research and
                design to implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Research Phase */}
        <section className="mb-16 relative p-8 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/20 via-transparent to-transparent rounded-3xl -z-10"></div>
          <h2 className="text-2xl font-bold mb-6">Research Phase</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Methods Used</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Competitive analysis of 10+ UX designer portfolios</li>
                <li>User interviews with 5 hiring managers and recruiters</li>
                <li>Survey of 15 fellow designers for peer feedback</li>
                <li>Creation of 2 user personas representing potential employers</li>
              </ul>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-md mt-6">
                <Image src="/ux-research-methods.jpg" alt="Research Methods" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Key Insights</h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <p className="font-medium">Hiring managers spend less than 2 minutes on initial portfolio review</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    This led me to prioritize clear navigation and concise project summaries on the homepage.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="font-medium">Case studies with clear problem-solution frameworks are preferred</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    I structured my case studies to clearly highlight problems, processes, and outcomes.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="font-medium">Visual evidence of the design process is highly valued</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    I incorporated sketches, wireframes, and iterations to showcase my thought process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process with Enhanced Gradient */}
        <section className="mb-16 relative p-8 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary/10 to-purple-100/20 rounded-3xl -z-10"></div>
          <h2 className="text-2xl font-bold mb-6">Design Process</h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Sketches & Wireframes</h3>
                <p className="text-muted-foreground">
                  I began with low-fidelity sketches to explore different layouts and information architecture. After
                  several iterations, I moved to digital wireframes to refine the structure and flow.
                </p>
                <p className="text-muted-foreground">
                  The wireframes helped me test different navigation patterns and content hierarchies before committing
                  to a visual design.
                </p>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image src="/wireframes-sketches.jpg" alt="Wireframes" fill className="object-cover" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-md order-2 md:order-1">
                <Image src="/prototyping-testing.jpg" alt="Prototypes" fill className="object-cover" />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-lg font-semibold">Prototyping & Testing</h3>
                <p className="text-muted-foreground">
                  I created interactive prototypes in Figma to test the user flow and gather feedback. I conducted
                  usability testing with 6 participants, including designers and potential employers.
                </p>
                <p className="text-muted-foreground">
                  Key findings from testing led to improvements in navigation, case study structure, and visual
                  hierarchy.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Tools Used</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 p-3 border rounded-lg">
                  <Image src="/figma-icon.jpg" alt="Figma" width={24} height={24} />
                  <span>Figma</span>
                </div>
                <div className="flex items-center gap-2 p-3 border rounded-lg">
                  <Image src="/adobe-xd-icon.jpg" alt="Adobe XD" width={24} height={24} />
                  <span>Adobe XD</span>
                </div>
                <div className="flex items-center gap-2 p-3 border rounded-lg">
                  <Image src="/photoshop-icon.jpg" alt="Photoshop" width={24} height={24} />
                  <span>Photoshop</span>
                </div>
                <div className="flex items-center gap-2 p-3 border rounded-lg">
                  <Image src="/nextjs-icon.jpg" alt="Next.js" width={24} height={24} />
                  <span>Next.js</span>
                </div>
                <div className="flex items-center gap-2 p-3 border rounded-lg">
                  <Image src="/tailwind-icon.jpg" alt="Tailwind CSS" width={24} height={24} />
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Outcome */}
        <section className="mb-16 relative p-8 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 via-transparent to-indigo-100/20 rounded-3xl -z-10"></div>
          <h2 className="text-2xl font-bold mb-6">Final Outcome</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/portfolio-final-homepage.jpg"
                  alt="Final Design - Homepage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                <Image src="/portfolio-final-about.jpg" alt="Final Design - About" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/portfolio-final-casestudy.jpg"
                  alt="Final Design - Case Study"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Design Decisions</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium">Clean, Minimalist Aesthetic</h4>
                  <p className="text-muted-foreground">
                    I chose a minimalist design to keep the focus on my work. The clean layout ensures that projects and
                    case studies stand out without distractions.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Intuitive Navigation</h4>
                  <p className="text-muted-foreground">
                    Based on user testing, I implemented a simple navigation structure that allows visitors to quickly
                    access the most important sections of the portfolio.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Visual Hierarchy</h4>
                  <p className="text-muted-foreground">
                    I used typography, spacing, and color to create a clear visual hierarchy that guides visitors
                    through the content in a logical order.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Responsive Design</h4>
                  <p className="text-muted-foreground">
                    The portfolio is fully responsive, ensuring a seamless experience across all devices from mobile
                    phones to large desktop screens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection with Enhanced Gradient */}
        <section className="mb-16 relative p-8 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-purple-100/20 rounded-3xl -z-10"></div>
          <h2 className="text-2xl font-bold mb-6">Reflection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Challenges Faced</h3>
              <p className="text-muted-foreground">
                The biggest challenge was balancing comprehensive case studies with a clean, uncluttered design. I also
                struggled with how to present technical information in an accessible way for non-technical recruiters.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What I Learned</h3>
              <p className="text-muted-foreground">
                This project reinforced the importance of user testing at every stage. I also improved my skills in
                responsive design and learned new techniques for visual storytelling in case studies.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Future Improvements</h3>
              <p className="text-muted-foreground">
                In the future, I plan to add more interactive elements to showcase my projects, implement dark mode, and
                create a more robust filtering system as my portfolio grows.
              </p>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="border-t pt-12">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold">Next Case Study</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Check out my work on Pixfolio, a digital marketing platform focused on UI/UX services.
            </p>
            <Button asChild size="lg">
              <Link href="/case-study-2">View Pixfolio Case Study</Link>
            </Button>
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
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  About Me
                </Link>
                <Link href="/#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
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
                <Link href="/#contact">Get in Touch</Link>
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
