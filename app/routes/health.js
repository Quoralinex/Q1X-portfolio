import { json } from '@remix-run/cloudflare';

export const loader = () => {
  return json({ status: 'ok' }, { status: 200, headers: { 'cache-control': 'no-store' } });
};
