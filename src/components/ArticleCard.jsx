import { useArticles } from '../context/ArticlesContext';

function ArticleCard({ article }) {
  const { saveArticle, removeArticle, isArticleSaved } = useArticles();
  const saved = isArticleSaved(article);

  const handleBookmarkClick = () => {
    if (saved) {
      removeArticle(article);
    } else {
      saveArticle(article);
    }
  };

  return (
    <div className="article-card">
      <div className="article-header">
        <h3 className="article-title">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </h3>
        <button
          onClick={handleBookmarkClick}
          className={`bookmark-btn ${saved ? 'saved' : ''}`}
          aria-label={saved ? 'Remove bookmark' : 'Add bookmark'}
        >
          {saved ? '🔖' : '📑'}
        </button>
      </div>

      <p className="article-abstract">
        {article.abstract || 'No description available.'}
      </p>

      <div className="article-meta">
        <span>{article.section || 'General'}</span>
        <span>
          {article.published_date
            ? new Date(article.published_date).toLocaleDateString()
            : 'No date'}
        </span>
      </div>
    </div>
  );
}

export default ArticleCard;
