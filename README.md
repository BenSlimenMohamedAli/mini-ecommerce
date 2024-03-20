# Mini E-Commerce - MVP

## Description

This project is an MVP (Minimum Viable Product) for an ecommerce platform built using Nuxt 3, a powerful framework for building modern web applications with Vue.js. We chose Nuxt 3 over regular Vue.js for its enhanced developer experience, improved performance, and built-in optimizations for production. Nuxt 3 provides features such as automatic code splitting, server side rendering, and an improved TypeScript support making it an ideal choice for rapidly prototyping and deploying an ecommerce platform.

## Why Nuxt 3?

- Server Side Rendering
- Improved developer experience.
- Automatic code splitting for optimized performance.
- Enhanced TypeScript support.

## Why Tailwind CSS?

Tailwind CSS was chosen for its utility-first approach, allowing for rapid prototyping and easy customization. With Tailwind, we can quickly build responsive interfaces without writing custom CSS. Additionally, Tailwind's extensive utility classes help maintain a consistent design system throughout the application.

## Architecture Overview

```
|-- api => contains the api calls and DTO's
|-- assets
|-- components
|   |-- svg => Where all the icons that we use
|   |-- BackButton.vue
|   |-- CartProductCard.vue
|   |-- Navbar.vue
|   |-- Product.vue
|   |-- ProductButton.vue
|   |-- QuantityControl.vue
|   |-- Rating.vue
|   |-- Sidebar.vue
|-- pages
|   |-- index.vue
|   |-- index
|       |-- products
|           |-- [category].vue
|       |-- cart.vue
|       |-- checkout.vue
|       |-- index.vue
|-- public
|-- store => contains the store configurations
    |-- cart.ts
    |-- index.ts
    |-- navigation.ts
|-- app.vue
|-- tailwind.config.js
|-- package.json
```

## Features

- Product list page with the ability to add/remove and adjust quantity of the items.
- Cart page with options to adjust item quantities and remove items.
- Checkout page for finalizing purchases.
- Sidebar navigation for easy access to different sections of the application.
- Home page with shortcut categories for user convenience.

## Onboarding Guide

Welcome to our ecommerce platform MVP! Here's a quick guide to get started:

1. **Explore Categories**: On the home page, you'll find shortcut categories that lead to specific product listings. Click on any category to explore available products.

2. **Add Products to Cart**: On the product list page, click on the "Add to Cart" button next to each product to add it to your shopping cart.

3. **Product Management with the Product Button**: Directly beneath each product, you'll find its quantity displayed, along with convenient options to adjust or remove it from your shopping cart. This allows you to manage your selections right from the list page, without the need to navigate to the cart separately.

4. **Adjust Cart Contents**: Navigate to the cart page to review your selections. Here, you can adjust item quantities or remove items altogether.

5. **Proceed to Checkout**: Once you're satisfied with your cart contents, proceed to the checkout page to finalize your purchase.

6. **Explore Sidebar Navigation**: Use the sidebar navigation to easily access different sections of the application, including the home page, product categories, and the cart.

7. **Enjoy Your Shopping Experience!**: We hope you have a pleasant shopping experience with our ecommerce platform MVP.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Links

Github Pages : https://benslimenmohamedali.github.io/mini-ecommerce/
