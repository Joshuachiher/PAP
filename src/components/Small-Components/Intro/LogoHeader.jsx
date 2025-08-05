// components/Intro/LogoHeader.jsx
import React from "react";
import IAG from "../../Images/IAG";
import JMA from "../../Images/JMA";

const LogoHeader = () => {
  return (
    <div className="flex justify-between md:justify-between justify-center items-center w-full max-w-4xl mx-auto mb-6 px-4 gap-4">
      <IAG />
      <JMA />
    </div>
  );
};

export default LogoHeader;
