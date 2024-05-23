import { useEffect, useState } from "react";
import Results from "./Results";

const Question = ({
  filteredQuestion,
  setIndexQuestion,
  indexQuestion,
  questionsFiltered,
  setActiveQuiz,
}) => {
  const [score, setScore] = useState(0);
  const [answersRandom, setAnswersRandom] = useState([]);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [activeResults, setActiveResults] = useState(false);

  useEffect(() => {
    const answer = [
      ...filteredQuestion.incorrect_answers,
      filteredQuestion.correct_answer,
    ];

    setAnswersRandom(answer.sort(() => Math.random() - 0.5));
  }, [filteredQuestion]);

  const checkAnswer = (answerText, index) => {
    if (answerText === filteredQuestion.correct_answer) {
      setScore(score + 1);
    }
    setSelectAnswerIndex(index);
    setAnswered(true);
  };

  const onNextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
    setSelectAnswerIndex(null);
    setAnswered(false);
  };

  const onReset = () => {
    setScore(0);
    setActiveQuiz(false);
    setIndexQuestion(0);
  };

  return (
    <>
      {activeResults ? (
        <Results
          questionsFiltered={questionsFiltered}
          score={score}
          onReset={onReset}
        />
      ) : (
        <div className="flex flex-col justify-between shadow-md shadow-slate-300 w-[600px] h-[600px] m-10 p-10 rounded-lg">
          <div className="flex justify-between">
            <span className="text-xl font-bold">
              {/* Num preg actual y numero de preguntas total */}
              {indexQuestion + 1} / {questionsFiltered.length}
            </span>
            <div>
              <span className="font-semibold">Dificultad:</span>
              <span className="font-bold">
                {/* La dificultad de la pregunta */}
                {filteredQuestion.difficulty}
              </span>
            </div>
          </div>

          <button
            onClick={() => setActiveQuiz(false)}
            className="border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900"
          >
            Reiniciar
          </button>

          {/* Pregunta */}
          <div>
            <h1 className="font-bold">{filteredQuestion.question}</h1>
          </div>

          {/* Respuestas */}
          <div className="grid grid-cols-2 gap-5">
            {/* Mapeamos una respuesta correcta y respuesta incorrecta */}
            {answersRandom.map((answer, index) => (
              <button
                key={index}
                className={`border p-5 rounded-lg flex justify-center items-center hover:scale-105 ${
                  selectAnswerIndex !== null && index === selectAnswerIndex
                    ? answer === filteredQuestion.correct_answer
                      ? "bg-green-500"
                      : "bg-red-500"
                    : ""
                }`}
                onClick={() => checkAnswer(answer, index)}
                disabled={answered && selectAnswerIndex !== index}
              >
                <p className="font-medium text-center text-sm">{answer}</p>
              </button>
            ))}
          </div>

          {/* Condicional para mostrar sig preg o el de finalizar */}
          {indexQuestion + 1 === questionsFiltered.length ? (
            <button
              onClick={() => {
                setAnswered(false);
                setActiveResults(true);
              }}
              className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium"
            >
              Finalizar
            </button>
          ) : (
            <button
              onClick={onNextQuestion}
              className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium"
            >
              Siguiente Pregunta
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Question;
