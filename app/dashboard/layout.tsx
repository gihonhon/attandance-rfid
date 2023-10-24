import { CalendarRange, ScanBarcode, Users } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
  title: "Dashboard",
};

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="drawer">
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
            <div className="flex-1 px-2 mx-2">Attendance System</div>
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
            <Link className="text-black" href={`/dashboard/item1`}>
              <Users />
              Data Pegawai
            </Link>
          </li>
          <li className=" text-gray-500 mb-4">
            REKAP ABSENSI
            <Link className="text-black" href={"/dashboard/materi"}>
              <CalendarRange />
              Data Absensi
            </Link>
          </li>
          <li className=" text-gray-500 mb-4">
            RFID
            <Link className="text-black" href={"/dashboard/materi"}>
              <ScanBarcode />
              Presensi
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
