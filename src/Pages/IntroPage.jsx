import LogoHeader from "../components/Small-Components/Intro/LogoHeader";
import StartButton from "../components/Small-Components/Intro/StartButton";

const IntroText = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-4xl">Form Pendaftaran I Am Gifted!™ Camp</h1>
      <LogoHeader />

      <h1 className="text-xl md:text-2xl font-bold text-center">
        I Am Gifted!™ Camp <br />
        <span className="font-medium">17 - 20 December 2025</span> <br />
        <span className="font-semibold">Pre Attendance Package - Parents Form</span>
        <br />
        <span className="italic text-sm">(Untuk diisi oleh orang tua/wali)</span>
        <br />
        <span className="italic text-sm">(To be filled by Parents/Guardians)</span>
      </h1>

      <div className="max-w-3xl mx-auto px-4 md:text-2xl text-center space-y-4">
        <p>
          <strong>Para Orang Tua/Wali,</strong>
          <br />
          Dear Parents/Guardians
        </p>
        <p>Mohon untuk mengisi formulir berikut ini, karena formulir ini dirancang khusus untuk membantu kami memperhatikan kebutuhan Anda dan Anak Anda selama I Am Gifted! Camp.</p>
        <p>Please fill out the following form, because this form is specifically designed to help us pay attention to your and your child’s needs during the I Am Gifted Camp.</p>
        <p>
          Mohon agar memberikan informasi secara jujur dan seakurat mungkin dalam formulir ini. Hal ini dapat membantu kami untuk mempersiapkan anak Anda dalam program I Am Gifted! Camp dan informasi ini akan kami gunakan untuk mendukung
          pengalaman belajar anak Anda selama camp ini berlangsung.
        </p>
        <p>Please provide the information as truthfully and as accurately possible. The information you provide shall be used by us, solely for the purpose of ensuring the best learning experience for your child during the camp.</p>
        <p>Informasi yang Anda isi dalam formulir ini bersifat rahasia dan hanya akan digunakan oleh tim internal kami selama I Am Gifted! Camp.</p>
        <p>All information provided will be treated as private information and will only be utilized by our internal team during the duration of this specific camp.</p>
        <StartButton />
      </div>
    </>
  );
};

export default IntroText;
