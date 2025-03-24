import React from "react";
import { Button } from "@/components/ui/button";

interface FormButtonProps {
  type: "button" | "submit";
  label: string;
  className?: string;
  onClick?: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({
  type,
  label,
  className,
  onClick,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={` w-full font-medium py-4 ${className}`}
    >
      {label}
    </Button>
  );
};

export default FormButton;
