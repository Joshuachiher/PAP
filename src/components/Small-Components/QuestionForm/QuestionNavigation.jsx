import React from "react";

export default function QuestionNavigation({ currentIndex, total, onNext, onPrev, onSubmit }) {
  return (
    <div>
      {/* Tombol navigasi */}
      <button
        type="button"
        onClick={onPrev}
        disabled={currentIndex === 0}
        style={{ marginRight: 10 }}
      >
        Previous
      </button>

      {currentIndex < total - 1 ? (
        <button type="button" onClick={onNext}>
          Next
        </button>
      ) : (
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      )}
    </div>
  );
}
