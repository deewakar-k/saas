import Particles from "../magicui/particles";
import ShinyButton from "../magicui/shiny-button";
import WordRotate from "../magicui/word-rotate";
import Image from "next/image";

export const Hero = () => {
  const words = [
    "Express",
    "Mongo",
    "Postgres",
    "Kafka",
    "S3",
    "socket.io",
    "auth0",
  ];

  return (
    <>
      <div className="flex justify-center font-reg items-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Particles color="#000" />
        </div>
        <div className="absolute inset-0 z-1 opacity-70">
          <Image
            src="/gradient.webp"
            alt="gradient"
            width={1080}
            height={874}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="max-w-4xl lg:max-w-8xl text-center relative z-10 mt-32 lg:mt-64">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            The <span className="text-blue-500">Typescript</span> cloud native.
          </h1>
          <div className="inline-flex gap-2 sm:gap-4 mb-4 flex-col sm:flex-row items-center justify-center">
            <h1 className="text-xl sm:text-2xl font-bold">Replace</h1>
            <span
              style={{
                display: "inline-block",
                width: "100px",
                textAlign: "center",
              }}
            >
              <WordRotate
                words={words}
                className="text-lg sm:text-xl bg-gray-50 font-bold rounded-md"
              />
            </span>
          </div>
          {/* Updated content below with max-w-lg */}
          <div className="max-w-md sm:max-w-lg mx-auto">
            <p className="text-base sm:text-lg">
              Unleash TypeScript&apos;s full potential with Freestyle, the
              revolutionary framework that turbocharges your app development.
            </p>

            <div className="mt-4">
              <ShinyButton text="get demo" />
            </div>
            <div className="flex justify-center mt-5 items-center gap-2 mb-4">
              <p className="opacity-55 text-sm sm:text-base">backed by</p>
              <div className="flex items-center">
                <Image
                  src="/ycombinator-tile.svg"
                  width={16}
                  height={16}
                  alt="Y Combinator logo"
                />
                <span className="ml-1 text-sm sm:text-base">Combinator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
