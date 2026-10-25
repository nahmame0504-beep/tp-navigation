import { useState } from 'react';

function ListeTaches() {
  const [taches, setTaches] = useState([
    { id: 1, titre: "Apprendre React" },
    { id: 2, titre: "Créer une application" },
    { id: 3, titre: "Tester le code" }
  ]);
  const [nouvelleTache, setNouvelleTache] = useState('');

  const ajouterTache = (e) => {
    e.preventDefault();
    if (nouvelleTache.trim() === '') return;

    const nouvelle = {
      id: Date.now(),
      titre: nouvelleTache
    };

    setTaches([...taches, nouvelle]);
    setNouvelleTache('');
  };

  return (
    <div>
      <h3>Liste des tâches à accomplir</h3>
      
      <form onSubmit={ajouterTache} style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Ajouter une tâche..."
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul>
        {taches.map((tache) => (
          <li key={tache.id}>{tache.titre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeTaches;