
import "react-day-picker/style.css";
import { DayPicker } from "react-day-picker";



interface DatePickerProps {
    value: Date;
    onChange?(date: Date): void;
  }
  
  export function DatePicker({ value, onChange }: DatePickerProps) { 
  return (
    <DayPicker
      mode="single"
      selected={value}
      onSelect={(date) => onChange?.(date ?? new Date())}
      footer={
        `Selected: ${value.toLocaleDateString()}` 
      }
    />
  );
}