import { fetchArticleData } from '../services/graphql.js';
import { renderSuccess } from '../templates/render.js';
import { renderError } from './error.js';
import { decodePathPart, validatePath } from '../utils/helpers.js';


export async function handleRequest(request) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(part => part.length > 0);

  if (!validatePath(pathParts)) {
    return new Response(renderError('URL格式错误，请使用 /维基名/页面名', '', ''), {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
      status: 400,
    });
  }

  const wikiUnix = decodePathPart(pathParts[0]);
  const pageUnix = decodePathPart(pathParts[1]);

  try {
    const article = await fetchArticleData(wikiUnix, pageUnix);

    if (!article) {
      throw new Error('未找到该条目');
    }

    const html = renderSuccess(article, wikiUnix, pageUnix);
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300',
      },
    });
  } catch (error) {
    return new Response(renderError(error.message, wikiUnix, pageUnix), {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
      status: 500,
    });
  }
}

export async function handleOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}