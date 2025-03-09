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
git clone https://github.com/reyowner/TBH_mini-product-catalog.git
cd TBH_mini-product-catalog

# 2️⃣ Install Dependencies
# Make sure you have Node.js installed, then run:
npm install

# 3️⃣ Start the JSON Server
# Before running the development server, start the local JSON server to serve product data from db.json:
npx json-server --watch db.json --port 3001
# This runs a mock API at http://localhost:3001, which our Next.js app fetches data from.

# 4️⃣ Run the Development Server
npm run dev

# Now, open http://localhost:3000 in your browser.


## 🛠️ Tech Stack
- Next.js 14 (App Router)
- React.js
- Tailwind CSS (via CDN)
- TypeScript
- Server-Side Rendering (SSR)
- JSON Server (for local API)

## 🔥 Deployment
# To build for production, run:
npm run build

Deploy on Vercel
The easiest way to deploy your Next.js app is with the Vercel Platform, created by the developers of Next.js.

Check out the Next.js deployment documentation for more details.