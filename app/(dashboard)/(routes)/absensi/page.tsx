import { Payment } from "./_componets/columns";

// type Payment = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
// };

// export const payments: Payment[] = [
//   {
//     id: "728ed52f",
//     amount: 100,
//     status: "pending",
//     email: "m@example.com",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//   },
// ];
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function AbsensiPage() {
  const data = await getData();
  return (
    <>
      <div className="flex flex-wrap items-center m-6 p-2 bg-gray-200 rounded-lg">
        <div className="relative w-full px-4 max-w-full flex-grow">
          <h3 className="font-semibold text-lg p-4">Data Absensi</h3>
        </div>
      </div>
      <div className="relative flex flex-col min-w-0 shadow-lg m-6 p-6 bg-gray-200 rounded-lg">
        <div className="block m-4 p-4 w-full overflow-x-auto">
          <table className="w-full bg-white rounded-lg">
            <thead>
              <tr className="border border-solid border-l-0 border-r-0">
                <th className="text-md px-6 py-5">No</th>
                <th className="text-md px-6 py-5">Kode RFID</th>
                <th className="text-md px-6 py-5">Nama Karyawan</th>
                <th className="text-md px-6 py-5">Tanggal</th>
                <th className="text-md px-6 py-5">Jam Masuk</th>
                <th className="text-md px-6 py-5">Jam Pulang</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-md px-6 py-4">1</td>
                <td className="text-md px-6 py-4">1392002428</td>
                <td className="text-md px-6 py-4">Agung Gihon Simanjuntak</td>
                <td className="text-md px-6 py-4">2023-06-10</td>
                <td className="text-md px-6 py-4">20:37:46</td>
                <td className="text-md px-6 py-4">21:47:46</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <a href="#" className="px-3 py-2 text-black-500 hover:underline">
            Previous
          </a>
          <a href="#" className="px-3 py-2 bg-white text-black rounded-md">
            1
          </a>
          <a href="#" className="px-3 py-2 text-black-500 hover:underline">
            Next
          </a>
        </div>
      </div>
    </>
  );
}
