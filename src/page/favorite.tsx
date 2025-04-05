import React from "react";
import Pic from "../assets/image 9.png";
import Card from "../components/card";

const Favorite = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 flex flex-col justify-start items-start">
      <div className="w-full flex justify-between items-center mb-4">
        <div className="flex justify-center items-center">
          <h1 className="text-black text-4xl font-bold font-cinzel">
            Your Favorite Story
          </h1>
        </div>
        <img
          className="w-48 h-60 object-cover "
          src={Pic}
          alt="Favorite Story"
        />
      </div>
      <div className="w-full p-4 flex flex-col justify-start items-start">
        <div className="w-full flex flex-col justify-start items-start">
          <div className="flex justify-center items-center">
            <h2 className="text-black text-3xl font-extrabold font-commissioner">
              All of your favorite stories are here
            </h2>
          </div>
        </div>
      </div>
      <div>
        <Card
          title="Jack and the Beanstalk"
          description="A magic bean leads Jack to uncover a world he knew nothing about."
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Journeys_through_Bookland_-_a_new_and_original_plan_for_reading_applied_to_the_world%27s_best_literature_for_children_%281922%29_%2814783256495%29.jpg/220px-Journeys_through_Bookland_-_a_new_and_original_plan_for_reading_applied_to_the_world%27s_best_literature_for_children_%281922%29_%2814783256495%29.jpg"
          time="16 mins"
        />
      </div>
    </div>
  );
};

export default Favorite;
