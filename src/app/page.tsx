import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const result = await db.query(`SELECT
    posts.id,
    posts.content,
    profiles.username
  FROM posts
  LEFT JOIN profiles ON posts.clerk_id = profiles.clerk_id`);

  const posts = result.rows;

  async function handleAddPost(formData) {
    "use server";
    const post_content = formData.get("content");

    const clerk_id = await currentUser();

    await db.query(`INSERT INTO posts (clerk_id, content) VALUES ($1, $2)`, [
      posts.id,
      post_content,
    ]);
  }

  return (
    <div>
      <h2>Home</h2>
      <form action={handleAddPost}>
        <textarea name="content" placeholder="Your Post..."></textarea>
        <button>Add Post</button>
      </form>
      {posts.map(function (post) {
        return (
          <div key={posts.id}>
            <h3>{posts.profile_id ? posts.profile_id : "Anon"}</h3>
            <p>{posts.content}</p>
          </div>
        );
      })}
    </div>
  );
}
