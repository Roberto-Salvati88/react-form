import { useState } from 'react';

function ArticleForm({ onAdd }) {
  // controlled input: value legato allo stato + onChange che lo aggiorna (two-way binding)
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // validazione: niente articoli senza titolo (feedback del tutor)
    const cleanTitle = title.trim();
    if (cleanTitle === '') return;

    onAdd(cleanTitle);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Titolo del nuovo articolo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Aggiungi</button>
    </form>
  );
}

export default ArticleForm;
