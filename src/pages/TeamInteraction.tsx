/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState } from "react";
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
import {
  BellRing,
  MessageSquare,
  Flame,
  Puzzle,
  Rocket,
  Target,
  ArrowLeft,
  Send,
  MessageCircle,
  Crown,
  MoreHorizontal,
  UserX,
  Upload,
  Check,
  X,
} from "lucide-react";
import { Logo, LogoIcon, NotisCard } from "./Home";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type ProjectStatus =
  | "completed"
  | "just-started"
  | "in-progress"
  | "near-completion";

// type IdeaStatus = "ideation" | "prototype" | "mvp" | "scaling";

const projectStatuses = [
  {
    value: "completed",
    label: "Completed",
    icon: Target,
    color: "bg-green-100 border-green-300 text-green-800",
  },
  {
    value: "just-started",
    label: "Just started",
    icon: Puzzle,
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
  },
  {
    value: "in-progress",
    label: "In progress",
    icon: Rocket,
    color: "bg-blue-100 border-blue-300 text-blue-800",
  },
  {
    value: "near-completion",
    label: "Near completion",
    icon: Flame,
    color: "bg-pink-100 border-pink-300 text-pink-800",
  },
];

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
            {open ? <Logo /> : <LogoIcon />}
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
  const [makeAdminDialogOpen, setMakeAdminDialogOpen] = useState(false);
  const [removeFromTeamDialogOpen, setRemoveFromTeamDialogOpen] =
    useState(false);

  const handleMakeAdmin = () => {
    // Handle make admin logic here
    console.log("Making user admin...");
    setMakeAdminDialogOpen(false);
  };

  const handleRemoveFromTeam = () => {
    // Handle remove from team logic here
    console.log("Removing user from team...");
    setRemoveFromTeamDialogOpen(false);
  };

  return (
    <>
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

          {/* Three dots menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4 text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem
                onClick={() => setMakeAdminDialogOpen(true)}
                className="cursor-pointer"
              >
                <Crown className="w-4 h-4 mr-2" />
                Make team Admin
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setRemoveFromTeamDialogOpen(true)}
                className="cursor-pointer text-red-600 hover:text-red-700 focus:text-red-700"
              >
                <UserX className="w-4 h-4 mr-2" />
                Remove from team
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>

      {/* Make Admin Confirmation Dialog */}
      <AlertDialog
        open={makeAdminDialogOpen}
        onOpenChange={setMakeAdminDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Make Team Admin</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to make Dhanashri Bhavsar a team admin? They
              will have full access to manage team members and settings.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleMakeAdmin}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Make Admin
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Remove from Team Confirmation Dialog */}
      <AlertDialog
        open={removeFromTeamDialogOpen}
        onOpenChange={setRemoveFromTeamDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove from Team</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove Dhanashri Bhavsar from the team?
              This action cannot be undone and they will lose access to all team
              resources.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleRemoveFromTeam}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Remove from Team
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const DocumentsComponent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any>([]);
  const fileInputRef = useRef<any>(null);

  const handleFileUpload = (event: any) => {
    const files = event.target.files;
    if (files) {
      processFiles(files);
    }
  };

  const processFiles = (files: any) => {
    const fileArray = Array.from(files);
    console.log("Files selected:", fileArray);

    // Add files to the uploaded files list
    const newFiles = fileArray.map((file: any) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      id: Date.now() + Math.random(),
    }));

    setUploadedFiles((prev: any) => [...prev, ...newFiles]);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processFiles(files);
    }
  };

  const handleCardClick = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes: any) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const removeFile = (fileId: any) => {
    setUploadedFiles((prev: any) =>
      prev.filter((file: any) => file.id !== fileId)
    );
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <Card
        className={`border-2 border-dashed transition-all duration-200 cursor-pointer ${
          isDragging
            ? "border-blue-500 bg-blue-50/70"
            : "border-blue-300 bg-blue-50/30 hover:bg-blue-50/50"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleCardClick}
      >
        <div className="p-8 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${
                isDragging ? "bg-blue-200" : "bg-blue-100"
              }`}
            >
              <Upload
                className={`w-8 h-8 transition-colors ${
                  isDragging ? "text-blue-700" : "text-blue-600"
                }`}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-blue-600 mb-1">
                {isDragging ? "Drop files here" : "Add attachment"}
              </h3>
              <p className="text-sm text-gray-600">
                {isDragging
                  ? "Release to upload"
                  : "Drag & drop files here or click to browse"}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Upload any document up to 1GB
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
              accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.figma"
            />
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <label htmlFor="file-upload" className="cursor-pointer">
                Choose Files
              </label>
            </Button>
          </div>
        </div>
      </Card>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <Card className="p-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Uploaded Files
          </h4>
          <div className="space-y-2">
            {uploadedFiles.map((file: any) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <Upload className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* No documents message - only show when no files uploaded */}
      {uploadedFiles.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No documents available</p>
        </div>
      )}
    </div>
  );
};

const RequestCard = () => {
  const [rejectDialogOpen, setRejectDialogOpen] = useState(false);

  const handleAccept = () => {
    console.log("Request accepted");
  };

  const handleReject = () => {
    console.log("Request rejected");
    setRejectDialogOpen(false);
  };

  return (
    <>
      <Card className="min-w-full mx-auto p-2 sm:p-4 border-0 border-b border-gray-200 rounded-none bg-white hover:bg-blue-100/40 shadow-none">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-3 flex-1">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="S Harshit Sai"
              />
              <AvatarFallback className="bg-gray-200 text-gray-600">
                HS
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 truncate text-base">
                S Harshit Sai
              </h3>
              <p className="text-sm text-gray-500 truncate w-[20vw]">
                Flutter developer
              </p>
            </div>
          </div>

          {/* Accept/Reject buttons */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 p-0 rounded-full border border-red-300 hover:bg-red-50 text-red-600 hover:text-red-700"
              onClick={() => setRejectDialogOpen(true)}
            >
              <X className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 p-0 rounded-full border border-green-300 hover:bg-green-50 text-green-600 hover:text-green-700"
              onClick={handleAccept}
            >
              <Check className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Reject Confirmation Dialog */}
      <AlertDialog open={rejectDialogOpen} onOpenChange={setRejectDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reject Request</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to reject S Harshit Sai's request to join
              the team? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleReject}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Reject Request
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const ChatInterface = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col h-full mx-auto">
      {/* Header with Avatar and Name */}
      <div className="flex items-center p-4 border-b border-border">
        <button className="sm:hidden mr-3 p-1 rounded-full hover:bg-accent transition-colors duration-200 hidden ">
          <ArrowLeft size={20} className="text-muted-foreground" />
        </button>
        <div className="flex items-center space-x-3 flex-1">
          {/* <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108755-2616b2e7cc9a?w=150&h=150&fit=crop&crop=face"
              alt="Team Chat"
            />
            <AvatarFallback className="bg-gray-200 text-gray-600">
              TC
            </AvatarFallback>
          </Avatar> */}
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate text-base">
              Team Chat
            </h3>
            {/* <p className="text-sm truncate w-[20vw] text-green-500">
              5 members online
            </p> */}
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Another person's message */}
        <div className="flex justify-start">
          <div className="max-w-xs">
            <p className="text-xs font-medium text-gray-600 mb-1 ml-1">
              Alex Rivera
            </p>
            <div className="px-4 py-2 rounded-2xl rounded-bl-md bg-muted text-foreground">
              <p className="text-sm">
                Good morning everyone! Ready for the meeting?
              </p>
              <p className="text-xs mt-1 text-muted-foreground">10:31 AM</p>
            </div>
          </div>
        </div>

        {/* My message */}
        <div className="flex justify-end">
          <div className="max-w-xs">
            <p className="text-xs font-medium text-gray-600 mb-1 mr-1 text-right">
              You
            </p>
            <div className="px-4 py-2 rounded-2xl rounded-br-md bg-blue-600 text-white">
              <p className="text-sm">I'm doing great! Thanks for asking.</p>
              <p className="text-xs mt-1 text-blue-100">10:32 AM</p>
            </div>
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

const TeamHeader = () => {
  const [projectStatus, setProjectStatus] =
    useState<ProjectStatus>("just-started");
  const [showFullDescription, setShowFullDescription] = useState(false);

  const fullDescription =
    "Problem: When you are busy and you have to get your vehicle serviced, it becomes a hassle to find a reliable service center, book an appointment, and track the progress of your vehicle.";
  const truncatedDescription =
    "Problem: When you are busy and you have to get you...";

  return (
    <div className="w-full  mx-auto space-y-6 mb-6">
      {/* Project Header */}
      <div className="flex items-start gap-4">
        {/* Team Icon */}
        {/* <div className="sm:flex-shrink-0 hidden ">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
        </div> */}

        {/* Project Info */}
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-semibold text-gray-900 mb-2">
            Creating an App for your vehicle service team
          </h1>

          <div className="mb-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              {showFullDescription ? fullDescription : truncatedDescription}
            </p>
            <button
              className="text-blue-600 text-sm font-medium mt-1 hover:underline"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? "Show less" : "Read more"}
            </button>
          </div>

          {/* Status Dropdown */}
          <Select
            value={projectStatus}
            onValueChange={(value: ProjectStatus) => setProjectStatus(value)}
          >
            <SelectTrigger className="w-fit bg-gray-100 border-gray-200">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {projectStatuses.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  <div className="flex items-center gap-2">
                    <status.icon className="w-4 h-4" />
                    {status.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-1">
      <div className="h-full w-full flex gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-4 dark:border-neutral-700 dark:bg-neutral-900">
        <div className=" flex-1/2 sm:p-3 overflow-y-auto h-[90vh] sm:h-full">
          {/* Breadcrumbs */}
          <Breadcrumb className="sm:mb-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/teams">Teams</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/teams/123">Team</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Sheet open={open} onOpenChange={() => setOpen(!open)}>
            <SheetTrigger asChild>
              <div className="md:hidden justify-end flex relative mb-3">
                <Badge
                  variant={"outline"}
                  className="h-10 min-w-10  rounded-full px-1 font-mono tabular-nums"
                >
                  <MessageCircle className="h-20 w-20 " />
                </Badge>
                <div className="bg-red-600 size-2 rounded-4xl absolute " />
              </div>
            </SheetTrigger>

            <SheetContent className="w-[100vw] ">
              <SheetHeader>
                <div className="flex items-center p-4 border-b border-border">
                  <button className="sm:hidden mr-3 p-1 rounded-full hover:bg-accent transition-colors duration-200 hidden ">
                    <ArrowLeft size={20} className="text-muted-foreground" />
                  </button>
                  <div className="flex items-center space-x-3 flex-1">
                    {/* <Avatar className="h-12 w-12">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1494790108755-2616b2e7cc9a?w=150&h=150&fit=crop&crop=face"
                          alt="Dhanashri Bhavsar"
                        />
                        <AvatarFallback className="bg-gray-200 text-gray-600">
                          DB
                        </AvatarFallback>
                      </Avatar> */}

                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate text-base">
                        Team Chat
                      </h3>
                      {/* <p className="text-sm  truncate w-[20vw] text-green-500">
                          Online
                        </p> */}
                    </div>
                  </div>
                </div>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Another person's message */}
                <div className="flex justify-start">
                  <div className="max-w-xs">
                    <p className="text-xs font-medium text-gray-600 mb-1 ml-1">
                      Alex Rivera
                    </p>
                    <div className="px-4 py-2 rounded-2xl rounded-bl-md bg-muted text-foreground">
                      <p className="text-sm">
                        Good morning everyone! Ready for the meeting?
                      </p>
                      <p className="text-xs mt-1 text-muted-foreground">
                        10:31 AM
                      </p>
                    </div>
                  </div>
                </div>

                {/* My message */}
                <div className="flex justify-end">
                  <div className="max-w-xs">
                    <p className="text-xs font-medium text-gray-600 mb-1 mr-1 text-right">
                      You
                    </p>
                    <div className="px-4 py-2 rounded-2xl rounded-br-md bg-blue-600 text-white">
                      <p className="text-sm">
                        I'm doing great! Thanks for asking.
                      </p>
                      <p className="text-xs mt-1 text-blue-100">10:32 AM</p>
                    </div>
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

          {/* Here */}
          <TeamHeader />

          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="account">Members</TabsTrigger>
              <TabsTrigger value="password">Documents</TabsTrigger>
              <TabsTrigger value="request">Requests</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <ConnCard />
            </TabsContent>
            <TabsContent value="password">
              <DocumentsComponent />
            </TabsContent>
            <TabsContent value="request">
              <RequestCard />
            </TabsContent>
          </Tabs>

          <div className="flex flex-1 flex-col gap-4 items-center mt-8 ">
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
