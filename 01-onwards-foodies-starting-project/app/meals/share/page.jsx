// "use client";
import ImagePicker from "@/components/meals/ImagePicker";
import { shareMeal } from "@/utils/actions";

const page = () => {
  return (
    <>
      <header className="gap-12 my-12 mb-20 mx-auto w-[90%] max-w-300 text-[#ddd6cb] text-2xl">
        <h1 className="font-montserrat">
          Share your{" "}
          <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-300 my-12 mx-auto text-white">
        <form className="max-w-200" action={shareMeal}>
          <div className="flex gap-4">
            <p className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
            <p className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
          </div>
          <p className="mt-4">
            <label
              htmlFor="title"
              className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p className="mt-4">
            <label
              htmlFor="summary"
              className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p className="mt-4">
            <label
              htmlFor="instructions"
              className="block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              className="block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-[#ddd6cb] focus:outline-none focus:outline-[#f99f2a] focus:bg-[#1f252d]"
            ></textarea>
          </p>
          <ImagePicker label="Meal Image" name="image" />
          <p className="text-right mt-4">
            <button
              type="submit"
              className="border-0 py-3 px-8 bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white rounded shadow-[0_2px_5px_rgba(0,0,0,0.3)] cursor-pointer text-xl font-inherit hover:from-[#fd4715] hover:to-[#f9b241] disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed"
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
};

export default page;
