import React from "react";
import JMA from "../../assets/Images/JMA-Logo.png"; // ✅ Import gambar

const JMAComponent = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={JMA} // ✅ Gunakan variabel hasil import
        alt="Logo JMA"
        className="h-16 md:h-20 object-contain"
      />
    </div>
  );
};

export default JMAComponent;
