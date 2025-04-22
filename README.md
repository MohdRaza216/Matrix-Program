# 🔲 Matrix Grid Animation – React + Vite

A fun 3x3 interactive matrix grid built using **React** and **Vite**.  
Click on any box to turn it green. After 9 clicks, all boxes animate to **orange** in the order of your clicks.

🔗 **[Live Demo](https://MohdRaza216.github.io/Matrix-Program)**

---

## 🧠 Features

- 🔳 3x3 Grid UI using CSS Grid
- 🟩 Turn boxes green on click
- 🟠 Animate all to orange after the 9th click in original order
- ⚛️ Built with React + Vite
- 🚀 Deployed on GitHub Pages

---

## 📦 Tech Stack

- React (with hooks)
- Vite (super-fast build tool)
- CSS Grid
- GitHub Pages (for deployment)

---

## 🚀 Getting Started

To run this project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/MohdRaza216/Matrix-Program.git
   cd Matrix-Program
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. Open your browser: [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment

This project is deployed to GitHub Pages using the `gh-pages` package.

```bash
# Set homepage in package.json
"homepage": "https://MohdRaza216.github.io/Matrix-Program",

# Build the app
npm run build

# Deploy to GitHub Pages
npm run deploy
```

> Vite builds go into the `/dist` folder, not `/build`.

---

## 📁 Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
├── 404.html
└── README.md
```

---

## 💡 Learning Goals

- React state and `useState`
- Handling DOM events (`onClick`)
- Rendering dynamic styles
- Delayed color transitions using `setTimeout`
- Deploying SPAs on GitHub Pages with Vite

---

## 🙌 Acknowledgments

Created by [Mohd Raza](https://github.com/MohdRaza216)  
Deployed with ❤️ using GitHub Pages.

---

## 🪪 License

This project is open-source and free to use under the [MIT License](LICENSE).
