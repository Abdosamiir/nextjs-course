import Link from "next/link";
import ImageSlideshow from "@/components/images/ImageSlideshow";

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-300">
        <div className="w-160 h-100">
          <ImageSlideshow />
        </div>
        <div>
          <div className="text-[#ddd6cb] text-[1.5rem]">
            <h1 className="text-[2rem] font-bold tracking-[0.15rem] uppercase bg-linear-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent font-montserrat">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="flex items-center gap-4 text-[1.5rem]">
            <Link
              href="/community"
              className="mt-4 bg-transparent font-normal text-[#ff9b05] pl-0 no-underline hover:text-[#f9b241]"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="inline-block mt-4 py-2 px-4 rounded-md bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:from-[#fd4715] hover:to-[#f9b241]"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-200 w-[90%] my-8 mx-auto text-center">
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-200 w-[90%] my-8 mx-auto text-center">
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
