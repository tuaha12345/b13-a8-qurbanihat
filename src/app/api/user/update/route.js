import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { MongoClient, ObjectId } from "mongodb";

export async function POST(req) {
  let client;
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session || !session.user) {
      return Response.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { name, imageUrl } = await req.json();
    client = new MongoClient(process.env.MONGO_URI);
    const db = client.db("kurbanirHat");

    console.log("Session user:", session.user);
    console.log("Updating user ID:", session.user.id);

    let result = await db.collection("user").updateOne(
      { _id: new ObjectId(session.user.id) },
      { $set: { name, image: imageUrl, updatedAt: new Date() } }
    );

    if (result.modifiedCount === 0) {
      result = await db.collection("user").updateOne(
        { id: session.user.id },
        { $set: { name, image: imageUrl, updatedAt: new Date() } }
      );
    }

    if (result.modifiedCount === 0) {
      console.error("User not found with ID:", session.user.id);
      return Response.json({ error: "User not found in database" }, { status: 404 });
    }

    return Response.json({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    console.error("Profile update error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
