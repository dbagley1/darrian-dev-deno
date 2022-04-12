import { serve } from "https://deno.land/std@0.120.0/http/server.ts";

function handler(req: Request): Response {
  const output = [];

  let url = new URL(req.url);
  output.push(url);

  let path = url.pathname;
  output.push(path);

  let word = path.match(/\w+/)[0]
  output.push(word);

  return new Response(output.join('\n'));
}

console.log("Listening on http://localhost:8000");
await serve(handler);
