import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgs, questions } from "../data";
import Question from "../components/Question";

const ClassPage = () => {
  const shuffleArray = (array) => {
    const newArray = array.sort(() => Math.random() - 0.5);
    return newArray.slice(0, 5);
  };

  const { classl2 } = useParams();
  const [imgClass] = imgs.filter(
    (img) => img === `/src/assets/${classl2.toLowerCase()}.jpg`
  );

  const [questionsFiltered, SetQuestionsFiltered] = useState(
    questions.filter((question) => question.category === classl2)
  );
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false);

  useEffect(() => {
    const newQuestions = shuffleArray(questionsFiltered);
    SetQuestionsFiltered(newQuestions);
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center gap-10 m-10"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        {activeQuiz ? (
          <Question
            filteredQuestion={questionsFiltered[indexQuestion]}
            setIndexQuestion={setIndexQuestion}
            indexQuestion={indexQuestion}
            questionsFiltered={questionsFiltered}
            setActiveQuiz={setActiveQuiz}
          />
        ) : (
          <>
            <div className="flex flex-col  gap-5">
              <h1 className="text-3xl text-teal-900 text-center font-bold">
                {classl2}
              </h1>

              <div className="flex justify-center items-center">
                <img src={imgClass} alt={classl2} className="w-72" />
              </div>
            </div>

            <button
              className="text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900"
              onClick={() => setActiveQuiz(true)}
            >
              Empezar Quiz
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ClassPage;
