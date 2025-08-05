// components/Exceptions/handleNext.jsx
export default function handleNext(currentIndex, setCurrentIndex, questions, formData, termsAgreed) {
  const currentQuestion = questions[currentIndex];

  // Cek jika pertanyaan bertipe 'terms' dan user belum setuju
  if (currentQuestion.questionType === "terms" && !termsAgreed) {
    alert("Anda harus menyetujui syarat & ketentuan terlebih dahulu untuk melanjutkan.");
    return; // jangan lanjut ke next
  }

  // Validasi required jika perlu (optional)
  if (currentQuestion.required) {
    const answer = formData[currentQuestion.id];
    if (
      (currentQuestion.questionType === "checkbox" && (!answer || answer.length === 0)) ||
      (currentQuestion.questionType !== "checkbox" && (!answer || answer === ""))
    ) {
      alert(`Harap isi pertanyaan: "${currentQuestion.label}" terlebih dahulu.`);
      return;
    }
  }

  // Jika sudah valid, lanjut ke pertanyaan berikutnya
  setCurrentIndex((i) => Math.min(i + 1, questions.length - 1));
}
