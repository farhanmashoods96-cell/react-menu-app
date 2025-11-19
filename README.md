# 🍽️ The Flavor Factory Restaurant Menu Website

This project is a single-page application built using React and Vite to display a dynamic restaurant menu, demonstrating component-based architecture and conditional rendering.

---

## 🚀 General Guidelines

* Use **React with Vite** to build the project.
* Create a reusable **`MenuItem`** component to display individual menu items.
* Use the **`map()`** method to render lists of menu items.
* Deploy the app to **Vercel** or **Netlify**.
* Create a comprehensive **`README.md`** file (which you are reading now!) with both the **GitHub repository link** and **live deployment link**.
* Exclude the **`node_modules`** folder before submission.

---

## 🔗 Links

| Resource | Link |
| :--- | :--- |
| **GitHub Repository** |  |
| **Live Deployment** | https://react-menu-app-flame.vercel.app/ |

---

## ✨ Restaurant Menu Website Features

### Header Section

* Display the restaurant name as the main title (e.g., "The Flavor Factory").
* Include a tagline or slogan (e.g., "Delicious Food, Made Fresh Daily").

### Restaurant Info Section

* Display total number of items on the menu.
* Show restaurant hours (e.g., "Open Daily: 11 AM - 10 PM").
* Add a contact phone number or address.

### Footer Section

* Include the restaurant name.
* Add email or website link.
* Include the current year (e.g., "© 2025 Restaurant Name").

---

## 🧑‍💻 Technical Requirements

### Component Structure

* Create a separate **`MenuItem.jsx`** component file.
* The `MenuItem` component should accept props and display them appropriately.
* Implement **conditional rendering** for the vegetarian badge.
* Use proper JSX structure within the component.

### MenuItem Component Props

The reusable **`MenuItem`** component must accept and display the following props:

* **`name`**: Dish name
* **`category`**: Category (e.g., Appetizer, Main Course, Dessert, Beverage)
* **`price`**: Price of the item
* **`description`**: Brief description of the dish
* **`isVegetarian`**: Boolean indicating if the dish is vegetarian

### Menu Lists Section

Create at least **two separate lists** for different categories:

1.  **Main Course Items**: Array with at least 4 main course dishes.
2.  **Desserts**: Array with at least 3 dessert items.

For each category:

* Display a category heading (e.g., "Main Courses", "Desserts").
* Use the JavaScript **`map()`** method to render **`MenuItem`** components.
* **Important:** Each `MenuItem` in the list must have a unique **`key`** prop.

### Data Handling

* Store your menu items as separate arrays for each category.
* Each menu item object should contain: `name`, `category`, `price`, `description`, and `isVegetarian`.
* Use the **`map()`** function to iterate over each category's array.

---

## 🎨 Styling Requirements

* Apply CSS styling to make the `MenuItem` cards visually appealing.
* Style the vegetarian badge distinctively (e.g., green color or icon).
* Each category section should be clearly separated.
* Use CSS classes or inline styles (your choice).
* Ensure clean, organized layout with proper spacing.

---

## 🛠️ Installation and Local Run Instructions

To set up and run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_GITHUB_REPOSITORY_LINK]
    cd restaurant-menu-app 
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

3.  **Run the application locally:**
    ```bash
    npm run dev
    # The application will be served at a local address (e.g., http://localhost:5173).
    ```
    
