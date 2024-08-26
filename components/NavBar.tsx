import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./themeToggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBar = () => {
  return (
    <nav className="flex h-16 bg-background/40 sticky top-0 border-b px-8 backdrop-blur items-center justify-between">
      <div className="font-bold md:text-xl text-lg">GenAIBlogs</div>
      <ul className="hidden md:flex w-full md:justify-end space-x-5 items-center ">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li className="buttons px-2 space-x-4">
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "outline" })}
          >
            Login
          </Link>
          <Link
            href={"/signup"}
            className={buttonVariants({ variant: "outline" })}
          >
            Sign Up
          </Link>
        </li>
      </ul>

      <div className="flex gap-4 items-center">
        <ModeToggle />
        <Sheet>
          <SheetTrigger>
            <Menu className="size-8 md:hidden" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
