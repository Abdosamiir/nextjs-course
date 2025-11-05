/* eslint-disable react/no-danger-with-children */
import { getMeal } from "@/utils/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const page = ({ params }) => {
  const meal = getMeal(params.id);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className="flex p-8 gap-12 mx-auto max-w-7xl">
        <div className="relative w-120 h-80">
          <Image
            src={meal.image}
            fill
            alt={meal.title}
            className="object-cover rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] animate-[fade-slide-in-from-left_1s_ease-out_forwards]"
          />
        </div>
        <div className="p-2 pl-4 text-[#ddd6cb] max-w-160 animate-[fade-slide-in-from-right_1s_ease-out_forwards]">
          <h1 className="m-0 text-[3.5rem] uppercase font-montserrat shadow-[0_0_0.5rem_rgba(0,0,0,0.5)]">
            {meal.title}
          </h1>
          <p className="text-2xl text-[#cfa69b] italic">
            by{" "}
            <a
              href={`mailto:${meal.creator_email}`}
              className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent hover:shadow-[0_0_18px_rgba(248,190,42,0.8)]"
            >
              author
            </a>
          </p>
          <p className="text-2xl">{meal.summary}</p>
        </div>
      </header>
      <main>
        <div
          className="text-xl leading-relaxed bg-[#6e6464] text-[#13120f] rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] p-8 max-w-240 my-8 mx-auto animate-[fade-slide-in-from-bottom_1s_ease-out_forwards]"
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></div>
      </main>
    </>
  );
};

export default page;
