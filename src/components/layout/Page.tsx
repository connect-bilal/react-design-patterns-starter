import type { ReactNode } from 'react';

import { useTitle } from '../../hooks/useTitle';

type PageProps = {
  title?: string;
  children: ReactNode;
};

const Page = ({ title, children }: PageProps) => {
  useTitle(title);

  return <>{children}</>;
};

Page.displayName = 'Page';
export default Page;
