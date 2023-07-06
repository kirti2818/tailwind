import React from "react";
import SongCard from "./SongCard";

const SongDiv = ({ array = [], text = "" }) => {
  console.log(array);

  return (
    <div className="flex flex-col gap-5 w-full ">
      <p className="text-[20px] font-extrabold font-serif hover:underline text-white">
        {text}
      </p>

      <div className="flex gap-5 w-full h-[300px]">
        {array &&
          array.map((card) => {
            return <SongCard image={card.image} songTitle={card.songTitle} />;
          })}
      </div>
    </div>
  );
};

export default SongDiv;
