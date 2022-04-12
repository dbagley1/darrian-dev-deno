import { serve } from "https://deno.land/std@0.120.0/http/server.ts";
serve((req) => {
  const output = [];

  let url = new URL(req.url);
  output.push(url);

  let path = url.pathname;
  output.push(path);

  let word = path.match(/\w+/)[0]
  output.push(word);

  return new Response(output.join('\n'));
}
