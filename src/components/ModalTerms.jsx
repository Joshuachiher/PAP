// ModalTerms.jsx
import { Dialog, DialogTitle, DialogPanel } from "@headlessui/react";
import { Fragment, useRef, useState, useEffect } from "react";

export default function ModalTerms({ isOpen, onClose, onAgreed }) {
  const contentRef = useRef(null);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleScroll = () => {
    const el = contentRef.current;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
      setIsScrolledToBottom(true);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setIsScrolledToBottom(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={onClose} as={Fragment}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <DialogPanel className="bg-white rounded p-6 max-w-lg w-full shadow-lg overflow-hidden">
          <DialogTitle className="text-xl font-bold mb-4">
            Terms & Agreement
          </DialogTitle>

          <div
            ref={contentRef}
            onScroll={handleScroll}
            className="mb-4 text-sm max-h-64 overflow-y-auto space-y-4 pr-2"
          >
            {/* Isi syarat & ketentuan */}
            <p>
              A. Saya menyetujui bahwa apabila anak saya jatuh sakit pada saat program berlangsung, seperti demam di atas 37,5°C atau batuk & pilek, maka saya bersedia menjemput anak saya untuk pulang dan mengikuti program di angkatan berikutnya.
            </p>
            <p>
              B. Saya menyetujui bahwa jika anak saya sakit saat program, pihak Jalan Maju Akademi hanya akan memberikan obat yang dikirim oleh orang tua.
            </p>
            <p>
              C. Saya mengerti bahwa dokumentasi selama program hanya untuk keperluan komersial, edukasi, dan promosi. Informasi personal akan disaring oleh PT Jalan Maju Akademi.
            </p>
            <p>
              D. Peserta tidak dianjurkan membawa barang berharga contoh: Laptop, perhiasan, jam tangan, Tablet/Ipad. Kehilangan menjadi tanggung jawab masing-masing peserta.
            </p>
            <p>
              E. Saya menyatakan bahwa semua informasi yang saya berikan benar. Saya menyetujui seluruh syarat dan ketentuan ini.
            </p>
            <p>
              <b>Pernyataan Persetujuan Orang Tua - Declaration of Parent’s Consent</b>
            </p>
            <p>
              1. Peserta belajar dalam grup berbeda usia (rentang 1-2 tahun). Grup ditentukan oleh Team Coaches.
            </p>
            <p>
              2. Peserta menginap di hotel, berbagi kamar (2-3 orang), sesuai ketersediaan dan jenis kelamin.
            </p>
            <p>
              3. Jenis tempat tidur tergantung ketersediaan (twin bed, king bed, atau extra bed).
            </p>
            <p>
              Saya melimpahkan wewenang kepada PT Jalan Maju Akademi untuk menjaga dan mengontrol anak saya selama 17-20 Desember 2025 dalam pelatihan I Am Gifted! Camp.
            </p>
            <p>
              A. I agree that if my child falls sick during the program, Jalan Maju Akademi will only provide the medicine sent by the parents.
            </p>
            <p>
              B. I understand that if my child becomes ill fever lebih dari 37.5°C, cough, cold, I will pick up my child and follow the next batch of the program.
            </p>
            <p>
              C. I understand the documentation is for commercial, educational, and promotional purposes only.
            </p>
            <p>
              D. Participants are discouraged from bringing valuables Example: Laptop, Jewelry, Watch, Tablet/Ipad. Lost items are at their own risk.
            </p>
            <p>
              E. I authorize PT Jalan Maju Akademi and their reps to care for my child during the program (17-20 Dec 2025).
            </p>
            <p>
              I declare the information I’ve provided is true and agree to this agreement. My signature applies in physical, fax, or electronic form.
            </p>
            <p>
              Dengan mencentang ini, Anda menyetujui semua syarat & ketentuan termasuk persetujuan medis dan informasi anak yang Anda berikan.
            </p>
            <p>
              By ticking this, you agree to all terms & conditions including medical consent and the child information you provide.
            </p>
          </div>

          <button
            className={`mt-4 px-4 py-2 rounded transition ${
              isScrolledToBottom
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
            onClick={() => {
              if (isScrolledToBottom) {
                onAgreed();
                onClose();
              }
            }}
            disabled={!isScrolledToBottom}
          >
            Saya Setuju & Tutup
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
