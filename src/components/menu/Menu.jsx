import React from "react";
import Img1 from "../../assets/image/coffee-white.png";
import Img2 from "../../assets/image/coffee2.png";
import { motion } from "framer-motion";

const MenuData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Intense and aromatic. Pure espresso, a shot of pure energy. Experience the boldest flavor of coffee",
  },
  {
    id: 2,
    img: Img1,
    name: "Americano",
    description:
      "Bold and bright. The classic American coffee. Clean, crisp, and perfect for any time of day.",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "Rich and velvety. Steamed milk meets espresso for a luxurious treat. Indulge in this classic Italian favorite.",
  },
];

const Menu = () => {
  return (
    <div id="menu" className="py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-4xl font-bold font-cursive text-[#524237]"
          >
            Best Coffee for You
          </motion.h1>
        </div>
        {/* menu card section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center"
        >
          {MenuData.map((menu) => (
            <div className="rounded-2xl bg-white hover:bg-[#8E7B6E] transition-all hover:text-white relative shadow-xl duration-high group max-w-[300px]">
              <div className="h-[122px]">
                <img
                  src={menu.img}
                  alt=""
                  className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                />
              </div>
              <div className="p-4 text-center mb-4">
                <div className="w-full"></div>
                <h1 className="text-xl font-bold">{menu.name}</h1>
                <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                  {menu.description}
                </p>
                <div className="flex justify-between mt-5 px-6 items-center">
                  <p className="text-lg font-semibold">$5.80</p>
                  <button className="bg-[#524237] text-white px-3 py-2 rounded-md group-hover:bg-white group-hover:text-[#524237]">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
