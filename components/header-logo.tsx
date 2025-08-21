import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/my_logo_white-bg.ico" alt="Logo" height={28} width={28} />
        <p className="font-semibold text-white text-2xl ml-2.5">
          Financino
        </p>
      </div>
    </Link>
  );
};
