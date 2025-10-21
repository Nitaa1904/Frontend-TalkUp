import { Link } from "react-router-dom";
import HeroImg from "../../../assets/images/hero.svg";
import { Button } from "flowbite-react";

const Hero = () => {
  return (
    <section className="bg-white">
      <div
        className="grid max-w-screen-xl px-4 py-8 mx-auto 
        lg:gap-12 xl:gap-16 lg:py-16 lg:grid-cols-2 items-center"
      >
        <div className="flex justify-center items-center mb-8 lg:hidden">
          <img
            src={HeroImg}
            alt="Hero TalkUp"
            className="w-full h-auto object-contain max-w-md"
          />
        </div>

        <div className="mr-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 
            bg-red-50 text-primary rounded-full text-sm font-medium font-inter"
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
          <Button as={Link} to="/konseling" color={'primary'} size="md">
            Konseling
          </Button>
        </div>

        <div className="hidden lg:flex lg:justify-center lg:items-center">
          <img
            src={HeroImg}
            alt="Hero TalkUp"
            className="w-full h-auto object-contain"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;