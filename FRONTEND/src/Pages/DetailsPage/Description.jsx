import React from "react";

function Description({descp}) {
  return (
    <section className="flex flex-col ">
      <h2 className="text-base font-semibold text-ellipsis text-zinc-900 max-md:max-w-full">Description</h2>
      <p className="mt-6 text-base text-black max-md:max-w-full">
        {descp}
      </p>
    </section>
  );
}

export default Description;