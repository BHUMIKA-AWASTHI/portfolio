import { posts } from "../data/posts";
import "./BlogPage.css";

// Blog content comes from data/posts.js; this component only decides how it looks.
export default function BlogPage() {
  return (
    <>
      <section className="page-intro">
        <h1>From my notebook</h1>
        <p>Ideas, experiments, and lessons from building for the web.</p>
      </section>
      <section className="content-grid">
        {/* Map each post object to a card. */}
        {posts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <p className="eyebrow">{post.date}</p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <div>
              {post.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
