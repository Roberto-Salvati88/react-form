function ArticleList({ articles, onRemove }) {
  if (articles.length === 0) {
    return <p>Nessun articolo.</p>;
  }

  return (
    <ul className="list">
      {articles.map(article => (
        <li key={article.id}>
          <span>{article.title}</span>
          <button className="icon" onClick={() => onRemove(article.id)} aria-label="Elimina">🗑</button>
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
