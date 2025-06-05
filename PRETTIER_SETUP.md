# Prettier & Tailwind CSS Setup

This project has been configured with Prettier for TypeScript formatting and
Tailwind CSS with proper integration.

## What's Configured

### Prettier Configuration (`.prettierrc`)

- Single quotes for JavaScript/TypeScript
- JSX single quotes
- Trailing commas
- Arrow function parentheses
- Tab width: 4
- Uses tabs instead of spaces
- Semicolons enabled
- Tailwind CSS class sorting via `prettier-plugin-tailwindcss`

### ESLint Integration (`.eslintrc.json`)

- Next.js core web vitals rules
- Prettier integration to avoid conflicts
- Disabled unescaped entities rule for cleaner JSX

### VS Code Settings (`.vscode/settings.json`)

- Format on save enabled
- Format on paste enabled
- Format on type enabled
- ESLint auto-fix on save
- TypeScript import preferences
- Tailwind CSS IntelliSense configuration

### NPM Scripts Available

- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check if files are formatted correctly
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix

### Installed Packages

- `prettier` - Code formatter
- `prettier-plugin-tailwindcss` - Sorts Tailwind CSS classes
- `eslint-config-prettier` - Disables ESLint rules that conflict with Prettier
- `eslint-plugin-prettier` - Runs Prettier as an ESLint rule

## Usage

### Automatic Formatting

- Files will be automatically formatted on save in VS Code
- Tailwind CSS classes will be automatically sorted

### Manual Formatting

```bash
# Format all files
npm run format

# Check formatting without changing files
npm run format:check

# Run linting
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

### Tailwind CSS Features

- Class sorting and organization
- IntelliSense and autocomplete
- Emmet support for Tailwind classes
- CSS file association for better syntax highlighting

## Notes

- All existing files have been formatted according to the new configuration
- The setup maintains your existing coding style preferences (tabs, single
  quotes, etc.)
- Tailwind CSS classes are automatically sorted for consistency
- The configuration works seamlessly with Next.js and TypeScript
