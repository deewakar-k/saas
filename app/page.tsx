import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="max-w-6xl w-full mx-auto flex justify-center">
        <Hero />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
