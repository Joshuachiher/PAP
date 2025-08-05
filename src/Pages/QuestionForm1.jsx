import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionRenderer from "../components/Small-Components/QuestionForm/QuestionRenderer";
import NavigationButtons from "../components/Small-Components/StepWrapper/NavigationButtons";
import ParticlesCanvas from "../components/Background-Image/ParticleCanvas";
import ModalTerms from "../components/ModalTerms";
import SignatureInput from "../components/Signaturepad";

const QuestionForm1 = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const [language, setLanguage] = useState("id");
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [signatureQuestion, setSignatureQuestion] = useState(null);

  const [familyRelations, setFamilyRelations] = useState({
    ayah: '',
    ibu: '',
    kakekNenek: '',
    saudara: '',
  });

  const userId = 1;


  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";


  useEffect(() => {
    const fetchAllQuestions = async () => {
      try {
        let allQuestions = [];
        let page = 1;
        let lastPage = 1;

        do {
          const res = await axios.get(`${API_BASE_URL}/questions`, { params: { page, limit: 10 } });

          const { data, lastPage: lp } = res.data;
          lastPage = lp;

          const questionsWithoutSignature = data
            .filter((q) => q.questionType?.toLowerCase() !== "signature")
            .map((q) => ({
              ...q,
              questionType: q.questionType?.toLowerCase(),
              options: q.options || [],
            }));

          allQuestions = [...allQuestions, ...questionsWithoutSignature];
          page++;
        } while (page <= lastPage);

        setQuestions(allQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllQuestions();
  }, []);

  useEffect(() => {
   const fetchSignatureQuestion = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/questions`, {
      params: { limit: 100 },
    });
    const sigQ = res.data.data.find(
      (q) => q.questionType?.toLowerCase() === "signature"
    );
    setSignatureQuestion(sigQ);
  } catch (error) {
    console.error("Error fetching signature question:", error);
  }
};

    fetchSignatureQuestion();
  }, []);

  const handleAnswerChange = (id, value, type) => {
    setAnswers((prev) => {
      if (type === "checkbox") {
        const current = prev[id] || [];
        return current.includes(value)
          ? { ...prev, [id]: current.filter((v) => v !== value) }
          : { ...prev, [id]: [...current, value] };
      }
      return { ...prev, [id]: value };
    });
  };

  const handleSignatureSaved = (data) => {
    alert("Tanda tangan berhasil disimpan!");
    if (signatureQuestion?.id) {
      setAnswers((prev) => ({ ...prev, [signatureQuestion.id]: data.imageUrl }));
    }
  };

  const handleSubmit = async () => {
    try {
      const answersArray = Object.entries(answers).map(([questionId, value]) => ({
        questionId: Number(questionId),
        answerText: value ? (Array.isArray(value) ? value.join(", ") : String(value)) : "",
      }));

      const payload = {
        userId,
        answers: answersArray,
      };

      const res = await axios.post(`${API_BASE_URL}/form-submissions`, payload);
      alert("Jawaban berhasil dikirim! ID: " + res.data.formSubmissionId);
    } catch (error) {
      alert("Gagal mengirim jawaban.");
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleOpenTermsModal = () => setIsTermsModalOpen(true);
  const handleCloseTermsModal = () => setIsTermsModalOpen(false);
  const handleAgreeTerms = (id) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const progressPercentage = questions.length
    ? Math.round(((currentIndex + 1) / questions.length) * 100)
    : 0;

  const currentQuestion = questions[currentIndex];
  const localizedQuestion = currentQuestion
    ? {
        ...currentQuestion,
        questionText:
          language === "id" ? currentQuestion.questionTextId : currentQuestion.questionTextEn,
      }
    : null;

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticlesCanvas />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Form Pertanyaan</h1>

          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-right text-sm mt-1 text-gray-600">{progressPercentage}% selesai</div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500 border-t-transparent"></div>
            </div>
          ) : questions.length > 0 ? (
            <>
              {localizedQuestion && (
                <>
                  {localizedQuestion.id === 19 && (
                    <div className="mb-4 flex justify-center">
                      <img
                        src="/SizeTshirt.png"
                        alt="Gambar Kaos Anak"
                        className="max-w-xs object-contain"
                      />
                    </div>
                  )}

                  {localizedQuestion?.id === 26 ? (
        <>
          <div className="mb-4">
            <p className="font-semibold">22. {localizedQuestion.questionTextId}</p>
            <p className="text-sm text-gray-600 italic">
              {localizedQuestion.questionTextEn}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Ayah/Wali - Father/Guardian</label>
              <input
                type="text"
                value={familyRelations.ayah}
                onChange={(e) =>
                  setFamilyRelations({ ...familyRelations, ayah: e.target.value })
                }
                placeholder="Tuliskan hubungan dengan Ayah/Wali"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label>Ibu/Wali - Mother/Guardian</label>
              <input
                type="text"
                value={familyRelations.ibu}
                onChange={(e) =>
                  setFamilyRelations({ ...familyRelations, ibu: e.target.value })
                }
                placeholder="Tuliskan hubungan dengan Ibu/Wali"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label>Kakek/Nenek - Grandparents</label>
              <input
                type="text"
                value={familyRelations.kakekNenek}
                onChange={(e) =>
                  setFamilyRelations({ ...familyRelations, kakekNenek: e.target.value })
                }
                placeholder="Tuliskan hubungan dengan Kakek/Nenek"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label>Saudara Kandung - Siblings</label>
              <input
                type="text"
                value={familyRelations.saudara}
                onChange={(e) =>
                  setFamilyRelations({ ...familyRelations, saudara: e.target.value })
                }
                placeholder="Tuliskan hubungan dengan Saudara Kandung"
                className="border rounded p-2 w-full"
              />
            </div>
          </div>
        </>
                  ) : (
        <QuestionRenderer
          question={localizedQuestion}
          value={
            answers[localizedQuestion.id] ||
            (localizedQuestion.questionType === "checkbox" ? [] : "")
          }
          onChange={handleAnswerChange}
          questionNumber={currentIndex + 1}
          onOpenTermsModal={() => handleOpenTermsModal(localizedQuestion.id)}
        />
                  )}
                </>
              )}

              {currentIndex === questions.length - 1 && signatureQuestion && (
                <>
                  <hr className="my-6" />
                  <h2 className="text-lg font-semibold mb-2">
                    {language === "id"
                      ? signatureQuestion.questionTextId
                      : signatureQuestion.questionTextEn}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">{signatureQuestion.description}</p>
                  <SignatureInput
                    userId={userId}
                    value={answers[signatureQuestion.id] || null}
                    onChange={(dataUrl) =>
                      setAnswers((prev) => ({
                        ...prev,
                        [signatureQuestion.id]: dataUrl,
                      }))
                    }
                    onSaved={handleSignatureSaved}
                  />
                </>
              )}

              <div className="mb-4 space-x-4">
                <button
                  onClick={() => setLanguage("id")}
                  className={`px-4 py-1 border rounded ${language === "id" ? "font-bold bg-gray-200" : ""}`}
                >
                  Indonesia
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-1 border rounded ${language === "en" ? "font-bold bg-gray-200" : ""}`}
                >
                  English
                </button>
              </div>

              <NavigationButtons
                stepNumber={currentIndex}
                totalSteps={questions.length}
                onNext={handleNext}
                onPrev={handlePrevious}
                onSubmit={handleSubmit}
              />
            </>
          ) : (
            <div className="text-red-500">
              Tidak ada pertanyaan ditemukan. Silakan coba kembali nanti atau hubungi panitia.
            </div>
          )}
        </div>
      </div>

      <ModalTerms
        isOpen={isTermsModalOpen}
        onClose={handleCloseTermsModal}
        onAgreed={() => {
          const currentId = currentQuestion?.id;
          if (currentId) handleAgreeTerms(currentId);
          handleCloseTermsModal();
        }}
      />
    </div>
  );
};

export default QuestionForm1;
