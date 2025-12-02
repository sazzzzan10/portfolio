'use client';
import { useEffect, useRef } from "react";

// Next.js page component: Parallax Landing
// Place three background images inside /public/images:
// - hero-bg-1.jpg (farthest)
// - hero-bg-2.png (mid)
// - hero-fg.png (nearest)
// This component uses Tailwind CSS classes for layout. If your project doesn't
// have Tailwind, translate classes or add equivalent CSS.

export default function ParallaxPage() {
const containerRef = useRef<HTMLDivElement | null>(null);    
const layerRefs = useRef<HTMLDivElement[]>([]);
    const container = containerRef.current;

  useEffect(() => {
    if (!container) return;

    // collect layers
    const containerRef = useRef<HTMLDivElement | null>(null);
    layerRefs.current = Array.from(container.querySelectorAll("[data-parallax]"));

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || window.pageYOffset;
          layerRefs.current.forEach((el) => {
            const speed = parseFloat(el.dataset.parallax) || 0;
            // move by translateY for smoother GPU-accelerated animation
            el.style.transform = `translateY(${scrollTop * speed}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // set initial position
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <section
        ref={containerRef}
        className="relative h-screen overflow-hidden flex items-center justify-center"
        aria-label="Parallax hero"
      >
        {/* Far background (moves least) */}
        <div
          data-parallax="-0.06"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg-1.jpg')",
            willChange: "transform",
            transform: "translateY(0px)",
          }}
          aria-hidden
        />

        {/* Mid layer */}
        <div
          data-parallax="-0.12"
          className="absolute inset-0 bg-contain bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/images/hero-bg-2.png')",
            backgroundPosition: "center bottom",
            willChange: "transform",
            transform: "translateY(0px)",
          }}
          aria-hidden
        />

        {/* Foreground */}
        <div
          data-parallax="-0.25"
          className="absolute inset-0 bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/images/hero-fg.png')",
            backgroundSize: "auto 80%",
            backgroundPosition: "center bottom",
            willChange: "transform",
            transform: "translateY(0px)",
          }}
          aria-hidden
        />

        {/* Content */}
        <div className="relative z-20 max-w-3xl px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Beautiful Parallax in Next.js
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Lightweight, performant parallax hero built with CSS transforms and
            requestAnimationFrame.
          </p>
          <div className="mt-8">
            <a
              href="#features"
              className="inline-block rounded-2xl px-6 py-3 bg-white/90 text-gray-900 font-medium shadow-lg"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* subtle overlay to improve contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 z-10" />
      </section>

      {/* CONTENT SECTIONS */}
      <section id="features" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Why this pattern?</h2>
          <div className="space-y-6 text-gray-700">
            <p>
              This implementation uses translateY transforms to animate layers —
              that keeps animations on the GPU and dramatically improves
              smoothness compared to changing top or background-position.
            </p>
            <p>
              Use different `data-parallax` speeds (positive or negative) to
              control how fast each layer moves relative to scroll.
            </p>
            <p>
              Keep images optimized and avoid too many animated elements to
              maintain frame-rate on mobile devices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-4">Example layout</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 border rounded-lg">Feature A</div>
            <div className="p-6 border rounded-lg">Feature B</div>
            <div className="p-6 border rounded-lg">Feature C</div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Parallax Demo — built with Next.js
      </footer>

      {/* local component styles. If you prefer global stylesheet, move these rules. */}
      <style jsx>{`
        /* Ensure the hero occupies full viewport height and hides overflow */
        section[aria-label="Parallax hero"] {
          height: 100vh;
        }

        /* Slight blur and desaturate far background for depth */
        [data-parallax="-0.06"] {
          filter: saturate(0.9) contrast(1.02);
        }

        /* Reduce pointer events on decorative layers */
        [data-parallax] {
          pointer-events: none;
        }

        /* Make content readable on small screens */
        @media (max-width: 640px) {
          h1 {
            font-size: 2.25rem;
          }
          p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </main>
  );
}

/*
Usage & notes:
1. Save this file as `app/parallax/page.jsx` (Next.js 13 app router) or `pages/parallax.jsx`
   (pages router). Adjust import/export if necessary.

2. Put three image files in the `public/images/` folder with the names used above or change
   the URLs to match your assets.

3. This example uses Tailwind CSS utility classes. If you don't use Tailwind, swap classes
   for your own CSS (container widths, spacing, typography).

4. Accessibility: layers are decorative (aria-hidden). Ensure important content is in the
   foreground DOM (the relative z-20 content block).

5. Performance tips:
   - Optimize images with modern formats (webp) and sensible dimensions.
   - Consider lazy-loading lower-priority images or replacing the far background with a CSS
     gradient for very small screens.

6. Customization:
   - Change `data-parallax` values to control movement. Negative values move layers up as
     the page scrolls; positive values move them down.
   - Add parallax for horizontal scroll or mouse movement by updating transform calculations.

*/
