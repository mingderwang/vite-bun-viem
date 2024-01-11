import { renderToReadableStream } from "react-dom/server";
import UsersList from "./ui/components/UsersList";

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const response = await fetch("https://api.github.com/users", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const users = await response.json();

    const stream = await renderToReadableStream(<UsersList users={users} />);
    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  },
});


console.log(`Server started on PORT:${server.port}`);
