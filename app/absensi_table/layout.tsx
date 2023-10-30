import { CalendarRange, ScanBarcode, Users } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
    title: "Data Absensi",
};

const DataAbsensiLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="drawer relative z-10">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                    <div className="flex-none">
                        <label
                        htmlFor="my-drawer-3"
                        aria-label="open sidebar"
                        className="btn btn-square btn-ghost"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-6 h-6 stroke-current"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                        </label>
                        <div className="flex-1 px-2 mx-2 font-semibold text-lg">ATTENDANCE SYSTEM</div>
                    </div>
                    </div>
                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                    ></label>

                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    <div className="flex justify-center py-2 mb-4">
                        <h1 className="text-lg font-medium">RFID ABSENSI</h1>
                    </div>
                    <li className=" text-gray-500 mb-4">
                        MASTER PEGAWAI
                        <Link className="text-black" href={`/pegawai_table`}>
                        <Users />
                        Data Pegawai
                        </Link>
                    </li>
                    <li className=" text-gray-500 mb-4">
                        REKAP ABSENSI
                        <Link className="text-black" href={"/absensi_table"}>
                        <CalendarRange />
                        Data Absensi
                        </Link>
                    </li>
                    <li className=" text-gray-500 mb-4">
                        RFID
                        <Link className="text-black" href={"/rfid_presensi"}>
                        <ScanBarcode />
                        Presensi
                        </Link>
                    </li>
                    </ul>
                </div>
            </div>
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
                    <a href="#" className="px-3 py-2 text-black-500 hover:underline">Previous</a>
                    <a href="#" className="px-3 py-2 bg-white text-black rounded-md">1</a>
                    <a href="#" className="px-3 py-2 text-black-500 hover:underline">Next</a>
                </div>
            </div>
        </div>
    );
};

export default DataAbsensiLayout;