import React from "react";

const services = [
  { title: "Waxing", image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fmainsubcategory%2FWaxing.webp&w=256&q=75" },
  { title: "Facial", image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fmainsubcategory%2FFacial-category-%20Image-8-2-25.png&w=256&q=75" },
  { title: "Clean-Up", image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fmainsubcategory%2FClean%20Up.webp&w=256&q=75" },
  { title: "Bleach & Detan", image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fmainsubcategory%2FDe-Tan%20Bleach.webp&w=256&q=75" },
  { title: "Mani-Pedi", image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fmainsubcategory%2Fmani-pedi.gif&w=256&q=75" },
  { title: "Hair", image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fmainsubcategory%2FHair.webp&w=256&q=75" },
  { title: "Body Polishing", image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fmainsubcategory%2FBody%20Polishing.webp&w=256&q=75 " },
  { title: "Threading & Face Wax", image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fmainsubcategory%2FThreading.webp&w=256&q=75" },
  { title: "Insta Light Pack", image: "https://www.yesmadam.com/_next/image?url=https%3A%2F%2Fcdn.yesmadam.com%2Fimages%2Flive%2Fapp%2Fmainsubcategory%2FInsta%20Light%20%20Pack.webp&w=256&q=75" },
];

const LookingFor = () => {
  return (
    <div className="sm:hidden bg-MainBGColorYellow p-6 rounded-3xl">
      <h2 className="text-2xl text-black mb-4 font-bold">What are you looking for?</h2>

      <div className="grid grid-cols-3 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white shadow-md overflow-hidden border border-pink-100">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm text-black font-semibold">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LookingFor;