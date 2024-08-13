"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Filter, X } from "lucide-react";
import React, { useState } from "react";

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

const FilterSchema = z.object({
  type: z.string().optional(),
});

export default function FilterActions() {
  const [date, setDate] = useState<Date>();

  const form = useForm<z.infer<typeof FilterSchema>>({
    resolver: zodResolver(FilterSchema),
    defaultValues: {
      type: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FilterSchema>) => {
    console.log(data);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-background text-foreground hover:bg-accent border flex gap-1">
          <Filter />
          Filters
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 p-4 " align="start">
        <DropdownMenuLabel className="text-md mb-2">Filter</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        showClear={field.value ? true : false}
                        onClearClick={() => {
                          form.setValue("type", "");
                        }}
                      >
                        <SelectValue
                          placeholder="Select type"
                          className="w-full flex"
                          defaultValue={field.value}
                        >
                          {field.value || "Select type"}
                        </SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Documents">Documents</SelectItem>
                      <SelectItem value="Excels">Excels</SelectItem>
                      <SelectItem value="Words">Words</SelectItem>
                      <SelectItem value="PDFs">PDFs</SelectItem>
                      <SelectItem value="Photos & Images">
                        Photos & Images
                      </SelectItem>
                      <SelectItem value="Folders">Folders</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal hover:bg-background",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <Select
                  onValueChange={(value) =>
                    setDate(addDays(new Date(), parseInt(value)))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="0">Today</SelectItem>
                    <SelectItem value="1">Tomorrow</SelectItem>
                    <SelectItem value="3">In 3 days</SelectItem>
                    <SelectItem value="7">In a week</SelectItem>
                  </SelectContent>
                </Select>
                <div className="rounded-md border">
                  <Calendar mode="single" selected={date} onSelect={setDate} />
                </div>
              </PopoverContent>
            </Popover>

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  form.reset();
                }}
              >
                Clear
              </Button>
              <Button type="submit">Apply</Button>
            </div>
          </form>
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
