import { useEffect, useState } from 'react';
import api from '../services/api';
import { User } from '../types/User';

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('/users').then((res) => {
      console.log('Dados recebidos: ', res.data)
      setUsers(res.data);

    });
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
