import { revalidateTag } from "next/cache";

export async function POST(req) {
  console.log(req);
  const tag = req.body?.model;
  if (req) {
    // revalidateTag(tag);
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.searchParams.get("secret");
    console.log("Path parameter:", path);
    return Response.json({
      revalidated: true,
      now: Date.now(),
    });
  }
  // if (req.query?.secret !== process.env.SECRET) {
  //   return Response.json({
  //     revalidated: false,
  //     now: Date.now(),
  //     message: "Invalid Token",
  //   });
  // }
  // if (tag) {
  //   revalidateTag(tag);
  //   return Response.json({
  //     revalidated: true,
  //     now: Date.now(),
  //   });
  // }
}
