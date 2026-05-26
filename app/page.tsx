import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Moses Simbeye",
  jobTitle: "Full-Stack Software Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lusaka",
    addressCountry: "ZM",
  },
  email: "mailto:mosessimbeye54@gmail.com",
  telephone: "+260 971 228 992",
  sameAs: [
    "https://github.com/moxes-x",
    "https://linkedin.com/in/moses-simbeye-78b766255",
    "https://behance.net/mosessimbeye",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
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
