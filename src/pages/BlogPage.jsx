import { posts } from "../data/posts";
export default function BlogPage() {
  return (
    <>
      <section className="page-intro">
        <h1>From my notebook</h1>
        <p>Ideas, experiments, and lessons from building for the web.</p>
      </section>
      <section className="content-grid">
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
