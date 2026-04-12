# FEEDTYPE

FEEDTYPE is a Vite + React personality quiz site with 14 result archetypes and matching character art.

## Local development

```powershell
npm install
npm run dev
```

## Production build

```powershell
npm run build
npm run preview
```

The result character images are served from `public/archetypes/` and are copied into `dist/archetypes/` during build.

## Deploy to Vercel

This project is ready for static hosting on Vercel.

- Framework: `Vite`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

### Recommended flow

1. Install Git on this machine if it is not already available.
2. Initialize a Git repository in this folder.
3. Create a GitHub repository and push the project.
4. Import the GitHub repository into Vercel.
5. Deploy with the default Vercel domain first.

### Pre-deploy checklist

- `npm run build` passes
- `public/archetypes/` contains 14 images
- `dist/archetypes/` contains 14 images after build
- Result pages display the matching archetype image

## Notes

- The site uses hash routing such as `#/result/LURK`, so it works well on static hosting.
- No runtime environment variables are required for the deployed site.
