import { Text } from '../components';
import { ThemeSwitcher } from '../components';
import { Page } from '../components';

export default function HomePage() {
  return (
    <Page title='Home'>
      <Text as='h1'>Welcome back to Home</Text>
      <ThemeSwitcher />
    </Page>
  );
}
