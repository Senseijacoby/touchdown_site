import React from "react";
import { Eye as CodeBracketIcon, Code2 as EyeIcon } from "lucide-react";
import Link from "next/link";

export default function PortfolioCard({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) {
  return (
    <div>
      <div
        className="relative h-52 md:h-72 rounded-t-xl group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-text1 hover:border-white group/link"
            target="_blank"
          >
            <EyeIcon className="h-10 w-10 text-text1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-text1 hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-text1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="text-text1">{description}</p>
      </div>
    </div>
  );
}
