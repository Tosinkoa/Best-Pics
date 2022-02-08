// import { fetch } from "node-fetch";
// import { pipeline } from "node:stream";

// export default async function handler(req, res) {
//   try {
//     const res = await fetch(
//       `https://pixabay.com/api/?key=${process.env.API_KEY}&id=${req.params}`
//     );
//     if (!res.ok) throw new Error("Unexpected response");

//     console.log(res);

//     res.setHeader("Content-Type", image / png);
//     res.setHeader("Content-Disposition", 'inline; filename=""');
//     await pipeline(res.body, res);

//     res.status(200).json({ name: "John Doe" });
//   } catch (err) {
//     console.error(err);
//   }
// }
