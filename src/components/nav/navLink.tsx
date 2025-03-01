import Link from "next/link";
import {
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const NavLink = ({
  href,
  text,
  divider,
  currentPage,
}: {
  href: string;
  text: string;
  divider?: boolean;
  currentPage?: boolean;
}) => {

  return (
    <>
      {divider && <BreadcrumbSeparator />}
      <BreadcrumbItem key={href}>
        {currentPage ? (
          <BreadcrumbPage>
            <Link href={href} className="capitalize">
              {text}
            </Link>
          </BreadcrumbPage>
        ) : (
          <Link href={href} className="capitalize text-gray-700">
            {text}
          </Link>
        )}
      </BreadcrumbItem>
    </>
  );
};

export default NavLink;
