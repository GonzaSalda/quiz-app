import { Link } from "react-router-dom";

const ClassCard = ({classl2, imgs }) => {

  return (
    <>
      {imgs.map((img, index) => {
        return (
          <Link
            to={`/category/${classl2[Object.keys(classl2)[index]]}`}
            key={index}
            className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-200 to-pink-200 transition-all hover:scale-105"
          >
            <div className="p-5 flex justify-center items-center">
              <img
                src={img}
                alt={`Category ${classl2[Object.keys(classl2)[index]]}`}
                className="w-36"
              />
            </div>

            <h1 className="text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5">
              {classl2[Object.keys(classl2)[index]]}
            </h1>
          </Link>
        );
      })}
    </>
  );
};

export default ClassCard;
