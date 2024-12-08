import Link from 'next/link'

export const getServerSideProps = async (context) => {
  const username = context.params?.username;

  try {
    const response = await fetch(`http://localhost:3000/api/github-repos/${username}`);

    if (!response.ok) {
      throw new Error('Failed to fetch repos');
    }
    

    const repos = await response.json();
    

    return {
      props: {
        repos,
        username,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    return {
      props: {
        repos: [],
        username,
      },
    };
  }
}

export default function UserRepos({ repos, username }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">{username}'s Repositories</h2>
      {repos.length > 0 ? (
        <ul className="list-disc pl-5">
          {repos.map((repo) => (
            <li key={repo.id} className="mb-1">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No repositories found.</p>
      )}
      <Link href="/" className="mt-4 inline-block text-blue-500 hover:underline bg-blue-highlight">
        Volver a la página de inicio
        <br />
      </Link>
      <Link href="/search" className="mt-4 inline-block text-blue-500 hover:underline bg-blue-highlight">
        Volver a la página de búsqueda
      </Link>
    </div>
  );
}
