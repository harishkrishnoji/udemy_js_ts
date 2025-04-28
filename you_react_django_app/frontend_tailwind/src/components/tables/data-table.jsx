"use client";
import * as React from "react";
import { debounce } from 'lodash';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { ChevronDown, Download, } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { exportToCSV } from "@/lib/utils";
import { DataTablePagination } from "@/components/tables/data-table-pagination";
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '@/api/api';
// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[]
//   data: TData[]
// }
export function DataTable({ columns, endpoint, }) {
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [globalFilter, setGlobalFilter] = React.useState([]);
    const [pagination, setPagination] = React.useState({
        pageIndex: 1,
        pageSize: 20,
    });
    // Debounce filter changes
    const debouncedFilter = React.useMemo(() => debounce((filters) => {
        setColumnFilters(filters);
    }, 500), []);
    // Build query params for server
    const buildParams = () => {
        const params = {
            offset: pagination.pageIndex - 1,
            limit: pagination.pageSize,
        };
        // Global search
        if (globalFilter) {
            params.search = globalFilter;
        }
        // Column filters
        columnFilters.forEach(filter => {
            params[filter.id] = filter.value;
        });
        // Sorting
        if (sorting.length > 0) {
            params.ordering = sorting.map(sort => sort.desc ? `-${sort.id}` : sort.id).join(',');
        }
        return params;
    };
    const { data: apiResponse, isLoading, error } = useQuery({
        queryKey: [endpoint, columnFilters, globalFilter, sorting, pagination],
        queryFn: () => fetchData(endpoint, buildParams()),
        // placeholderData: keepPreviousData
    });
    // console.log(`Table Data: ${JSON.stringify(apiResponse)}`)
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});
    const table = useReactTable({
        data: apiResponse?.results || [],
        columns,
        pageCount: Math.ceil(apiResponse?.count / pagination.pageSize),
        onSortingChange: setSorting,
        onColumnFiltersChange: debouncedFilter,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: setPagination,
        state: {
            pagination,
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            globalFilter,
        },
        // manualPagination: true,
        manualFiltering: true,
        manualSorting: true,
        // initialState: {
        //   pagination: {
        //       pageSize: 20,
        //   },
        // },
    });
    const handleExport = () => {
        const selectedRows = table.getFilteredSelectedRowModel().rows;
        const dataToExport = selectedRows.length > 0
            ? selectedRows.map(row => row.original)
            : apiResponse;
        exportToCSV(dataToExport, "exported_data");
    };
    if (isLoading)
        return <div>Loading...</div>;
    if (error)
        return <div>Error loading data</div>;
    console.log(`Table Row data: ${table.getRowModel().rows}`);
    console.log(table.getRowModel().rows?.length);
    return (<div className="w-full">
      <div className="flex items-center py-2">
        {/* Global Filter */}
        <Input value="" onChange={e => table.setGlobalFilter(String(e.target.value))} placeholder="Search..." className="max-w-sm"/>
        <Input placeholder="Filter DeviceName columns..." value={table.getColumn("DeviceName")?.getFilterValue() ?? ""} onChange={(event) => table.getColumn("DeviceName")?.setFilterValue(event.target.value)} className="max-w-sm ml-2"/>
        
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
