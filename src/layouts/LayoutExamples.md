# Layout System Usage Examples

## Available Layout Modes

### 1. Constrained Layout (Default)
Perfect for most content pages - like margins on paper
```astro
<Layout title="My Page" layout="constrained" maxWidth="lg">
  <YourComponent />
</Layout>
```

### 2. Wide Layout 
More breathing room for content that needs extra space
```astro
<Layout title="My Page" layout="wide" maxWidth="xl">
  <YourComponent />
</Layout>
```

### 3. Full Layout
Edge-to-edge for landing pages, heroes, or special layouts
```astro
<Layout title="My Page" layout="full">
  <YourComponent />
</Layout>
```

## Max Width Options

- `sm`: ~672px (great for reading content)
- `md`: ~896px (good for forms, narrow content)
- `lg`: ~1024px (default, good for most pages)
- `xl`: ~1152px (wider content, dashboards)
- `2xl`: ~1280px (very wide layouts)

## Utility Classes for Components

### Section Spacing
```tsx
<div className="section-spacing">
  {/* Automatically gets 4rem bottom margin */}
</div>
```

### Content Blocks
```tsx
<div className="content-block">
  {/* Gets 2rem bottom margin */}
</div>
```

## Smart Features

1. **Automatic Centering**: All layouts center content automatically
2. **Responsive Padding**: Padding increases on larger screens
3. **No Container Conflicts**: Components don't need their own containers
4. **Consistent Spacing**: All components use the same spacing system

## Example Pages

```astro
<!-- Blog post - constrained and narrow -->
<Layout title="Blog Post" layout="constrained" maxWidth="md">
  <BlogPost />
</Layout>

<!-- Dashboard - wide layout -->
<Layout title="Dashboard" layout="wide" maxWidth="2xl">
  <Dashboard />
</Layout>

<!-- Landing page - full width -->
<Layout title="Landing" layout="full">
  <Hero />
  <Features />
  <CTA />
</Layout>
``` 