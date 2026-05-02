import React from "react";

const Tips = () => {
  const tips = [
    {
      title: "Choose a Healthy Animal",
      desc: "Animal should be active, চোখ পরিষ্কার এবং কোনো রোগ না থাকা উচিত।",
    },
    {
      title: "Check Age Requirement",
      desc: "Cow: 2 years+, Goat/Sheep: 1 year+ হতে হবে।",
    },
    {
      title: "Proper Feeding",
      desc: "ঘাস, খড়, ভুসি খাওয়ান এবং পরিষ্কার পানি দিন।",
    },
    {
      title: "Maintain Cleanliness",
      desc: "পরিষ্কার জায়গায় কুরবানি দিন এবং পরিবেশ পরিষ্কার রাখুন।",
    },
    {
      title: "Follow Islamic Rules",
      desc: "Bismillah, Allahu Akbar পড়ে ধারালো ছুরি ব্যবহার করুন।",
    },
    {
      title: "Distribute Meat Properly",
      desc: "৩ ভাগ করুন — পরিবার, আত্মীয়, গরিবদের জন্য।",
    },
  ];

  return (
    <div className="bg-green-100 my-10 py-8 rounded-xl w-11/12 mx-auto">
      <h1 className="text-center font-bold text-3xl mb-8">
      Qurbani Tips
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <h2 className="font-bold text-lg mb-2 text-green-600">
              {tip.title}
            </h2>
            <p className="text-gray-600">{tip.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;