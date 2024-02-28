"use client";
import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <Link
        className="text-2xl md:text-5xl hover:text-white font-semibold"
        href={"/"}
      >
        <div className="hover:opacity-75 transition items-center gap-x-2  flex">
          <Image src="/logo.svg" alt="Logo" height={50} width={50} />
          <p className="text-3xl text-neutral-700 pb-1 font-signature">
            Jacoby
          </p>
        </div>
      </Link>
    </>
  );
};
