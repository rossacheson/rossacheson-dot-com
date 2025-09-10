import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";

export default component$(() => {
  return (
    <>
      <p>
        I can't showcase my professional work here, but here are a few hobby/personal/educational projects I've worked on.
      </p>
      <ul>
        <li>
          <a href="./asamblea">Asamblea</a>
          <br/>&nbsp;&nbsp;
          Simple Angular app playing around with Angular CDK's drag and drop functionality.
        </li>
        <li>
          <em>This</em> website
          <br/>&nbsp;&nbsp;
          I used to have a big WordPress site here, but I wanted something simpler and built from scratch.
          I decided to use Qwik to build it because it's super performant and because it's what I've been learning recently.
        </li>
      </ul>
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
