// getIconComponent.ts
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';

const allIcons = {
  ...FaIcons,
  ...MdIcons,
  ...AiIcons,
  ...BiIcons,
  ...HiIcons,
};

/**
 * Retrieves the corresponding icon React component by its name.
 */
export function getIconComponent(name: string): React.ComponentType | null {
  return allIcons[name as keyof typeof allIcons] || null;
}
