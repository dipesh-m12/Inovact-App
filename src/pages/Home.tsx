"use client";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconBriefcase,
  IconBulb,
  IconMessage,
  IconPlus,
  IconStar,
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
import { Cover } from "@/components/ui/cover";
import {
  BellRing,
  Eye,
  MessageSquare,
  TrendingUp,
  Triangle,
  Users,
} from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import GooeyNav from "@/components/react-bits/GooeyNav";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Ideas } from "@/components/homeComponents/Ideas";
import { Thoughts } from "@/components/homeComponents/Thoughts";
import Opportunitiy from "@/components/homeComponents/Opportunity";
import { MyProjects } from "@/components/homeComponents/MyProjects";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/components/homeComponents/Project";
import { Button } from "@/components/ui/button";

type Components =
  | "projects"
  | "ideas"
  | "thoughts"
  | "opportunity"
  | "myprojects";

export default function Home() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
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

export const Logo = () => {
  return (
    <Cover className="">
      <a
        href="#"
        className="relative  z-20 flex items-center space-x-2 py-1  font-bold text-2xl whitespace-pre text-blue-800 dark:text-white"
      >
        {/* <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" /> */}
        Inovact
      </a>
    </Cover>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 mt-2 text-sm font-normal text-black"
    >
      {/* <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" /> */}
      <div className="font-bold text-base text-blue-800 sm:text-3xl">In</div>
    </a>
  );
};

export const NotisCard = () => {
  return (
    <Card className="min-w-full mx-auto p-2 sm:p-4 border-0 border-b border-gray-200 rounded-none bg-white shadow-none">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3 flex-1">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
              alt="Adah Aggarwal"
            />
            <AvatarFallback className="bg-gray-200 text-gray-600">
              AA
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0 ">
            <p className="text-sm text-gray-500 truncate text-wrap ">Student</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
export function TrendingSidebar() {
  const trendingProjects = [
    { name: "BuildWithAI", count: 20, icon: Triangle, color: "text-blue-600" },
    { name: "FinTrack", count: 12, icon: TrendingUp, color: "text-green-600" },
    { name: "GameVerse", count: 8, icon: Users, color: "text-purple-600" },
  ];

  const suggestedConnections = [
    {
      name: "Ankita",
      role: "Mentor",
      initial: "A",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
    },
    {
      name: "Rahul",
      role: "Entrepreneur",
      initial: "R",
      color:
        "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
    },
    {
      name: "Jiya",
      role: "Student",
      initial: "J",
      color:
        "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
    },
  ];

  return (
    <section className="hidden lg:block col-span-3">
      <div className="space-y-4">
        {/* Trending Projects Card */}
        <Card className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 rounded-lg">
          <CardHeader className="p-4 pb-3">
            <CardTitle className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Trending Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="space-y-3">
              {trendingProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between group hover:bg-neutral-50 dark:hover:bg-neutral-800 p-2 -m-2 rounded-md transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-6 h-6 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center ${project.color}`}
                    >
                      <project.icon size={12} />
                    </div>
                    <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {project.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Triangle
                      size={12}
                      className="text-neutral-400 fill-current"
                    />
                    <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                      {project.count}
                    </span>
                    <Eye size={12} className="text-neutral-400 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Suggested Connections Card */}
        <Card className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 rounded-lg">
          <CardHeader className="p-4 pb-3">
            <CardTitle className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Suggested Connections
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="space-y-3">
              {suggestedConnections.map((connection, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${connection.color}`}
                    >
                      {connection.initial}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        {connection.name}
                      </span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {connection.role}
                      </span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs h-7 px-3 text-blue-600 border-blue-200 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-800 dark:hover:bg-blue-950"
                  >
                    Connect
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// Dummy dashboard component with content
const Dashboard = () => {
  const links = [
    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: () => setComponent("projects"),
    },
    {
      title: "Ideas",
      icon: (
        <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: () => setComponent("ideas"),
    },
    {
      title: "Thoughts",
      icon: (
        <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: () => setComponent("thoughts"),
    },
    {
      title: "Opportunity",
      icon: (
        <IconStar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: () => setComponent("opportunity"),
    },
    {
      title: "My Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: () => setComponent("myprojects"),
    },
  ];
  const items = [
    { label: "Projects", onClick: () => setComponent("projects") },
    { label: "Ideas", onClick: () => setComponent("ideas") },
    { label: "Thoughts", onClick: () => setComponent("thoughts") },
    { label: "Opportunity", onClick: () => setComponent("opportunity") },
    { label: "My Projects", onClick: () => setComponent("myprojects") },
  ];
  const placeholders = [
    "Internships & Jobs",
    "Who is Sarang Pani?",
    "I am looking for collaboration",
    "Need a team",
    "How to create MCP server?",
  ];

  const [component, setComponent] = useState<Components>("projects");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-1">
      <div className="h-screen md:grid grid-cols-12  sm:h-full w-full  overflow-y-scroll gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 pb-12 md:pb-8 md:p-4 dark:border-neutral-700 dark:bg-neutral-900">
        <section className="col-span-12 lg:col-span-9 lg:border-r-2 ">
          <nav>
            <div className="md:hidden absolute bottom-6 right-6 z-50 ">
              <FloatingDock items={links} />
            </div>
            <div className="hidden md:flex flex-wrap justify-center items-center  gap-x-4 gap-y-2 mb-4">
              <GooeyNav
                items={items}
                particleCount={40}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={0}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              />
              <div className="">
                <PlaceholdersAndVanishInput
                  placeholders={placeholders}
                  onChange={(e) => console.log(e.target.value)}
                  onSubmit={onSubmit}
                />
              </div>
            </div>
          </nav>
          {/* Search */}
          <div className="my-4 md:hidden justify-end flex relative  gap-2">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={(e) => console.log(e.target.value)}
              onSubmit={onSubmit}
            />
            <Sheet>
              <SheetTrigger asChild>
                <div className="relative flex">
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
          </div>
          {/* Card */}
          {component == "projects" && <Project />}
          {component == "ideas" && <Ideas />}
          {component == "thoughts" && <Thoughts />}
          {component == "opportunity" && <Opportunitiy />}
          {component == "myprojects" && <MyProjects />}
        </section>
        <TrendingSidebar />
      </div>
    </div>
  );
};
