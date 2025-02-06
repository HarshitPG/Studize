const Features = () => {
  return (
    <div className=" bg-[#fdfdfd] text-[#000000]">
      <div className=" md:px-16 sm:px-8 px-4 py-6 w-full min-w-screen min-h-fit md:h-screen md:max-h-screen flex flex-col">
        <h1 className="self-center font-supply-bold md:text-5xl text-4xl md:my-14 my-7">
          What we offer?
        </h1>
        <p className=" font-supply-light md:text-xl text-lg md:mb-14 mb-7 self-center text-[#575555] ">
          Ready to Transform Your Coaching Class using Sstudize? See the power
          of AI in action and book a one-on-one demo call with our team
        </p>
        <div className="lg:grid lg:grid-cols-2 grid-rows-2 gap-8 grid grid-cols-1">
          <div className="border-black border-2 pl-8 pr-4 py-5 md:pl-12 md:pr-8 md:py-10 flex-col md:space-y-8 space-y-4">
            <h1 className=" font-supply-regular md:text-3xl text-xl">
              Personalized Learning Roadmap
            </h1>
            <ul className="list-[square] list-outside custom-bullet">
              <li className=" font-supply-light  md:text-xl text-lg md:mb-14 mb-7 text-[#575555]">
                AI-powered roadmaps tailored to each student’s academic needs,
                helping them focus on what matters most for their JEE
                preparation.
              </li>
            </ul>
          </div>
          <div className="border-black border-2 pl-8 pr-4 py-5 md:pl-12 md:pr-8 md:py-10 flex-col md:space-y-8 space-y-4">
            <h1 className=" font-supply-regular md:text-3xl text-xl">
              Comprehensive Student Analysis
            </h1>
            <ul className="list-[square] list-outside custom-bullet ">
              <li className=" font-supply-light  md:text-xl text-lg md:mb-14 mb-7  text-[#575555]">
                Deep insights into students’ academic performance, cognitive
                abilities, and study patterns, ensuring personalized guidance
                for optimal learning outcomes.
              </li>
            </ul>
          </div>
          <div className="border-black border-2 pl-8 pr-4 py-5 md:pl-12 md:pr-8 md:py-10 flex-col md:space-y-8 space-y-4">
            <h1 className=" font-supply-regular md:text-3xl text-xl">
              Coaching Center Dashboard & Progress Tracking
            </h1>
            <ul className="list-[square] list-outside custom-bullet ">
              <li className=" font-supply-light   md:text-xl text-lg md:mb-14 mb-7  text-[#575555]">
                Get real-time data and analytics on student performance. Monitor
                progress, review results, and make informed decisions to improve
                coaching strategies.
              </li>
            </ul>
          </div>
          <div className="border-black border-2  pl-8 pr-4 py-5 md:pl-12 md:pr-8 md:py-10 flex-col md:space-y-8 space-y-4">
            <h1 className=" font-supply-regular md:text-3xl text-xl">
              Personalized Learning Roadmap
            </h1>
            <ul className="list-[square] list-outside custom-bullet">
              <li className=" font-supply-light   md:text-xl text-lg md:mb-14 mb-7  text-[#575555]">
                AI-powered roadmaps tailored to each student’s academic needs,
                helping them focus on what matters most for their JEE
                preparation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
