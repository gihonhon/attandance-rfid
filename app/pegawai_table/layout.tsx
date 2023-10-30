import { CalendarRange, ScanBarcode, Users } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Data Pegawai",
};

const DataPegawaiLayout = ({ children }: { children: ReactNode }) => {
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
                    <h3 className="font-semibold text-lg p-4">Data Pegawai</h3>
                </div>
            </div>
            <Button className="ml-9 bg-green-500 hover:bg-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 m-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <p>Tambah Pegawai</p>
            </Button>
            <div className="relative flex flex-col min-w-0 shadow-lg m-6 p-6 bg-gray-200 rounded-lg">
                <div className="block m-4 p-4 w-full overflow-x-auto">
                    <table className="w-full bg-white rounded-lg">
                        <thead>
                            <tr className="border border-solid border-x-0">
                                <th className="text-md px-6 py-5">No</th>
                                <th className="text-md px-6 py-5">Kode RFID</th>
                                <th className="text-md px-6 py-5">Nama Karyawan</th>
                                <th className="text-md px-6 py-5">Email</th>
                                <th className="text-md px-6 py-5">Jabatan</th>
                                <th className="text-md px-6 py-5">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-md px-6 py-4">1</td>
                                <td className="text-md px-6 py-4">1392002428</td>
                                <td className="text-md px-6 py-4">Agung Gihon Simanjuntak</td>
                                <td className="text-md px-6 py-4">agung@gmail.com</td>
                                <td className="text-md px-6 py-4">Manager</td>
                                <td className="text-md px-6 py-4">
                                    <div className="grid grid-cols-2 gap-1">
                                        <Button className="bg-orange-400 hover:bg-orange-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="xl:hidden w-6 h-6 inline">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                            </svg>
                                            <p className="text-white text-center hidden xl:block">Edit</p>
                                        </Button>
                                        <Button className="bg-red-500 hover:bg-red-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="xl:hidden w-6 h-6 inline">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                            <p className="text-white text-center hidden xl:block">Delete</p>
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-md px-6 py-4">2</td>
                                <td className="text-md px-6 py-4">1502002428</td>
                                <td className="text-md px-6 py-4">Istaqom Wirawan</td>
                                <td className="text-md px-6 py-4">wira@gmail.com</td>
                                <td className="text-md px-6 py-4">Gubernur</td>
                                <td className="text-md px-6 py-4">
                                    <div className="grid grid-cols-2 gap-1">
                                        <Button className="bg-orange-400 hover:bg-orange-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="xl:hidden w-6 h-6 inline">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                            </svg>
                                            <p className="text-white text-center hidden xl:block">Edit</p>
                                        </Button>
                                        <Button className="bg-red-500 hover:bg-red-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="xl:hidden w-6 h-6 inline">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                            <p className="text-white text-center hidden xl:block">Delete</p>
                                        </Button>
                                    </div>
                                </td>
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

export default DataPegawaiLayout;