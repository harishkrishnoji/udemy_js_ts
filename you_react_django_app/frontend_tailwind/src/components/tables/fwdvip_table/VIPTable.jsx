'use client';
import { DataTable } from "@/components/tables/data-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
export const columns = [
    {
        id: "select",
        header: ({ table }) => (<Checkbox checked={table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all"/>),
        cell: ({ row }) => (<Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row"/>),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "Platform",
        // header: "Status",
        header: ({ column }) => {
            return (<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Platform
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>);
        },
    },
    {
        accessorKey: "DeviceName",
        // header: "Status",
        header: ({ column }) => {
            return (<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          DeviceName
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>);
        },
    },
    {
        accessorKey: "VIPName",
        header: ({ column }) => {
            return (<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          VIPName
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>);
        },
    },
    {
        accessorKey: "SourceAddress",
        header: ({ column }) => {
            return (<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          SourceAddress
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>);
        },
    },
    {
        accessorKey: "VIPAddress",
        header: ({ column }) => {
            return (<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          VIPAddress
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>);
        },
    },
    {
        accessorKey: "VIPPort",
        header: ({ column }) => {
            return (<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          VIPPort
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>);
        },
    },
    {
        accessorKey: "Protocol",
        header: ({ column }) => {
            return (<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Protocol
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>);
        },
    },
    {
        accessorKey: "BackendSrc",
        header: ({ column }) => {
            return (<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          BackendSrc
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>);
        },
    },
    {
        accessorKey: "BackendDst",
        header: ({ column }) => {
            return (<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          BackendDst
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>);
        },
    },
    {
        accessorKey: "BackendPort",
        header: ({ column }) => {
            return (<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          BackendPort
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>);
        },
    },
    {
        accessorKey: "date_created",
        header: ({ column }) => {
            return (<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          date_created
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>);
        },
    },
    // {
    //   accessorKey: "vipName",
    //   header: () => <div className="text-right">Amount</div>,
    //   cell: ({ row }) => {
    //     const amount = parseFloat(row.getValue("amount"))
    //     const formatted = new Intl.NumberFormat("en-US", {
    //       style: "currency",
    //       currency: "USD",
    //     }).format(amount)
    //     return <div className="text-right font-medium">{formatted}</div>
    //   },
    // },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.id;
            return (<DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4"/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment)}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>);
        },
    },
];
// VIPTable
// export function PaymentTable() {
export default function ACLPanOSTable() {
    // const [pagination, setPagination] = useState<PaginationState>({
    //   pageIndex: 0,
    //   pageSize: 10,
    // })
    return <DataTable columns={columns} endpoint="fwdnet/vip/"/>;
}
