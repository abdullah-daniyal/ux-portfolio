import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import CursorTracer from "@/components/cursor-tracer"

export default function CaseStudy2() {
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
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Pixfolio - Digital Marketing Platform</h1>
          <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          <div className="flex flex-wrap gap-4 mb-6">
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
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl mb-8">
            <Image src="/digital-marketing-hero.jpg" alt="Pixfolio Project" fill className="object-cover" />
          </div>
          <div className="flex justify-end">
            <Button asChild>
              <Link href="https://pixfolio.us" target="_blank">
                Visit Live Website <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Overview with Enhanced Gradient */}
        <section className="mb-16 relative p-8 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-blue-100/20 rounded-3xl -z-10"></div>
          <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Problem Statement</h3>
              <p className="text-muted-foreground">
                Digital marketing agencies specializing in UI/UX often struggle to effectively showcase their services
                and portfolio in a way that demonstrates their design expertise. Pixfolio needed a platform that would
                both showcase their work and serve as a living example of their design capabilities.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Project Goals</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Create an intuitive platform that showcases UI/UX services</li>
                <li>Design a visually striking interface that reflects brand identity</li>
                <li>Implement a portfolio system that highlights client success stories</li>
                <li>Optimize the user journey for potential clients</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">My Role</h3>
              <p className="text-muted-foreground">
                As the lead UX designer, I was responsible for user research, information architecture, wireframing,
                prototyping, and collaborating with developers for implementation. I worked closely with stakeholders to
                ensure the platform met business objectives while delivering an exceptional user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Research Phase */}
        <section className="mb-16 relative p-8 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-bl from-indigo-100/20 via-transparent to-transparent rounded-3xl -z-10"></div>
          <h2 className="text-2xl font-bold mb-6">Research Phase</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Methods Used</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Competitive analysis of 8 digital marketing agencies</li>
                <li>User interviews with 12 potential clients</li>
                <li>Heuristic evaluation of existing marketing websites</li>
                <li>Creation of user personas representing different client types</li>
                <li>Journey mapping for client acquisition process</li>
              </ul>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-md mt-6">
                <Image src="/marketing-research-methods.jpg" alt="Research Methods" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Key Insights</h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <p className="font-medium">Clients value seeing the design process, not just final results</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    This led to creating detailed case studies that showcase the entire design journey.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="font-medium">
                    First impressions are critical - 75% of users decide whether to stay within 10 seconds
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    I prioritized a visually striking hero section with clear value proposition.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="font-medium">Potential clients want to see specific industry expertise</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We organized portfolio items by industry to help visitors quickly find relevant examples.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="font-medium">Users expect multiple contact options with varying levels of commitment</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Implemented both quick contact forms and detailed project inquiry options.
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
                <h3 className="text-lg font-semibold">Information Architecture & Wireframes</h3>
                <p className="text-muted-foreground">
                  Based on research insights, I developed a site map and information architecture that prioritized
                  showcasing services, portfolio items, and easy contact options. I created low-fidelity wireframes to
                  establish the basic layout and content hierarchy.
                </p>
                <p className="text-muted-foreground">
                  The wireframes went through several iterations based on stakeholder feedback, focusing on creating a
                  clear user journey from awareness to conversion.
                </p>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image src="/marketing-wireframes.jpg" alt="Wireframes" fill className="object-cover" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-md order-2 md:order-1">
                <Image src="/marketing-mockups.jpg" alt="High-fidelity Mockups" fill className="object-cover" />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-lg font-semibold">Visual Design & Prototyping</h3>
                <p className="text-muted-foreground">
                  I developed a visual design system that reflected the brand's creative and professional identity. This
                  included a modern color palette, typography hierarchy, and custom illustrations.
                </p>
                <p className="text-muted-foreground">
                  High-fidelity mockups were created in Figma, followed by interactive prototypes to test user flows and
                  interactions. I conducted usability testing with 8 participants to identify and address any usability
                  issues.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Usability Testing & Iteration</h3>
                <p className="text-muted-foreground">Usability testing revealed several key insights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Users wanted more detailed information about the service process</li>
                  <li>The contact form was too lengthy for initial inquiries</li>
                  <li>Portfolio filtering needed improvement for better discoverability</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Based on these findings, I made several iterations to the design, including simplifying the contact
                  form, adding a service process section, and improving the portfolio filtering system.
                </p>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image src="/usability-testing.jpg" alt="Usability Testing" fill className="object-cover" />
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
                  <Image src="/illustrator-icon.jpg" alt="Adobe Illustrator" width={24} height={24} />
                  <span>Illustrator</span>
                </div>
                <div className="flex items-center gap-2 p-3 border rounded-lg">
                  <Image src="/photoshop-icon.jpg" alt="Photoshop" width={24} height={24} />
                  <span>Photoshop</span>
                </div>
                <div className="flex items-center gap-2 p-3 border rounded-lg">
                  <Image src="/webflow-icon.jpg" alt="Webflow" width={24} height={24} />
                  <span>Webflow</span>
                </div>
                <div className="flex items-center gap-2 p-3 border rounded-lg">
                  <Image src="/hotjar-icon.jpg" alt="Hotjar" width={24} height={24} />
                  <span>Hotjar</span>
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
                  src="/marketing-final-homepage.jpg"
                  alt="Final Design - Homepage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/marketing-final-services.jpg"
                  alt="Final Design - Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/marketing-final-portfolio.jpg"
                  alt="Final Design - Portfolio"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Design Decisions</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium">Bold Visual Identity</h4>
                  <p className="text-muted-foreground">
                    I implemented a bold, modern aesthetic with vibrant accent colors to reflect the creative nature of
                    the agency while maintaining a professional appearance.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Case Study Format</h4>
                  <p className="text-muted-foreground">
                    Portfolio items were presented as in-depth case studies that showcase the entire design process,
                    from problem definition to final solution, demonstrating the agency's expertise.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Progressive Disclosure</h4>
                  <p className="text-muted-foreground">
                    I used progressive disclosure techniques to present information in digestible chunks, allowing users
                    to dive deeper into topics they're interested in without overwhelming them initially.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Multi-step Contact Process</h4>
                  <p className="text-muted-foreground">
                    Implemented a multi-step contact process that starts with a simple inquiry and progressively
                    collects more information as the user moves through the funnel, reducing initial friction.
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
                The biggest challenge was balancing visual impact with usability. As a creative agency website, there
                was pressure to make it visually stunning, but we needed to ensure it remained highly usable and
                accessible.
              </p>
              <p className="text-muted-foreground">
                Another challenge was creating a portfolio system that could showcase diverse projects while maintaining
                a consistent presentation format.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What I Learned</h3>
              <p className="text-muted-foreground">
                This project reinforced the importance of user testing throughout the design process. Several
                assumptions we made early on were challenged by user feedback, leading to significant improvements.
              </p>
              <p className="text-muted-foreground">
                I also gained valuable experience in designing for conversion optimization while maintaining design
                integrity.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Future Improvements</h3>
              <p className="text-muted-foreground">
                Based on post-launch analytics, we plan to implement several improvements:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>A more robust filtering system for the portfolio</li>
                <li>Personalized content based on user behavior</li>
                <li>Enhanced mobile experience with touch-optimized interactions</li>
                <li>Integration with a CRM system for better lead tracking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="border-t pt-12">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold">Previous Case Study</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Check out my work on my personal UX portfolio redesign.
            </p>
            <Button asChild size="lg">
              <Link href="/case-study-1">View Portfolio Case Study</Link>
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
