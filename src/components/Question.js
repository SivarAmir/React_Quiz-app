import React from "react";

export default function Question({
  question,
  dispatch,
  answer,
  index,
  numOfQuestions,
}) {
  const hasAnswer = answer !== null;

  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${
              hasAnswer && answer === index ? "answer" : ""
            } ${
              hasAnswer
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={index}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswer}
          >
            {option}
          </button>
        ))}
      </div>
      {hasAnswer && (
        <button
          className="btn btn-ui"
          onClick={() => {
            index === numOfQuestions - 1
              ? dispatch({ type: "finish" })
              : dispatch({ type: "nextQuestion" });
          }}
        >
          {index === numOfQuestions - 1 ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
}
