import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const siteUrl = "https://moses-simbeye.vercel.app";

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

// A single @graph lets Google resolve the site, the profile page, and the
// person as one entity rather than three unrelated blocks.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Moses Simbeye",
      url: siteUrl,
      image: `${siteUrl}/images/moses-professional.jpg`,
      jobTitle: "Software Engineer | Systems & IT Support",
      description:
        "Software engineer and IT support professional based in Lusaka, Zambia, building full-stack systems with Laravel, React, and Next.js.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lusaka",
        addressCountry: "ZM",
      },
      email: "mailto:mosessimbeye54@gmail.com",
      telephone: "+260 971 228 992",
      worksFor: {
        "@type": "Organization",
        name: "Dot Com Zambia PLC",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Mulungushi University",
      },
      sameAs: [
        "https://github.com/moxes-x",
        "https://linkedin.com/in/moses-simbeye-78b766255",
        "https://behance.net/mosessimbeye",
      ],
      knowsAbout: [
        "Software Development",
        "Laravel",
        "Next.js",
        "React",
        "MySQL",
        "IT Support",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: "Moses Simbeye Portfolio",
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Moses Simbeye | Software Engineer & IT Support",
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      mainEntity: { "@id": personId },
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
