import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

/**
 * @typedef {Object} QuestionType
 * @property {number} id
 * @property {string} questionText
 * @property {string} questionType
 * @property {any[]=} options
 */

/**
 * @typedef {Object} FormContextType
 * @property {QuestionType[]} questions
 * @property {number} currentIndex
 * @property {Object.<string, any>} formData
 * @property {boolean} termsAgreed
 * @property {string | null} signatureDataUrl
 * @property {string | null} recaptchaToken
 * @property {(q: QuestionType[]) => void} setQuestions
 * @property {(i: number) => void} setCurrentIndex
 * @property {(updater: Function) => void} setFormData
 * @property {(b: boolean) => void} setTermsAgreed
 * @property {(s: string | null) => void} setSignatureDataUrl
 * @property {(s: string | null) => void} setRecaptchaToken
 */

const FormContext = createContext(undefined);

/**
 * @returns {FormContextType}
 */
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error("useFormContext must be used within FormProvider");
  return context;
};

export const FormProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [signatureDataUrl, setSignatureDataUrl] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/questions`);
        // kalau API balikan ada properti questions di data, pakai itu
        const data = Array.isArray(res.data.questions) ? res.data.questions : res.data;

        const questionsWithOptions = await Promise.all(
          data.map(async (q) => {
            const optRes = await axios.get(`${API_BASE_URL}/question-options/question/${q.id}`);
            return { ...q, options: optRes.data || [] };
          })
        );

        setQuestions(questionsWithOptions);

        const initData = {};
        questionsWithOptions.forEach((q) => {
          initData[q.id] = q.questionType === "checkbox" ? [] : "";
        });
        setFormData(initData);
      } catch (err) {
        console.error("Error fetching questions", err);
      }
    };

    fetchQuestions();
  }, [API_BASE_URL]);

  return (
    <FormContext.Provider
      value={{
        questions,
        currentIndex,
        formData,
        termsAgreed,
        signatureDataUrl,
        recaptchaToken,
        setQuestions,
        setCurrentIndex,
        setFormData,
        setTermsAgreed,
        setSignatureDataUrl,
        setRecaptchaToken,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
