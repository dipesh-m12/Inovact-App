/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { BellRing, MessageSquare } from "lucide-react";
import { Logo, NotisCard } from "./Home";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export default function Leaderboard() {
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
      href: "/connections",
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
      href: "#",
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
            {/* LogoIcon */}
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

function LeaderboardCard() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
            1
          </div>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-medium text-gray-900">Apoorv Pandey</h4>
            <p className="text-sm text-gray-500">1,250 points</p>
          </div>
        </div>
        <div className="text-yellow-500">👑</div>
      </div>
    </Card>
  );
}

function HistoryCard() {
  return (
    <>
      {/* <div className="text-right">
                        <p className="font-semibold text-gray-900">50 coins</p>
                        <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                          Earned
                        </span>
                      </div> */}
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-1">
              Project Deleted
            </h4>
            <p className="text-sm text-gray-600 mb-2">Project deleted</p>
            <p className="text-xs text-blue-500">5 days ago</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-900">50 coins</p>
            <span className="inline-block px-2 py-1 text-xs rounded bg-red-100 text-red-800">
              Deducted
            </span>
          </div>
        </div>
      </Card>
    </>
  );
}

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className=" h-full w-full flex   gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-4 dark:border-neutral-700 dark:bg-neutral-900">
        <div className=" flex-1/2 sm:p-3 overflow-y-auto h-[90vh] sm:h-full">
          <div className="space-y-6 max-w-2xl mx-auto">
            {/* Header with Points */}
            <div className="flex items-center justify-between">
              <h1 className="text-lg sm:text-2xl font-semibold text-gray-900">
                Leaderboard
              </h1>
              <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                <span className="text-lg">🪙</span>
                <span className="font-bold">910</span>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="leaderboard" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                <TabsTrigger value="history">Points History</TabsTrigger>
              </TabsList>

              <TabsContent value="leaderboard" className="mt-6">
                <div className="space-y-4">
                  {/* Leaderboard Cards */}
                  <LeaderboardCard />
                </div>
              </TabsContent>

              <TabsContent value="history" className="mt-6">
                <div className="space-y-4">
                  {/* History Cards */}
                  <HistoryCard />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
