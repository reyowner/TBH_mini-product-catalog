# 🛍️ TBH Mini Product Catalog

A modern, responsive product catalog built with Next.js, featuring Server-Side Rendering (SSR), a dark mode toggle, and smooth animations. Designed with a coffee-themed brown aesthetic and powered by Tailwind CSS.

## 🌟 Features
✅ Dynamic Routing (`/products/[id]` and `/category/[id]`)  
✅ Server-Side Rendering (SSR) & Static Site Generation (SSG)  
✅ Dark Mode Toggle 🌙  
✅ Interactive Hover Effects & Smooth Animations  
✅ Minimalist Navbar & Custom Button Design  
✅ Local JSON Server for product data  

## 🚀 Getting Started

# 1️⃣ Clone the Repository
```bash
git clone https://github.com/reyowner/TBH_mini-product-catalog.git
cd TBH_mini-product-catalog
```

# 2️⃣ Install Dependencies
Make sure you have Node.js installed, then run:
```bash
npm install
```

# 3️⃣ Start the JSON Server
Before running the development server, start the local JSON server to serve product data from db.json:
```bash
npx json-server --watch db.json --port 3001
```
This runs a mock API at http://localhost:3001, which our Next.js app fetches data from.

# 4️⃣ Run the Development Server
```bash
npm run dev
```

# Now, open [http://localhost:3000](http://localhost:3000) in your browser.


## 🛠️ Tech Stack
- Next.js 14 (App Router)
- React.js
- Tailwind CSS (via CDN)
- TypeScript
- Server-Side Rendering (SSR)
- JSON Server (for local API)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.