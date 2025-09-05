import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";

export default component$(() => {
  return (
    <>
      <div>
        I enjoy taking pictures. I've posted a few on <a href="https://instagram.com/rossacheson">Instagram</a>.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Ross Acheson | Photography",
  meta: [
    {
      name: "description",
      content: "Photography by Ross Acheson",
    },
  ],
};
