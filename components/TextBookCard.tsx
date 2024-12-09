import Image from "next/image";
import Link from "next/link";

export default function T_card({ textbook }) {
  return (
    <div className="card flex flex-col items-center justify-evenly gap-y-2 mt-2 py-2 px-1 shadow-md">
      <h3 className="card_title h3 font-semibold overflow-clip">
        {textbook.name}
      </h3>
      <Link href={`${textbook.download_link}`}>
        <Image
          src={textbook.img_src || "file.svg"}
          alt="textbook_image"
          width={96}
          height={96}
          className="w-96 h-96"
          quality={100}
          layout="fixed"
          unoptimized
        ></Image>
      </Link>
    </div>
  );
}
