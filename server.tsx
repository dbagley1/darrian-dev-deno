/** @jsx h */
import { serve } from "https://deno.land/std@0.133.0/http/server.ts";
// import { h, ssr } from "https://crux.land/nanossr@0.0.4";
// import { router } from "https://crux.land/router@0.0.11";
// const render = (component) => ssr(() => <div>{component}</div>);

import dictionary from './Collins2019Words.js';
console.log(dictionary.length);

function handler(req: Request): Response {
  const logs: any[] = [];

  let url = new URL(req.url);
  let path = url.pathname;
  let word = path.match(/\w+/)?.[0]?.toUpperCase() || 'No word';
  let validWord = dictionary.includes(word);

  logs.push(req.url);
  logs.push(path);
  logs.push(word);
  logs.push(validWord);

  console.log(logs);

  let output = `
  <div>
    <h1>${word}</h1>
    <p>${validWord ? 'Valid' : 'Invalid'}</p>
  </div>
  `;

  return new Response(output, {
    headers: {
      'content-type': 'text/html',
    },
  });
}

console.log("Listening on http://localhost:8000");
await serve(handler);
