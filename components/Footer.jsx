
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container flex justify-between p-12">
         <Logo/>
        <p className="text-slate-600">
          &copy; {new Date().getFullYear()} All rights reserved.
          </p>
      </div>
    </footer>
  );
}
