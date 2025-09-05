import { component$ } from "@qwik.dev/core";

export const Nav = component$(() => {
  return (
    <>
      <nav class="flex gap-4">
        <a href="/">Ross Acheson</a>
        <a href="/profile">Profile</a>
        <a href="/photography">Photography</a>
      </nav>
    </>
  );
});