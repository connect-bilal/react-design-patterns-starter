export const alertVariants = ['success', 'error', 'warning', 'info'] as const;

export type AlertVariant = (typeof alertVariants)[number];

export interface AlertProps {
  message: string;
  variant?: AlertVariant;
  className?: string;
  duration?: number;
  closable?: boolean;
  onClose?: () => void;
}

export const AlertDefaultProps = {
  variant: 'info',
  duration: 5, // in seconds
  closable: true,
} satisfies Required<Pick<AlertProps, 'variant' | 'duration' | 'closable'>>;
