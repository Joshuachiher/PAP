import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./Pages/IntroPage";
import QuestionsForm from "./Pages/QuestionForm1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/form" element={<QuestionsForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
