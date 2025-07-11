import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Triangle,
  MessageCircle,
  Share,
  Users,
  Check,
  Send,
} from "lucide-react";
import { Sheet, SheetContent, SheetFooter, SheetHeader } from "../ui/sheet";
import { AvatarHome } from "./Project";

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

export function Thoughts() {
  const [isRequested, setIsRequested] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const fullDescription = `Building a full-stack web application to automate and manage vehicle parking systems for both users and administrators. The app will support features like parking lot creation, real-time spot tracking, automated payment processing, user registration and authentication, admin dashboard for monitoring, mobile-responsive design, and integration with IoT sensors for real-time parking availability updates. The system will help reduce traffic congestion and improve parking efficiency in urban areas.`;

  const truncatedDescription = `Building a full-stack web application to automate and manage vehicle parking systems for both users and administrators. The app will support features like parking lot creation, real-time spot tracking`;

  const handleConnectClick = () => {
    setIsRequested(!isRequested);
  };

  const handleReadMoreClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleUpvoteClick = () => {
    setIsUpvoted(!isUpvoted);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <Card className="w-full py-2  max-w-2xl mx-auto bg-white shadow-sm border border-gray-200 rounded-xl">
        <CardContent className="p-3 sm:p-6">
          {/* Header with Avatar, Name, and Connect Button */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <AvatarHome />
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                  Annamsetti
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">Student</p>
              </div>
            </div>
            <Button
              variant="outline"
              className={`min-w-[120px] ${
                isRequested
                  ? "text-green-600 border-green-600 hover:bg-green-50 bg-green-50"
                  : "text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
              } transition-all duration-200 `}
              onClick={handleConnectClick}
            >
              <div className="flex items-center gap-2">
                {isRequested ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Requested</span>
                  </>
                ) : (
                  <>
                    <Users className="w-4 h-4" />
                    <span>Connect</span>
                  </>
                )}
              </div>
            </Button>
          </div>

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
