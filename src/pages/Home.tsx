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
import { BellRing, MessageSquare, UserPlus } from "lucide-react";
import { FloatingDock } from "@/components/ui/floating-dock";
import GooeyNav from "@/components/react-bits/GooeyNav";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Share, Github, Link, Triangle, Check, Plus } from "lucide-react";
import { Ideas } from "@/components/homeComponents/Ideas";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Thoughts } from "@/components/homeComponents/Thoughts";
import Opportunity from "@/components/homeComponents/Opportunity";
import { MyProjects } from "@/components/homeComponents/MyProjects";
import { Project } from "@/components/homeComponents/Project";

// Define types
type Components = "projects" | "ideas" | "thoughts" | "opportunity" | "myprojects";

type ProjectStatus = 'just-started' | 'in-progress' | 'near-completion' | 'completed';

interface ProjectCardProps {
  title: string;
  user: string;
  role: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  upvotes: number;
  comments: number;
  roles?: {
    role: string;
    skills: string[];
  }[];
}

const statusConfig = {
  'just-started': { label: 'Just Started', color: 'bg-blue-600 text-white' },
  'in-progress': { label: 'In Progress', color: 'bg-orange-600 text-white' },
  'near-completion': { label: 'Near Completion', color: 'bg-yellow-600 text-white' },
  'completed': { label: 'Completed', color: 'bg-green-600 text-white' },
};

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

const ProjectCard = ({ title, user, role, status, description, tags, upvotes, comments, roles = [] }: ProjectCardProps) => {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [joinTeamModalOpen, setJoinTeamModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const truncatedDescription = description.length > 150 ? `${description.substring(0, 150)}...` : description;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
        <CardContent className="p-4 sm:p-6">
          {/* Header with Avatar and User Info */}
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
              <AvatarFallback className="bg-blue-100 text-blue-800 text-sm">
                {user.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-sm sm:text-base text-gray-900">{user}</h3>
              <p className="text-xs text-gray-500">{role}</p>
            </div>
          </div>

        {/* Project Status Badge */}
        <div className="mb-3">
          <Badge className={`${statusConfig[status].color} px-2.5 py-0.5 text-xs`}>
            {statusConfig[status].label}
          </Badge>
        </div>

        {/* Project Title */}
        <h2 className="text-lg font-semibold text-gray-900 mb-3">{title}</h2>

        {/* Project Description */}
        <div className="mb-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            {showFullDescription ? description : truncatedDescription}
          </p>
          {description.length > 150 && (
            <button
              className="text-blue-600 text-sm font-medium mt-1 hover:underline"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-gray-600 border-gray-300 bg-gray-50 text-xs px-2.5 py-0.5">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsUpvoted(!isUpvoted)}
              className={`flex items-center gap-2 transition-colors ${isUpvoted ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              <Triangle
                className={`w-5 h-5 ${isUpvoted ? 'fill-blue-600 text-blue-600' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
              />
              <span className="text-sm font-medium">{isUpvoted ? upvotes + 1 : upvotes}</span>
            </button>

            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">{comments}</span>
            </button>

            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              <Share className="w-5 h-5" />
            </button>

            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              <Link className="w-5 h-5" />
            </button>

            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="w-5 h-5" />
            </button>
          </div>

          <Button
            variant="default"
            onClick={() => setJoinTeamModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            <span>Join Team</span>
          </Button>
        </div>
      </CardContent>
      </Card>
      
      {/* Join Team Modal */}
      <Dialog open={joinTeamModalOpen} onOpenChange={setJoinTeamModalOpen}>
        <DialogContent className="w-full max-w-[95vw] sm:max-w-lg bg-white px-2 sm:px-6 py-4 overflow-y-auto" style={{ maxHeight: '90vh' }}>
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Join team as a...
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3 py-4 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
            {roles.map((roleObj, index) => (
              <div
                key={index}
                onClick={() => setSelectedRole(index)}
                className={`flex flex-col gap-2 p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedRole === index
                    ? "bg-blue-50 border border-blue-200"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedRole === index
                        ? "bg-green-500 border-green-500"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedRole === index ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-1 w-full break-words">
                    <span className="text-sm font-medium text-gray-900">{roleObj.role}</span>
                    <span className="text-sm text-gray-700">-{roleObj.skills?.slice(0, 2).join(', ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={() => setJoinTeamModalOpen(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              Cancel
            </Button>
            <Button
              className={`bg-blue-600 hover:bg-blue-700 text-white ${
                selectedRole === null ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={selectedRole === null}
              onClick={() => {
                // Handle join team logic here
                setJoinTeamModalOpen(false);
              }}
            >
              Send Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
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
    "Search by Name",
    "Search by Skill",
    "Search by Interest",
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

          {component === "projects" && (
            <div className="space-y-6">
              <Project />
              <ProjectCard 
                title="EcoTrack - Carbon Footprint Tracker"
                user="Sarah Johnson"
                role="UI/UX Designer"
                status="in-progress"
                description="A mobile app that helps users track and reduce their carbon footprint through daily activities, transportation choices, and consumption habits. Features include real-time CO2 impact visualization, personalized sustainability tips, and community challenges to promote eco-friendly living."
                tags={['React Native', 'Firebase', 'Redux', 'UI/UX']}
                roles={[
                  {
                    role: 'UI/UX Designer',
                    skills: ['Figma', 'Adobe XD', 'Wireframing']
                  },
                  {
                    role: 'Backend Developer',
                    skills: ['Node.js', 'Express', 'MongoDB']
                  },
                  {
                    role: 'Mobile Developer',
                    skills: ['React Native', 'Firebase', 'Redux']
                  }
                ]}
                upvotes={42}
                comments={18}
              />
              <ProjectCard 
                title="HealthSync - Telemedicine Platform"
                user="Dr. Michael Chen"
                role="Healthcare Professional"
                status="near-completion"
                description="A comprehensive telemedicine solution connecting patients with healthcare providers. Features include video consultations, prescription management, appointment scheduling, and secure health record sharing. Built with HIPAA compliance and multi-language support."
                tags={['Node.js', 'React', 'WebRTC', 'MongoDB']}
                roles={[
                  {
                    role: 'Frontend Developer',
                    skills: ['React', 'TypeScript', 'Tailwind CSS']
                  },
                  {
                    role: 'Backend Developer',
                    skills: ['Node.js', 'Express', 'MongoDB']
                  },
                  {
                    role: 'DevOps Engineer',
                    skills: ['Docker', 'Kubernetes', 'AWS']
                  }
                ]}
                upvotes={87}
                comments={32}
              />
              <ProjectCard 
                title="EduFlow - Learning Management System"
                user="Alex Rodriguez"
                role="Education Technology"
                status="completed"
                description="An interactive LMS designed for educational institutions to create, manage, and deliver online courses. Includes features like assignment submission, automated grading, discussion forums, and progress tracking. Built with scalability in mind to support thousands of concurrent users."
                tags={['Django', 'PostgreSQL', 'Docker', 'AWS']}
                roles={[
                  {
                    role: 'Full Stack Developer',
                    skills: ['Django', 'React', 'Python']
                  },
                  {
                    role: 'DevOps Engineer',
                    skills: ['Docker', 'Kubernetes', 'AWS']
                  },
                  {
                    role: 'Education Specialist',
                    skills: ['Course Design', 'Content Creation', 'Instructional Design']
                  }
                ]}
                upvotes={124}
                comments={45}
              />
            </div>
          )}
          {component === "ideas" && <Ideas />}
          {component === "thoughts" && <Thoughts />}
          {component === "opportunity" && <Opportunity />}
          {component === "myprojects" && <MyProjects />}
        </div>

        {/* Right Sidebar */}
        <aside className="hidden lg:block w-80 pl-4 border-l border-neutral-200 dark:border-neutral-700">
          <div className="sticky top-4 space-y-6">
            <Card className="p-4">
              <h3 className="text-md font-semibold mb-1">Trending Projects</h3>
              <ul className="divide-y divide-gray-100">
                <li className="flex items-center py-1 group hover:shadow-sm hover:bg-blue-50 transition rounded cursor-pointer relative">
  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-full" />
  <div className="flex items-center min-w-0 pl-3">
    <a href="#" className="font-semibold text-sm truncate max-w-[7.5rem] text-blue-900 hover:underline">BuildWithAI</a>
    <span className="flex items-center gap-0.5 ml-2">
      <Triangle className="w-3 h-3 text-blue-500" fill="currentColor" />
      <span className="bg-blue-100 text-blue-700 rounded px-1 py-0.5 text-xs font-semibold ml-0.5" title="Upvotes">20</span>
    </span>
  </div>
  <a href="#" title="View project" className="ml-2 text-gray-500 hover:text-blue-600 p-1 rounded transition"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></a>
</li>
                <li className="flex items-center py-1 group hover:shadow-sm hover:bg-blue-50 transition rounded cursor-pointer relative">
  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-400 rounded-full" />
  <div className="flex items-center min-w-0 pl-3">
    <a href="#" className="font-semibold text-sm truncate max-w-[7.5rem] text-blue-900 hover:underline">FinTrack</a>
    <span className="flex items-center gap-0.5 ml-2">
      <Triangle className="w-3 h-3 text-blue-400" fill="currentColor" />
      <span className="bg-blue-50 text-blue-700 rounded px-1 py-0.5 text-xs font-semibold ml-0.5" title="Upvotes">12</span>
    </span>
  </div>
  <a href="#" title="View project" className="ml-2 text-gray-500 hover:text-blue-600 p-1 rounded transition"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></a>
</li>
                <li className="flex items-center py-1 group hover:shadow-sm hover:bg-blue-50 transition rounded cursor-pointer relative">
  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-300 rounded-full" />
  <div className="flex items-center min-w-0 pl-3">
    <a href="#" className="font-semibold text-sm truncate max-w-[7.5rem] text-blue-900 hover:underline">GameVerse</a>
    <span className="flex items-center gap-0.5 ml-2">
      <Triangle className="w-3 h-3 text-blue-300" fill="currentColor" />
      <span className="bg-blue-50 text-blue-700 rounded px-1 py-0.5 text-xs font-semibold ml-0.5" title="Upvotes">8</span>
    </span>
  </div>
  <a href="#" title="View project" className="ml-2 text-gray-500 hover:text-blue-600 p-1 rounded transition"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></a>
</li>
              </ul>
            </Card>
            <Card className="p-4">
              <h3 className="text-md font-semibold mb-1">Suggested Connections</h3>
<ul className="space-y-3">
  {/* Ankita: Top Connector badge, blue avatar, Mentor role */}
  <li className="flex items-start items-center gap-3">
  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-sm font-bold">A</span>
  <div className="flex-1 min-w-0">
    <div className="flex items-center justify-between">
      <span className="font-medium text-sm text-gray-900 truncate">Ankita</span>
      <button className="flex items-center gap-1 text-blue-600 text-xs font-semibold hover:underline"><UserPlus className="w-4 h-4 mr-1" />Connect</button>
    </div>
    <span className="block text-xs text-blue-700 mt-0.5 font-medium">Mentor</span>
  </div>
</li>
  <li className="flex items-start items-center gap-3">
  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-sm font-bold">R</span>
  <div className="flex-1 min-w-0">
    <div className="flex items-center justify-between">
      <span className="font-medium text-sm text-gray-900 truncate">Rahul</span>
      <button className="flex items-center gap-1 text-blue-600 text-xs font-semibold hover:underline"><UserPlus className="w-4 h-4 mr-1" />Connect</button>
    </div>
    <span className="block text-xs text-blue-700 mt-0.5 font-medium">Entrepreneur</span>
  </div>
</li>
  <li className="flex items-start items-center gap-3">
  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-sm font-bold">J</span>
  <div className="flex-1 min-w-0">
    <div className="flex items-center justify-between">
      <span className="font-medium text-sm text-gray-900 truncate">Jiya</span>
      <button className="flex items-center gap-1 text-blue-600 text-xs font-semibold hover:underline"><UserPlus className="w-4 h-4 mr-1" />Connect</button>
    </div>
    <span className="block text-xs text-blue-700 mt-0.5 font-medium">Student</span>
  </div>
</li>
</ul>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
};
