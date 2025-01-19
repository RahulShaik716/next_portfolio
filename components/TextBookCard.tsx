import Image from "next/image";
import Link from "next/link";
type Props = {
  name: string;
  img_src: string;
  download_link: string;
};

export default function T_card({ textbook }: { textbook: Props }) {
  return (
    <Link href={textbook.download_link} className="relative flex flex-col">
      <Image
        src={
          textbook.img_src ? textbook.img_src : "/book-cover-placeholder.png"
        }
        alt="textbook-image"
        className="w-64 h-64 object-cover hover:scale-110"
        width={240}
        height={240}
      />
      <div className="absolute z-10 bg-black text-white bg-opacity-50 bottom-0 max-w-64 w-full text-center">
        {textbook.name}
      </div>
    </Link>
  );
}
