# Merhaba Habesha Restaurant

Website for [Merhaba Habesha](https://habesha-merhaba.nl/) — traditional Ethiopian & Eritrean restaurant in Apeldoorn, Netherlands.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Resend (reservation emails)

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM_EMAIL` | Sender address (verified domain) |
| `RESTAURANT_EMAIL` | Where reservation notifications are sent |

## Scripts

```bash
pnpm dev      # Start dev server
pnpm build    # Production build
pnpm start    # Start production server
```
