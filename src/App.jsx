import { useState } from 'react';
import ArticleForm from './components/ArticleForm.jsx';
import ArticleList from './components/ArticleList.jsx';

const initialArticles = [
  { id: 1, title: 'Introduzione a React' },
  { id: 2, title: 'Cosa sono le props' },
  { id: 3, title: 'useState spiegato semplice' }
];

function App() {
  // la lista sta nel genitore perché la usano sia il form (aggiunge) sia la lista (mostra e cancella)
  const [articles, setArticles] = useState(initialArticles);

  // IMMUTABILITÀ: niente push sullo stato, creo un NUOVO array con lo spread
  const addArticle = title => {
    setArticles([...articles, { id: Date.now(), title }]);
  };

  // cancellazione: filter restituisce un nuovo array senza l'articolo
  const removeArticle = id => {
    setArticles(articles.filter(article => article.id !== id));
  };

  return (
    <main className="container">
      <h1>Il mio blog</h1>
      <ArticleForm onAdd={addArticle} />
      <ArticleList articles={articles} onRemove={removeArticle} />
    </main>
  );
}

export default App;
