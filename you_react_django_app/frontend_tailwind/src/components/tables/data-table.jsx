"use client";
import * as React from "react";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { ChevronDown, Download, } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { exportToCSV } from "@/lib/utils";
import { DataTablePagination } from "@/components/tables/data-table-pagination";
export function DataTable({ columns, data, }) {
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});
    const [globalFilter, setGlobalFilter] = React.useState([]);
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            globalFilter,
        },
        initialState: {
            pagination: {
                pageSize: 20,
            },
        },
    });
    const handleExport = () => {
        const selectedRows = table.getFilteredSelectedRowModel().rows;
        const dataToExport = selectedRows.length > 0
            ? selectedRows.map(row => row.original)
            : data;
        exportToCSV(dataToExport, "exported_data");
    };
    return (<div className="w-full">
      <div className="flex items-center py-2">
        {/* Global Filter */}
        {/* <Input
          value=""
          onChange={e => table.setGlobalFilter(String(e.target.value))}
          placeholder="Search..."
          className="max-w-sm"
        /> */}
        <Input placeholder="Filter email columns..." value={table.getColumn("email")?.getFilterValue() ?? ""} onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)} className="max-w-sm"/>
        
        {/* Column Visibility Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4"/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
            return (<DropdownMenuCheckboxItem key={column.id} className="capitalize" checked={column.getIsVisible()} onCheckedChange={(value) => column.toggleVisibility(!!value)}>
                    {column.id}
                  </DropdownMenuCheckboxItem>);
        })}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Export Button */}
        <Button variant="outline" className="ml-2" onClick={handleExport}>
          <Download className="mr-2 h-4 w-4"/>
          Export
        </Button>
      </div>

      {/* Table */}
      <div className="w-full h-[650px] flex flex-col">
        <div className="rounded-md border flex flex-2/3 flex-col overflow-hidden">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (<TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                return (<TableHead key={header.id}>
                        {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>);
            })}
                </TableRow>))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (table.getRowModel().rows.map((row) => (<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (<TableCell key={cell.id} className="py-1">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>))}
                  </TableRow>))) : (<TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </div>
      </div>
      {/* Pagination and Row Count */}
      <DataTablePagination table={table}/>
    </div>);
}
