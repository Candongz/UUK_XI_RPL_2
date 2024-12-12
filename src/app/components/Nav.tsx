import React from "react";
import Image from "next/image";
import teknojay4 from "@/assets/teknojay4.png";
import Link from "next/link";

function Nav() {
  return (
    <>
      <div>
        <div className="flex mt-10 relative lg:mt-9 left-10">
          <div>
            <Image src={teknojay4} alt="PT.TEKNO JAYA" width={150} />
          </div>
          <div className='flex justify-end ms-96 pt-11 mr-10 gap-7 font-semibold'>
                        <Link href="/Login">Login</Link>
                        <Link href="/Hakakses">HakAkses</Link>
                        <Link href="/Tambah">Tambah</Link>
                        <Link href="/DataA">DataA</Link>
                        <Link href="/DataB">DataB</Link>
                        <Link href="/Update">Update</Link>
                    </div>
        </div>
      </div>
    </>
  );
}

export default Nav;