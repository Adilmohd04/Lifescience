import React from "react";
import Bigcard from "./Bigcard";
import Smallcard from "./Smallcard";

const Tablets = () => {
  return (
    <section className="w-full py-8 md:py-8 flex flex-col justify-center items-center">
      <div className="text-center mb-12">
        <h5 className="text-xl uppercase text-[#17414F] font-semibold">Our blog</h5>
        <h2 className="text-5xl uppercase text-[#17414F] font-bold">Latest News</h2>
      </div>

      <div className="mt-12 flex justify-center py-5 flex-wrap gap-8">
        <div className="flex flex-col gap-8">
          <Bigcard
            src="/turmeric.png"
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="23 Nov"
          />
          <Smallcard
            src="/tablet.png"
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="22 Nov"
          />
        </div>

        <div className="flex flex-col gap-8">
          <Smallcard
            src="/turmeric.png"
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="26 Nov"
          />
          <Bigcard
            src="/tablet.png"
            title="The Covid-19 Epidemic In 2022 Is Back"
          />
        </div>

        <div className="flex flex-col gap-8">
          <Bigcard
            src="/turmeric.png"
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="26 Nov"
          />
          <Smallcard
            src="/tablet.png"
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="26 Nov"
          />
        </div>

        <div className="flex flex-col gap-8">
          <Smallcard
            src="/turmeric.png"
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="26 Nov"
          />
          <Bigcard
            src="/tablet.png"
            title="The Covid-19 Epidemic In 2022 Is Back"
            date="26 Nov"
          />
        </div>
      </div>
    </section>
  );
};

export default Tablets;
