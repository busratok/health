import { revalidateTag } from "next/cache";

export async function POST(req) {
  const tag = req.body?.model;
  const url = new URL(req.url, `http://${req.headers.host}`);
  const secret = url.searchParams.get("secret");

  if (secret !== process.env.SECRET) {
    return Response.json({
      revalidated: false,
      now: Date.now(),
      message: "Invalid Token",
    });
  }
  if (tag) {
    revalidateTag(tag);
    return Response.json({
      revalidated: true,
      now: Date.now(),
    });
  }
}
