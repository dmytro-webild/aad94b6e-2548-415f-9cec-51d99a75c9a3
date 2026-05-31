"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Phone, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLarge"
        background="aurora"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Materials",          id: "#materials"},
        {
          name: "Projects",          id: "#projects"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=dnaghi"
      logoAlt="Summit Peak Roofing Logo"
      brandName="Summit Peak Roofing"
      button={{
        text: "Call Now",        href: "tel:+18001234567"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "radial-gradient"}}
      title="Total Peace of Mind: Secure Your Home with Our Expert Roofing Solutions"
      description="Professional roof repairs, replacements, and inspections backed by quality craftsmanship, industry certifications, and a commitment to your home's protection."
      buttons={[
        {
          text: "Get Your Free Estimate",          href: "#contact"},
        {
          text: "Call Now",          href: "tel:+18001234567"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/low-angle-shot-white-architectural-building-with-balconies_181624-1484.jpg"
      imageAlt="Luxury residential roof with drone view"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-smiling-female-face-looking-camera_1262-2974.jpg",          alt: "Satisfied Customer 1"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-happy-charming-african-guy-smiling-boyfriend-waiting-date-head-hunter-dream-standing-white-wall_176420-12540.jpg",          alt: "Satisfied Customer 2"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-beautiful-young-redhead-woman-with-charming-smile-healthy-clean-skin_273609-9036.jpg",          alt: "Satisfied Customer 3"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-senior-businessman-sitting-stairs_1262-3109.jpg",          alt: "Satisfied Customer 4"},
        {
          src: "http://img.b2bpic.net/free-photo/joyful-woman-black-jacket-liking-lip-posing-isolated-background-charming-lady-dark-suit-smiling-white-backdrop_197531-18516.jpg",          alt: "Satisfied Customer 5"},
      ]}
      avatarText="Trusted by over 1000+ homeowners"
      marqueeItems={[
        {
          type: "text",          text: "Quality Workmanship"},
        {
          type: "text-icon",          text: "Certified Experts",          icon: ShieldCheck,
        },
        {
          type: "text",          text: "On-Time Completion"},
        {
          type: "text-icon",          text: "24/7 Emergency",          icon: Phone,
        },
        {
          type: "text",          text: "Customer Satisfaction"},
      ]}
      testimonials={[
        {
          name: "Sarah M.",          handle: "Luxury Homeowner",          testimonial: "Summit Peak Roofing transformed our home! Their team was professional, efficient, and the quality of their work is simply outstanding. I highly recommend them for any roofing needs.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-smiling-woman-looking-camera_23-2148187139.jpg",          imageAlt: "Sarah M."
        }
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      imagePosition="left"
      title="Your Trusted Partner for Quality Roofing"
      description="Summit Peak Roofing brings decades of experience, unparalleled craftsmanship, and a commitment to excellence to every project. We are fully licensed, insured, and certified, ensuring peace of mind for our residential and commercial clients."
      bulletPoints={[
        {
          title: "Expert Craftsmanship",          description: "Dedicated team delivering superior quality and attention to detail in every job."},
        {
          title: "Certified Professionals",          description: "Our team adheres to industry-leading standards and safety protocols."},
        {
          title: "Customer Satisfaction",          description: "Your peace of mind and complete satisfaction are our top priorities."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-international-worker-s-day-with-engineer-tools_23-2150269715.jpg"
      imageAlt="Professional roofing team on a luxury residential project"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "repair",          title: "Expert Roof Repair",          descriptions: [
            "Swift and reliable repairs for leaks, storm damage, and general wear-and-tear."],
          imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-13092.jpg",          imageAlt: "Roofer repairing damaged roof tile"},
        {
          id: "replacement",          title: "Full Roof Replacement",          descriptions: [
            "High-quality new roof installations with durable materials and extended warranties."],
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-roofers-working-together-with-helmets_23-2149343707.jpg",          imageAlt: "New roof installation on a residential home"},
        {
          id: "inspection",          title: "Thorough Roof Inspections",          descriptions: [
            "Detailed assessments to identify issues and recommend proactive maintenance plans."],
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-helmet-working-roof-full-shot_23-2149343662.jpg",          imageAlt: "Drone view of roof inspection"},
        {
          id: "emergency",          title: "Emergency Roofing Services",          descriptions: [
            "24/7 rapid response for critical storm damage, urgent leaks, and unexpected issues."],
          imageSrc: "http://img.b2bpic.net/free-photo/man-engaged-household-task_23-2151741210.jpg",          imageAlt: "Emergency roof tarp after storm damage"},
        {
          id: "storm",          title: "Storm Damage Restoration",          descriptions: [
            "Specialists in insurance claims, comprehensive damage assessment, and restoration after severe weather."],
          imageSrc: "http://img.b2bpic.net/free-photo/cracked-table-paint_1122-425.jpg",          imageAlt: "Hail damaged roof and insurance claim documents"},
        {
          id: "commercial",          title: "Commercial Roofing",          descriptions: [
            "Reliable and efficient roofing solutions for businesses, ensuring minimal disruption and maximum protection."],
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-construction-worker-standing-rooftops-high-silos-storage-tanks-working-tablet-computer_342744-441.jpg",          imageAlt: "Commercial building with a flat roof"},
      ]}
      title="Comprehensive Roofing Solutions"
      description="From minor repairs to complete installations, Summit Peak Roofing offers a full spectrum of services tailored to protect your most valuable asset."
    />
  </div>

  <div id="materials" data-section="materials">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "asphalt",          brand: "GAF",          name: "Architectural Asphalt Shingles",          price: "Custom Quote",          rating: 5,
          reviewCount: "120+",          imageSrc: "http://img.b2bpic.net/free-photo/black-wall-paint-textured-background_53876-133009.jpg",          imageAlt: "Close up of architectural asphalt shingles"},
        {
          id: "metal",          brand: "Union Corrugating",          name: "Standing Seam Metal Roofing",          price: "Custom Quote",          rating: 4,
          reviewCount: "85+",          imageSrc: "http://img.b2bpic.net/free-photo/photo-metal-texture-pattern_58702-13917.jpg",          imageAlt: "Modern standing seam metal roof"},
        {
          id: "tile",          brand: "Boral Roofing",          name: "Clay Tile Roofing",          price: "Custom Quote",          rating: 5,
          reviewCount: "60+",          imageSrc: "http://img.b2bpic.net/free-photo/photo-roof-tiles-texture-pattern_58702-11743.jpg",          imageAlt: "Spanish clay tile roof"},
        {
          id: "flat",          brand: "CertainTeed",          name: "EPDM Flat Roofing Systems",          price: "Custom Quote",          rating: 4,
          reviewCount: "45+",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-roof-wooden-building_23-2149343649.jpg",          imageAlt: "Commercial EPDM flat roof"},
        {
          id: "cedar",          brand: "Waldun",          name: "Cedar Shake Roofing",          price: "Custom Quote",          rating: 5,
          reviewCount: "30+",          imageSrc: "http://img.b2bpic.net/free-photo/low-view-construction-house_23-2148748812.jpg",          imageAlt: "Rustic cedar shake roof"},
        {
          id: "slate",          brand: "Vermont Slate",          name: "Natural Slate Roofing",          price: "Custom Quote",          rating: 5,
          reviewCount: "25+",          imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-15389.jpg",          imageAlt: "Elegant natural slate roof tiles"},
      ]}
      title="Premium Roofing Materials"
      description="Explore our diverse selection of high-performance roofing materials, each chosen for durability, aesthetics, and lasting protection for your property."
    />
  </div>

  <div id="projects" data-section="projects">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "years",          value: "30+",          title: "Years in Business",          description: "Providing exceptional roofing solutions with unmatched expertise.",          imageSrc: "http://img.b2bpic.net/free-photo/view-ancient-paper-scroll-writing-documenting_23-2151751640.jpg",          imageAlt: "Clock gears representing years of experience"},
        {
          id: "projects",          value: "1500+",          title: "Projects Completed",          description: "Delivering quality and durability on a wide range of roofing installations.",          imageSrc: "http://img.b2bpic.net/free-photo/sky-residential-formwork-realestate-brick_1232-4003.jpg",          imageAlt: "Aerial view of a housing development"},
        {
          id: "clients",          value: "98%",          title: "Client Satisfaction",          description: "Our commitment to excellence results in happy homeowners and businesses.",          imageSrc: "http://img.b2bpic.net/free-photo/customer-service-satisfaction-feedback-icon_53876-124008.jpg",          imageAlt: "People smiling with thumbs up"},
        {
          id: "certified",          value: "A+",          title: "Certified & Insured",          description: "Full peace of mind for every client with our accredited services.",          imageSrc: "http://img.b2bpic.net/free-photo/green-check-mark-gold-circle_84443-94487.jpg",          imageAlt: "Gold star award for certification"},
      ]}
      title="Our Impact in Numbers"
      description="Decades of dedicated service, countless successful projects, and unwavering commitment to client satisfaction in the roofing industry."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Summit Peak Roofing transformed our home! Their team was professional, efficient, and the quality of their work is simply outstanding. I highly recommend them for any roofing needs."
      rating={5}
      author="Sarah M., Luxury Homeowner"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-smiling-woman-looking-camera_23-2148187139.jpg",          alt: "Sarah M."},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-happy-man-shirt-looking-up-copy-space_171337-10785.jpg",          alt: "John D."},
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-kind-happy-redhead-middleaged-mother-look-caring-delighted-smiling-broadly-gaze-admiration-joy-stand-blue-tshirt-green-wall-amused-enthusiastic-expression_1258-46321.jpg",          alt: "Emily R."},
        {
          src: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1662.jpg",          alt: "Michael T."},
        {
          src: "http://img.b2bpic.net/free-photo/young-blonde-businesswoman-smiling-happy-standing-city_839833-16454.jpg",          alt: "David L."},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="certifications" data-section="certifications">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "GAF Certified Contractor",        "Owens Corning Preferred Contractor",        "CertainTeed ShingleMaster",        "BBB Accredited Business",        "Licensed & Insured",        "NRCA Member",        "Angi Super Service Award"]}
      title="Industry Leading Certifications"
      description="We are proud to hold certifications and partnerships with the industry's most reputable organizations, ensuring top-tier service and quality for every project."
      speed={40}
      showCard={true}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "What types of roofing services do you offer?",          content: "We offer comprehensive services including residential and commercial roof repair, full replacements, detailed inspections, and specialized storm damage restoration."},
        {
          id: "q2",          title: "Are you licensed and insured?",          content: "Absolutely. Summit Peak Roofing is fully licensed, bonded, and insured, providing complete peace of mind and protection for all our clients and projects."},
        {
          id: "q3",          title: "How long does a roof replacement take?",          content: "The duration depends on the roof size, material, and complexity. Most residential roof replacements are completed within 1-3 days, weather permitting, ensuring minimal disruption."},
      ]}
      title="Common Questions"
      description="Find answers to frequently asked questions about our roofing services, process, and what to expect when working with Summit Peak Roofing."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-static"}}
      tag="Get Your Free Estimate"
      title="Schedule Your Roofing Consultation Today"
      description="Contact us now for a no-obligation inspection and a detailed quote. Let Summit Peak Roofing protect your most valuable investment."
      inputPlaceholder="Your Email Address"
      buttonText="Request a Quote"
      termsText="By clicking Request a Quote, you're confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Roof Repair",              href: "#services"},
            {
              label: "Roof Replacement",              href: "#services"},
            {
              label: "Inspections",              href: "#services"},
            {
              label: "Emergency Services",              href: "#services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Certifications",              href: "#certifications"},
            {
              label: "Our Team",              href: "#"},
            {
              label: "Careers",              href: "#"},
          ],
        },
        {
          title: "Resources",          items: [
            {
              label: "Blog",              href: "#"},
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "Case Studies",              href: "#"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Get a Quote",              href: "#contact"},
            {
              label: "Call Us",              href: "tel:+18001234567"},
            {
              label: "Email Us",              href: "mailto:info@summitpeakroofing.com"},
            {
              label: "Location",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Summit Peak Roofing. All rights reserved."
      bottomRightText="Privacy Policy | Terms of Service"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
