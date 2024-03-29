import Navbar from "@/components/Navbar";
import Preface from "@/components/Preface";
import About from "./(sections)/about/page";
import Experience from "./(sections)/experience/page";
import Contact from "./(sections)/contact/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-bgColor0">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <Preface />
        <About />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
