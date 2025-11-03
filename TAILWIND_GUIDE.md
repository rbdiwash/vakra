# Tailwind CSS Guide for Vakra

## Overview

This project uses Tailwind CSS v4 for styling. All components are styled using utility classes instead of custom CSS files.

## Configuration

### `tailwind.config.js`

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#646cff",
          hover: "#535bf2",
        },
      },
    },
  },
  plugins: [],
};
```

## Custom Components

Custom reusable component classes are defined in `src/index.css`:

### Buttons

```jsx
// Primary button
<button className="btn btn-primary">Click me</button>

// Secondary button
<button className="btn btn-secondary">Click me</button>

// Full width button
<button className="btn btn-primary btn-full">Click me</button>
```

### Loading Container

```jsx
<div className="loading-container">
  <div>Loading...</div>
</div>
```

## Common Patterns

### Cards

```jsx
<div className="bg-white/5 p-8 rounded-xl border border-white/10 transition-all hover:bg-white/8 hover:border-primary">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

### Grid Layouts

```jsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* items */}
</div>
```

### Form Inputs

```jsx
<input
  type="text"
  className="p-3 rounded-lg border border-white/20 bg-white/5 text-white/87 text-base transition-all focus:outline-none focus:border-primary focus:bg-white/8"
  placeholder="Enter text"
/>
```

### Toggle Switch

```jsx
<label className="relative inline-block w-12 h-6">
  <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
  <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-white/20 transition-all rounded-full before:absolute before:content-[''] before:h-5 before:w-5 before:left-0.5 before:bottom-0.5 before:bg-white before:transition-all before:rounded-full peer-checked:bg-primary peer-checked:before:translate-x-6"></span>
</label>
```

### Gradient Text

```jsx
<h1 className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
  Gradient Text
</h1>
```

### Avatar

```jsx
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-2xl font-bold text-white">
  A
</div>
```

## Color Palette

### Primary Colors

- `bg-primary` - Main brand color (#646cff)
- `bg-primary-hover` - Hover state (#535bf2)
- `text-primary` - Primary text color

### Gray Scale

- `bg-gray-900` - Dark background
- `bg-gray-800` - Slightly lighter background (navbar)
- `bg-white/5` - 5% white overlay (cards)
- `bg-white/8` - 8% white overlay (hover states)
- `bg-white/10` - 10% white overlay

### Text Colors

- `text-white/87` - Primary text (87% opacity)
- `text-white/70` - Secondary text (70% opacity)
- `text-white/60` - Tertiary text (60% opacity)
- `text-white/50` - Muted text (50% opacity)

### Border Colors

- `border-white/10` - Default border (10% opacity)
- `border-white/20` - Input borders (20% opacity)
- `border-primary` - Accent border

## Responsive Design

Tailwind uses mobile-first breakpoints:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

Example:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* 1 column on mobile, 2 on tablet, 4 on desktop */}
</div>
```

## Transitions & Animations

### Basic Transition

```jsx
<div className="transition-all duration-300">Content</div>
```

### Hover Effects

```jsx
<button className="transition-all hover:bg-primary-hover hover:-translate-y-1">
  Hover me
</button>
```

### Spinner Animation

```jsx
<div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
```

## Best Practices

1. **Use opacity for overlays**: `bg-white/5` instead of custom rgba values
2. **Responsive by default**: Always consider mobile-first approach
3. **Consistent spacing**: Use Tailwind's spacing scale (4px increments)
4. **Reusable patterns**: Extract common patterns into custom components in index.css
5. **Semantic class order**: Layout → Spacing → Typography → Colors → Effects
6. **Use @apply sparingly**: Only for true reusable components in @layer components

## Adding Custom Styles

If you need custom styles not covered by Tailwind:

1. **Extend the theme** in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      custom: '#yourcolor',
    },
  },
}
```

2. **Add custom components** in `src/index.css`:

```css
@layer components {
  .your-component {
    @apply your utility classes;
  }
}
```

3. **Add custom utilities** (rare):

```css
@layer utilities {
  .your-utility {
    /* custom CSS */
  }
}
```

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Tailwind UI Components](https://tailwindui.com/)
