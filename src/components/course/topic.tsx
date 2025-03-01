"use client";
import { FileText, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Topic = ({ topic }: { topic: topic }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="border-2 border-gray-150 p-5">
      <div className="flex justify-between items-center">
        <div className="py-4 border-b-2">
          <h3 className="text-xl">{topic.title}</h3>
          <p className="text-gray-500">{topic.description}</p>
        </div>
        <div className="w-fit max-md:center md:hidden">
          <button
            className="text-xl cursor-pointer p-1"
            onClick={() => setOpen((pre) => !pre)}
            aria-label="toggle topic materials visibility"
          >
            <svg
              className=" shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`ttransform origin-center transition duration-200 ease-out ${open && "!rotate-180"}`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${open && "!rotate-180"}`}
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="topic-materials"
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out md:!opacity-100 md:!grid-rows-[1fr]  ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          {topic.materials.map((material) => (
            <Link
              href={material.url}
              className="block hover:bg-gray-50 border-b-2"
              key={material.title}
              title={material.title}
            >
              <div className="flex flex-wrap justify-between items-center py-3">
                <div className="center gap-2">
                  <FileText size={16} className="min-w-fit" />
                  <span className="min-w-1/2 line-clamp-1">
                    {material.title}
                  </span>
                </div>
                <div className="center gap-2 ms-auto">
                  {(material?.questions ?? -1) >= 0 && (
                    <div className="uppercase bg-green-50 px-1 text-green-700 text-center text-sm">
                      {material.questions} questions
                    </div>
                  )}
                  {(material?.time ?? -1) >= 0 && (
                    <div className="uppercase bg-red-50 px-1 text-red-700 text-center text-sm">
                      {material.time} Minutes
                    </div>
                  )}
                  {material.locked && (
                    <LockKeyhole size={16} className="min-w-fit" />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topic;
