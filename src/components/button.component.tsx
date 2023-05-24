import { ComponentProps, FC, PropsWithChildren } from 'react';
import { Button as ButtonFlowbite } from 'flowbite-react';

interface ButtonProps {
  onClick?: ComponentProps<'button'>['onClick'];
  isLoading?: boolean;
  color?: ComponentProps<typeof ButtonFlowbite>['color'];
  size?: ComponentProps<typeof ButtonFlowbite>['size'];
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  isLoading,
  children,
  color,
  size,
}) => (
  <ButtonFlowbite
    onClick={onClick}
    isProcessing={isLoading}
    disabled={isLoading}
    color={color}
    size={size}
  >
    {children}
  </ButtonFlowbite>
);
