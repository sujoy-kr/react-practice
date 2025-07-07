# 🎬 Movie Recommendation App

A modern React app that fetches popular movies from **TMDB** and shows **trending movies** based on what users search — powered by **Appwrite**.

🌐 **Live Demo:** [movie-recommendation-58c.pages.dev](https://movie-recommendation-58c.pages.dev/)

## 🚀 Features

- Lists current **popular movies** from TMDB.
- Tracks user search activity.
- Displays **trending movies** based on most-searched titles (stored in Appwrite DB).
- Built with **React**, **Vite**, and **TailwindCSS**.

## 🛠️ Getting Started

### 1. Clone the project

```bash
git clone https://github.com/sujoy-kr/react-practice.git
cd react-practice
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Add this to your `.env` file in the root folder:

```env
VITE_API_BASE_URL=https://api.themoviedb.org/3/
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

### 4. Run the dev server

```bash
npm run dev
```

## 📦 Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TMDB API](https://www.themoviedb.org/)
- [Appwrite](https://appwrite.io/)
