import { desc, run, task, sh } from "https://deno.land/x/drake@v1.5.0/mod.ts";

desc("Minimal Drake task");
task("Hello", [], async function() {
    console.log("Hello From Drake!");
    await sh("deno run --allow-env main.ts");
});

run()