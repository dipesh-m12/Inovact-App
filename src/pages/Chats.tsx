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
  SheetFooter,
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
import { ArrowLeft, BellRing, MessageSquare, Search, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo, NotisCard } from "./Home";

export default function Chats() {
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
      href: "#",
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
    <Card className="min-w-full mx-auto p-2 sm:p-4 border-0 border-b border-gray-200 rounded-none bg-white hover:bg-blue-100/40 shadow-none">
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
            <p className="text-sm text-gray-500 truncate w-[20vw]">Student</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Searchbar = ({
  searchValue,
  setSearchValue,
  handleKeyPress,
  handleSearch,
}: any) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center w-full rounded-full overflow-hidden transition-all duration-400 ease-in-out bg-slate-100 dark:bg-slate-700 shadow-lg shadow-slate-500/10 dark:shadow-slate-900/30">
        {/* Input Field */}
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search connections..."
          className="w-full py-4 px-6 bg-transparent outline-none text-base transition-all duration-400 ease-in-out text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          disabled={!searchValue.trim()}
          className={`mr-2 p-3 rounded-full transition-all duration-400 ease-in-out transform ${
            searchValue.trim()
              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:scale-105 cursor-pointer"
              : "bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400 cursor-not-allowed"
          }`}
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

const ChatInterface = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col h-full  mx-auto">
      {/* Header with Avatar and Name */}
      <div className="flex items-center p-4 border-b border-border">
        <button className="sm:hidden mr-3 p-1 rounded-full hover:bg-accent transition-colors duration-200 hidden ">
          <ArrowLeft size={20} className="text-muted-foreground" />
        </button>
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
            <p className="text-sm  truncate w-[20vw] text-green-500">Online</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Other person's message */}
        <div className="flex justify-start">
          <div className="max-w-xs px-4 py-2 rounded-2xl rounded-bl-md bg-muted text-foreground">
            <p className="text-sm">Hey there! How are you doing?</p>
            <p className="text-xs mt-1 text-muted-foreground">10:30 AM</p>
          </div>
        </div>

        {/* My message */}
        <div className="flex justify-end">
          <div className="max-w-xs px-4 py-2 rounded-2xl rounded-br-md bg-blue-600 text-white">
            <p className="text-sm">I'm doing great! Thanks for asking.</p>
            <p className="text-xs mt-1 text-blue-100">10:32 AM</p>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 bg-background border border-input rounded-lg outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground transition-all duration-200"
          />
          <button
            disabled={!message.trim()}
            className={`p-2 rounded-lg transition-all duration-400 ease-in-out transform ${
              message.trim()
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:scale-105 cursor-pointer"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState("");

  const handleSearch = () => {
    if (searchValue.trim()) {
      console.log("Searching for:", searchValue);
      // Add your search logic here
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex flex-1">
      <div className=" h-full w-full flex   gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-4 dark:border-neutral-700 dark:bg-neutral-900">
        <div className=" flex-1/2 sm:p-3 overflow-y-auto h-[90vh] sm:h-full">
          {/* search and icon */}
          <Searchbar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleKeyPress={handleKeyPress}
            handleSearch={handleSearch}
          />

          <div className="flex flex-1 flex-col gap-4 items-center mt-8 ">
            {/* Mobile */}
            <div
              onClick={() => setOpen(!open)}
              className="w-full sm:hidden block"
            >
              <ConnCard />
            </div>

            {/* Desktop */}
            <div className="w-full sm:block hidden">
              <ConnCard />
            </div>

            <Sheet open={open} onOpenChange={() => setOpen(!open)}>
              <SheetContent className="w-[100vw] ">
                <SheetHeader>
                  <div className="flex items-center p-4 border-b border-border">
                    <button className="sm:hidden mr-3 p-1 rounded-full hover:bg-accent transition-colors duration-200 hidden ">
                      <ArrowLeft size={20} className="text-muted-foreground" />
                    </button>
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
                        <p className="text-sm  truncate w-[20vw] text-green-500">
                          Online
                        </p>
                      </div>
                    </div>
                  </div>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Other person's message */}
                  <div className="flex justify-start">
                    <div className="max-w-xs px-4 py-2 rounded-2xl rounded-bl-md bg-muted text-foreground">
                      <p className="text-sm">Hey there! How are you doing?</p>
                      <p className="text-xs mt-1 text-muted-foreground">
                        10:30 AM
                      </p>
                    </div>
                  </div>

                  {/* My message */}
                  <div className="flex justify-end">
                    <div className="max-w-xs px-4 py-2 rounded-2xl rounded-br-md bg-blue-600 text-white">
                      <p className="text-sm">
                        I'm doing great! Thanks for asking.
                      </p>
                      <p className="text-xs mt-1 text-blue-100">10:32 AM</p>
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <div className="p-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2 bg-background border border-input rounded-lg outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground transition-all duration-200"
                      />
                      <button
                        disabled={!message.trim()}
                        className={`p-2 rounded-lg transition-all duration-400 ease-in-out transform ${
                          message.trim()
                            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:scale-105 cursor-pointer"
                            : "bg-muted text-muted-foreground cursor-not-allowed"
                        }`}
                      >
                        <Send size={20} />
                      </button>
                    </div>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            {/* <p className="text-center my-auto">Nothing here</p> */}
          </div>
        </div>
        <Separator orientation="vertical" className="hidden md:inline-block " />
        <div className="hidden md:inline-block flex-1/2 p-3">
          {/* Desktop */}
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};
