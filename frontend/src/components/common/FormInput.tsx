import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  accept?: string;
  divClassName?: "";
  inputClassName?: "";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPasswordToggle?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  accept,
  divClassName,
  inputClassName,
  onChange,
  showPasswordToggle = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`space-y-1.5 ${divClassName}`}>
      <Label htmlFor={id} className="text-gray-700 text-sm font-medium">
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          type={showPasswordToggle && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          accept={accept}
          onChange={onChange}
          className={`w-full ${
            placeholder ? "placeholder:tracking-widest " : " "
          }${inputClassName}`}
        />
        {showPasswordToggle && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </Button>
        )}
      </div>
    </div>
  );
};

export default FormInput;
