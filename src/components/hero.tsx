import { Alegreya } from "next/font/google";
import Image from "next/image";
import engine from "../../public/images/computer-engineer.png";
import engine2 from "../../public/images/computer-engineer-2.png";

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: "700",
});

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${alegreya.className}`}>
          Transforming Ideas into Digital Reality
        </h1>
        <div className="mb-8 space-y-4 text-sm sm:text-base md:text-lg">
          <p>
            We are a cutting-edge software company that combines innovative solutions with stunning design.
          </p>
          <p>
            Our team delivers fast, cost-effective, and efficient results that bring your visionary ideas to life.
          </p>
        </div>
        <button className="px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-black rounded-full sm:text-base hover:bg-white hover:text-black hover:shadow-lg">
          Get a Quote
        </button>
        <p className="mt-4 text-xs sm:text-sm">Take the first step towards making your digital dreams a reality!</p>
      </div>

      <div className="flex justify-center w-full mt-8 space-x-4 sm:space-x-8 md:space-x-12">
        <Image 
          src={engine} 
          alt="Software Engineer"
          className="w-1/4 max-w-[150px] opacity-50 sm:opacity-70 md:opacity-100"
        />
        <Image 
          src={engine2} 
          alt="Software Engineer"
          className="w-1/4 max-w-[150px] opacity-50 sm:opacity-70 md:opacity-100"
        />
      </div>
    </div>
  );
}