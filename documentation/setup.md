# Enterprise RAG AI Agent — Project Setup Guide

Welcome to the team! This guide walks you through setting up the entire project from scratch — cloning the repo, installing the frontend, installing the backend, and running everything locally.

---

## 0. Prerequisites (Install These First)

Make sure you have the following installed on your machine before doing anything else:

| Tool | Version | Check with | Download |
|---|---|---|---|
| Node.js | v22.13+ (LTS) | `node -v` | https://nodejs.org |
| pnpm | v9+ | `pnpm -v` | `npm install -g pnpm@9` |
| Python | 3.11–3.13 | `python --version` | https://python.org |
| Git | any recent | `git --version` | https://git-scm.com |

> **Note:** If `pnpm -v` fails or shows a Node version error, install pnpm with the pinned version above (`npm install -g pnpm@9`) — newer pnpm versions require Node 22.13+.

---

## 1. Clone the Repository

```bash
git clone <YOUR_REPO_URL>
cd Enterprise-AI-Assistant
```

Replace `<YOUR_REPO_URL>` with the actual GitHub/GitLab URL for this project.

### Check out the correct branch (if applicable)

```bash
git checkout develop
```

(Skip this if you're working directly off `main`.)

---

## 2. Project Structure

```
Enterprise-AI-Assistant/
├── client/              # Next.js frontend (TypeScript + Tailwind CSS)
├── server/              # FastAPI backend (Python, RAG + LLM logic)
├── .gitignore
└── SETUP.md             # this file
```

---

## 3. Frontend Setup (`client/`)

```bash
cd client
pnpm install
```

Create your local environment file:

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in any required values (API URL, keys, etc.) — ask a teammate for the actual values if they're not in `.env.example`.

Run the dev server:

```bash
pnpm dev
```

Visit **http://localhost:3000** — you should see the app running.

---

## 4. Backend Setup (`server/`)

Open a **new terminal window** (keep the frontend running in the first one).

```bash
cd server
```

### 4.1 Create and activate a virtual environment

**Windows (PowerShell):**
```bash
python -m venv venv
venv\Scripts\activate
```

**Mac/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

You should see `(venv)` appear at the start of your terminal prompt once activated. **You must activate this every time** you open a new terminal to work on the backend.

### 4.2 Install dependencies

```bash
pip install -r requirements.txt
```

If `requirements.txt` doesn't exist yet or you're starting from scratch, install manually:

```bash
pip install fastapi "uvicorn[standard]" python-dotenv pydantic
pip install langchain langchain-community langchain-openai
pip install qdrant-client sentence-transformers
pip install python-multipart pypdf python-docx unstructured
pip install sqlalchemy psycopg2-binary
```

Then generate the lock file for everyone else:

```bash
pip freeze > requirements.txt
```

### 4.3 Set up environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in:

```
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here
QDRANT_URL=http://localhost:6333
DATABASE_URL=postgresql://user:password@localhost:5432/rag_agent
```

Get actual key values from the team lead — **never commit real keys to git.**

### 4.4 Run the backend server

```bash
uvicorn app.main:app --reload --port 8000
```

Visit **http://localhost:8000** — you should see `{"status": "Backend is running"}`.

Visit **http://localhost:8000/docs** — interactive API documentation (Swagger UI).

---

## 5. Verify Everything Works

With both servers running:

- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- Backend docs: http://localhost:8000/docs

Try hitting a test endpoint from the frontend (or via `/docs`) to confirm frontend ↔ backend communication works.

---

## 6. Git Workflow

We use a simple feature-branch workflow. **Never push directly to `main`.**

### 6.1 Before starting new work — always pull latest

```bash
git checkout main
git pull origin main
```

### 6.2 Create a feature branch

```bash
git checkout -b feature/your-feature-name
```

Examples: `feature/document-upload`, `feature/chat-ui`, `fix/cors-error`

### 6.3 Make your changes, then stage and commit

```bash
git add .
git commit -m "feat: add document upload endpoint"
```

**Commit message convention** (prefix with type):
- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation changes
- `style:` — formatting, no logic change
- `refactor:` — code change that's not a fix or feature
- `chore:` — tooling, config, dependencies

Examples:
```bash
git commit -m "feat: implement RAG retrieval endpoint"
git commit -m "fix: resolve CORS issue between frontend and backend"
git commit -m "chore: add sentence-transformers to requirements.txt"
git commit -m "docs: update setup instructions for backend"
```

### 6.4 Push your branch

```bash
git push origin feature/your-feature-name
```

### 6.5 Open a Pull Request

Go to the repo on GitHub/GitLab → open a PR from your branch into `main` (or `develop`, if that's our integration branch) → request a review from a teammate before merging.

### 6.6 After your PR is merged

```bash
git checkout main
git pull origin main
git branch -d feature/your-feature-name
```

---

## 7. Common Issues & Fixes

| Problem | Fix |
|---|---|
| `pnpm` version error re: Node | Install Node 22 LTS, or pin `pnpm@9` |
| `ERR_UNKNOWN_BUILTIN_MODULE` | Node version too old for pnpm — upgrade Node |
| CORS errors in browser console | Confirm `CORSMiddleware` in `app/main.py` includes `http://localhost:3000` |
| `ModuleNotFoundError` in Python | Make sure `venv` is activated before running `uvicorn` |
| Port already in use | Kill the process using that port, or run on a different port with `--port` |

---

## 8. Daily Dev Routine (Quick Reference)

**Terminal 1 (frontend):**
```bash
cd client
pnpm dev
```

**Terminal 2 (backend):**
```bash
cd server
venv\Scripts\activate      # Windows
# source venv/bin/activate # Mac/Linux
uvicorn app.main:app --reload --port 8000
```

That's it — you're up and running. If you get stuck on anything, ping the team channel before spending too long debugging alone.