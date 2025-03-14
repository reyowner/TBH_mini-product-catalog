# 🛍️ TBH Mini Product Catalog (Dockerized Version)

A modern, responsive product catalog built with Next.js, featuring Server-Side Rendering (SSR), a dark mode toggle, and smooth animations. Designed with a coffee-themed brown aesthetic and powered by Tailwind CSS.

## 🌟 Features
✅ Dynamic Routing (`/products/[id]` and `/category/[id]`)  
✅ Server-Side Rendering (SSR) & Static Site Generation (SSG)  
✅ Dark Mode Toggle 🌙  
✅ Interactive Hover Effects & Smooth Animations  
✅ Minimalist Navbar & Custom Button Design  
✅ Local JSON Server for product data (Dockerized)

## 🚀 Getting Started (Dockerized Setup)

# 1️⃣ Clone the Repository
```bash
git clone https://github.com/reyowner/TBH_mini-product-catalog.git
cd TBH_mini-product-catalog
```

# 2️⃣ Install Dependencies
Ensure Docker is installed on your machine. If not, download and install it from [Docker's official website](https://www.docker.com/products/docker-desktop/)

# 3️⃣ Build and Run the Containers
Use docker-compose to build and start the frontend and mock API containers.
```bash
docker-compose up -d --build
```
This command will:
✅ Build the Next.js frontend container
✅ Build the JSON Server (mock API) container
✅ Start both containers in detached mode (-d)

# 4️⃣ Verify Running Containers
To check if the containers are running correctly, use:
```bash
docker ps
```
You should see two running containers:
```bash
CONTAINER ID   IMAGE                       COMMAND                  PORTS                    NAMES
xxxxx          tbh_mini-product-frontend   "docker-entrypoint.s…"   0.0.0.0:3000->3000/tcp   tbh_mini-product-frontend
xxxxx          tbh-mock-api                "json-server --watch…"   0.0.0.0:8000->8000/tcp   tbh-mock-api
```

# 5️⃣ Access the Application
Once the containers are running, open the application in your browser:
🔗 Frontend: [http://localhost:3000](http://localhost:3000)
🔗 Mock API: [http://localhost:8000/categories](http://localhost:8000/categories) (to test API responses)

# 🛑 Stopping the Application
To stop the running containers, use:
```bash
docker-compose down
```
This will gracefully shut down the services.

## 🛠️ Tech Stack
- Next.js 14 (App Router)
- React.js
- Tailwind CSS (via CDN)
- TypeScript
- Server-Side Rendering (SSR)
- JSON Server (Mock API)
- Docker & Docker Compose