import { useParams } from "react-router-dom";

const ClassPage = () => {
  const {classl2} = useParams();
  console.log(classl2)
  return (
    <>
          <h1>Class: {classl2}</h1>

    </>
  );
};

export default ClassPage;
