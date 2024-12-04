export default async function handler(req, res) {
  const { username } = req.query;

  if (!username || typeof username !== 'string') {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });
    
    if (!response.ok) throw new Error('Failed to fetch repos');

    const repos = await response.json();
    let simplifiedRepos = repos.map(({ id, name, html_url }) => ({ id, name, html_url }));
    res.status(200).json(repos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch repos' });
  }
}
