import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        theme: 'rgb(var(--color-theme) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        info: 'rgb(var(--color-info) / <alpha-value>)',

        onPrimary: 'rgb(var(--color-text-on-primary) / <alpha-value>)',
        onSuccess: 'rgb(var(--color-text-on-success) / <alpha-value>)',
        onDanger: 'rgb(var(--color-text-on-danger) / <alpha-value>)',
        onWarning: 'rgb(var(--color-text-on-warning) / <alpha-value>)',
        onInfo: 'rgb(var(--color-text-on-info) / <alpha-value>)',

        body: 'rgb(var(--color-bg-body) / <alpha-value>)',
        surface: 'rgb(var(--color-bg-surface) / <alpha-value>)',
        muted: 'rgb(var(--color-bg-muted) / <alpha-value>)',
        container: 'rgb(var(--color-bg-container) / <alpha-value>)',
      },
      fontSize: {
        'sm': 'var(--font-size-sm)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
      },
      fontWeight: {
        regular: 'var(--font-weight-regular)',
        medium: 'var(--font-weight-medium)',
        bold: 'var(--font-weight-bold)',
      },
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        DEFAULT: 'var(--shadow)',
      },
      transitionProperty: {
        standard: 'var(--transition-standard)',
      },
      letterSpacing: {
        base: 'var(--letter-spacing-base)',
      },
      lineHeight: {
        base: 'var(--line-height-base)',
      },
      opacity: {
        disabled: 'var(--opacity-disabled)',
        hover: 'var(--opacity-hover)',
        active: 'var(--opacity-active)',
        overlay: 'var(--opacity-overlay)',
        muted: 'var(--opacity-muted)',
      },
      width: {
        'icon-xs': 'var(--icon-size-xs)',
        'icon-sm': 'var(--icon-size-sm)',
        'icon-md': 'var(--icon-size-md)',
        'icon-lg': 'var(--icon-size-lg)',
      },
      height: {
        'icon-xs': 'var(--icon-size-xs)',
        'icon-sm': 'var(--icon-size-sm)',
        'icon-md': 'var(--icon-size-md)',
        'icon-lg': 'var(--icon-size-lg)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        '.opacity-disabled': {
          opacity: theme('opacity.disabled'),
        },
        '.opacity-hover:hover': {
          opacity: theme('opacity.hover'),
        },
        '.opacity-active:active': {
          opacity: theme('opacity.active'),
        },
        '.opacity-overlay': {
          opacity: theme('opacity.overlay'),
        },
        '.opacity-muted': {
          opacity: theme('opacity.muted'),
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'focus', 'active']);
    }),
  ],
};
