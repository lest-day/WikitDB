// GraphQL服务
const GRAPHQL_ENDPOINT = 'https://wikit.unitreaty.org/apiv1/graphql';

export async function fetchArticleData(wikiUnix, pageUnix) {
  const query = `
    query {
      article(wiki: "${wikiUnix}", page: "${pageUnix}") {
        title
        rating
        comments
        author
        tags
        created_at
        lastmod
      }
    }
  `;

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed with status ${response.status}`);
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(`GraphQL error: ${JSON.stringify(result.errors)}`);
  }

  return result.data.article;
}