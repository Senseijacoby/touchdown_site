import Honours from "@/components/Honours";
import Preface from "@/components/Preface";
import Experience from "./(sections)/experience/page";
import About from "./(sections)/about/page";
import Contact from "./(sections)/contact/page";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <Preface />
        <Honours />
        <About />
        <Experience />
        <Contact />
      </div>
      
    </main>
  );
}
