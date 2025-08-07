import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Calendar24Props {
  date?: Date;
  onDateChange: (date?: Date) => void;
  time: string;
  onTimeChange: (time: string) => void;
}

export function Calendar24({
  date,
  onDateChange,
  time,
  onTimeChange,
}: Calendar24Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex gap-4">
      {/* Verstecktes Input-Feld für das Datum */}
      <input type="hidden" name="date" value={date?.toISOString() || ""} />
      <div className="flex flex-col gap-3">
        <Label htmlFor="date-picker" className="px-1">
          Date
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className="w-32 justify-between font-normal"
            >
              {date ? date.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                onDateChange(date);
                setOpen(false);
              }}
              disabled={{ before: new Date(new Date().setHours(0, 0, 0, 0)) }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="time-picker" className="px-1">
          Time
        </Label>
        <Input
          type="time"
          value={time}
          name="time"
          onChange={(e) => onTimeChange(e.target.value)}
          step="1"
          className="bg-background [&::-webkit-calendar-picker-indicator]:hidden"
        />
      </div>
    </div>
  );
}
