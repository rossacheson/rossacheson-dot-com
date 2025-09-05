import { component$ } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";

export default component$(() => {
  return (
    <>
      <h1>Professional Profile</h1>
      <p>
        I am a software craftsman. I am always thinking not just how to get something done, but how to do the <strong>right thing</strong> <em>well</em>.
      </p>
      <ul>
        <li>Battle-tested full stack software engineer with a slight lean towards front end.</li>
        <li>Angular expert (I'm well over the proverbial 1000 hour threshold)</li>
        <li>Extensive experience with TypeScript, C#, .NET, SQL Server, Qwik</li>
        <li>Some React Native, Node, Python, Java, and PHP</li>
      </ul>
      <div>
        <p>I have a variety of projects under my belt including:</p>
        <ul>
          <li>greenfield</li>
          <li>modernization</li>
          <li>serverless</li>
          <li>cloud-native</li>
          <li>on-prem</li>
          <li>microservices</li>
          <li>single-page apps</li>
          <li>mobile apps</li>
          <li>micro-frontends</li>
          <li>AI-integrated CLI tooling</li>
        </ul>
      </div>
      <p>See my <a href="https://linkedin.com/in/rossacheson">LinkedIn Profile</a> for more of my professional history.</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Ross Acheson | Professional Profile",
  meta: [
    {
      name: "description",
      content: "Professional profile of Ross Acheson",
    },
  ],
};
