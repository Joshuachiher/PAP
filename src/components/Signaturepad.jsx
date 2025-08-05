import React, { useRef, useState, useEffect } from "react";
import SignaturePad from "react-signature-canvas";

const SignatureInput = ({ userId, value, onChange, onSaved }) => {
  const sigCanvasRef = useRef();
  const [isEmpty, setIsEmpty] = useState(true);
  const [signatureDataUrl, setSignatureDataUrl] = useState(value || null);

  useEffect(() => {
    if (value && sigCanvasRef.current) {
      // Reset canvas dan gambar ulang dari data URL
      sigCanvasRef.current.clear();
      sigCanvasRef.current.fromDataURL(value);
      setIsEmpty(false);
      setSignatureDataUrl(value);
    }
  }, [value]);

  const clearSignature = () => {
    sigCanvasRef.current.clear();
    setIsEmpty(true);
    setSignatureDataUrl(null);
    if (onChange) onChange(null);
  };

  const saveSignature = async () => {
    if (!sigCanvasRef.current.isEmpty()) {
      const dataUrl = sigCanvasRef.current.toDataURL();

      setSignatureDataUrl(dataUrl);
      if (onChange) onChange(dataUrl);

      try {
        const res = await fetch("http://localhost:3000/signatures", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId,
            imageUrl: dataUrl,
          }),
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();

        console.log("Signature saved:", data);

        if (onSaved) onSaved(data);

        alert("Tanda tangan berhasil disimpan!");
      } catch (error) {
        console.error("Failed to save signature:", error);
        alert("Gagal menyimpan tanda tangan.");
      }
    }
  };

  return (
    <div>
      <p>Silakan tanda tangan di bawah ini:</p>
      <div style={{ border: "1px solid #ccc", borderRadius: 4 }}>
        <SignaturePad
          ref={sigCanvasRef}
          canvasProps={{ width: 500, height: 200, className: "signature-canvas" }}
          onEnd={() => setIsEmpty(sigCanvasRef.current.isEmpty())}
        />
      </div>
      <div style={{ marginTop: 8 }}>
        <button onClick={clearSignature} disabled={isEmpty}>
          Hapus
        </button>
        <button onClick={saveSignature} disabled={isEmpty} style={{ marginLeft: 8 }}>
          Simpan Tanda Tangan
        </button>
      </div>

      {signatureDataUrl && (
        <div style={{ marginTop: 16 }}>
          <p>Tanda tangan tersimpan:</p>
          <img
            src={signatureDataUrl}
            alt="Tanda Tangan"
            style={{ border: "1px solid #000", maxWidth: 300 }}
          />
        </div>
      )}
    </div>
  );
};

export default SignatureInput;
