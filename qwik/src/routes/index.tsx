import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";

export default component$(() => {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Ross Acheson</h1>
      <div>
        Website under construction.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Ross Acheson",
  meta: [
    {
      name: "description",
      content: "Meet Ross :)",
    },
  ],
};
