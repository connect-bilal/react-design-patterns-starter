import { useEffect } from 'react';

export const useTitle = (title?: string) => {
  useEffect(() => {
    const appName = __APP_NAME__ ?? 'My App';
    const pageTitle = title && `${title} |`;
    document.title = `${pageTitle} ${appName}`;
  }, [title]);
};
