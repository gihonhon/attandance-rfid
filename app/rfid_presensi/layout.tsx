import { CalendarRange, ScanBarcode, Users } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Input } from "@/components/ui/input";

export const metadata = {
    title: "Presensi RFID",
};

const RFIDPresensiLayout = ({ children }: { children: ReactNode }) => {
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
                    <h3 className="font-semibold text-lg p-4">Presensi</h3>
                </div>
            </div>
            <div className="relative flex flex-col min-w-0 shadow-lg m-6 p-6 bg-gray-200 rounded-lg">
                <div className="block m-4 p-4 w-full overflow-x-auto">
                    <div>
                        <p className="text-sm inline m-2">Mode</p>
                        <select name="dropdown" id="mode" className="rounded-lg p-2 border bg-gray-100 text-sm">
                            <option value="masuk">Jam Masuk</option>
                            <option value="pulang">Jam Pulang</option>
                        </select>
                    </div>
                    <div className="mt-6 text-center">
                        <h3 className="text-lg sm:text-xl md:text-2xl">Silahkan Tempelkan Kartu Anda Pada RFID Reader</h3>
                        <h4 className="text-sm sm:text-base md:text-lg m-1">Mode : Jam Masuk</h4>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-40 h-40 sm:w-12 sm:h-12 md:w-40 md:h-40 mx-auto mt-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RFIDPresensiLayout;