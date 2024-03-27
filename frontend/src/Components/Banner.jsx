import React from "react";
import lamp from "../Images/Lamp.jpg";

const Banner = () => {
  return (
    <div className="flex items-center justify-between gap-40 px-5 py-24 pt-40">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="font-mono text-4xl">Artvedic 2.0</div>

        <button className="font-mono text-2xl border-2 border-[#422800] hover:bg-lime-300 rounded-3xl p-4 bg-[#fbeee0]">
          Explore Artworks
        </button>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-center font-mono text-2xl">
          The Complete Circle
        </div>
        <div className="flex gap-4">
          <button className="font-mono text-2xl border-2 border-[#422800] hover:bg-blue-300 rounded-3xl p-4 bg-[#dbe28c]">
            Buy Now
          </button>
          <button className="font-mono text-2xl border-2 border-[#422800] hover:bg-orange-600 rounded-3xl p-4 bg-[#e9c197]">
            Sell Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
