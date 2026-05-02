'use client'

import { ArrowRight, Play } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">fs</span>
              </div>
              <span className="text-lg font-semibold">frameseek</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Capabilities
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <div className="flex items-center gap-3">
                <button className="text-sm font-medium border border-border px-4 py-2 rounded hover:bg-card transition-colors">
                  Sign in
                </button>
                <button className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded hover:opacity-90 transition-opacity">
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 sm:py-32 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Video Intelligence
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-pretty">
            Find your moments, not your files.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Search your entire video library using natural language. Upload once, search infinitely. Available on Windows and Mac.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              Get started free
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-border px-6 py-3 rounded font-medium hover:bg-card transition-colors flex items-center gap-2">
              <Play className="w-4 h-4" />
              Watch demo
            </button>
          </div>
        </div>
      </section>

      {/* Feature 1: Video Indexing */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Indexing
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Upload once. Index forever.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Drop your videos into frameseek and let AI analyze every frame. Our visual intelligence extracts objects, actions, text, and context — creating a searchable index of everything that happens in your footage.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Automatic scene detection and segmentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Multi-format support (MP4, MOV, MKV, and more)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Works offline for complete privacy</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded border border-border p-8 h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-20 h-20 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm">Upload videos to index</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Natural Language Search */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-card rounded border border-border p-8 h-96 flex items-center justify-center order-last md:order-first">
              <div className="text-center text-muted-foreground w-full">
                <div className="bg-secondary rounded-lg p-4 mb-4">
                  <p className="text-sm font-mono text-foreground">
                    Search: "red car passes by"
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="bg-secondary/50 rounded p-3 text-sm">Match 1 - 94%</div>
                  <div className="bg-secondary/50 rounded p-3 text-sm">Match 2 - 87%</div>
                  <div className="bg-secondary/50 rounded p-3 text-sm">Match 3 - 76%</div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Search
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Search like you speak.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Just describe what you&apos;re looking for. "Red car passes by me." "Someone wearing a blue jacket." "People laughing in the park." Our AI understands your intent and finds matching moments in seconds.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Semantic search — find by meaning, not keywords</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Confidence scores for relevance ranking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Instant results from your entire library</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Results & Export */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Results
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Quick clips, ready to share.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every search result comes with precise timestamps. Jump straight to the moment you need, preview in context, and export clips in seconds. No re-editing required.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Precise frame-level timestamps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>One-click export to common formats</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Batch operations for multiple results</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded border border-border p-8 h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground w-full space-y-3">
                <div className="bg-secondary/50 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm">Match 1</span>
                  <span className="text-xs font-mono">00:45 - 00:52</span>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm">Match 2</span>
                  <span className="text-xs font-mono">03:12 - 03:18</span>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm">Match 3</span>
                  <span className="text-xs font-mono">07:33 - 07:40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-20 sm:py-28 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Platform Support
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
            Built for your desktop.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            frameseek is available as a native application for both Windows and macOS. Enjoy instant search and offline processing with the familiarity of a desktop app.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-border transition-colors">
              <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 13.5H6.95m10.1 0l-.5-5h-9.1l-.5 5M6.5 19h11l.5-5H6l.5 5z" strokeWidth="1.5" stroke="currentColor" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Windows 10+</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Full support for Windows 10 and newer, with GPU acceleration on compatible systems.
              </p>
              <button className="text-primary hover:opacity-80 transition-opacity text-sm font-medium">
                Download →
              </button>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-border transition-colors">
              <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 2H7c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" strokeWidth="0"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">macOS 11+</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Native app for Intel and Apple Silicon Macs with seamless Spotlight integration.
              </p>
              <button className="text-primary hover:opacity-80 transition-opacity text-sm font-medium">
                Download →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Start finding in seconds.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join creators and professionals who never waste time searching for footage again.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded font-medium hover:opacity-90 transition-opacity text-lg">
            Get started free
          </button>
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required. Download now.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xs">fs</span>
                </div>
                <span className="font-semibold">frameseek</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Video search powered by natural language.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2024 frameseek. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
