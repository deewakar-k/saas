import Link from "next/link";
import ShinyButton from "../magicui/shiny-button";

export const Navbar = () => {
  return (
    <>
      <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-full">
          <div className="flex items-start">
            <Link href={"/"}>
              <h1 className="font-bold text-2xl">Freestyle</h1>
            </Link>
          </div>
          <nav className="hidden font-reg md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="opacity-55 flex items-center justify-center gap-8">
              <Link href="https://docs.freestyle.dev" className="group">
                <li className="transition-all transform group-hover:-translate-y-1">
                  Docs
                </li>
              </Link>
              <Link href="https://blog.freestyle.dev/" className="group">
                <li className="transition-all transform group-hover:-translate-y-1">
                  Blog
                </li>
              </Link>
              <Link href="https://www.freestyle.sh/pricing" className="group">
                <li className="transition-all transform group-hover:-translate-y-1">
                  Pricing
                </li>
              </Link>
            </ul>
          </nav>
          <div>
            <ShinyButton text="build now" />
          </div>
        </div>
      </header>
    </>
  );
};
