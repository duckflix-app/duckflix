# Duckflix

Duckflix is a personal, high-performance media streaming service designed for UX and simplicity. Built on a modern Bun/TypeScript monorepo architecture.

## Tech Stack

### Core

- **Runtime:** [Bun](https://bun.com/) (Monorepo)
- **Backend:** [Express.js](https://expressjs.com/) with TypeScript
- **Frontend:** [React](https://react.dev/) + [Vite](https://vite.dev/) + [Tailwind CSS](https://tailwindcss.com/)

### Infrastructure & Background Tasks

- **Database:** [PostgreSQL](https://www.postgresql.org/) with [Drizzle ORM](https://orm.drizzle.team/)
- **Media Processing:** [FFmpeg](https://ffmpeg.org/) (Transcoding and metadata extraction)
- **Torrent Client:** [ikatson/rqbit](https://github.com/ikatson/rqbit)

### Security & Communication

- **Validation:** [Zod](https://zod.dev/)
- **Authentication:** [JsonWebToken](https://jwt.io/)
- **Email:** [Nodemailer](https://nodemailer.com/)
- **Logging:** [Pino](https://github.com/pinojs/pino)

### External APIs

- **Metadata & Discovery:** [TMDB API](https://developer.themoviedb.org/docs/) (Posters, backdrops, genres, and movie details)
- **Subtitles:** [OpenSubtitles.com](https://www.opensubtitles.com/) (subtitle fetching)

### Project Structure

This is a **monorepo** managed by Bun workspaces:

```bash
duckflix/
├── packages/
│   │── backend/
│   │── frontend/
│   └── shared/
│── certs/
└── logs/
```

## Setup & Development

Detailed instructions on how to build, run, and deploy Duckflix can be found in our dedicated guide:

**[Read the Building Guide (BUILDING.md)](./BUILDING.md)**
