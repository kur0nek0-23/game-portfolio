# Min Zay Ya — Portfolio

Personal portfolio site for **Min Zay Ya** — Software Developer (ASP.NET Core / C#) and Unity Game Developer.

Built with **React + Vite**, multi-page routing with `react-router-dom`, and smooth page transitions via `framer-motion`. Deployed with **GitHub Actions** to **GitHub Pages**.

## Pages

- `/` — Home (hero + about)
- `/experience` — Professional experience
- `/projects` — Games / projects
- `/recognition` — Education, game jams, achievements
- `/skills` — Skill set
- `/contact` — Contact

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deploying to GitHub Pages

This repo uses a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and publishes the site whenever you push to `main`.

1. Create a repo on GitHub named **game-portfolio** (any public/private repo name works).
2. Make it the remote and push:

   ```bash
   git remote add origin https://github.com/<your-username>/game-portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. In the GitHub repo go to **Settings → Pages → Build and deployment → Source**, and choose **"GitHub Actions"**.

The site will be live at:

```
https://<your-username>.github.io/game-portfolio/
```

### Notes for first-time setup

- The Vite `base` is set to `/game-portfolio/` in `vite.config.js` for correct asset paths. If you rename the repo, update it accordingly.
- `HashRouter` is used so deep links and refreshes work reliably on GitHub Pages (e.g. `/#/projects`).
- The GitHub Actions workflow requires the repository's Pages setting to be set to **"GitHub Actions"** as the source.

## License

Personal project — all content belongs to Min Zay Ya.
