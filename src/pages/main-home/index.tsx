import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const MainHomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="relative bg-gradient-to-br from-gray-700 to-gray-950">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-20 md:gap-40">
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/skills-intelligence-job-occupation-recruitment-concept_53876-132552.jpg?uid=R155203467&ga=GA1.1.711251206.1726598502&semt=ais_hybrid"
              alt="Dashboard illustration"
              className="relative size-80 z-50 transform shadow-lg rounded-3xl rotate-6 drop-shadow-xl max-w-[500px]"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              A New Way to Learn
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              NextGenU is the best platform to help you enhance your skills,
              expand your knowledge and prepare for technical interviews.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full">
              Create Account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="h-24 md:h-32 bg-white relative overflow-hidden">
          <div className="absolute -top-10 left-0 right-0 h-14 bg-gradient-to-br from-gray-700 to-gray-950 transform -skew-y-3"></div>
        </div>
      </div>

      <div className=" hidden md:block items-center">
        <div className="ml-24 w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
          <svg
            className="h-8 w-8 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <div className="bg-white md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-40">
            <div className="md:w-1/2 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                {/* <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-8 w-8 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div> */}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-6">
                Start Exploring
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                Explore is a well-organized tool that helps you get the most out
                of LeetCode by providing structure to guide your progress
                towards the next step in your programming career.
              </p>
              <Link
                to="/get-started"
                className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 justify-center md:justify-start"
              >
                Get Started <ArrowRight />
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://img.freepik.com/free-vector/flat-background-world-tourism-day-celebration_23-2149533022.jpg?uid=R155203467&ga=GA1.1.711251206.1726598502&semt=ais_hybrid"
                alt="App interfaces illustration"
                className="relative size-80 hidden md:block z-50 transform shadow-lg rounded-3xl rotate-6 drop-shadow-xl max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHomePage;
