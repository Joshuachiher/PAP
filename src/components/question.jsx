// src/components/questions.js
import ModalTerms from "./ModalTerms";

export const questions = [
  {
    id: "fullName",
    label: "Nama Lengkap Anak - Child’s FULL Name",
    type: "text",
    required: true,
  },
  {
    id: "nickname",
    label: "Nama Panggilan Anak - Child’s Nickname",
    type: "text",
    required: true,
  },
  {
    id: "dob",
    label: "Tanggal Lahir Anak - Child’s DOB",
    type: "date",
    required: true,
  },
  {
    id: "gender",
    label: "Jenis Kelamin - Gender",
    type: "radio",
    options: [
      { value: "male", label: "Laki-laki - Male" },
      { value: "female", label: "Perempuan - Female" },
    ],
    required: true,
  },
  {
    id: "school",
    label: "Nama Sekolah - School's Name",
    type: "text",
    required: true,
  },
  {
    id: "Grade",
    label: "Tingkat - Grade",
    type: "text",
    required: true,
  },
  {
    id: "Religion",
    label: "Agama-Religion",
    type: "text",
    required: true,
  },
  {
    id: "SiblingsJoinGiftedCamp",
    label: "Kakak/Adik yang join camp I Am Gifted - Siblings name who join I Am Gifted camp",
    type: "text",
  },
  {
    id: "HomeAddress",
    label: "Alamat Tinggal - Home Address:",
    type: "text",
    required: true,
  },
  {
    id: "Father",
    label: "Nama Ayah - Father's Name",
    type: "text",
    required: true,
  },
  {
    id: "FatherWhatsappNumber",
    label: "No Whatsapp Ayah - Father's Whatsapp Number",
    type: "number",
    required: true,
  },
  {
    id: "emailFather",
    label: "Email Ayah - Father's Email",
    type: "text",
    required: true,
  },
  {
    id: "Mother",
    label: "Nama Ibu - Mother's Name",
    type: "text",
    required: true,
  },
  {
    id: "MothersWhatsapp",
    label: "No Whatsapp Ibu - Mother's Whatsapp Number",
    type: "number",
    required: true,
  },
  {
    id: "emailMother",
    label: "Email Ibu - Mother's Email",
    type: "text",
    required: true,
  },
  {
    id: "EnglishProfiency",
    label: "Kemampuan Anak Berbahasa Inggris - English Proficiency",
    type: "radio",
    options: [
      { value: "Aktif-Active", label: "Aktif-Active" },
      { value: "Pasif-Passive", label: "Pasif-Passive" },
    ],
    required: true,
  },
   {
    id: "ShirtSize",
    label: "IAG T - Shirt Size",
    type: "text",
    required: true,
  },
  {
    id: "EmergencyContact-Fullname",
    label: "Emergency Kontak (Selain Orang Tua) dalam kondisi darurat nama lengkap-Emergency Contact  (Except Parents) in Emergency Situation full name",
    type: "text",
    required: true,
  },
  {
    id: "NoWhatsapp",
    label: "No Whatsapp",
    type: "number",
    required: true,
  },
  {
    id: "RelationWithParticipant",
    label: "Hubungan dengan Peserta-Relation With Participant",
    type: "text",
    required: true,
  },
  {
    id:"3MajorChanges",
    label:"Apakah 3 perubahan yang dapat dicapai yang anda ingin lihat dari anak anda? - What are the 3 major changes that you think are achievable, and would like to see happen in your child?",
    type:"text",
    required: true,
  },
  {
    id:"Relationshipwiththechild",
    label:"Silahkan ceritakan hubungan anak anda dengan anggota keluarga anda.Please describe the relationships between the child and members of the family (Ayah(father)/ibu(mother)/nenek(grandmother)/father(grandfather)/dengan saudara kandung(with immediate siblings).",
    type:"textarea",
    required:true,
  },
  {
    id:"Strenghtyourchild",
    label:"Apakah kelebihan-kelebihan yang dimiliki anak anda? - What are the strengths that your child possess?",
    type:"text",
    required: true,
  },
  {
    id:"Weaknessyourchild",
    label:"Apakah kekurangan yang dimiliki anak anda? - What are the weaknesses that your child possess?",
    type:"text",
    required:true,
  },
  {
    id:"HowWelldoyouknowchild",
    label:"Seberapa baik anda mengenal anak anda? - How well do you know your child? Orangtua/Wali diharapkan tidak melihat atau bertanya langsung kepada anak untuk menjawab pertanyaan berikut. Orangtua dimohon untuk menjawab pertanyaan-pertanyaan dibawah ini hanya menggunakan pendapat pribadi. (Dari sisi Anda sebagai orangtua)",
    type:"text",
    required: true,
  },
  {
    id:"FavoriteHobbies",
    label:"Tuliskan 3 hobi favorit anak anda: - List the 3 favorite hobbies of your child:",
    type:"text",
    required: true,
  },
  {
    id:"howmanyclosefriends",
    label:"Menurut anda, berapa banyak sahabat baik yang anak anda miliki? Sebutkan jika anda tahu.As far as you know, how many close friends does your child have? List their names if you know.",
    type:"text",
    required: true,
  },
  {
    id:"Scorevalues",
    label:"Menurut anda sebagai orangtua, apa 5 nilai terpenting bagi anak anda pada saat ini? (Dari sisi anda sebagai orangtua, Silahkan pilih 5)As a parent, what are the 5 core values that are currently most important for your child? (From your side, as parents) Choose as many as you like",
    type:"checkbox",
     options: [
      { value: "integrity-integrity", label: "integrity-integrity"},
      { value: "kesenangan-joy", label: "kesenangan-joy" },
      { value: "kasih sayang-feeling loved", label: "kasih sayang-feeling loved" },
      { value: "kebebasan-freedom", label: "kebebasan-freedom" },
      { value: "Rasa aman-security", label: "Rasa aman-security" },
      { value: "Tanggung jawab-responsibility", label: "Tanggung jawab-responsibility" },
      { value: "kejujuran-truthfullness", label: "kejujuran-truthfullness" },
      { value: "kesetiaan-loyalty", label: "kesetiaan-loyalty" },
      { value: "pengakuan-recognition", label: "pengakuan-recognition" },
      { value: "penerimaan-acceptance", label: "penerimaan-acceptance" },
      { value: "hormat-respect", label: "hormat-respect" },
      { value: "kebahagiaan-happiness", label: "kebahagiaan-happiness" },
      { value: "kekuasaan-power", label: "kekuasaan-power" },
      { value: "keseimbangan-balance", label: "keseimbangan-balance" },
      { value: "keadilan-justice", label: "keadilan-justice" },
      { value: "takut akan kegagalan-fear of failure", label: "takut akan kegagalan-fear of failure" },
      { value: "other", label: "other" },
    ],
    required: true,
  },
   {
    id: "favoriteSubject",
    label: "Apakah pelajaran favorit anak anda di sekolah? - What is your child’s favorite subject at school?",
    type: "text",
    required: true,
  },
     {
    id: "profession",
    label: "Menurut anda, profesi apakah yang mungkin diminati oleh anak anda? - According to you, what is the profession that your child is possibly interested in?",
    type: "text",
    required: true,
  },
       {
    id: "profession",
    label: "Informasi Tambahan - Additional Information Apakah anak anda memiliki alergi terhadap makanan? - Does your child have allergies to certain food?",
    type: "text",
    required: true,
  },
        {
    id: "medicine",
    label: "Apakah anak anda memiliki alergi terhadap obat-obatan? - Does your child have allergies to certain medicine?",
    type: "text",
    required: true,
  },
          {
    id: "sickness/injury",
    label: "Apakah Anak Anda memiliki kondisi sakit/cedera yang memerlukan perhatian khusus? (misalnya ashma/kelainan jantung/patah tulang) - Does your child have any sickness/injury that needs special concern?",
    type: "text",
    required: true,
  },
           {
    id: "3majorevents",
    label: "Silahkan tulis 3 hal yang pernah terjadi kepada anak anda selama 2 tahun terakhir ? (Yang bersifat traumatic/mempengaruhi psikis anak) - Please list down 3 major events that has happen to your child in the last 2 years",
    type: "text",
    required: true,
  },
  {
    id: "termsandagreement",
    label: "Terms and agreement",
    type: "checkbox",
    required: true,
    modal: true, // custom flag so we can attach modal trigger
  },
  {
    id: "Tandatangan",
    label: `Saya menyatakan bahwa semua informasi yang saya berikan adalah benar dan akurat sepanjang pengetahuan terbaik saya.<br/>
Saya setuju dengan syarat dan ketentuan yang berlaku di dalam Persetujuan ini dan tanda tangan di bawah ini berlaku, baik dalam bentuk elektronik, fax copy maupun fisik.<br/><br/>
I declare that the information I provided are true and accurate to the best of my knowledge.
I agree to abide by this Agreement, and that my signature applies in electronic form, fax copy or in physical copy.`,
    type: "radio",
    options : [
        {value: "I Accept", label: "I Accept" },
          { value: "I dont accept", label: "I dont accept" },
    ]
  },
];
