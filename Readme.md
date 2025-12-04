Here is a clean, professional, and **LinkedIn-ready README.md** for your **Polyglot Microservices Project (Node.js + Go + Docker + Shared Utils)**.
You can publish this directly on GitHub.

---

# 📘 **Polyglot Microservices Architecture — Node.js, Go, Docker & Shared Utilities**

This project demonstrates a simple yet production-inspired **microservices architecture** built using:

- **Node.js** (Jokes & Quotes services)
- **Go (Gin Framework)** (States service)
- **Shared Node.js Utils Package**
- **Docker & Docker Compose**
- **REST APIs with Randomized Responses**
- **Health Check Endpoints**

It is designed as a learning project and a demonstration of **polyglot microservices**, similar to how real companies build distributed systems.

---

# 🚀 **Features**

### ✔ Three independent microservices

- **jokes-service (Node.js)**
- **quotes-service (Node.js)**
- **states-service (Go + Gin)**

### ✔ Shared utils package

A local `node-utils` module reused by Node services.

### ✔ Dockerized

Single command brings up all services:

```
docker-compose up --build
```

### ✔ Internal service communication (via Docker DNS)

Services can call each other using:

```
http://quotes-service:3000
http://jokes-service:3000
http://states-service:3000
```

### ✔ REST APIs return random data

- Random 3 quotes
- Random 3 jokes
- Random 3 Indian states
- Human-readable timestamps

### ✔ Health check endpoints

Each service exposes:

```
/health
```

---

# 📁 **Project Structure**

```
demo-microservices/
│
├── jokes-service/         # Node.js microservice
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── quotes-service/        # Node.js microservice
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── states-service/        # Go microservice (Gin)
│   ├── Dockerfile
│   ├── go.mod
│   ├── go.sum
│   └── main.go
│
├── node-utils/            # Shared Node.js utilities
│   ├── package.json
│   └── index.js
│
└── docker-compose.yml     # Runs all services
```

---

# 🌐 **API Endpoints**

## 1️⃣ Jokes Service (Node.js)

| Method | Endpoint  | Description                        |
| ------ | --------- | ---------------------------------- |
| GET    | `/jokes`  | Returns 3 random programming jokes |
| GET    | `/health` | Health check                       |

Response example:

```json
{
  "message": "😂 Top 3 jokes of the request",
  "jokes": ["…", "…", "…"],
  "time": "2025-12-04T12:22:01Z"
}
```

---

## 2️⃣ Quotes Service (Node.js)

| Method | Endpoint  | Description             |
| ------ | --------- | ----------------------- |
| GET    | `/quotes` | Returns 3 random quotes |
| GET    | `/health` | Health check            |

---

## 3️⃣ States Service (Go + Gin)

| Method | Endpoint  | Description                                    |
| ------ | --------- | ---------------------------------------------- |
| GET    | `/states` | Returns All States Indian states with capitals |
| GET    | `/health` | Health check                                   |

Response example:

```json
{
  "message": "🗺️ All States",
  "states": [
    { "state": "Goa", "capital": "Panaji" },
    { "state": "Kerala", "capital": "Thiruvananthapuram" },
    { "state": "Assam", "capital": "Dispur" }
  ],
  "time": "2025-12-04T12:22:01Z"
}
```

---

# 🐳 **Running the Entire System**

> Requires Docker & Docker Compose installed.

### 1️⃣ Clone the repo:

```
git clone https://github.com/YOUR-REPO/demo-microservices.git
cd demo-microservices
```

### 2️⃣ Build & run all services

```
docker-compose up --build
```

### 3️⃣ Access services in browser / Postman:

| Service             | URL                                                          |
| ------------------- | ------------------------------------------------------------ |
| Jokes Service       | [http://localhost:3002/jokes](http://localhost:3002/jokes)   |
| Quotes Service      | [http://localhost:3001/quotes](http://localhost:3001/quotes) |
| States Service (Go) | [http://localhost:3003/states](http://localhost:3003/states) |

Health endpoints:

```
http://localhost:3001/health
http://localhost:3002/health
http://localhost:3003/health
```

---

# 🧠 **Tech Stack**

### Node.js Services

- Express.js
- Local shared utils

### Go Service (Gin)

- Gin framework
- Fast JSON API
- Strong typing

### DevOps

- Docker
- Docker Compose
- Multi-stage Go build
- Port mapping
- Container networking

---

# 🔥 **Why This Project Is Valuable**

- Demonstrates microservices fundamentals
- Shows polyglot architecture (Node + Go)
- Uses Docker the correct way (internal port 3000 pattern)
- Includes random data generation
- Adds health endpoints (production-inspired)
- Teaches folder structure & separation of concerns

---

# 📌 **Future Enhancements**

You can extend this project with:

- API Gateway (Node or Go)
- Rate limiting (using Gin middleware & Express middleware)
- gRPC between services
- Kubernetes deployment (K8s manifests included)
- CI/CD pipeline (GitHub Actions)

---

# ❤️ **Contributions**

PRs, ideas, and improvements are welcome!
