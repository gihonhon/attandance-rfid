import { Pegawai, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

async function getData(): Promise<Pegawai[]> {
  //TODO : Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      namaPegawai: "Agung Gihon",
      rfid: "1392002428",
      tanggal: "2023-10-26 18:51:58.411",
      jamKeluar: "2023-10-26 22:15:46.411",
    },
    {
      id: "728ef52d",
      namaPegawai: "Kaela",
      rfid: "1292003428",
      tanggal: "2023-06-12 19:51:58.411",
      jamKeluar: "2023-06-12 21:45:33.411",
    },
    // ...
  ];
}

export default async function AbsensiPage() {
  const data = await getData();
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl py-4">Data Absensi</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
