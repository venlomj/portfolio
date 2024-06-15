import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import mj from "@/public/assets/images/profile/my_profile.jpg";

const Hero = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-center gap-10 text-primary-foreground">
      {/* LEFT */}
      <div className="flex flex-col items-start text-center lg:text-left lg:flex-1">
        <h1 className="text-4xl lg:text-6xl font-bold">Fawaka,</h1>
        <h1 className="text-5xl lg:text-7xl font-bold relative">Ik ben</h1>
        <h2 className="text-2xl lg:text-5xl mt-4 capitalize">
          <Typewriter
            words={[
              "Murrel venlo",
              "Junior Software Ontwikkelaar",
              "Een full stack developer",
              "Een Programmeur",
              "Een junior .NET Developer",
              "Een junior Java Developer",
              "Een React Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="text-lg mt-4 max-w-md md:mt-4 sm:mt-4 xs:mt-4">
          Ik ben student applicatieontwikkeling aan de Thomas More Hogeschool in
          Geel. Hier kun je meer over mij te weten komen...
        </p>
      </div>
      {/* RIGHT */}
      <div className="flex-1 flex justify-center lg:justify-end mt-6 lg:mt-0">
        <div className="hidden sm:hidden xs:hidden md:hidden lg:block">
          <Image
            src={mj}
            alt="bg"
            width={350}
            height={350}
            className="w-auto rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
