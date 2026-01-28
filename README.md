## Setup

```bash
git clone <this-repo-url>
cd projecton
```

### Server

```bash
cd web-server
npm install
```

- **MongoDB**: make sure MongoDB is running on `mongodb://localhost:27017`.
- **Env file**: edit `config/.env.local` if needed (default DB: `articles`, default port: `30000`).

### Client

```bash
cd client
npm install
```

## Run

### Server

```bash
cd web-server
npm start
```

Server runs on `http://localhost:30000`.

### Client

```bash
cd client
npm start
```

Client usually runs on `http://localhost:3000` (or whatever port your client uses).

