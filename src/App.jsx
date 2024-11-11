import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import SignUpPage from "./SignUpPage";
import FeedPage from "./FeedPage";
import SelectTopics from "./SelectTopics";
import MyStory from "./MyStory";
import "./index.css";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PostSection from "./PostSection";

const URL = "http://localhost:5000/";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [js, setJs] = useState(false);
  const [cpp, setCpp] = useState(false);
  const [py, setPy] = useState(false);
  const [sports, setSports] = useState(false);
  const [psychology, setPsychology] = useState(false);
  const [music, setMusic] = useState(false);

  const [jsData, setJsData] = useState([]);
  const [cppData, setCppData] = useState([]);
  const [pyData, setPyData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [psychologyData, setPsychologyData] = useState([]);
  const [musicData, setMusicData] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await axios.get(URL);
      const data = response.data.posts;

      setJsData(data.js);
      setCppData(data.cpp);
      setPyData(data.py);
      setSportsData(data.sports);
      setPsychologyData(data.psychology);
      setMusicData(data.music);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage isLogged={isLogged} />} />
          <Route
            path="/signup"
            element={<SignUpPage setIsLogged={setIsLogged} />}
          />
          <Route
            path="/feeds"
            element={
              <FeedPage
                js={js}
                jsData={jsData}
                cpp={cpp}
                cppData={cppData}
                py={py}
                pyData={pyData}
                sports={sports}
                sportsData={sportsData}
                psychology={psychology}
                psychologyData={psychologyData}
                music={music}
                musicData={musicData}
              />
            }
          />
          <Route
            path="/select"
            element={
              <SelectTopics
                js={js}
                setJs={setJs}
                cpp={cpp}
                setCpp={setCpp}
                py={py}
                setPy={setPy}
                sports={sports}
                setSports={setSports}
                psychology={psychology}
                setPsychology={setPsychology}
                music={music}
                setMusic={setMusic}
              />
            }
          />
          <Route path="/story" element={<MyStory />} />
          <Route path="/post" element={<PostSection />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
