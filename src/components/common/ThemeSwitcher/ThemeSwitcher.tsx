import { useMemo } from 'react';

import { useTheme } from '../../../hooks/useTheme';
import Toggle from '../Toggle';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const labelText = useMemo(() => (isDark ? '🌙 Dark Mode' : '☀️ Light Mode'), [isDark]);

  return (
    <Toggle
      id='theme-toggle'
      label={labelText}
      checked={isDark}
      onChange={() => toggleTheme()}
      variant='switch'
      aria-label='Toggle light and dark theme'
    />
  );
};

ThemeSwitcher.displayName = 'ThemeSwitcher';
export default ThemeSwitcher;
