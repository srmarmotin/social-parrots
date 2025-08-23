import * as React from "react"
import { cn } from "@/lib/utils"

type TableColumn = {
  key: string;
  value: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
};

type TableProps = React.ComponentProps<"table"> & {
  columns: TableColumn[];
  data: any[];
  className?: string;
};

function Table({ columns, data, className, ...props }: TableProps) {
  return (
    <table
      className={cn(
        "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground w-full min-w-0 rounded-md border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="px-3 py-2 text-left font-semibold text-muted-foreground bg-background">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-b last:border-none">
            {columns.map((col) => (
              <td key={col.key} className="px-3 py-2">
                {col.render ? col.render(row[col.value], row) : row[col.value]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { Table }
