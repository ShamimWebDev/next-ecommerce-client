# 🛒 Next‑Ecommerce – A Modern Online Shopping Platform

**Live Site URL:** [https://next-ecommerce190.vercel.app/](https://next-ecommerce190.vercel.app/)

**Server Site URL:** [https://next-ecommerce-server-eta.vercel.app/](https://next-ecommerce-server-eta.vercel.app/)

A modern, responsive Next.js (App Router) e-commerce web application with product listings, search, filtering, product details, and clean UI components.
The app uses a separate Express + MongoDB backend, Axios for API communication, TailwindCSS for styling, and NextAuth.js for authentication.

---

## 🚀 Features

- **🛍️ Product Showcase:** Browse products with images, descriptions, categories, and prices.
- **🔍 Search & Filter:** Quickly find products by name, category, or price range.
- **❤️ Wishlist System:** Save favorite products for later.
- **🔐 Secure Authentication:** NextAuth with Google & Email/Password login.
- **🛠️ Full CRUD Support (Admin):** Add, update, or delete products via Manage Products page.
- **📦 Order Management:** Place orders and view order history.
- **📱 Responsive Design:** Optimized for mobile, tablet, and desktop.
- **✨ UI Enhancements:** Smooth hover effects, category badges, and micro‑animations.

---

## 🧱 Project Structure

### 🧭 Navbar

- Links: **Home | Products | Categories | Cart | Wishlist | Contact**
- Shows **Login/Register** if not logged in, or **User Avatar & Logout** if logged in.

### 🏠 Home Page

- Interactive **Hero Banner** with CTA buttons.
- **Featured Products** – 6 most recent uploads.
- Additional sections: **Testimonials**, **CTA Deals**, and **Newsletter Signup**.

### 🔐 Authentication

- NextAuth authentication (Email/Password + Google Sign‑In).
- Redirects & toast notifications for feedback.

### 🧾 CRUD Operations (Admin Only)

- **Add Product:** Upload image, title, category, description, and price.
- **Manage Products:** Table/grid view with Update & Delete actions.
- **Product Details:** Shows full info with Add to Cart & Wishlist options.

### ⚙️ Other Features

- Loading spinners during data fetch.
- Toast/React‑Toastify feedback for all key actions.

---

## 🧩 Technologies Used

| Category          | Tools / Libraries                       |
| ----------------- | --------------------------------------- |
| **Frontend**      | Next.js 14, React 18                    |
| **Styling**       | Tailwind CSS                            |
| **UI Components** | React Icons, React Toastify, Heroicons  |
| **Auth**          | NextAuth (Google, Email/Password)       |
| **Backend**       | Express.js, MongoDB (for CRUD & Orders) |
| **Deployment**    | Vercel                                  |

---

## 💻 How to Run Locally


### 1️⃣ Clone Repository
```
git clone https://github.com/ShamimWebDev/next-ecommerce-client
cd next-ecommerce-client
```


### 2️⃣ Install Dependencies
```
npm install
```


### 3️⃣ Create Environment Variables
Create a file named:
```
.env.local
```
Add:
```
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000
MONGODB_URI=your_mongo_uri
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
```


### 4️⃣ Start Development Server
```
npm run dev
```
➡️ App runs at http://localhost:3000


### 5️⃣ Build for Production
```
npm run build
npm start
```


### 6️⃣ Lint the Project
```
npm run lint