import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";

export default component$(() => {
  return (
    <>
      <div>
        Take a look at some interesting projects I've worked on.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Ross Acheson | Showcase",
  meta: [
    {
      name: "description",
      content: "Showcase of interesting projects",
    },
  ],
};
