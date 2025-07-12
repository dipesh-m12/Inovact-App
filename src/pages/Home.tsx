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
import { BellRing, MessageSquare } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import GooeyNav from "@/components/react-bits/GooeyNav";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Ideas } from "@/components/homeComponents/Ideas";
import { Thoughts } from "@/components/homeComponents/Thoughts";
import Opportunity from "@/components/homeComponents/Opportunity";
import { MyProjects } from "@/components/homeComponents/MyProjects";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/components/homeComponents/Project";

// Define types
type Components = "projects" | "ideas" | "thoughts" | "opportunity" | "myprojects";

type SidebarLink = {
  title: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  onClick?: () => void;
};

type NavItem = {
  label: string;
  onClick: () => void;
};

export default function Home() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Connections",
      href: "/connections",
      icon: <IconWorld className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Add",
      href: "/add",
      icon: <IconPlus className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Teams",
      href: "/teams",
      icon: <GrGroup className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Chats",
      href: "/chats",
      icon: <MessageSquare className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: <IconUserCircle className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Leaderboard",
      href: "/leaderboard",
      icon: <MdOutlineLeaderboard className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
    },
  ];

  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 z-10 h-screen w-20 md:w-64">
        <div className={cn("h-full border-r border-neutral-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800")}>
          <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="flex flex-col justify-between gap-10 h-full">
              <div className="flex flex-col">
                {open ? <Logo /> : <LogoIcon />}
                <div className="mt-8 flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link} />
                  ))}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <SidebarLink
                        link={{
                          label: "Logout",
                          href: "#",
                          icon: <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
                        }}
                      />
                    </AlertDialogTrigger>
                    <AlertDialogContent className="z-[100]">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
                        <AlertDialogDescription>You will be signed out of your account and redirected to the login page.</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white">Logout</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
              <div className="mb-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <SidebarLink
                      link={{
                        label: "Notifications",
                        href: "#",
                        icon: <BellRing className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
                      }}
                    />
                  </SheetTrigger>
                  <SheetContent className="overflow-y-scroll z-[100] w-[100vw]">
                    <SheetHeader>
                      <SheetTitle>Notifications</SheetTitle>
                      <SheetDescription>You will see your updates here.</SheetDescription>
                    </SheetHeader>
                    <div className="grid flex-1 auto-rows-min gap-6 px-4">
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
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pl-20 md:pl-64">
        <Dashboard />
      </div>
    </div>
  );
}

// Logo components
export const Logo = () => (
  <Cover>
    <a href="#" className="relative z-20 flex items-center space-x-2 py-1 font-bold text-2xl text-blue-800 dark:text-white">
      Inovact
    </a>
  </Cover>
);

export const LogoIcon = () => (
  <a href="#" className="relative z-20 flex items-center space-x-2 py-1 mt-2 text-sm font-normal text-black">
    <div className="font-bold text-base text-blue-800 sm:text-3xl">In</div>
  </a>
);

// Notification preview
export const NotisCard = () => (
  <Card className="min-w-full mx-auto p-2 sm:p-4 border-0 border-b border-gray-200 rounded-none bg-white shadow-none">
    <div className="flex items-center space-x-3">
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" />
        <AvatarFallback className="bg-gray-200 text-gray-600">AA</AvatarFallback>
      </Avatar>
      <p className="text-sm text-gray-500">Student</p>
    </div>
  </Card>
);

// Dashboard with trending sidebar
const Dashboard = () => {
  const [component, setComponent] = useState<Components>("projects");

  const items: NavItem[] = [
    { label: "Projects", onClick: () => setComponent("projects") },
    { label: "Ideas", onClick: () => setComponent("ideas") },
    { label: "Thoughts", onClick: () => setComponent("thoughts") },
    { label: "Opportunity", onClick: () => setComponent("opportunity") },
    { label: "My Projects", onClick: () => setComponent("myprojects") },
  ];

  const links: SidebarLink[] = items.map((item) => ({
    title: item.label,
    label: item.label,
    href: "#",
    icon: <div className="text-neutral-500 dark:text-neutral-300">{item.label}</div>,
    onClick: item.onClick,
  }));

  const placeholders = [
    "Internships & Jobs",
    "Who is Sarang Pani?",
    "I am looking for collaboration",
    "Need a team",
    "How to create MCP server?",
  ];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="h-full w-full overflow-y-scroll gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 pb-12 md:pb-8 md:p-4 dark:border-neutral-700 dark:bg-neutral-900 flex">
        <div className="flex-1 pr-6 pt-6">
          <nav className="flex flex-col md:flex-row justify-center items-center gap-4 w-full mb-8">
            <div className="flex justify-center">
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
            </div>
            <div className="flex justify-center w-full md:w-64">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}
                onSubmit={onSubmit}
              />
            </div>
          </nav>

          <div className="md:hidden absolute bottom-6 right-6 z-50">
            <FloatingDock items={links} />
          </div>

          {component === "projects" && <Project />}
          {component === "ideas" && <Ideas />}
          {component === "thoughts" && <Thoughts />}
          {component === "opportunity" && <Opportunity />}
          {component === "myprojects" && <MyProjects />}
        </div>

        {/* Right Sidebar */}
        <aside className="hidden lg:block w-80 pl-4 border-l border-neutral-200 dark:border-neutral-700">
          <div className="sticky top-4 space-y-6">
            <Card className="p-4">
              <h3 className="text-md font-semibold mb-2">🔥 Trending Projects</h3>
              <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-2">
                <li>🔗 BuildWithAI – 20 upvotes</li>
                <li>📊 FinTrack – Real-time finance tracker</li>
                <li>🎮 GameVerse – Multiplayer Web3 Game</li>
              </ul>
            </Card>

            <Card className="p-4">
              <h3 className="text-md font-semibold mb-2">🤝 Suggested Connections</h3>
              <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-3">
                <li className="flex items-center justify-between">
                  <span>Ankita, UI Designer</span>
                  <button className="text-blue-600 text-xs hover:underline">Connect</button>
                </li>
                <li className="flex items-center justify-between">
                  <span>Rahul, ML Engineer</span>
                  <button className="text-blue-600 text-xs hover:underline">Connect</button>
                </li>
                <li className="flex items-center justify-between">
                  <span>Jiya, HR Tech Founder</span>
                  <button className="text-blue-600 text-xs hover:underline">Connect</button>
                </li>
              </ul>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
};
