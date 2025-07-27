"use client";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconPlus,
  IconUserCircle,
  IconWorld,
} from "@tabler/icons-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { GrGroup } from "react-icons/gr";
import { MdOutlineLeaderboard } from "react-icons/md";
import { cn } from "@/lib/utils";
import { BellRing, Check, MessageSquare, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo, NotisCard } from "./Home";

export default function Home() {
  const links = [
    {
      label: "Dashboard",
      href: "/home",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Connections",
      href: "#",
      icon: (
        <IconWorld className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Add",
      href: "/add",
      icon: (
        <IconPlus className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Teams",
      href: "/teams",
      icon: (
        <GrGroup className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Chats",
      href: "/chats",
      icon: (
        <MessageSquare className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserCircle className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Leaderboard",
      href: "/leaderboard",
      icon: (
        <MdOutlineLeaderboard className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-full  flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1  flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <Logo />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <SidebarLink
                    key="Logout"
                    link={{
                      label: "Logout",
                      href: "#",
                      icon: (
                        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
                      ),
                    }}
                  />
                </AlertDialogTrigger>
                <AlertDialogContent className="z-[100]">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to logout?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      You will be signed out of your account and redirected to
                      the login page.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white">
                      Logout
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <div>
            <Sheet>
              <SheetTrigger asChild>
                <SidebarLink
                  link={{
                    label: "Notifications",
                    href: "#",
                    icon: (
                      <BellRing className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
                    ),
                  }}
                />
              </SheetTrigger>
              <SheetContent className="overflow-y-scroll z-[100] w-[100vw]">
                <SheetHeader>
                  <SheetTitle>Notifications</SheetTitle>
                  <SheetDescription>
                    You will see your updates here.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4 ">
                  <NotisCard />
                </div>
              </SheetContent>
            </Sheet>

            <SidebarLink
              link={{
                label: "Dipesh Mishra",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

const ConnCard = () => {
  return (
    <Card className="min-w-full mx-auto p-2 sm:p-4 border-0 border-b border-gray-200 rounded-none bg-white shadow-none">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3 flex-1">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108755-2616b2e7cc9a?w=150&h=150&fit=crop&crop=face"
              alt="Dhanashri Bhavsar"
            />
            <AvatarFallback className="bg-gray-200 text-gray-600">
              DB
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate text-base">
              Dhanashri Bhavsar
            </h3>
            <p className="text-sm text-gray-500 truncate">Student</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 ml-4">
          <Button
            onClick={() => console.log(`Message Dhanashri Bhavsar`)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
          >
            Message
          </Button>
        </div>
      </div>
    </Card>
  );
};

const HisCard = () => {
  return (
    <Card className="min-w-full mx-auto p-2 sm:p-4 border-0 border-b border-gray-200 rounded-none bg-white shadow-none">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3 flex-1 relative">
          <div className="bg-red-600 size-2 rounded-4xl  absolute z-10 top-0" />
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108755-2616b2e7cc9a?w=150&h=150&fit=crop&crop=face"
              alt="Dhanashri Bhavsar"
            />
            <AvatarFallback className="bg-gray-200 text-gray-600">
              DB
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate text-base">
              Dhanashri Bhavsar
            </h3>
            <p className="text-sm text-gray-500 truncate">Student</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 ml-4">
          <Button
            onClick={() => console.log(`Accept Dhanashri Bhavsar`)}
            className="bg-gray-200 hover:bg-gray-300 text-green-600 px-4 py-2 rounded-md font-medium"
          >
            <Check className="h-5 w-5" />
          </Button>

          <Button
            onClick={() => console.log(`Decline Dhanashri Bhavsar`)}
            className="bg-gray-200 hover:bg-gray-300 text-red-600 px-4 py-2 rounded-md font-medium"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className=" h-full w-full flex  overflow-y-scroll gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-4 dark:border-neutral-700 dark:bg-neutral-900">
        <div className=" flex-1/2 sm:p-3 ">
          <Sheet>
            <SheetTrigger asChild>
              <div className="md:hidden justify-end flex relative">
                <Badge
                  variant={"outline"}
                  className="h-10 min-w-10  rounded-full px-1 font-mono tabular-nums"
                >
                  <BellRing className="h-20 w-20 " />
                </Badge>
                <div className="bg-red-600 size-2 rounded-4xl absolute " />
              </div>
            </SheetTrigger>
            <SheetContent className="overflow-y-scroll z-[100] w-[100vw]">
              <SheetHeader>
                <SheetTitle>Requests</SheetTitle>
                <SheetDescription>
                  You will see your updates here.
                </SheetDescription>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4 ">
                <HisCard />
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex w-full flex-wrap gap-2">
            <Badge variant={"outline"}>45 Connections</Badge>
            <Badge variant={"outline"}>Growth 40%</Badge>
          </div>
          <div className="flex flex-1 flex-col gap-4 items-center mt-8 ">
            <ConnCard />
            {/* <p className="text-center my-auto">Nothing here</p> */}
          </div>
        </div>
        <div className=" flex-col hidden md:flex">
          <Separator orientation="vertical" />
        </div>
        <div className="hidden md:inline-block flex-1/2 p-3">
          <div className="flex flex-1 flex-col gap-4 items-center mt-8 ">
            <HisCard />
            {/* <p className="text-center my-auto">Nothing here</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
