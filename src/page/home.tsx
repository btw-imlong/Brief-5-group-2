import picture from "../assets/herohome.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import Button from "../components/button";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.png";
import aboutImg from "../assets/ourcenter.png"; // ✅ added image for "About Our Center"
import { Link } from "react-router-dom";

const Home = () => {
  const cards = [
    {
      image: card1,
      title: "READING",
      text: "When parents read books to their children, they strengthen their bond, improve communication, and develop patience and empathy. It enhances their storytelling skills, reduces stress, and fosters a love for learning.",
    },
    {
      image: card2,
      title: "DRAWING",
      text: "Encouraging children to draw sparks creativity, improves fine motor skills, and helps them express their emotions visually. It also enhances cognitive abilities and confidence.",
    },
    {
      image: card3,
      title: "PUZZLES",
      text: "Solving puzzles helps develop critical thinking, problem-solving skills, and patience. It enhances memory, concentration.",
    },
  ];

  const boxs = [
    {
      image: book1,
      title: "BRAIN BOOK",
      text: " A brain book is a resource filled with activities, facts, or illustrations designed to enhance knowledge about the brain and boost mental skills...",
    },
    {
      image: book2,
      title: "REBEL GIRLS",
      text: "Rebel Girls is an inspiring book series featuring real-life stories of extraordinary women from around the world. Aimed at young reader...",
    },
    {
      image: book3,
      title: "COLORING",
      text: "A coloring book is a collection of outlined images designed to be filled in with colors. It encourages creativity and fine motor skills...",
    },
    {
      image: book4,
      title: "CINDERELLAC",
      text: "Cinderella is a classic fairy tale about a kind-hearted girl who, despite hardship and cruelty from her stepfamily...",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="p-10 flex flex-col md:flex-row justify-center items-center md:gap-40">
        <div className="text-center md:text-left">
          <h1 className="md:text-6xl text-4xl font-bold mb-7">
            Get 1000 hours <br /> of world-class <br /> stories, free.
          </h1>
          <Link to="/register">
            <Button label="Sign Up" />
          </Link>
        </div>
        <img
          src={picture}
          alt="Hero"
          className="mt-10 w-full max-w-md hidden md:block"
        />
      </div>

      {/* Activities Section */}
      <div className="bg-[#B57EDC] py-5">
        <h1 className="text-4xl text-center mt-5 text-white">FEATURED ACTIVITIES</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 py-5"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h1 className="text-xl font-bold text-gray-800">
                  {card.title}
                </h1>
                <p className="text-gray-600 mt-2">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Classic Section */}
      <h1 className="text-4xl p-10 text-amber-400 font-bold mt-5 text-center">CLASSIC</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 max-w-6xl mx-auto">
        {boxs.map((box, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 py-5"
          >
            <img
              src={box.image}
              alt={box.title}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h1 className="text-xl font-bold text-gray-800">{box.title}</h1>
              <p className="text-gray-600 mt-2">{box.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">ABOUT OUR CENTER</h1>
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10">
          {/* Image on the Left */}
          <div className="w-full md:w-1/3">
            <img
              src={aboutImg}
              alt="About Our Center"
              className="rounded-2xl shadow-md w-full h-auto object-cover"
            />
          </div>

          {/* Text on the Right */}
          <div className="w-full md:w-2/3">
            <p className="text-lg leading-relaxed text-gray-700">
            Creating a website for children's books can be a great resource for parents. 
            It provides them with an easy way to find and choose books that are 
            suitable for their child’s age, interests, and learning needs.
             With access to book recommendations, summaries, and even interactive stories,
             parents can encourage their children to develop a love for reading.

             It makes reading fun and supports learning. Parents can bond with 
             their kids through stories and improve their literacy skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
