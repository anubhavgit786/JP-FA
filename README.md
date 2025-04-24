---

```markdown
# 📊 Dashboard Analytics App

This is a responsive and interactive analytics dashboard built with **React**, **Recharts**, and **React Query**, showcasing user data insights such as active users, new user additions, and deposit comparisons. The dashboard also includes a custom **rate-limiting mechanism** with cooldown feedback.

---

## 🚀 Features

- 🔄 Toggle between **Analytics** and **Statistics** views
- 🌗 **Dark Mode** and Light Mode support
- 📈 Visualizations powered by **Recharts** (Pie Charts, Area Charts)
- ⏱️ Custom rate limiter with cooldown progress bar
- 🗃️ **Persistent settings** via `localStorage`
- ⚡ Data fetching with **@tanstack/react-query**

---

## 🛠️ Tech Stack

- React
- Recharts
- React Query (@tanstack/react-query)
- Tailwind CSS
- Lucide Icons
- React Loader Spinner

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anubhavgit786/JP-FA.git
   cd JP-FA
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   Or if using Vite:

   ```bash
   npm run dev
   ```

4. Visit [http://localhost:5173](http://localhost:5173) (or the port indicated in your terminal).

---

## 🧠 Project Structure & Approach

### Context and Rate Limiting

- A custom `RateLimiterContext` tracks the number of requests made in a 2-minute window.
- Once the limit is hit, a cooldown timer is triggered, disabling further requests.
- The cooldown status is visualized via a progress bar using a percentage calculation.

### Data Fetching

- All data is fetched using `useDashboardData` powered by `React Query`, providing caching, loading, and error states out of the box.
- Data can be refetched manually using the **Fetch Data** button, unless in a cooldown period.

### Charts and Visualization

- **Pie Charts**: Display new user and active user distributions using `Recharts`.
- **Area Chart**: Compares different types of deposit amounts.
- Components are fully responsive and adapt to screen sizes.

### UI & UX Enhancements

- **Dark mode** toggle with `localStorage` persistence.
- **Analytics/Statistics** toggle for switching between summarized and detailed views.
- Loading spinner via `react-loader-spinner` for smooth user experience.
- Modular and reusable components using Tailwind CSS for consistent design.

---

## 📂 Folder Structure (Simplified)

```
src/
│
├── App.jsx
├── index.css
├── main.jsx
│
├── context/
│   └── RateLimiterContext.jsx
│
├── hooks/
│   └── useDashboardData.js
│
├── ui/
│   └── components/
│       ├── Analytics.jsx
│       ├── Statistics.jsx
│       ├── CoolDown.jsx
│       ├── Loader.jsx
│       ├── NewUsersDistribution.jsx
│       ├── ActiveUsersDistribution.jsx
│       └── AreaDataChart.jsx
│
├── components/
│   └── ui/
│       ├── switch.jsx
│       ├── label.jsx
│       └── card.jsx
```

---

## 🧪 Future Improvements

- Add pagination and sorting in Statistics view.
- Fetch dynamic rate limits from a backend.
- Add unit and integration tests (e.g., using React Testing Library).
- Enhance error handling and display more descriptive messages.

---

## 👨‍💻 Author

- **Anubhav Gupta** – [GitHub](https://github.com/anubhavgit786)

---

## 📄 License

This project is licensed under the MIT License.
```

---

Let me know if you want this tailored to a specific framework (like Vite, Create React App, or Next.js) or need the GitHub repo name customized.
