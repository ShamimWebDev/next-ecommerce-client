# 🛒 Next‑Ecommerce – A Modern Online Shopping Platform

**Live Site URL:** [https://next-ecommerce190.vercel.app/](https://next-ecommerce190.vercel.app/)

**Server Site URL:** [https://next-ecommerce-server-eta.vercel.app/](https://next-ecommerce-server-eta.vercel.app/)

Next‑Ecommerce is a modern online shopping platform where customers can **browse**, **filter**, and **purchase** products with ease. It provides a clean, responsive UI for discovering items, managing carts, and enjoying a seamless checkout experience.

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

Follow these steps to run Next‑Ecommerce on your local machine:

1. **Clone the repository**

````bash
git clone https://github.com/ShamimWebDev/next-ecommerce-client
cd next-ecommerce

2. **Install dependencies**

```bash
npm install

3. **Set up environment variables**

Create a .env.local file in the root directory

Add MongoDB URI, NextAuth secrets, and any other necessary API keys

4. **Start the development server**

```bash
npm run dev
The app will run at http://localhost:3000 (Next.js default)

5. **Build for production**

```bash
npm run build
npm start

6. **Lint the project**

```bash

npm run lint

Now you can explore and test Next‑Ecommerce fully on your local machine.


````
