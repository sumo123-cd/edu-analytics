# EduAnalytics UI refresh

The existing analytics functionality and routes were preserved.

## Visual direction
The new interface is inspired by the visual language of modern Vercel-style products:
- black/near-black canvas
- hairline borders
- compact typography
- translucent sticky navigation
- subtle grid and ambient glow
- monochrome controls with restrained accent colors
- polished KPI cards and tables
- responsive mobile navigation

This is an original implementation; it does not copy Vercel source code, branding, or assets.

## Routes preserved
- `/`
- `/enrollments`
- `/completions`
- `/ratings`
- `/demand`
- `/courses`

## Notes
`node_modules` and `dist` are intentionally excluded from the refreshed source ZIP. Run `npm install` and `npm run dev` from the project directory.
