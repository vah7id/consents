import { addConsent, getConsents } from "../features/consent";

declare global {
  interface Window {
    fetch: typeof fetch;
  }
}

window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = typeof input === 'string' ? input : input.toString();
  
  if (url.startsWith('/consents')) {
    if (!init?.method || init.method === 'GET') {
      const result = await getConsents();
      return {
        ok: true,
        json: async () => result,
      } as Response;
    }
    if (init?.method === 'POST') {
      const body = JSON.parse(init.body as string);
      await addConsent(body);
      return { ok: true, json: async () => ({ success: true }) } as Response;
    }
  }
  return { ok: false, status: 404, json: async () => ({ error: 'Not found' }) } as Response;
}; 