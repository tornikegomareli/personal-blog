export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/users/tornikegomareli/repos?sort=stars&direction=desc&per_page=100",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: {
          revalidate: 3600, // Cache for 1 hour
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repos");
    }

    const repos = await response.json();

    // Filter out forked repos and C# projects, then sort by stars
    const ownRepos = repos
      .filter((repo) => !repo.fork && repo.language !== "C#")
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 9)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        url: repo.html_url,
        language: repo.language,
        topics: repo.topics || [],
      }));

    return Response.json(ownRepos);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return Response.json(
      { error: "Failed to fetch repositories" },
      { status: 500 },
    );
  }
}
