import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href="/meals/meal-1">meal-1 </Link>
      <Link href="/meals/meal-2">meal-2 </Link>
    </div>
  );
};

export default page;
