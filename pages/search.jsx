import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      router.push(`/user/${username}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Detective de Repositorios en Github ¡WoW!</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Introduce el USUARIO"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Buscar
        </button>
      </form>
    </div>
  );
}
