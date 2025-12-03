// Auto-generated runtime loader for gallery images
// Uses Vite's import.meta.glob to statically include image assets from the folder
const modules = import.meta.glob('/src/assets/resort images/*.{jpg,jpeg,png,webp}', { eager: true });

const images: string[] = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map((p) => (modules[p] as { default: string }).default)
  .filter(Boolean);

export default images;
