import { Pegawai, columns } from "./_components/columns";
import { Button } from "@/components/ui/button";
import { DataTable } from "./_components/data-table";

async function getData(): Promise<Pegawai[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      namaPegawai: "Agung Gihon",
      rfid: "1392002428",
      email: "m@example.com",
      jobTitle: "Pegawai Divisi A",
    },
    {
      id: "728ef52d",
      namaPegawai: "Kaela",
      rfid: "1292003428",
      email: "kaela@example.com",
      jobTitle: "Pegawai Divisi B",
    },
    // ...
  ];
}

export default async function PegawaiPage() {
  const data = await getData();
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl py-4">Daftar Pegawai</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
