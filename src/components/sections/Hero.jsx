const Hero = () => {
  return (
    <div className="md:my-0 relative h-full flex flex-col justify-center">
      <div className="hero-title ">AVQN</div>
      <div className="">
        <div className="w-[90%] sm:w-3/4 md:w-5/8 md:ml-auto lg:w-4/10">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium">
            Full Stack Developer
          </h2>
          <p className="text-justify text-sm sm:text-base">
            Hello world, I am Anthony Viet Quoc Nguyen. AVQN for short. I am a
            developer specializing in web development. Welcome to my portfolio.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
