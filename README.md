# Drinks and Recipes App

A sleek and responsive web application that lets you explore drink recipes by category and ingredients, view details, and save your favorites — powered by the [CocktailDB API](https://www.thecocktaildb.com/api.php).

Live demo 👉 [Drink and Recipes App on Vercel](https://drink-and-recipes-app.vercel.app)

---

## ✨ Summary

This project showcases a modern React + TypeScript application with:

- **Dynamic recipe search**
- **Lazy-loaded routes** for performance
- **Animated modal view** for drink details
- **Favorites management** with local storage persistence
- **Clean notifications system**
- **Custom animated loaders** from [cssloaders.github.io](https://cssloaders.github.io)

---

## APIs Used (from [TheCocktailDB](https://www.thecocktaildb.com/api.php))

| Endpoint                                  | Purpose                                  |
| ----------------------------------------- | ---------------------------------------- |
| `/list.php?c=list`                        | Fetch list of categories                 |
| `/filter.php?c={category}&i={ingredient}` | Filter drinks by category and ingredient |
| `/lookup.php?i={idDrink}`                 | Get full drink recipe by ID              |

---

## Features

- Search drinks by ingredient and category
- View drink details with instructions and ingredients
- Add/remove favorites with persistence
- Visual feedback with toast notifications
- Responsive design with TailwindCSS 4
- Smooth animations and transitions
- Fully typed with Zod for API safety

---

## Technologies Used

- **React 19 + Vite**
- **TypeScript**
- **Zustand** — state management
- **Zod** — runtime schema validation
- **TailwindCSS v4** — styling
- **Headless UI** — accessible modal
- **Heroicons** — icons
- **Axios** — API requests

---

## Key Technologies Explained

- **Zustand**
  Manages global state with slices (recipes, favorites, UI). Includes persistent state for favorites using `zustand/persist`.

- **Zod**
  Validates and parses API responses. Keeps types in sync with actual data from TheCocktailDB.

- **CSS Loaders**
  A custom rotating ball loader from [cssloaders.github.io](https://cssloaders.github.io/) shows during async operations.

- **Suspense Hook**
  Wraps lazy-loaded routes to show a loading indicator while waiting for the page to load nad recipes searched.

- **Lazy Hook**
  Reduces initial bundle size by dynamically loading the `IndexPage` and `FavoritePage` only when needed.

- **Modal** (`@headlessui/react`)
  Displays detailed recipe information in a clean, accessible, animated dialog.

- **Notification** (`@headlessui/react`)
  Provides user feedback using toast notifications with icons and transition effects.

---

## Deployment

The project is live on **Vercel**:
👉 [Drink and Recipes App](https://drink-and-recipes-app.vercel.app)

---
