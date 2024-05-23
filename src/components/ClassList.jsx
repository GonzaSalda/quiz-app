import { imgs, classl2 } from "../data";
import ClassCard from "./ClassCard";

const [
  imgWarlock,
  imgPhantomSummoner,
  imgTresureHunter,
  imgSilverRanger,
  imgSorcer,
  imgSpellSinger,
  imgGladiator,
] = imgs;

const ClassList = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
      <ClassCard classl2 = {classl2} imgs = {imgs} />
    </div>
  );
};

export default ClassList;
