import axios from "axios";

export default async function handleSubmit({
  e,
  formData,
  questions,
  termsAgreed,
  setSubmitStatus,
}) {
  e.preventDefault();

  if (!termsAgreed) {
    alert("Anda harus menyetujui syarat & ketentuan.");
    return;
  }

  try {
    for (const q of questions) {
      const answer = formData[q.id];
      if (answer && answer.length !== 0) {
        await axios.post("http://localhost:3000/answers", {
          userId: 1, // TODO: Ganti jika userId dinamis
          questionId: q.id,
          answerText: Array.isArray(answer) ? answer.join(", ") : answer,
        });
      }
    }
    setSubmitStatus("Jawaban berhasil dikirim!");
  } catch (err) {
    console.error(err);
    setSubmitStatus("Gagal mengirim jawaban.");
  }
}
