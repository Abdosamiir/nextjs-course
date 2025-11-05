import MealsGrid from "@/components/meals/MealsGrid";
import { getAllMeals } from "@/utils/meals";
import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "./Loading";

const page = () => {
  return (
    <>
      <header className="my-12 mb-20 mx-auto w-[90%] max-w-300 text-[#ddd6cb] text-2xl">
        <h1 className="font-montserrat">
          Delicious meals will be displayed here.
        </h1>
        <p className="m-0">Explore our delicious meals!</p>
        <p className="m-0">
          <Link
            href="/meals/share"
            className="inline-block mt-4 py-2 px-4 rounded-lg bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:from-[#fd4715] hover:to-[#f9b241]"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<Loading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default page;

async function Meals() {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals} />;
}
