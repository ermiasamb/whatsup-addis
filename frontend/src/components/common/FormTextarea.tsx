import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormTextareaProps {
  id: string;
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-gray-700 text-sm font-medium">
        {label}
      </Label>
      <Textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-md focus:outline-none"
        rows={4}
      />
    </div>
  );
};

export default FormTextarea;
