import { useNavigate } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const languageData = [
  {
    id: 1,
    language: "English",
    image: "/src/assets/logo/england.png",
  },
  {
    id: 2,
    language: "Spanish",
    image: "/src/assets/logo/spain.png",
  },
  {
    id: 3,
    language: "French",
    image: "/src/assets/logo/france.png",
  },
  {
    id: 4,
    language: "German",
    image: "/src/assets/logo/germany.png",
  },
  {
    id: 5,
    language: "Chinese",
    image: "/src/assets/logo/china.png",
  },
  {
    id: 6,
    language: "Arabic",
    image: "/src/assets/logo/united-arab-emirates.png",
  },
  {
    id: 7,
    language: "Japanese",
    image: "/src/assets/logo/japan.png",
  },
  {
    id: 8,
    language: "Italian",
    image: "/src/assets/logo/italy.png",
  },
  {
    id: 9,
    language: "Portuguese",
    image: "/src/assets/logo/portugal.png",
  },
];

const LanguageCategories = () => {
  const navigate = useNavigate();

  const handleClick = (language) => {

    navigate(`/findTutors?language=${language}`);

  };
  return (
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-4xl font-bold mb-5 text-base-200 dark:text-base-content">Find Your Language Tutor</h2>
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
