

# Lendo My Day 🛍️

Lendo My Day is an e-commerce project 

## 🌟 Features

- **Product Browsing:** Scan through a collection of exciting products.
- **Detailed Views:** Click on any product to get in-depth information.
- **Cart Functionality:** Add products to your cart and view them anytime.

## 🛠️ Technologies Used

- **ReactJS** - A JavaScript library for building user interfaces.
- **Redux & Redux Toolkit** - Predictable state container for JS apps.
- **Tailwind CSS** - A utility-first CSS framework.
- **Vite** - Build tool that aims to provide a faster and leaner development experience.
- **Prettier & Lint** - For code formatting and linting.
- **Husky** - Git hooks made easy.

## 📂 Project Structure

- `assets`: Contains all static assets.
- `components`: Contains both shared and specific components.
- `data`: Houses the JSON data mimicking API calls.
- `routes`: Define all the routing information.
- `store`: Contains the main Redux setup.
  - Each view has its respective module (e.g., `cart`, `listing`).
  - `utils`: Reusable utility functions.
  - `index.js`: Registers all Redux slices.
  
Think of forming the project structure like crafting a pizza! 🍕

## 🚀 Getting Started

### Prerequisites

- **Node.js & npm**: You need to have Node.js and npm installed on your machine.

### Setup

1. **Clone the Project**
   
   ```bash
   git clone https://github.com/heshamelmasry77/lendo-my-day
   ```

2. **Install Dependencies**
   
   ```bash
   npm install
   ```

3. **Build the Project**
   
   Ensure there are no errors in the project.
   
   ```bash
   npm run build
   ```

4. **Run the Project Locally**
   
   This will start the development server.
   
   ```bash
   npm run dev
   ```

Now, open your browser and navigate to the local server (usually `http://localhost:3000/`). Enjoy browsing through Lendo My Day!

## 📈 In Progress

1. Refactor and optimize the cart functionality.
2. UI improvements for a more engaging user experience.
3. Writing Cypress tests for better reliability.
4. Fix issues and some bugs
