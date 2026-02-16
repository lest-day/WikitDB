import { handleRequest, handleOptions } from './handlers/request.js';

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return handleOptions();
    }

    if (request.method !== 'GET') {
      return new Response('Method not allowed', { status: 405 });
    }

    return handleRequest(request);
  },
};