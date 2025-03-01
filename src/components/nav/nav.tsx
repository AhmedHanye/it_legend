"use client";
import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";
import NavLink from "./navLink";

const Nav = () => {
  const pathname = usePathname();
  const links = pathname !== "/" ? pathname.split("/") : [""];
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-base">
        {links.map((path, index) => {
          const href = links.slice(0, index + 1).join("/") || "/";
          const text = path === "" ? "Home" : decodeURIComponent(path);
          return (
            <NavLink
              key={href}
              href={href}
              text={text}
              divider={index !== 0}
              currentPage={index === links.length - 1}
            />
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Nav;
