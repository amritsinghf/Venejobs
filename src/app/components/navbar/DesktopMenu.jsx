import Link from "next/link";

export default function DesktopMenu() {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center gap-6 md:gap-10">
        <li><Link className="text-white font-medium" href="">Find Talent</Link></li>
        <li><Link className="text-white font-medium" href="">Post a Job</Link></li>
        <li><Link className="text-white font-medium" href="">Find Work</Link></li>
        <li><Link className="text-white font-medium" href="">About Us</Link></li>
        <li><Link className="text-white font-medium" href="">Contact Us</Link></li>
      </ul>
    </nav>
  );
}
