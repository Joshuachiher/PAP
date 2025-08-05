import { useState } from "react";
import FormInput from "./Small-Components/RegistrationForm/FormInput";
import SignatureSection from "./SignatureSection";

export default function RegistrationForm() {
  const [signatureDataUrl, setSignatureDataUrl] = useState("");
  const [namaAnak, setNamaAnak] = useState("");
  const [umurAnak, setUmurAnak] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signatureDataUrl) {
      alert("Harap tanda tangani terlebih dahulu.");
      return;
    }
    // Proses data form di sini
    console.log("Data form:", { namaAnak, umurAnak, signatureDataUrl });
    alert("Form berhasil disubmit!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-50 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Formulir Pendaftaran</h2>

      <FormInput label="Nama Anak" value={namaAnak} onChange={(e) => setNamaAnak(e.target.value)} required />

      <FormInput label="Umur Anak" type="number" value={umurAnak} onChange={(e) => setUmurAnak(e.target.value)} required />

      <SignatureSection signatureDataUrl={signatureDataUrl} onSave={setSignatureDataUrl} onClear={() => setSignatureDataUrl("")} />

      <button type="submit" className="mt-6 w-full py-2 bg-blue-600 text-white font-semibold rounded">
        Submit Form
      </button>
    </form>
  );
}
