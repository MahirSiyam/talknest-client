import { useNavigate } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const languageData = [
  {
    id: 1,
    language: "English",
    image: "https://cdn-icons-png.freepik.com/256/4009/4009124.png?uid=R123796307&ga=GA1.1.609713635.1748710786&semt=ais_hybrid",
  },
  {
    id: 2,
    language: "Spanish",
    image: "https://cdn-icons-png.freepik.com/256/12357/12357536.png?uid=R123796307&ga=GA1.1.609713635.1748710786&semt=ais_hybrid",
  },
  {
    id: 3,
    language: "French",
    image: "https://cdn-icons-png.freepik.com/256/12357/12357652.png?uid=R123796307&ga=GA1.1.609713635.1748710786&semt=ais_hybrid",
  },
  {
    id: 4,
    language: "German",
    image: "https://cdn-icons-png.freepik.com/256/11948/11948652.png?uid=R123796307&ga=GA1.1.609713635.1748710786&semt=ais_hybrid",
  },
  {
    id: 5,
    language: "Chinese",
    image: "https://cdn-icons-png.freepik.com/256/4008/4008919.png?uid=R123796307&ga=GA1.1.609713635.1748710786&semt=ais_hybrid",
  },
  {
    id: 6,
    language: "Arabic",
    image: "https://cdn-icons-png.freepik.com/256/6069/6069931.png?uid=R123796307&ga=GA1.1.609713635.1748710786&semt=ais_hybrid",
  },
  {
    id: 7,
    language: "Japanese",
    image: "https://cdn-icons-png.freepik.com/256/11948/11948786.png?uid=R123796307&ga=GA1.1.609713635.1748710786&semt=ais_hybrid",
  },
  {
    id: 8,
    language: "Italian",
    image: "https://cdn-icons-png.freepik.com/256/11948/11948777.png?uid=R123796307&ga=GA1.1.609713635.1748710786&semt=ais_hybrid",
  },
  {
    id: 9,
    language: "Portuguese",
    image: "https://cdn-icons-png.freepik.com/256/3054/3054041.png?uid=R123796307&ga=GA1.1.609713635.1748710786&semt=ais_hybrid",
  },
];

const LanguageCategories = () => {
  const navigate = useNavigate();

  const handleClick = (language) => {

    navigate(`/findTutors?language=${language}`);

  };
  return (
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-4xl font-bold mb-12 text-base-200 dark:text-base-content text-center">Find Your Language Tutor</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {languageData.map((language) => (
          <div
            key={language.id}
            onClick={() => handleClick(language.language)}
            className="flex items-center justify-between border border-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 hover:text-black"
          >
            <div className="flex items-center gap-4">
              <img src={language.image} alt={language.language} className="w-12 h-12" />
              <h3 className="font-bold">{language.language} Tutors</h3>
            </div>
            <FaArrowRight/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageCategories;