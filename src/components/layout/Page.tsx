import { useTitle } from '@hooks';
import type { ReactNode } from 'react';

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
