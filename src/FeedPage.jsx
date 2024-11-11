import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PostSection from "./PostSection";
import { Link } from "react-router-dom";
const TopicButton = ({ topic, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2  font-[Kiev] ${
      isActive
        ? "bg-black  bg-opacity-20 text-white border border-black"
        : " text-black"
    } font-medium transition-colors duration-200`}
  >
    {topic}
  </button>
);

const PostCard = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-2">{post.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-orange-500">❤ {post.likes}</span>
        <button className="text-blue-500 hover:underline">Read more</button>
      </div>
    </div>
  </div>
);

export default function FeedPage({
  js,
  jsData,
  cpp,
  cppData,
  py,
  pyData,
  sports,
  sportsData,
  psychology,
  psychologyData,
  music,
  musicData,
}) {
  const [currentTopic, setCurrentTopic] = useState("all");
  const [query, setQuery] = useState("");
  const [postInfo, setPostInfo] = useState("");
  const navigate = useNavigate();
  const topics = useMemo(
    () => [
      { name: "all", data: [], isActive: true },
      { name: "js", data: jsData, isActive: js },
      { name: "cpp", data: cppData, isActive: cpp },
      { name: "py", data: pyData, isActive: py },
      { name: "sports", data: sportsData, isActive: sports },
      { name: "psychology", data: psychologyData, isActive: psychology },
      { name: "music", data: musicData, isActive: music },
    ],
    [
      js,
      jsData,
      cpp,
      cppData,
      py,
      pyData,
      sports,
      sportsData,
      psychology,
      psychologyData,
      music,
      musicData,
    ]
  );

  const activeTopics = useMemo(
    () => topics.filter((topic) => topic.isActive),
    [topics]
  );

  const allPosts = useMemo(
    () => activeTopics.flatMap((topic) => topic.data),
    [activeTopics]
  );

  const filteredPosts = useMemo(() => {
    const postsToFilter =
      currentTopic === "all"
        ? allPosts
        : activeTopics.find((topic) => topic.name === currentTopic)?.data || [];
    return postsToFilter.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase())
    );
  }, [currentTopic, query, allPosts, activeTopics]);

  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <nav className="sticky top-0 z-10 bg-orange-50 border-b-2 border-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1
            className="text-3xl font-bold font-[Charter]"
            onClick={() => navigate("/")}
          >
            Hards
          </h1>
          <div className="relative w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search across all topics..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-orange-200 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 border-b-[1px] border-black">
          {activeTopics.map((topic) => (
            <TopicButton
              key={topic.name}
              topic={topic.name === "all" ? "ALL" : topic.name.toUpperCase()}
              isActive={currentTopic === topic.name}
              onClick={() => setCurrentTopic(topic.name)}
            />
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">
            No posts found matching your search.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <Link
                to={{
                  pathname: "/post",
                  state: {
                    postInfo,
                  },
                }}
              >
                <PostCard
                  key={index}
                  post={post}
                  onClick={() => setPostInfo(post)}
                />
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
