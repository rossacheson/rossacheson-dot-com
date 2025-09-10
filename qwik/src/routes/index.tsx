import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";

export default component$(() => {
  return (
    <>
      <h1>Ross Acheson</h1>
      <p>
        Welcome to my little corner of the web.
      </p>
      <h2>About me</h2>
      <p>Here are a few things I'd like everyone to know about me:</p>
      <ul>
        <li>Student of Jesus</li>
        <li>Happily married</li>
        <li>Two amazing boys</li>
        <li>Software engineer</li>
        <li>Son of an architect and an artist</li>
        <li>Hobbies include photography, hiking, sports, reading, and music</li>
      </ul>
      <h2>Links</h2>
      <ul>
        <li>
          <a href="https://github.com/rossacheson">GitHub</a>
        </li>
        <li>
          <a href="https://github.com/ross-kunaico">Kunai Github</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/rossacheson">LinkedIn</a>
        </li>
        <li>
          <a href="https://instagram.com/rossacheson">Instagram</a>
        </li>
      </ul>
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
