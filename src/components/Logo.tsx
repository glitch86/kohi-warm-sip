import Image from "next/image";
import React from "react";
import kohiLogo from "/images/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image src="/images/logo.png" alt="logo" width={67} height={67} />
      </Link>
    </div>
  );
};

export default Logo;
