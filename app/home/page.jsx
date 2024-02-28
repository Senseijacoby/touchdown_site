import Navbar from "@/components/Navbar";
import Preface from "@/components/Preface";
import About from "../(sections)/about/page";
import Experience from "../(sections)/experience/page";
import Contact from "../(sections)/contact/page";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-gray-800 to-orange-900">
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
