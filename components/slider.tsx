import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number[];
  onValueChange: (values: number[]) => void;
}

export function Slider({ min, max, step, value, onValueChange }: SliderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    onValueChange([newValue, value[1]]);
  };

  return (
    <div className="w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
} 