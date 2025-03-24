import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

interface SelectInputProps {
  id: string;
  label: string;
  options: string[];
  value: string;
  onValueChange: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  id,
  label,
  options,
  value,
  onValueChange,
}) => {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-gray-700 text-sm font-medium">
        {label}
      </Label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={`Select a ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectInput;
