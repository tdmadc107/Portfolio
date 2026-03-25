// Application constants

export const APP_NAME = 'Portfolio';
export const APP_DESCRIPTION = 'My Professional Portfolio';

// API endpoints
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

// Common selectors
export const SELECTORS = {
  HEADER: '[data-testid="header"]',
  FOOTER: '[data-testid="footer"]',
  MAIN_CONTENT: '[data-testid="main-content"]',
};

// Breaking points for responsive design
export const BREAKPOINTS = {
  MOBILE: '480px',
  TABLET: '768px',
  DESKTOP: '1024px',
  WIDE: '1440px',
};

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'portfolio_theme',
  USER_PREFERENCES: 'portfolio_preferences',
};
