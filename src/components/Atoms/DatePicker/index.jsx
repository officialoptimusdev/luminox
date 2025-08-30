import React, { useState } from "react"
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function formatDate(date) {
  if (!date) return ""
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function isValidDate(date) {
  if (!date) return false
  return !isNaN(date.getTime())
}

export function DatePicker({ label = "Select Date", value, onChange }) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(value || undefined)
  const [month, setMonth] = useState(value || new Date())
  const [inputValue, setInputValue] = useState(formatDate(value))

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate)
    setInputValue(formatDate(selectedDate))
    if (onChange) onChange(selectedDate)
    setOpen(false)
  }

  const handleInputChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue)
    const parsedDate = new Date(newValue)
    if (isValidDate(parsedDate)) {
      setDate(parsedDate)
      setMonth(parsedDate)
      if (onChange) onChange(parsedDate)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor="date">{label}</Label>}
      <div className="relative flex gap-2">
        <Input
          id="date"
          value={inputValue}
          placeholder="June 01, 2025"
          className="bg-background pr-10"
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Open calendar</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={handleDateSelect}
              className="bg-[#3E757B] text-white rounded-lg p-2"
              classNames={{
                day: "h-9 w-9 flex items-center justify-center rounded-md transition-colors text-white hover:bg-white hover:text-black",
                day_selected: "bg-white text-black font-bold",
                day_today: "border border-white",
                day_outside: "opacity-50",
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
