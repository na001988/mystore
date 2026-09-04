# Base44 Dev Environment

## Architecture

This is a **Medusa V2 Next.js storefront**. For UI development in Base44, a
lightweight **mock backend** (`mock-backend/server.js`) replaces the full
Medusa server. The mock returns realistic Medusa V2 API responses so the
frontend renders without PostgreSQL, Redis, or a real Medusa instance.

### Services (docker-compose.base44.yml)

- **mock-backend** — Node.js HTTP server on port 9000 (internal only) that
  serves mock data for `/store/*` and `/auth/*` endpoints
- **storefront** — Next.js dev server on port 3000 (public)

### Single-origin proxy wiring

The storefront uses Next.js rewrites (`next.config.js`) to proxy `/store/*`,
`/admin/*`, and `/auth/*` to the internal mock backend.

- `MEDUSA_BACKEND_URL=http://mock-backend:9000` — server-side (middleware, server components, rewrites)
- `NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://3000-<suffix>` — client-side (same origin, proxied)
- `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_mock_key` — mock key (no validation)
- Middleware matcher excludes `store|admin|auth` so API paths aren't intercepted

### Running the real backend

The user has a real Medusa backend running on a VM. To connect to it instead of
the mock, set `MEDUSA_BACKEND_URL` and `NEXT_PUBLIC_MEDUSA_BACKEND_URL` to the
real backend URL and `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` to the real key.

## Verification

```bash
docker compose -f docker-compose.base44.yml up -d --build
docker compose -f docker-compose.base44.yml ps
curl -sf http://localhost:3000/ | head -20
```
