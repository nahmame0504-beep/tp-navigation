import { useState } from 'react';

function AdminPanel() {
  const [role, setRole] = useState('user');

  return (
    <div style={{ margin: '20px 0', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
      <h3>Gestion du rôle utilisateur</h3>
      <button onClick={() => setRole(role === 'admin' ? 'user' : 'admin')}>
        Basculer le rôle (Actuel : {role})
      </button>

      {role === 'admin' && (
        <div className="admin-box">
          <h4>Panneau Administrateur</h4>
          <p>Zone sécurisée : vous disposez des droits administrateur.</p>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;