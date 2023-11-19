"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Loader2,
  MoreHorizontal,
  Pencil,
  Trash,
} from "lucide-react";
import Link from "next/link";

export type Pegawai = {
  id: string;
  namaPegawai: string;
  rfid: string;
  email: string;
  jobTitle: string;
};

export const columns: ColumnDef<Pegawai>[] = [
  {
    accessorKey: "namaPegawai",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Pegawai
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "rfid",
    header: "Card ID",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "jobTitle",
    header: "Jabatan",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-4 w-8 p-0">
              <span className="sr-only">Open Menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/pegawai/${id}`}>
              <DropdownMenuItem>
                <Pencil className="h-4 w-4 mr-2" />
                Edit
              </DropdownMenuItem>
            </Link>
            <button className="w-full">
              <DropdownMenuItem>
                <Trash className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
