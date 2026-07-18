# CertiTrust - Company Profile Design Specification

## Brand Identity

- **Brand Name**: CertiTrust
- **Tagline**: "Wujudkan Produk Aman Dengan CertiTrust"
- **Industry**: BPOM Certification & Standardization Authority
- **Target Audience**: Producers, UMKM, Corporate Companies (All segments)

## Color Palette

```
Primary Color: #14B8A6 (Teal - Trust, Professionalism)
Secondary Color: #0D9488 (Teal Dark - Deeper trust)
Accent Color: #10B981 (Emerald Green - Growth, innovation)
Background Light: #F0FDFA (Teal 50 - Soft, welcoming)
Neutral: White, Slate 900 (Text), Slate 500 (Muted text)
```

## Typography

- **Display Font**: Plus Jakarta Sans (Headings - Bold, Extrabold)
- **Body Font**: Satoshi (Body text - Clean, modern, friendly)
- **Fallback**: Outfit (Alternative display)

**Font Hierarchy**:

- H1: 56px-84px, Extrabold, Plus Jakarta Sans
- H2/H3: 28px-48px, Extrabold, Plus Jakarta Sans
- H4: 20px-28px, Bold, Plus Jakarta Sans
- Body: 16px-20px, Regular, Satoshi
- Label: 12px-14px, Bold, Uppercase

## Design System

### Navigation Bar

```html
<nav
  class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-teal-50 py-4"
>
  <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
    <div class="flex items-center gap-2">
      <div
        class="w-11 h-11 bg-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-200"
      >
        <iconify-icon
          icon="lucide:shield-check"
          class="text-white text-2xl"
        ></iconify-icon>
      </div>
      <span
        class="text-slate-900 font-extrabold text-2xl tracking-tight font-display"
        >CertiTrust</span
      >
    </div>
    <div
      class="hidden md:flex items-center gap-10 text-slate-600 font-semibold"
    >
      <a
        href="#home"
        id="nav-home"
        class="hover:text-teal-600 transition-colors"
        >Beranda</a
      >
      <a
        href="#about"
        id="nav-about"
        class="hover:text-teal-600 transition-colors"
        >Tentang</a
      >
      <a
        href="#services"
        id="nav-services"
        class="hover:text-teal-600 transition-colors"
        >Layanan</a
      >
      <a
        href="#process"
        id="nav-process"
        class="hover:text-teal-600 transition-colors"
        >Proses</a
      >
    </div>
    <a
      href="#contact"
      id="nav-cta-btn"
      class="px-7 py-3 bg-teal-500 text-white rounded-full font-bold shadow-lg shadow-teal-500/20 btn-hover-effect"
      >Konsultasi Gratis</a
    >
  </div>
</nav>
```

### Hero Section

- Gradient Background: `linear-gradient(135deg, #14B8A6 0%, #0EA5E9 100%)`
- Large Hero Image with soft shadow and rounded corners
- Animated badge with pulsing effect: "Otoritas Sertifikasi Standar Nasional"
- Split layout: Text (left) + Image (right)
- Animated floating stat box showing "99% Lolos Audit"

### Service Card Component

```html
<div
  class="bg-white p-10 rounded-[2.5rem] card-shadow border border-teal-50 group hover:bg-teal-500 transition-all duration-500"
>
  <div
    class="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors"
  >
    <iconify-icon icon="lucide:clipboard-check" class="text-3xl"></iconify-icon>
  </div>
  <h4
    class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors"
  >
    Service Title
  </h4>
  <p class="text-slate-600 group-hover:text-white/80 leading-relaxed mb-8">
    Service description text...
  </p>
  <a
    href="#"
    class="flex items-center gap-2 font-bold text-teal-600 group-hover:text-white"
    >Selengkapnya <iconify-icon icon="lucide:chevron-right"></iconify-icon
  ></a>
</div>
```

### Process Step Component

```html
<div
  class="reveal flex flex-col items-center text-center relative z-10 step-connect"
>
  <div
    class="w-20 h-20 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center text-2xl font-black mb-8 border-4 border-white shadow-xl shadow-teal-500/10"
  >
    01
  </div>
  <h5 class="text-xl font-bold mb-3">Step Title</h5>
  <p class="text-slate-500 text-sm px-4">Step description...</p>
</div>
```

### CTA Button Styles

```css
.btn-hover-effect {
  transition: all 0.3s ease;
}
.btn-hover-effect:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px -10px rgba(20, 184, 166, 0.4);
}

/* Primary Button */
background: #14b8a6;
color: white;
border-radius: 0.5rem-1rem;
padding: 0.75rem-1rem;
font-weight: bold;

/* Secondary Button */
background: white;
color: #14b8a6;
border: 2px solid #d1f2eb;
```

### Contact Section

- Background: Teal gradient (#14B8A6 to darker teal)
- Form container: White background, rounded-2xl, shadow
- Contact info: Flex layout with icon + text
- Two-column layout on desktop, stacked on mobile

### Animations & Effects

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays for sequential animations */
.stagger-1 {
  transition-delay: 100ms;
}
.stagger-2 {
  transition-delay: 200ms;
}
.stagger-3 {
  transition-delay: 300ms;
}

/* Card shadow effect */
.card-shadow {
  box-shadow: 0 10px 40px -10px rgba(20, 184, 166, 0.15);
}

/* Hero gradient */
.hero-gradient {
  background: linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%);
}

/* Process connector lines */
.step-connect::after {
  content: "";
  position: absolute;
  top: 2.5rem;
  left: 50%;
  width: 100%;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    #14b8a6 0,
    #14b8a6 8px,
    transparent 8px,
    transparent 16px
  );
  z-index: 0;
}
```

## Layout & Spacing

- **Container Max-width**: 80rem (1280px)
- **Padding (Horizontal)**: 24px-48px depending on breakpoint
- **Gap between sections**: 128px-192px
- **Card spacing**: 32px gap
- **Border radius**:
  - Buttons: 0.5rem-1.5rem
  - Cards: 2.5rem
  - Inputs: 0.75rem-1rem
  - Large containers: 3rem+

## Accessibility & Responsive

- Mobile-first approach
- Smooth scroll behavior
- Focus states on interactive elements
- Icon library: Iconify (lucide icons)
- Responsive breakpoints: 640px, 768px, 1024px, 1280px

## Key Design Principles

1. **Trust & Professionalism**: Teal primary color conveys reliability
2. **Modern & Approachable**: Fresh color palette with welcoming spacing
3. **Smooth Interactions**: Scroll reveal, hover effects, transitions
4. **Clear Information Hierarchy**: Bold typography for headings, clean body text
5. **Visual Consistency**: Unified color system, consistent spacing, repeating patterns
6. **Accessibility**: Good contrast ratios, readable fonts, semantic HTML
