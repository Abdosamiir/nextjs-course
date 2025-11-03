import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <header>Delicious meals will be displayed here.</header>
      <p>Explore our delicious meals!</p>
      <p>
        <Link href="/meals/share">share your favourite meal recipe</Link>
      </p>
      <main></main>
    </>
  );
};

export default page;
