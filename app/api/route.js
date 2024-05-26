export async function POST(request) {
  try {
    if (secret !== process.env.SECRET) {
      throw new Error(err);
    }
    const text = await request.text();
    // Process the webhook payload
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }

  return new Response("Success!", {
    status: 200,
  });
}
