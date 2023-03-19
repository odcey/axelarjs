import { FC } from "react";

import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import tw from "tailwind-styled-components";

export const buttonVariance = cva("btn", {
  variants: {
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    },
    color: {
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      error: "btn-error",
    },
    shape: {
      square: "btn-square",
      circle: "btn-circle",
    },
    outline: {
      true: "btn-outline",
    },
    disabled: {
      true: "btn-disabled",
    },
    ghost: {
      true: "btn-ghost",
    },
    glass: {
      true: "glass",
    },
    link: {
      true: "btn-link",
    },
    loading: {
      true: "loading",
    },
  },
});

type VProps = VariantProps<typeof buttonVariance>;

type PolymorphicProps =
  | {
      $as: "a";
      href: string;
    }
  | {
      $as?: never;
    };

export type ButtonProps = JSX.IntrinsicElements["button"] &
  VProps &
  PolymorphicProps;

/**
 * Button - A button component
 */
const _Button: FC<ButtonProps> = ({
  className,
  size,
  color,
  disabled,
  shape,
  ghost,
  glass,
  outline,
  link,
  loading,
  ...props
}) => {
  const classes = twMerge(
    buttonVariance({
      size,
      color,
      disabled,
      shape,
      ghost,
      outline,
      link,
      glass,
      loading,
    }),
    className
  );
  return <button disabled={disabled} className={classes} {...props} />;
};

export const Button = tw(_Button)``;

Button.defaultProps = {
  type: "button",
};
