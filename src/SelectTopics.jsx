import React, { useMemo } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SelectTopics({
  js,
  setJs,
  cpp,
  setCpp,
  py,
  setPy,
  sports,
  setSports,
  psychology,
  setPsychology,
  music,
  setMusic,
}) {
  const navigate = useNavigate("");
  const topics = [
    { name: "JavaScript", state: js, setState: setJs },
    { name: "C++", state: cpp, setState: setCpp },
    { name: "Python", state: py, setState: setPy },
    { name: "Sports", state: sports, setState: setSports },
    { name: "Psychology", state: psychology, setState: setPsychology },
    { name: "Music", state: music, setState: setMusic },
  ];

  const selectedTopicsCount = useMemo(() => {
    return topics.filter((topic) => topic.state).length;
  }, [js, cpp, py, sports, psychology, music]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-4">
      <h1 className="text-3xl font-[GT] mb-2">What are you interested in?</h1>
      <p className="text-xl mb-8 text-gray-600">Choose at least two or more</p>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {topics.map((topic) => (
          <button
            key={topic.name}
            onClick={() => topic.setState(!topic.state)}
            className={`p-4 flex items-center justify-between transition-colors rounded-full ${
              topic.state
                ? "bg-transparent text-green-500 border-2 border-green-500"
                : "bg-black bg-opacity-5 hover:bg-gray-100"
            }`}
          >
            {topic.name}
            {topic.state && <Check size={20} />}
          </button>
        ))}
      </div>
      {selectedTopicsCount >= 2 && (
        <button
          className="px-[5vw] py-[1vh] text-white bg-black rounded-full font-[Kiev] mb-[8vh] mt-[5vh] text-lg"
          onClick={() => navigate("/feeds")}
        >
          Continue
        </button>
      )}
    </div>
  );
}
