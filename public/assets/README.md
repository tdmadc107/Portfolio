# Assets Folder

This folder contains all static assets for the project.

## Structure

- **images/** - Projects screenshots, portfolio images, backgrounds
- **icons/** - SVG icons, favicon, and other icon assets

## Usage

Reference assets in the code:

```jsx
import MyImage from '/assets/images/my-image.png';

// Or directly in src attribute
<img src="/assets/images/my-image.png" alt="Description" />
```

## Guidelines

- Keep file names lowercase and use hyphens (kebab-case)
- Optimize images before uploading
- Use SVG for icons when possible
- Organize by type in subdirectories
