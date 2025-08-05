export default function NavigationButtons({ stepNumber, totalSteps, onNext, onPrev, onSubmit }) {
  const isFirstStep = stepNumber === 0;
  const isLastStep = stepNumber === totalSteps - 1;

  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={onPrev}
        disabled={isFirstStep}
        aria-label="Previous"
        className={`p-2 rounded ${
          isFirstStep ? "bg-gray-300 cursor-not-allowed" : "bg-gray-500 text-white hover:bg-gray-600"
        }`}
      >
        {/* Icon panah kiri */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {isLastStep ? (
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={onNext}
          className="p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          aria-label="Next"
        >
          {/* Icon panah kanan */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
