export default function FormInput({ label, type = "text", value, onChange, required = false }) {
  return (
    <label className="block mb-2">
      {label}:
      <input
        type={type}
        className="block w-full border p-2 mt-1 rounded"
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}
