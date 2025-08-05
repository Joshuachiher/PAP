// components/Intro/StartButton.jsx
import { useNavigate } from "react-router-dom";

const StartButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/form")}
      className="mt-6 bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow hover:bg-blue-700 transition"
    >
      Start
    </button>
  );
};

export default StartButton;
