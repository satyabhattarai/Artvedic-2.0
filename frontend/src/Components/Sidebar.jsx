import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
const Sidebar = () => {
  const [open, setopen] = useState(true);
  const Category = [];

  const side_contents = [
    { title: "Home", link: "" },
    {
      title: "Categories",
      link: "",
      submenu: "true",
      subcategory: [
        {
          title: "Painting ",
          link: "/",
          sub: "true",
          subcategories: [
            { title: "Oil ", link: "/" },
            { title: "Glass ", link: "/" },
          ],
        },

        {
          title: "Sketching ",
          link: "/",
          sub: "true",
          subcategories: [
            { title: "Color Potrait", link: "/" },
            { title: "Black & White Potrait ", link: "/" },
          ],
        },
        {
          title: "Drawing ",
          link: "/",
          sub: "true",
          subcategories: [
            { title: "digital ", link: "/" },
            { title: "pencil ", link: "/" },
            { title: "pen", link: "/" },
          ],
        },

        // {title:'Panel ', link:"/"},

        // {title:'Digital ', link:"/"},
        // {title:'Acrylic', link:"/"},
        // {title:'Abstract', link:"/"},
        // {title:'Tempera', link:"/"},
        // {title:'Encaustic', link:"/"},
        // {title:'Watercolor', link:"/"},
        // {title:'Landscape ', link:"/"},
        // {title:'Miniature ', link:"/"},
        // {title:'Impressionism', link:"/"},
      ],
    },
    { title: "Shop", link: "" },
    { title: "Hire Artists", link: "" },
    { title: "Galleries", link: "" },
    { title: "Favourites", link: "" },
    { title: "Exhibitions", link: "" },
  ];

  return (
    //     <div className={` ${open ? "w-12 " :"w-60 "} h-screen duration-350 text-black   bg-transparent relative `}

    //     >
    //       <div className={` ${!open &&  'translate-x-48'}  pr-2 py-2 text-4xl cursor-pointer absolute `}
    //        onClick={()=> setopen(!open) }>
    //         <IoMenu />
    //         </div>

    //       <div>
    //         <h1 className={` ${open &&  'scale-0'} px-2 py-2 text-white text-xl `}>Artvedic-2.0</h1>
    //       </div>
    //     <div className={`flex pt-4`}>
    // <div className={` text-4xl`}> <IoMenu /></div>
    // <div className={`${open &&  'scale-0'} text-white text-2xl`}> Dashboard</div>
    //     </div>
    //     <ul>
    //       {Menus.map((menu,index) =>(
    //           <li key={index}>
    //             {menu.title}
    //           </li>
    //       ))}
    //     </ul>
    //         </div>
    <div className=" w-40 flex flex-col h-auto bg-[#FAF9F6] mt-24 gap-9">
      <ul className="">
        {side_contents.map((contents, index) => (
          <a href={contents.link}>
            <button className=" border-2 w-full rounded-lg border-transparent hover:border-[#FFDEAD] p-2  text-base hover:font-medium  group/list">
              {contents.title}

              <div className="absolute ml-[150px] bg-[#FAF9F6]    mt-[-77px]">
                {contents.submenu && (
                  <div className="   text-base  hidden  group-hover/list:block hover:font-medium  grid grid-cols-3   ">
                    {contents.subcategory.map((subc, index) => (
                      <button className="flex  mr-2 p-4  group/item hover:font-medium  ">
                        {subc.title}
                        <div className="bg-[#FAF9F6] ">
                          {subc.sub && (
                            <div className="absolute hidden hover:divide-solid group-hover/item:block ml-9 ">
                              {subc.subcategories.map((subcc, index) => (
                                <li className="flex hover:font-medium hover:border-[#FFDEAD]  p-1">
                                  <div className="bg-lime-300 p-4 border rounded">
                                    gfffff
                                  </div>
                                </li>
                              ))}
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </button>
          </a>
        ))}
      </ul>
      {/* <ul>
    {Category.map((category,index) =>(

           <a href={category.link}>
            <button   className='border-2 w-full rounded-lg border-transparent hover:border-[#FFDEAD] p-1 duration-80 text-base hover:font-medium '>
            {category.title}
            </button>
            </a>

      ))}
    </ul> */}
    </div>
  );
};

export default Sidebar;
