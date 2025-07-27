/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { BellRing, MessageSquare, ChevronRight, Users } from "lucide-react";
import { Logo, NotisCard } from "./Home";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

// type ProjectStatus =
//   | "completed"
//   | "just-started"
//   | "in-progress"
//   | "near-completion";

// type IdeaStatus = "ideation" | "prototype" | "mvp" | "scaling";

// const projectStatuses = [
//   {
//     value: "completed",
//     label: "Completed",
//     icon: Target,
//     color: "bg-green-100 border-green-300 text-green-800",
//   },
//   {
//     value: "just-started",
//     label: "Just started",
//     icon: Puzzle,
//     color: "bg-yellow-100 border-yellow-300 text-yellow-800",
//   },
//   {
//     value: "in-progress",
//     label: "In progress",
//     icon: Rocket,
//     color: "bg-blue-100 border-blue-300 text-blue-800",
//   },
//   {
//     value: "near-completion",
//     label: "Near completion",
//     icon: Flame,
//     color: "bg-pink-100 border-pink-300 text-pink-800",
//   },
// ];

// const ideaStatuses = [
//   {
//     value: "ideation",
//     label: "Ideation",
//     icon: Target,
//     color: "bg-green-100 border-green-300 text-green-800",
//   },
//   {
//     value: "prototype",
//     label: "Prototype",
//     icon: Puzzle,
//     color: "bg-yellow-100 border-yellow-300 text-yellow-800",
//   },
//   {
//     value: "mvp",
//     label: "MVP",
//     icon: Rocket,
//     color: "bg-blue-100 border-blue-300 text-blue-800",
//   },
//   {
//     value: "scaling",
//     label: "Scaling",
//     icon: Flame,
//     color: "bg-pink-100 border-pink-300 text-pink-800",
//   },
// ];

export default function Teams() {
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

function ProjectCard() {
  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer py-2">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          {/* Team Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Team Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 mb-2">
              Creating an App for your vehicle service team
            </h3>

            <div className="mb-3">
              <Badge className="bg-yellow-100 border-yellow-300 text-yellow-800 px-2 py-1 text-xs">
                Status: Just Started
              </Badge>
            </div>

            {/* Team Members */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
                  alt="Member"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                  alt="Member"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                  alt="Member"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              </div>
              <span className="text-sm text-gray-500 ml-2">3 members</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function IdeaCard() {
  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer py-2">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          {/* Team Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Team Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 mb-2">
              Smart Flood Prevention and Early Warning System team
            </h3>

            <div className="mb-3">
              <Badge className="bg-yellow-100 border-yellow-300 text-yellow-800 px-2 py-1 text-xs">
                Status: Prototype
              </Badge>
            </div>

            {/* Team Members */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Member"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                  alt="Member"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              </div>
              <span className="text-sm text-gray-500 ml-2">2 members</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="h-full w-full flex gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-4 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="w-full max-w-2xl mx-auto sm:p-3 overflow-y-auto h-[90vh] sm:h-full">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/teams">Teams</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Teams Cards */}
          <div className="space-y-4">
            {/* Project Team Card */}
            <ProjectCard />

            {/* Ideas Team Card */}
            <IdeaCard />
          </div>
        </div>
      </div>
    </div>
  );
};
