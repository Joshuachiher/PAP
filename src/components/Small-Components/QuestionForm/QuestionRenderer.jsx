import React from "react";

// Fungsi bantu untuk mengimpor gambar dari folder assets
const images = import.meta.glob('../../assets/*.{png,jpg,jpeg,gif,svg}', { eager: true });

const importImage = (path) => {
  const key = `../../assets/${path}`;
  const imageModule = images[key];
  return imageModule ? imageModule.default : null;
};



export default function QuestionRenderer({
  question,
  value,
  onChange,
  questionNumber,
  error,
  onOpenTermsModal,
}) {
  if (!question) return null;

  const {
    id,
    questionText,
    questionType,
    isRequired,
    options,
    image,
  } = question;

  const imageUrl = image ? importImage(image) : null;

  return (
    <div className="mb-6 p-4 border rounded-lg shadow-sm bg-white">
      <label className="block text-gray-800 font-medium mb-2">
        {questionNumber}. {questionText}
        {isRequired && <span className="text-red-500"> *</span>}
      </label>

      {imageUrl && (
        <div className="mb-4">
          <img
            src={imageUrl}
            alt="gambar soal"
            className="max-w-full h-auto rounded"
          />
        </div>
      )}

      {questionType === "text" && (
  <input
    type="text"
    value={value ?? ""}
    required={isRequired}
    onChange={(e) => onChange(id, e.target.value, "text")}
    className={`w-full p-2 border rounded ${
      error ? "border-red-500" : "border-gray-300"
    }`}
  />
)}

      {questionType === "date" && (
        <input
          type="date"
          value={value || ""}
          required={isRequired}
          onChange={(e) => onChange(id, e.target.value, "date")}
          className={`w-full p-2 border rounded ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
      )}

      {questionType === "choice" && (
        <div className="flex flex-col gap-2 mt-2">
          {options?.map((opt) => (
            <label key={opt.id} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name={`question-${id}`}
                value={opt.value}
                checked={value === opt.value}
                required={isRequired}
                onChange={(e) => onChange(id, e.target.value, "choice")}
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}

      {questionType === "checkbox" && (
        <div className="flex flex-col gap-2 mt-2">
          {options?.map((opt) => (
            <label key={opt.id} className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name={`question-${id}`}
                value={opt.value}
                checked={value?.includes(opt.value) || false}
                onChange={() => onChange(id, opt.value, "checkbox")}
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}

      {questionType === "signature" && (
        <textarea
          placeholder="Tanda tangan di sini..."
          value={value || ""}
          required={isRequired}
          onChange={(e) => onChange(id, e.target.value, "signature")}
          className={`w-full p-2 border rounded mt-2 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
      )}
  {questionType === "terms" && (
  <div className="flex items-start gap-2 mt-2">
    <input
      type="checkbox"
      checked={value === true}
      onChange={(e) => {
        if (!value) {
          onOpenTermsModal?.(); // ← Hanya buka modal kalau belum disetujui
        } else {
          // Tidak bisa uncheck langsung
          alert("Untuk mencabut persetujuan, hubungi administrator.");
        }
      }}
    />
    <span className="text-sm text-gray-700">
      Saya menyetujui semua syarat dan ketentuan yang berlaku.
    </span>
  </div>
)}


      {error && (
        <p className="text-red-600 text-sm mt-1" role="alert" aria-live="assertive">
          {error}
        </p>
      )}
    </div>
  );
}
