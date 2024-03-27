import { BsCart4 } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import React from "react";
import testimage from "../Images/White background pink blue paint.jpg";
import { useState } from "react";
const Productcard = () => {
  const [rating, setRating] = useState(null);
  const data = [
    { name: "MAX 400", price: "$9999" },
    { name: "CAT 450", price: "$4599" },
    { name: "Satya Bhattarai", price: "$5999" },
    { name: "retreat the dog and get yourself out of it ", price: "$9999" },
    { name: "this is the principle of it", price: "$59599" },
    { name: "sabrina is the god of war and thunder", price: "$8999" },
    { name: "sabrina is the god of war and thunder", price: "$8999" },
    { name: "sabrina is the god of war and thunder", price: "$8999" },
    { name: "sabrina is the god of war and thunder", price: "$8999" },
    { name: "DOGGY 890 SABINA", price: "$8999" },
    { name: "DOGGY 890 SABINA", price: "$8999" },
    { name: "DOGGY 890 SABINA", price: "$8999" },
  ];
  console.log(data);
  return (
    <div className="grid grid-cols-5 gap-8 mb-8 ">
      {data.map((product, index) => (
        <div>
          <div className="p-4 border border-gray-200 shadow-md rounded-xl">
            {/* hover:scale-110 transition duration-200 */}
            <div className="relative mb-4 group ">
              <img
                className="object-cover w-full h-64 rounded-xl"
                src={testimage}
                alt="Image"
              />
              <div className="absolute flex items-center justify-end w-full h-full transition-all duration-200 rounded-lg opacity-0 group-hover:bottom-0 -bottom-10 group-hover:opacity-100">
                {/* opacity-0 bg-black/20 -bottom-10 group-hover:bottom-0 group-hover:opacity-50    */}
                <MdFavoriteBorder
                  size={40}
                  className="p-2 text-white duration-300 delay-100 bg-orange-400 rounded-sm opacity-100 hover:bg-orange-500 "
                />
              </div>
            </div>
            <form className="flex flex-col p-4 text-center">
              <div className="text-xl tracking-tight capitalize truncate text-lime-500 hover:text-clip ">
                {product.name}
              </div>
              <div className="pt-2 text-black">{product.price}</div>

              <div className="flex items-center justify-center space-x-2 text-yellow-300">
                {[...Array(5)].map((star, index) => {
                  const currentRating = index + 1;
                  return (
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value={currentRating}
                        className="hidden"
                        onClick={() => setRating(currentRating)}
                      />
                      <FaStar className="cursor-pointer" size={16} />
                    </label>
                  );
                })}
              </div>
              <div className="flex flex-row items-center justify-between pt-4">
                <div>In stock</div>
                <div className="duration-200 ease-in bg-orange-400 rounded-xl hover:bg-orange-500">
                  <BsCart4
                    size={25}
                    className="m-1.5 rounded-md text-white  "
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productcard;
