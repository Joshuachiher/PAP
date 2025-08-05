import { useAnswersStore } from "@/store/answersStore";

export default function ReviewAnswers() {
  const { answers } = useAnswersStore();

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Konfirmasi Jawaban</h2>
      <ul className="space-y-4">
        {Object.entries(answers).map(([id, value]) => (
          <li key={id} className="p-4 border rounded-md">
            <p><strong>Pertanyaan #{id}</strong></p>
            <p className="text-gray-700">Jawaban: {String(value)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
