import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from './data';
const App = () => {
  return (
    <div className="flex flex-col justify-center w-[100vw] overflow-y-auto overflow-x-hidden h-[100%] md:h-[100vh] items-center bg-gray-200 pt-6 md:pt-0">
      <div className="text-center">
        <h1 className="text-xl md:text-4xl font-bold">Our Testimonial</h1>
        <div className="h-[4px] w-[20%] mx-auto mb-12 bg-violet-400 mt-1"></div>
        <div>
          <Testimonials reviews={reviews}/>
        </div>
      </div>
    </div>
  );
};

export default App;
