import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import mData from "../../data/MOCK_NAT.json"
import { useMemo } from 'react'
import { useState } from 'react'

/*

  {
    "id": 1,
    "first_name": "Isador",
    "last_name": "Kruger",
    "email": "ikruger0@huffingtonpost.com",
    "gender": "Male",
    "dob": "2023-04-28T11:19:35Z"
  },

*/

export default function BasicTable() {
  const data = useMemo(() => mData, [])
  /** @type import('@tanstack/react-table').ColumnDef<any> **/
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "First Name",
      accessorKey: "first_name",
      footer: "First Name",
    },
    {
      header: "Last Name",
      accessorKey: "last_name",
      footer: "Last Name",
    },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "DOB",
      accessorKey: "dob",
      footer: "DOB",
    }
  ];
  const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()})
  // return <div>BasicTable</div>
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
      {/* Table and Controls */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
    </div>
  )
}