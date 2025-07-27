import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Triangle,
  MessageCircle,
  Share,
  Github,
  Link,
  Send,
} from "lucide-react";
import { Sheet, SheetContent, SheetFooter, SheetHeader } from "../ui/sheet";

const comments = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "SJ",
    message:
      "This looks like a really interesting project! I'd love to collaborate on the frontend part.",
    time: "2 hours ago",
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar: "MC",
    message:
      "Great work on the parking system! Have you considered integrating with existing payment gateways?",
    time: "1 hour ago",
  },
  {
    id: 3,
    name: "Alex Rivera",
    avatar: "AR",
    message:
      "The real-time tracking feature sounds amazing. What technologies are you using for the IoT integration?",
    time: "45 minutes ago",
  },
  {
    id: 4,
    name: "Emma Davis",
    avatar: "ED",
    message:
      "I'm working on a similar project. Would love to discuss some ideas and share resources!",
    time: "30 minutes ago",
  },
];

type ProjectStatus =
  | "completed"
  | "just-started"
  | "in-progress"
  | "near-completion";

const statusConfig = {
  "just-started": { label: "Just Started", color: "bg-blue-600 text-white" },
  "in-progress": { label: "In Progress", color: "bg-orange-600 text-white" },
  "near-completion": {
    label: "Near Completion",
    color: "bg-yellow-600 text-white",
  },
  completed: { label: "Completed", color: "bg-green-600 text-white" },
};

export function MyProjects() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [projectStatus] = useState<ProjectStatus>("just-started");

  // Demo images - empty for now but structure ready
  const [projectImages] = useState<string[]>([
    "https://images.pexels.com/photos/32098655/pexels-photo-32098655.jpeg?_gl=1*67accu*_ga*MTkzMjkxNzU5OC4xNzQyNTI3MzM1*_ga_8JE65Q40S6*czE3NTIwNTgwNzgkbzgkZzEkdDE3NTIwNTgyMTYkajU4JGwwJGgw",
  ]);

  const fullDescription = `Building a full-stack web application to automate and manage vehicle parking systems for both users and administrators. The app will support features like parking lot creation, real-time spot tracking, automated payment processing, user registration and authentication, admin dashboard for monitoring, mobile-responsive design, and integration with IoT sensors for real-time parking availability updates. The system will help reduce traffic congestion and improve parking efficiency in urban areas.`;

  const truncatedDescription = `Building a full-stack web application to automate and manage vehicle parking systems for both users and administrators. The app will support features like parking lot creation, real-time spot tracking`;

  const handleReadMoreClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleUpvoteClick = () => {
    setIsUpvoted(!isUpvoted);
  };

  const renderImages = () => {
    if (projectImages.length === 0) return null;

    if (projectImages.length === 1) {
      // Single image takes full width
      return (
        <div className="mb-4">
          <img
            src={projectImages[0] || "/placeholder.svg"}
            alt="Project image"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      );
    }

    // Multiple images in grid format
    return (
      <div className="mb-4">
        <div
          className={`grid gap-2 ${
            projectImages.length === 2
              ? "grid-cols-2"
              : projectImages.length === 3
              ? "grid-cols-3"
              : "grid-cols-2"
          }`}
        >
          {projectImages.map((image, index) => (
            <img
              key={index}
              src={image || "/placeholder.svg"}
              alt={`Project image ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-y-4">
      <Card className="w-full py-2  max-w-2xl mx-auto bg-white shadow-sm border border-gray-200 rounded-xl">
        <CardContent className="p-3 sm:p-6">
          {/* Header with Avatar, Name, and Connect Button */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Avatar className="size-10 sm:size-12 cursor-pointer hover:opacity-80 transition-opacity">
                <AvatarFallback className="bg-gray-300 text-gray-600">
                  A
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                  Annamsetti
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Student</p>
              </div>
            </div>
          </div>

          {/* Project Status Badge */}
          <div className="mb-3">
            <Badge className={`${statusConfig[projectStatus].color} px-3 py-1`}>
              {statusConfig[projectStatus].label}
            </Badge>
          </div>

          {/* Project Title */}
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
            ParkALot – Smart vehicle parking management system
          </h2>

          {/* Project Description */}
          <div className="mb-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              {showFullDescription ? fullDescription : truncatedDescription}
              {!showFullDescription && (
                <span className="text-gray-400"> ...</span>
              )}
            </p>
            <button
              className="text-blue-600 text-sm font-medium mt-1 hover:underline"
              onClick={handleReadMoreClick}
            >
              {showFullDescription ? "Read less" : "Read more"}
            </button>
          </div>

          {/* Project Images Section */}
          {renderImages()}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge
              variant="outline"
              className="text-gray-600 border-gray-300 bg-gray-50"
            >
              rest apis
            </Badge>
            <Badge
              variant="outline"
              className="text-gray-600 border-gray-300 bg-gray-50"
            >
              flask
            </Badge>
            <Badge
              variant="outline"
              className="text-gray-600 border-gray-300 bg-gray-50"
            >
              python
            </Badge>
            <Badge
              variant="outline"
              className="text-gray-600 border-gray-300 bg-gray-50"
            >
              in progress
            </Badge>
          </div>

          {/* Action Buttons - Column Layout */}
          <div className="space-y-4">
            {/* Share Icons Row */}
            <div className="flex items-center gap-6">
              <button
                className={`flex items-center gap-2 transition-colors ${
                  isUpvoted
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={handleUpvoteClick}
              >
                <Triangle
                  className={`w-5 h-5 ${
                    isUpvoted
                      ? "fill-blue-600 text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  } transition-colors`}
                />
                <span className="text-sm font-medium">{isUpvoted ? 3 : 2}</span>
              </button>

              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">4</span>
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
          </div>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={() => setOpen(!open)}>
        <SheetContent className="w-[100vw] ">
          <SheetHeader className="border-b border-border pb-4">
            <h2 className="text-lg font-semibold">Comments</h2>
            <p className="text-sm text-muted-foreground">4 comments</p>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <Avatar className="w-10 h-10 flex-shrink-0">
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-sm font-medium">
                    {comment.avatar}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-sm text-foreground">
                      {comment.name}
                    </h4>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {comment.time}
                    </span>
                  </div>

                  <div className="bg-muted rounded-lg px-3 py-2">
                    <p className="text-sm text-foreground leading-relaxed">
                      {comment.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
    </div>
  );
}
