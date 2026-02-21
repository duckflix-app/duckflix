# Duckflix Deployment & Development Guide

This guide provides instructions on how to set up, build, and run the Duckflix monorepo environment.

## 1. Prerequisites

### Local Development

If you plan to run the source code locally (outside of Docker), ensure you have the following services installed and running:

- **Bun**: [https://bun.sh/](https://bun.sh/)
- **PostgreSQL**: [https://www.postgresql.org/](https://www.postgresql.org/)
- **rqbit**: [https://github.com/ikatson/rqbit](https://github.com/ikatson/rqbit)

### Containerized Environment

- **Docker & Docker Compose**: [https://www.docker.com/](https://www.docker.com/)

## 2. Security Configuration (JWT Keys)

The backend uses **ECDSA (ES384)** for JWT signing. You must generate a pair of Elliptic Curve keys before starting the application.

### Automatic Generation

Create a folder named `certs` at the root of the project and generate the keys. The application expects:

- `certs/private.pem`
- `certs/public.pem`

#### Example:

```bash
mkdir -p certs

openssl ecparam -name secp384r1 -genkey -noout -out certs/private.pem

openssl ec -in certs/private.pem -pubout -out certs/public.pem
```

## 3. Environment Variables

The project handles environment variables differently depending on the execution context:

- For local development you should create `.env` in packages(backend and frontend) based on `.example.env` file.
- Docker compose by default expect `.docker.env` file only on backend, and `.env` in root for database

> **Note:** For the frontend, variables are injected during the build process. Ensure your `.env` is populated before running the build.

## 4. Running via Docker Compose (Recommended)

Docker Compose handles all dependencies (Postgres, rqbit) and builds the local packages.

### Build and Start

To build the images and start the containers in the background:

```bash
docker compose up --build -d
```

### Stop Services

```bash
docker compose down
```

The backend will automatically wait for the Postgres health check to pass before starting. The certs folder is mounted as a read-only volume to /app/certs inside the container.

## 5. Local Development (Source Code)

If you prefer to run the services manually using Bun:

### Step 1: Install Dependencies

From the root directory:

```bash
bun install
```

### Step 2: Database Migration

Push the schema to your local Postgres instance:

```bash
cd packages/backend
bun db:push
```

> **Note:** This is automatically done in `prestart` script on backend

### Step 3: Run Applications

You can start the backend and frontend separately from the root using Bun filters:

#### Start Backend:

```bash
bun dev:back
```

#### Start Frontend:

```bash
bun dev:front
```

### Step 4: Database UI (Optional)

If you want to view or edit your data through a GUI, you can start Drizzle Studio:

```bash
bun db:studio
```

Then open https://local.drizzle.studio in your browser.

## 6. Project Structure Reference

- Frontend: Accessible via http://localhost:5173.

    > **Docker Note**: Inside the container, it is served statically via Nginx (port 80) mapped to host port 5173.

- Backend API: Runs on http://localhost:3000.

- rqbit API: Accessible on http://localhost:3030.

- Database (Postgres): Runs on port 5432.
