'use client'

import { ArrowRight, Download, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

export default function Home() {
  const handleDownload = async (os: 'windows' | 'mac') => {
    const loadingId = toast.loading(`Locating latest ${os} version...`);
    try {
      const res = await fetch(`/api/download?os=${os}&urlOnly=true`);
      const data = await res.json();

      if (!res.ok || data.error) {
        toast.error('Download failed', {
          description: data.error || 'The requested version is not available yet.',
          id: loadingId
        });
        return;
      }

      toast.success('Thank you for downloading!', {
        description: 'Your download will begin shortly.',
        id: loadingId
      });
      window.location.href = data.url;
    } catch (error) {
      toast.error('Download failed', {
        description: 'A network error occurred.',
        id: loadingId
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-center gap-2">
              <Image src="/icon.svg" alt="Logo" width={24} height={24} className='bg-gray-100/30 rounded-lg' />
              <span className="text-lg font-semibold lowercase tracking-tighter font-playfair italic text-start text-top">frameseek</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="https://github.com/SAGAR-TAMANG/frameseek.feynmanpi.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors" target='_blank'>
                Star on GitHub
              </Link>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className='lowercase'>
                  <Link href="https://cal.com/sagar-tamang" target="_blank" rel="noopener noreferrer">
                    Talk to me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 sm:py-60 border-b border-border">
        {/* Blurred background video for large screens */}
        <video
          playsInline
          autoPlay
          muted
          loop
          poster='/helicopter-dystopian-poster.webp'
          preload='metadata'
          className="hidden lg:block absolute inset-0 w-full h-full object-cover blur-xl opacity-20 scale-110"
        >
          <source src="/helicopter-dystopian.mp4" type="video/mp4" />
        </video>

        {/* Main clear video */}
        <video
          playsInline
          autoPlay
          muted
          loop
          poster='/helicopter-dystopian-poster.webp'
          preload='metadata'
          className="absolute inset-0 w-full h-full object-cover lg:max-w-6xl lg:mx-auto opacity-50 bg-black"
        >
          <source src="/helicopter-dystopian.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary">
            Video Intelligence
          </Badge>
          <h1 className="!font-playfair text-5xl sm:text-6xl lg:text-8xl mb-6 font-normal">
            Find your <span className='italic'>moments</span>, not your <span className='italic'>files</span>.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Search your entire video library using natural language.
            <br />
            Available on Windows and Mac.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}>
              <Download className="mr-2 w-4 h-4" />
              Download
            </Button>
            <Button size="lg" variant="secondary" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>
              <Play className="mr-2 w-4 h-4" />
              Watch demo
            </Button>
          </div>
        </div>
      </section >

      {/* Feature 1: Video Indexing */}
      <section className="py-20 sm:py-28 border-b border-border" >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <Badge variant="outline">
                  Indexing
                </Badge>
              </div>
              <h2 className="!font-playfair font-normal text-4xl sm:text-5xl mb-6 leading-tight">
                Upload once. Index <span className='italic'>forever</span>.
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
            <video src="/scan-building-2.mp4" autoPlay loop muted playsInline poster='/scan-building-2-poster.webp' />
          </div>
        </div>
      </section >

      {/* Feature 2 & 3: Search & Export Combined */}
      <section id="demo" className="py-20 sm:py-28 border-b border-border" >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="mb-4">
              <Badge variant="outline">
                Search & Export
              </Badge>
            </div>
            <h2 className="!font-playfair font-normal text-4xl sm:text-5xl mb-6 leading-tight">
              Search like you <span className='italic'>speak</span>. <br /> Export in <span className='italic'>seconds</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Just describe what you're looking for. Our AI understands your intent, finds matching moments with precise timestamps, and lets you export clips instantly. No re-editing required.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-base">✓</span>
                <span>Semantic search</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-base">✓</span>
                <span>Frame-level timestamps</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-base">✓</span>
                <span>One-click export</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-border bg-muted/50 shadow-sm relative mx-auto">
            <video
              src="/left-truck-smashes-low-quality.mp4"
              autoPlay
              loop
              muted
              playsInline
              poster='left-truck-smashes-poster.webp'
              className="w-full h-auto"
            />
          </div>

        </div>
      </section >

      {/* Platform Support */}
      <section id="download" className="py-20 sm:py-28 border-b border-border" >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Badge variant="secondary">
              Platform Support
            </Badge>
          </div>
          <h2 className="!font-playfair font-normal text-4xl sm:text-5xl mb-8 leading-tight">
            Built for your <span className='italic'>desktop</span>.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            frameseek is available as a native application for both Windows and macOS. Enjoy instant search and offline processing with the familiarity of a desktop app.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 13.5H6.95m10.1 0l-.5-5h-9.1l-.5 5M6.5 19h11l.5-5H6l.5 5z" strokeWidth="1.5" stroke="currentColor" fill="none" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Windows</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Full support for Windows 10 and newer, with GPU acceleration on compatible systems.
                </p>
                <Button variant="link" onClick={() => handleDownload('windows')} className='lowercase'>
                  Download <Download className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 2H7c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" strokeWidth="0" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">macOS</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Native app for Intel and Apple Silicon Macs with seamless Spotlight integration.
                </p>
                <Button variant="link" onClick={() => handleDownload('mac')} className='lowercase'>
                  Download <Download className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      <section className="py-20 sm:py-32 border-b border-border" >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="!font-playfair font-normal text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Completely <span className='italic'>free</span>.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            No sign in, no credit card required.
          </p>
          <Button size="lg" className="mb-8 lowercase" onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}>
            Download now <Download className="w-4 h-4 ml-2" />
          </Button>
          <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span>You can support me by following me on</span>
            <a href="https://x.com/sagar_builds" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-4">X</a>
            <span>&amp;</span>
            <a href="https://www.instagram.com/sagar_builds/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-4">Instagram</a>.
          </div>
        </div>
      </section >

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12" >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/icon.svg" alt="Logo" width={24} height={24} className='bg-gray-100/30 rounded-lg' />
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
              © 2026 frameseek. All rights reserved.
              <br />
              Built by <a href="https://x.com/sagar_builds" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-4">sagar_builds</a> for the World.
            </p>
          </div>
        </div>
      </footer >
    </div >
  )
}
