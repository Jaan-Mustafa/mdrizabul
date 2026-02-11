import { blogPosts } from '../../data/blog';
import './Blog.css';

const Blog = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="blog__title">Blog</h2>

        <div className="blog__list">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-post">
              <div className="blog-post__header">
                <time className="blog-post__date" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <span className="blog-post__read-time">{post.readTime}</span>
              </div>

              <h3 className="blog-post__title">
                <a href={`/blog/${post.slug}`} className="blog-post__link">
                  {post.title}
                </a>
              </h3>

              <p className="blog-post__excerpt">{post.excerpt}</p>

              <div className="blog-post__tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-post__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
