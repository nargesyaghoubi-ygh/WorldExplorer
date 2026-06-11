# WorldLens

> A Next.js application for exploring countries around the world — built with the App Router, server/client components, and real-time API data.

---

## 📸 Screenshots

<div align="center">
  <table align="center">
    <tr align="center">
      <td align="center">
        <h3>Desktop View</h3>
        <a href="https://github.com/nargesyaghoubi-ygh/WorldExplorer/blob/main/public/desktop-details.png">
          <img src="https://github.com/nargesyaghoubi-ygh/WorldExplorer/blob/main/public/desktop-details.png?raw=true" height="400px">
        </a>
      </td>
      <td align="center">
        <h3>Desktop View</h3>
        <a href="https://github.com/nargesyaghoubi-ygh/WorldExplorer/blob/main/public/desktop-search.png">
          <img src="https://github.com/nargesyaghoubi-ygh/WorldExplorer/blob/main/public/desktop-search.png?raw=true" height="400px">
        </a>
      </td>
      <td align="center">
        <h3>Mobile View</h3>
        <a href="https://github.com/nargesyaghoubi-ygh/WorldExplorer/blob/main/public/mobile-dark.png">
          <img src="https://github.com/nargesyaghoubi-ygh/WorldExplorer/blob/main/public/mobile-dark.png?raw=true" height="400px">
        </a>
      </td>
      <td align="center">
        <h3>Mobile View</h3>
        <a href="https://github.com/nargesyaghoubi-ygh/WorldExplorer/blob/main/public/mobile-light.png">
          <img src="https://github.com/nargesyaghoubi-ygh/WorldExplorer/blob/main/public/mobile-light.png?raw=true" height="400px">
        </a>
      </td>
    </tr>
  </table>
</div>


## Features

- App Router & file-based routing
- Shared layout with Navbar and Footer
- Dynamic routes (`/countries/[code]`)
- Server components with cached data fetching
- Client components with `useState` for search and filtering
- Static rendering with `force-cache`
- Dynamic rendering with `no-store`
- Dark / Light mode toggle
- Region filter (Africa, Americas, Asia, Europe, Oceania)
- Custom 404 page with `not-found.js`
- Loading UI with `loading.js`
- Per-page metadata with `generateMetadata()`

---




## API Used

[REST Countries API](https://restcountries.com) — `https://restcountries.com/v3.1`

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/
├── layout.js
├── page.js
├── not-found.js
├── about/
│   └── page.js
├── countries/
│   ├── page.js
│   ├── loading.js
│   └── [code]/
│       └── page.js
└── search/
    └── page.js

components/
├── Navbar.jsx
├── Footer.jsx
├── CountryCard.jsx
├── CountrySearch.jsx
└── ThemeToggle.jsx

styles/
└── globals.css
```

---

## Next.js Concepts Practiced

| Concept | Usage |
|---|---|
| App Router | All pages use the `app/` directory |
| File-based routing | Each folder maps to a route |
| Shared layout | `layout.js` wraps all pages |
| Dynamic routes | `/countries/[code]` |
| Server components | `CountriesPage`, `CountryDetailsPage` |
| Client components | `CountrySearch`, `ThemeToggle`, `Navbar` |
| `force-cache` | Countries list page |
| `no-store` | Country details page |
| `generateMetadata` | Per-country page title and description |


---
## Contact
For any inquiries, please contact:
- nargesyaghoubi2001@gmail.com

## Links
### Narges Yaghoubi
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://nargesyaghoubi-ygh.github.io/My-portfolio/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/narges-yaghoubi-656a28243/)

