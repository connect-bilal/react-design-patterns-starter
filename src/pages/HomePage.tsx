import { Text } from '../components';
import { ThemeSwitcher } from '../components';

export default function HomePage() {
  return (
    <div>
      <Text as="h1">Welcome back to Home</Text>
      <ThemeSwitcher />
    </div>
  );
}
