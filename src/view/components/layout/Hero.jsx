import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const Hero = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      <div
        className="grid max-w-screen-xl px-4 py-8 mx-auto 
        lg:gap-12 xl:gap-16 lg:py-16 lg:grid-cols-2 items-center"
      >
        {/* Hero Image for Mobile */}
        <div className="flex justify-center items-center mb-8 lg:hidden animate-fadeInUp">
          <img
            src="/assets/images/hero.svg"
            alt="Hero TalkUp"
            className="w-full h-auto object-contain max-w-md"
          />
        </div>

        {/* Text Section */}
        <div className="mr-auto animate-fadeInUp delay-200">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 
            bg-gradient-to-r from-red-100 to-red-200 
            text-primary rounded-full text-sm font-medium font-inter shadow-sm"
          >
            Temani Langkahmu ❤️
          </div>

          <h1
            className="mb-6 text-4xl font-bold leading-tight 
            lg:text-5xl xl:text-6xl text-secondary font-inter"
          >
            Temukan solusimu bersama kami
          </h1>

          <p
            className="mb-8 text-md text-secondary font-normal lg:text-lg 
            font-inter leading-relaxed"
          >
            Kami hadir untuk mendampingi siswa siswi dalam mengatasi
            masalah belajar, pribadi, dan karier.
          </p>

          {/* Button with hover effect */}
          <Button
            as={Link}
            to="/konseling"
            color="primary"
            size="lg"
            className="px-8 py-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            Konseling Sekarang
          </Button>
        </div>

        {/* Hero Image for Desktop */}
        <div className="hidden lg:flex lg:justify-center lg:items-center">
          <img
            src="/assets/images/hero.svg"
            alt="Hero TalkUp"
            className="w-full h-auto object-contain animate-floating"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
