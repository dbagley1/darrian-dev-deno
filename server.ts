import { serve } from "https://deno.land/std@0.120.0/http/server.ts";
serve((_req) => new Response("Hello, world"));
