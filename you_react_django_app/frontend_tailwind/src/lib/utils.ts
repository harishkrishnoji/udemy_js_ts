import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function exportToCSV(data: any[], fileName: string) {
  const csvContent = [
    Object.keys(data[0]).join(","),
    ...data.map(item => Object.values(item).join(","))
  ].join("\n")

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.setAttribute("href", url)
  link.setAttribute("download", `${fileName}.csv`)
  link.style.visibility = "hidden"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}