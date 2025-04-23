# Online Library App 📚

A responsive, Redux-powered React application for browsing, viewing, and adding books to an online library.

## Demo
[Live Demo (GitHub Pages)](https://IamranjeetN.github.io/online-library)

## Features

- **Browse Books**: Searchable and filterable list of books by title, author, or category.
- **Book Details**: View detailed information including author, category, rating, and description.
- **Add Book**: Submit a form to add new books to the library (managed via Redux).
- **Responsive Design**: Mobile-first layout with professional styling.
- **Dark Mode**: Toggle between light and dark themes (optional setup).

## Screenshots

![Home Page](docs/home-page.png)
![Browse Books](docs/browse-books.png)
![Book Details](docs/book-details.png)
![Add Book](docs/add-book.png)

## Tech Stack

- **React** (v18+)
- **Redux Toolkit** for state management
- **React Router** for client-side routing
- **Tailwind CSS** for styling
- **PostCSS & Autoprefixer**
- **GitHub Pages** for deployment (optional)

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or Yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/IamranjeetN/online-library.git
   cd online-library
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Tailwind CSS**
   If Tailwind isn’t installed, follow these steps:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Set up Tailwind**
   In `tailwind.config.js`, add your source paths under `content`:
   ```js
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: { extend: {} },
     plugins: [],
   }
   ```

   In `src/index.css`, include:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view in your browser.

## Usage

- **Navigate** via the top navbar: Home, Browse Books, Add Book.
- **Search** in Browse to filter by title or author.
- **Click** on a book’s "View Details" link to see more info.
- **Add** a new book through the Add Book form (all fields required).

## Deployment to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```
2. **Add to `package.json`**
   ```json
   "homepage": "https://IamranjeetN.github.io/online-library",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     // ...other scripts
   }
   ```
3. **Deploy**
   ```bash
   npm run deploy
   ```

## Folder Structure

```
online-library/
├── public/
│   ├── index.html
│   └── images/        # book cover images
├── src/
│   ├── assets/        # static images
│   ├── components/    # Navbar, etc.
│   ├── pages/         # Home, BrowseBooks, BookDetails, AddBook
│   ├── redux/         # store & booksSlice
│   ├── data/          # initial booksData
│   ├── App.jsx
│   ├── index.css      # Tailwind imports
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please:

1. Fork the repo
2. Create a new feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add YourFeature"`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify.

---
*Built with ❤️ by [Ranjeet Nikam](https://github.com/IamranjeetN)*

