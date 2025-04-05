
import picture from "../assets/herohome.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

const Home = () => {
  const cards = [
    {
      image: card1,
      title: "READING",
      text: "When parents read books to their children, they strengthen their bond, improve communication, and develop patience and empathy. It enhances their storytelling skills, reduces stress, and fosters a love for learning."
    },
    {
      image: card2,
      title: "DRAWING",
      text: "Encouraging children to draw sparks creativity, improves fine motor skills, and helps them express their emotions visually. It also enhances cognitive abilities and confidence."
    },
    {
      image: card3,
      title: "PUZZLES",
      text: "Solving puzzles helps develop critical thinking, problem-solving skills, and patience. It enhances memory, concentration, and cognitive flexibility in both children and adults."
    }
  ];

  return (
    <div>
      <div className="p-10 flex flex-row justify-center items-center gap-40">
        <div>
          <h1 className="text-6xl font-bold">
            Get 1000 hours <br /> of world-class <br /> stories, free.
          </h1>
          <button className="px-5 py-2 bg-blue-700 rounded-3xl text-xl mt-10 text-white">
            Story
          </button>
        </div>
        <img src={picture} alt="Hero" className="mt-5 w-full max-w-md" />
      </div>
      <div className="bg-[#B57EDC] py-5">
        <h1 className="text-4xl text-center mt-5">FEATURED ACTIVITIES</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto mt-10">
          {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 py-5">
              <img src={card.image} alt={card.title} className="w-full h-48 object-contain" />
              <div className="p-4">
                <h1 className="text-xl font-bold text-gray-800">{card.title}</h1>
                <p className="text-gray-600 mt-2">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        <h1 className="text-4xl p-10 text-amber-400 font-bold mt-5">CLASSIC</h1>
    </div>
  );
};

export default Home;
