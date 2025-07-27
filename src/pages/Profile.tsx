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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GrGroup } from "react-icons/gr";
import { MdOutlineLeaderboard } from "react-icons/md";
import { cn } from "@/lib/utils";
import {
  BellRing,
  MessageSquare,
  Edit,
  Github,
  Globe,
  GraduationCap,
  Briefcase,
  X,
  Share,
  Trophy,
  UserX,
  Trash2,
  MessageSquareMore,
  SettingsIcon as IconSettings,
  Check,
} from "lucide-react";
import { Logo, NotisCard } from "./Home";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileProjects } from "@/components/profileComponents/Projects";
import { ProjectIdeas } from "@/components/profileComponents/Ideas";
import { ProfileThoughts } from "@/components/profileComponents/Thoughts";

interface Skill {
  name: string;
  level: "Expert" | "Intermediate" | "Beginner";
}

export default function Profile() {
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
        "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <Logo />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}

              {/* Settings Dropdown */}

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
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
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
      <ProfileDashboard />
    </div>
  );
}

const ProfileDashboard = () => {
  const [skills, setSkills] = useState<Skill[]>([
    { name: "dart", level: "Expert" },
    { name: "flutter", level: "Expert" },
    { name: "android", level: "Expert" },
    { name: "java", level: "Expert" },
    { name: "firebase", level: "Expert" },
    { name: "swift", level: "Intermediate" },
    { name: "kotlin", level: "Intermediate" },
    { name: "javascript", level: "Intermediate" },
    { name: "git", level: "Intermediate" },
    { name: "a.i", level: "Intermediate" },
    { name: "rust", level: "Beginner" },
    { name: "ruby", level: "Beginner" },
  ]);
  const [isGitHubConnected, setIsGitHubConnected] = useState<boolean>(false);

  const [newSkill, setNewSkill] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<
    "Expert" | "Intermediate" | "Beginner"
  >("Expert");

  const addSkill = (
    skillName: string,
    level: "Expert" | "Intermediate" | "Beginner"
  ) => {
    if (skillName.trim()) {
      const levelSkills = skills.filter((skill) => skill.level === level);
      if (levelSkills.length < 5) {
        setSkills([...skills, { name: skillName.trim(), level }]);
        setNewSkill("");
      }
    }
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const getSkillsByLevel = (level: "Expert" | "Intermediate" | "Beginner") => {
    return skills.filter((skill) => skill.level === level);
  };

  return (
    <div className="flex flex-1">
      <div className="h-full w-full flex gap-2 overflow-y-auto rounded-tl-2xl bg-white p-2 md:p-4">
        <div className="w-full max-w-2xl mx-auto sm:p-3  h-[90vh] sm:h-full">
          {/* Header with Share and Settings */}
          <div className="flex justify-end items-center gap-3 mb-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-gray-800"
            >
              <Share className="w-5 h-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <IconSettings className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {/* Feedback */}
                <Sheet>
                  <SheetTrigger asChild>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      <MessageSquareMore className="w-4 h-4 mr-2" />
                      Feedback
                    </DropdownMenuItem>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-scroll z-[100] w-[100vw]">
                    <SheetHeader>
                      <SheetTitle>Send Feedback</SheetTitle>
                      <SheetDescription>
                        Help us improve by sharing your feedback
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-6 mt-6 px-4">
                      <div>
                        <Label>Title</Label>
                        <Input placeholder="Enter title" className="mt-2" />
                      </div>
                      <div>
                        <Label>Feedback</Label>
                        <Textarea
                          placeholder="Enter your feedback"
                          className="mt-2 "
                        />
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Submit
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Deactivate Account */}
                <Dialog>
                  <DialogTrigger asChild>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      <UserX className="w-4 h-4 mr-2" />
                      Deactivate Account
                    </DropdownMenuItem>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Deactivate Account</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">
                        Are you sure you want to deactivate your account? Your
                        profile will be hidden from other users, but you can
                        reactivate it anytime.
                      </p>
                      <div className="flex gap-3 justify-end">
                        <Button variant="outline">Cancel</Button>
                        <Button className="bg-red-600 hover:bg-red-700">
                          Deactivate
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Delete Account */}
                <Dialog>
                  <DialogTrigger asChild>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      <Trash2 className="w-4 h-4 mr-2 text-red-600" />
                      <span className="text-red-600">Delete Account</span>
                    </DropdownMenuItem>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Delete Account</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600">
                        This action cannot be undone. This will permanently
                        delete your account and remove all your data from our
                        servers.
                      </p>
                      <div className="flex gap-3 justify-end">
                        <Button variant="outline">Cancel</Button>
                        <Button className="bg-red-600 hover:bg-red-700">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Profile Header */}
          <div className="text-center mb-6">
            <div className="relative inline-block mb-4">
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
                  alt="Profile"
                />
                <AvatarFallback className="w-24 h-24 text-2xl font-semibold bg-blue-100 text-blue-600">
                  AP
                </AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0"
              >
                <Edit className="w-4 h-4" />
              </Button>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Apoorv Pandey</h1>
            <p className="text-gray-600">Student</p>
            <div className="flex items-center justify-center gap-4 mt-2">
              <span className="text-blue-600 text-sm">
                47 Connections | 8 Teams
              </span>
              <div className="flex items-center gap-1">
                <Trophy className="w-4 h-4 text-yellow-600" />
                <span className="text-yellow-600 font-semibold">910</span>
              </div>
            </div>

            {/* Points Badge with Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <Badge className="bg-orange-100 text-orange-800 mt-2 cursor-pointer hover:bg-orange-200">
                  Earn +500 points 🤩
                </Badge>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>How to Earn Points</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">
                          +50
                        </span>
                      </div>
                      <span className="text-sm">Complete your profile</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-semibold text-sm">
                          +100
                        </span>
                      </div>
                      <span className="text-sm">Upload a project</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold text-sm">
                          +25
                        </span>
                      </div>
                      <span className="text-sm">Share an idea</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-semibold text-sm">
                          +75
                        </span>
                      </div>
                      <span className="text-sm">Get project upvotes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-semibold text-sm">
                          +200
                        </span>
                      </div>
                      <span className="text-sm">Join a team</span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="ideas">Ideas</TabsTrigger>
              <TabsTrigger value="thoughts">Thoughts</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6">
              {/* About Me Section */}
              <Card className="py-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">About me</h3>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="w-[100vw] overflow-y-auto">
                        <SheetHeader>
                          <SheetTitle>Edit Profile</SheetTitle>
                        </SheetHeader>
                        <div className="space-y-6 mt-6 px-4">
                          <div>
                            <Label>Bio</Label>
                            <Textarea
                              placeholder="Tell us about yourself..."
                              className="mt-2"
                              defaultValue="🖥️ Passionate Software Engineer diving into the digital realm and beyond! 💻 ✨"
                            />
                            <p className="text-sm text-gray-500 mt-1">75/500</p>
                          </div>

                          <div>
                            <Label>GitHub Connection</Label>
                            <div className="flex gap-2 mt-2">
                              <Button
                                className={`flex-1 transition-all duration-200 ${
                                  isGitHubConnected
                                    ? "bg-green-600 hover:bg-green-700 text-white border-green-600"
                                    : "bg-black text-white   border-black/85 border-2"
                                }`}
                                onClick={() =>
                                  setIsGitHubConnected(!isGitHubConnected)
                                }
                              >
                                <Github className="w-4 h-4 mr-2" />
                                {isGitHubConnected
                                  ? "Connected to GitHub"
                                  : "Connect GitHub"}
                              </Button>
                            </div>
                          </div>

                          <div>
                            <Label>Phone Number</Label>
                            <div className="flex gap-2 mt-2">
                              <Input
                                defaultValue="9992897076"
                                className="flex-1"
                              />
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700 text-white"
                              >
                                <Check />
                              </Button>
                            </div>
                          </div>

                          <div>
                            <Label>Relevant Link</Label>
                            <Input
                              placeholder="https://www.link.com"
                              className="mt-2"
                            />
                          </div>

                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            Save
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Github className="w-5 h-5 text-gray-600 mt-1" />
                      <Globe className="w-5 h-5 text-gray-600 mt-1" />
                    </div>
                    <p className="text-gray-700">
                      🖥️ Passionate Software Engineer diving into the digital
                      realm and beyond! 💻 ✨
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-gray-600" />
                        <span>CDLU, 2022</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-gray-600" />
                        <span>Innovact</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills Section */}
              <Card className="py-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Skills</h3>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="w-[100vw] overflow-y-auto">
                        <SheetHeader>
                          <SheetTitle>Edit Skills</SheetTitle>
                        </SheetHeader>
                        <div className="space-y-6 mt-6 px-4">
                          {["Expert", "Intermediate", "Beginner"].map(
                            (level) => {
                              const levelSkills = getSkillsByLevel(
                                level as any
                              );
                              const maxReached = levelSkills.length >= 5;

                              return (
                                <div key={level} className="space-y-3">
                                  <div>
                                    <Label>
                                      {level === "Beginner"
                                        ? "Just started learning"
                                        : `${level} in`}{" "}
                                      ({levelSkills.length}/5)
                                    </Label>
                                    {maxReached && (
                                      <p className="text-red-500 text-sm border border-red-300 rounded p-2 mt-1">
                                        Maximum 5 skills reached for this level
                                      </p>
                                    )}
                                  </div>

                                  <div className="flex gap-2">
                                    <Input
                                      placeholder={`Enter skills like Flutter, Figma, etc.`}
                                      value={
                                        selectedLevel === level ? newSkill : ""
                                      }
                                      onChange={(e) => {
                                        setNewSkill(e.target.value);
                                        setSelectedLevel(level as any);
                                      }}
                                      onKeyPress={(e) => {
                                        if (e.key === "Enter" && !maxReached) {
                                          addSkill(newSkill, level as any);
                                        }
                                      }}
                                      disabled={maxReached}
                                    />
                                    <Button
                                      onClick={() =>
                                        addSkill(newSkill, level as any)
                                      }
                                      disabled={maxReached || !newSkill.trim()}
                                      className="bg-blue-600 hover:bg-blue-700"
                                    >
                                      Add
                                    </Button>
                                  </div>

                                  <div className="flex flex-wrap gap-2">
                                    {levelSkills.map((skill, index) => {
                                      const globalIndex = skills.findIndex(
                                        (s) =>
                                          s.name === skill.name &&
                                          s.level === skill.level
                                      );
                                      return (
                                        <div key={index} className="relative">
                                          <Badge
                                            variant="outline"
                                            className="pr-6"
                                          >
                                            {skill.name}
                                          </Badge>
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            className="absolute -top-1 -right-1 p-0 w-4 h-4 bg-red-100 hover:bg-red-200 rounded-full"
                                            onClick={() =>
                                              removeSkill(globalIndex)
                                            }
                                          >
                                            <X className="h-3 w-3 text-red-600" />
                                          </Button>
                                        </div>
                                      );
                                    })}
                                  </div>

                                  <p className="text-sm text-gray-500">
                                    Do not separate keywords by comma, hit enter
                                    to add each keyword
                                  </p>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>

                  <div className="space-y-6">
                    {["Expert", "Intermediate", "Beginner"].map((level) => {
                      const levelSkills = getSkillsByLevel(level as any);
                      if (levelSkills.length === 0) return null;

                      return (
                        <div key={level}>
                          <h4 className="font-medium mb-2">{level}</h4>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{
                                width: `${(levelSkills.length / 5) * 100}%`,
                              }}
                            />
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {levelSkills.map((skill, index) => (
                              <Badge key={index} variant="outline">
                                {skill.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Area of Interest */}
              <Card className="py-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Area of Interest
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "artificial intelligence",
                      "software development",
                      "marketing",
                      "startup",
                      "graphic design",
                    ].map((interest, index) => (
                      <Badge key={index} variant="outline">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects" className="space-y-4">
              <ProfileProjects />
            </TabsContent>

            <TabsContent value="ideas" className="space-y-4">
              <ProjectIdeas />
            </TabsContent>

            <TabsContent value="thoughts" className="space-y-4">
              <ProfileThoughts />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
