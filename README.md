# Sweet & Savory Shop

A full-stack online shop for sweets, meals, drinks, and snacks. The React frontend includes a local demo food catalog, product browsing, search, filters, cart management, authentication, checkout, order history, and toast notifications. The Express backend provides user, cart, product, and order APIs backed by MongoDB.

## Project Structure

```text
frontend/   React + Vite storefront
backend/    Express API + MongoDB integration
```

## Features

- Browse sweets, bakery items, meals, drinks, and snacks
- Search and filter products by category and type
- View product details, descriptions, images, and pack sizes
- Add products to the cart with success notifications
- Register, log in, and manage authenticated carts
- Place cash-on-delivery orders
- Stripe checkout integration
- View order history and order status
- Responsive desktop and mobile layout

## Requirements

- Node.js 18 or newer
- npm
- MongoDB database, local or hosted
- Stripe account for online payments
- Cloudinary account for product image uploads

## Installation

Install dependencies in both applications:

```bash
cd backend
npm install

cd ../frontend
npm install
```

## Environment Variables

Create `backend/.env`:

```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017
JWT_SECRET=replace-with-a-long-random-secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=replace-with-an-admin-password
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
CLOUDINARY_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_SECRET_KEY=your-cloudinary-api-secret
```

The MongoDB connection appends `/e-commerce` to `MONGO_URI`.

Optionally create `frontend/.env` to use a different API URL:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Do not commit either `.env` file or real credentials.

## Running Locally

Start the backend in one terminal:

```bash
cd backend
npm run start
```

The API runs at `http://localhost:4000`.

Start the frontend in a second terminal:

```bash
cd frontend
npm run dev
```

Vite prints the local storefront URL, normally `http://localhost:5173`.

The frontend currently uses its built-in food catalog so the storefront can be previewed without product records in MongoDB. Authentication, cart synchronization, and order APIs still require the backend and its environment variables.

## Available Scripts

### Frontend

```bash
npm run dev       # Start Vite development server
npm run build     # Create a production build
npm run preview   # Preview the production build
npm run lint      # Run ESLint
```

### Backend

```bash
npm run start     # Start the API with Node.js
npm run server    # Start the API with nodemon
```

## Main API Routes

```text
/api/user       Authentication and user routes
/api/product    Product routes
/api/cart       Cart routes
/api/orders     Order and payment routes
```

## Payment Notes

Cash on delivery works through the order API. Stripe requires a valid test secret key and a configured frontend/backend environment. Use Stripe test credentials during development.

## Validation

Build the frontend before deployment:

```bash
cd frontend
npm run build
```