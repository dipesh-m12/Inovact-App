/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";

import { useState, useRef, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Check,
  ChevronDown,
  X,
  Upload,
  Target,
  Puzzle,
  Rocket,
  Flame,
  User,
  Users,
  Edit,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";

type PostType = "project" | "idea" | "thought";
type ProjectStatus =
  | "completed"
  | "just-started"
  | "in-progress"
  | "near-completion";
type IdeaStatus = "ideation" | "prototype" | "mvp" | "scaling";

interface TeamMember {
  id: string;
  role: string;
  skills: string[];
  vacancy: number;
}

interface Mentor {
  id: string;
  skills: string[];
}

const postTypes = [
  { value: "project", label: "Project" },
  { value: "idea", label: "Idea" },
  { value: "thought", label: "Thought" },
];

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

const ideaStatuses = [
  {
    value: "ideation",
    label: "Ideation",
    icon: Target,
    color: "bg-green-100 border-green-300 text-green-800",
  },
  {
    value: "prototype",
    label: "Prototype",
    icon: Puzzle,
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
  },
  {
    value: "mvp",
    label: "MVP",
    icon: Rocket,
    color: "bg-blue-100 border-blue-300 text-blue-800",
  },
  {
    value: "scaling",
    label: "Scaling",
    icon: Flame,
    color: "bg-pink-100 border-pink-300 text-pink-800",
  },
];

export default function PostCreator() {
  const [postType, setPostType] = useState<PostType>("project");
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState("");
  const [projectStatus, setProjectStatus] =
    useState<ProjectStatus>("just-started");
  const [ideaStatus, setIdeaStatus] = useState<IdeaStatus>("ideation");
  const [needTeam, setNeedTeam] = useState(false);
  const [needTeamMember, setNeedTeamMember] = useState(false);
  const [needMentor, setNeedMentor] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [teamMember, setTeamMember] = useState<TeamMember>({
    id: "",
    role: "",
    skills: [],
    vacancy: 1,
  });
  const [mentor, setMentor] = useState<Mentor>({ id: "", skills: [] });
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [editingTeamMember, setEditingTeamMember] = useState<string | null>(
    null
  );
  const [editingMentor, setEditingMentor] = useState<string | null>(null);
  const [teamMemberSkillInput, setTeamMemberSkillInput] = useState("");
  const [mentorSkillInput, setMentorSkillInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Progress calculation
  const progress = useMemo(() => {
    let completed = 0;
    let total = 0;

    // Basic fields
    total += 2; // Post type and title
    if (postType) completed += 1;
    if (title.trim()) completed += 1;

    // Description (not for thoughts)
    if (postType !== "thought") {
      total += 1;
      if (description.trim()) completed += 1;
    }

    // Links
    if (postType === "idea" || postType === "project") {
      total += 1;
      if (link.trim()) completed += 1;
    }

    if (postType === "project") {
      total += 1;
      if (githubLink.trim()) completed += 1;
    }

    // Keywords
    if (postType === "project" || postType === "idea") {
      total += 1;
      if (keywords.length > 0) completed += 1;
    }

    // Status
    if (postType === "project" || postType === "idea") {
      total += 1;
      completed += 1; // Always has default status
    }

    // Team requirements
    if (
      (postType === "project" || postType === "idea") &&
      !(postType === "project" && projectStatus === "completed")
    ) {
      if (needTeam) {
        if (needTeamMember) {
          total += 1;
          if (teamMembers.length > 0) completed += 1;
        }
        if (needMentor) {
          total += 1;
          if (mentors.length > 0) completed += 1;
        }
      }
    }

    return Math.round((completed / total) * 100);
  }, [
    postType,
    title,
    description,
    link,
    githubLink,
    keywords,
    projectStatus,
    needTeam,
    needTeamMember,
    needMentor,
    teamMembers,
    mentors,
  ]);

  const handleKeywordAdd = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && keywordInput.trim()) {
      e.preventDefault();
      if (!keywords.includes(keywordInput.trim())) {
        setKeywords([...keywords, keywordInput.trim()]);
      }
      setKeywordInput("");
    }
  };

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter((k) => k !== keyword));
  };

  const handleTeamMemberSkillAdd = (e: React.KeyboardEvent) => {
    if (
      e.key === "Enter" &&
      teamMemberSkillInput.trim() &&
      teamMember.skills.length < 3
    ) {
      e.preventDefault();
      if (!teamMember.skills.includes(teamMemberSkillInput.trim())) {
        setTeamMember({
          ...teamMember,
          skills: [...teamMember.skills, teamMemberSkillInput.trim()],
        });
      }
      setTeamMemberSkillInput("");
    }
  };

  const handleMentorSkillAdd = (e: React.KeyboardEvent) => {
    if (
      e.key === "Enter" &&
      mentorSkillInput.trim() &&
      mentor.skills.length < 3
    ) {
      e.preventDefault();
      if (!mentor.skills.includes(mentorSkillInput.trim())) {
        setMentor({
          ...mentor,
          skills: [...mentor.skills, mentorSkillInput.trim()],
        });
      }
      setMentorSkillInput("");
    }
  };

  const removeTeamMemberSkill = (skill: string) => {
    setTeamMember({
      ...teamMember,
      skills: teamMember.skills.filter((s) => s !== skill),
    });
  };

  const removeMentorSkill = (skill: string) => {
    setMentor({
      ...mentor,
      skills: mentor.skills.filter((s) => s !== skill),
    });
  };

  const addTeamMember = () => {
    if (teamMember.role.trim() && teamMember.skills.length > 0) {
      const newTeamMember = {
        ...teamMember,
        id: editingTeamMember || Date.now().toString(),
      };

      if (editingTeamMember) {
        setTeamMembers(
          teamMembers.map((tm) =>
            tm.id === editingTeamMember ? newTeamMember : tm
          )
        );
        setEditingTeamMember(null);
      } else {
        setTeamMembers([...teamMembers, newTeamMember]);
      }

      setTeamMember({ id: "", role: "", skills: [], vacancy: 1 });
    }
  };

  const addMentor = () => {
    if (mentor.skills.length > 0) {
      const newMentor = {
        ...mentor,
        id: editingMentor || Date.now().toString(),
      };

      if (editingMentor) {
        setMentors(
          mentors.map((m) => (m.id === editingMentor ? newMentor : m))
        );
        setEditingMentor(null);
      } else {
        setMentors([...mentors, newMentor]);
      }

      setMentor({ id: "", skills: [] });
    }
  };

  const editTeamMember = (tm: TeamMember) => {
    setTeamMember(tm);
    setEditingTeamMember(tm.id);
  };

  const editMentor = (m: Mentor) => {
    setMentor(m);
    setEditingMentor(m.id);
  };

  const removeTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter((tm) => tm.id !== id));
  };

  const removeMentor = (id: string) => {
    setMentors(mentors.filter((m) => m.id !== id));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log({
      postType,
      title,
      description: postType !== "thought" ? description : undefined,
      link,
      githubLink,
      keywords,
      status:
        postType === "project"
          ? projectStatus
          : postType === "idea"
          ? ideaStatus
          : null,
      needTeam,
      teamMembers: needTeamMember ? teamMembers : [],
      mentors: needMentor ? mentors : [],
      images,
    });
  };

  return (
    <div className="">
      {/* Sticky Progress Bar */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-2xl mx-auto p-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Progress</span>
            <Progress value={progress} className="flex-1 [&>div]:bg-blue-800" />
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold">
              {postType == "project"
                ? "Add Project"
                : postType == "idea"
                ? "Add Idea"
                : "Add Thought"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Post Type Selection */}
            <div className="space-y-2">
              <Label>Post Type</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between bg-transparent"
                  >
                    {postType
                      ? postTypes.find((type) => type.value === postType)?.label
                      : "Select post type..."}
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search post type..." />
                    <CommandList>
                      <CommandEmpty>No post type found.</CommandEmpty>
                      <CommandGroup>
                        {postTypes.map((type) => (
                          <CommandItem
                            key={type.value}
                            value={type.value}
                            onSelect={(currentValue) => {
                              setPostType(currentValue as PostType);
                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                postType === type.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {type.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title..."
                maxLength={150}
              />
              <div className="text-sm text-muted-foreground text-right">
                {title.length}/150
              </div>
            </div>

            {/* Description - not for thoughts */}
            {postType !== "thought" && (
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter description..."
                  maxLength={500}
                  rows={4}
                />
                <div className="text-sm text-muted-foreground text-right">
                  {description.length}/500
                </div>
              </div>
            )}

            {/* Link (for Ideas and Projects) */}
            {(postType === "idea" || postType === "project") && (
              <div className="space-y-2">
                <Label htmlFor="link">Link URL</Label>
                <Input
                  id="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="Enter link URL..."
                  type="url"
                />
              </div>
            )}

            {/* GitHub Link (for Projects only) */}
            {postType === "project" && (
              <div className="space-y-2">
                <Label htmlFor="github">GitHub Repository Link</Label>
                <Input
                  id="github"
                  value={githubLink}
                  onChange={(e) => setGithubLink(e.target.value)}
                  placeholder="Enter GitHub repo link URL..."
                  type="url"
                />
              </div>
            )}

            {/* Images (for Projects only) */}
            {postType === "project" && (
              <div className="space-y-2">
                <Label>Images</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Images
                  </Button>
                </div>
                {images.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image) || "/placeholder.svg"}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-24 object-cover rounded"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-1 right-1 h-6 w-6 p-0"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Keywords (for Projects and Ideas) */}
            {(postType === "project" || postType === "idea") && (
              <div className="space-y-2">
                <Label htmlFor="keywords">Add Keywords</Label>
                <Input
                  id="keywords"
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  onKeyDown={handleKeywordAdd}
                  placeholder="MERN stack, Figma, DaVinci, etc"
                />
                <p className="text-sm text-muted-foreground">
                  Do not separate keywords by comma, hit enter to add each
                  keyword
                </p>
                {keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((keyword) => (
                      <Badge
                        key={keyword}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        {keyword}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0 hover:bg-red-100"
                          onClick={() => removeKeyword(keyword)}
                        >
                          <X className="h-3 w-3 text-red-500" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Status Selection */}
            {postType === "project" && (
              <div className="space-y-3">
                <Label>Project Status</Label>
                <div className="grid grid-cols-1 gap-2">
                  {projectStatuses.map((status) => {
                    const Icon = status.icon;
                    return (
                      <Button
                        key={status.value}
                        type="button"
                        variant="outline"
                        className={cn(
                          "h-auto p-4 justify-start",
                          projectStatus === status.value && status.color
                        )}
                        onClick={() => setProjectStatus(status.value as any)}
                      >
                        <Icon className="mr-3 h-5 w-5" />
                        {status.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}

            {postType === "idea" && (
              <div className="space-y-3">
                <Label>Idea Status</Label>
                <div className="grid grid-cols-1 gap-2">
                  {ideaStatuses.map((status) => {
                    const Icon = status.icon;
                    return (
                      <Button
                        key={status.value}
                        type="button"
                        variant="outline"
                        className={cn(
                          "h-auto p-4 justify-start",
                          ideaStatus === status.value && status.color
                        )}
                        onClick={() => setIdeaStatus(status.value as any)}
                      >
                        <Icon className="mr-3 h-5 w-5" />
                        {status.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Team Needed Toggle (not for completed projects) */}
            {(postType === "project" || postType === "idea") &&
              !(postType === "project" && projectStatus === "completed") && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="team-needed"
                      className="text-base font-medium"
                    >
                      Looking for a team?
                    </Label>
                    <Switch
                      id="team-needed"
                      checked={needTeam}
                      onCheckedChange={setNeedTeam}
                      className="data-[state=checked]:bg-blue-600"
                    />
                  </div>

                  {needTeam && (
                    <div className="space-y-6 pl-4 border-l-2 border-blue-200">
                      {/* Team Member Toggle */}
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="team-member"
                          className="flex items-center gap-2"
                        >
                          <User className="h-4 w-4" />
                          Team member
                        </Label>
                        <Switch
                          id="team-member"
                          checked={needTeamMember}
                          onCheckedChange={setNeedTeamMember}
                          className="data-[state=checked]:bg-green-600"
                        />
                      </div>

                      {needTeamMember && (
                        <div className="space-y-4 pl-4">
                          <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
                            <div className="space-y-2">
                              <Label>Role</Label>
                              <Input
                                value={teamMember.role}
                                onChange={(e) =>
                                  setTeamMember({
                                    ...teamMember,
                                    role: e.target.value,
                                  })
                                }
                                placeholder="Enter role..."
                              />
                            </div>

                            <div className="space-y-2">
                              <Label>Skills (up to 3)</Label>
                              <Input
                                value={teamMemberSkillInput}
                                onChange={(e) =>
                                  setTeamMemberSkillInput(e.target.value)
                                }
                                onKeyDown={handleTeamMemberSkillAdd}
                                placeholder="Add skills..."
                                disabled={teamMember.skills.length >= 3}
                              />
                              {teamMember.skills.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {teamMember.skills.map((skill) => (
                                    <Badge
                                      key={skill}
                                      variant="secondary"
                                      className="flex items-center gap-1"
                                    >
                                      {skill}
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="h-4 w-4 p-0 hover:bg-red-100"
                                        onClick={() =>
                                          removeTeamMemberSkill(skill)
                                        }
                                      >
                                        <X className="h-3 w-3 text-red-500" />
                                      </Button>
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>

                            <div className="space-y-2">
                              <Label>Number of Positions</Label>
                              <Input
                                type="number"
                                min="1"
                                value={teamMember.vacancy}
                                onChange={(e) =>
                                  setTeamMember({
                                    ...teamMember,
                                    vacancy:
                                      Number.parseInt(e.target.value) || 1,
                                  })
                                }
                                placeholder="Number of positions needed..."
                              />
                            </div>

                            <Button
                              type="button"
                              onClick={addTeamMember}
                              disabled={
                                !teamMember.role.trim() ||
                                teamMember.skills.length === 0
                              }
                              className="w-full"
                            >
                              <Plus className="mr-2 h-4 w-4" />
                              {editingTeamMember
                                ? "Update Team Member"
                                : "Add Team Member"}
                            </Button>
                          </div>

                          {/* Added Team Members */}
                          {teamMembers.length > 0 && (
                            <div className="space-y-2">
                              <Label>Added Team Members</Label>
                              {teamMembers.map((tm) => (
                                <div
                                  key={tm.id}
                                  className="p-3 border rounded-lg bg-white"
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h4 className="font-medium">{tm.role}</h4>
                                      <div className="flex flex-wrap gap-1 mt-1">
                                        {tm.skills.map((skill) => (
                                          <Badge
                                            key={skill}
                                            variant="outline"
                                            className="text-xs"
                                          >
                                            {skill}
                                          </Badge>
                                        ))}
                                      </div>
                                      <p className="text-sm text-muted-foreground mt-1">
                                        {tm.vacancy} position
                                        {tm.vacancy > 1 ? "s" : ""} needed
                                      </p>
                                    </div>
                                    <div className="flex gap-1">
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => editTeamMember(tm)}
                                      >
                                        <Edit className="h-3 w-3" />
                                      </Button>
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeTeamMember(tm.id)}
                                      >
                                        <X className="h-3 w-3 text-red-500" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Mentor Toggle */}
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="mentor"
                          className="flex items-center gap-2"
                        >
                          <Users className="h-4 w-4" />
                          Mentor
                        </Label>
                        <Switch
                          id="mentor"
                          checked={needMentor}
                          onCheckedChange={setNeedMentor}
                          className="data-[state=checked]:bg-green-600"
                        />
                      </div>

                      {needMentor && (
                        <div className="space-y-4 pl-4">
                          <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
                            <div className="space-y-2">
                              <Label>Skills (up to 3)</Label>
                              <Input
                                value={mentorSkillInput}
                                onChange={(e) =>
                                  setMentorSkillInput(e.target.value)
                                }
                                onKeyDown={handleMentorSkillAdd}
                                placeholder="Add up to 3 skills..."
                                disabled={mentor.skills.length >= 3}
                              />
                              {mentor.skills.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {mentor.skills.map((skill) => (
                                    <Badge
                                      key={skill}
                                      variant="secondary"
                                      className="flex items-center gap-1"
                                    >
                                      {skill}
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="h-4 w-4 p-0 hover:bg-red-100"
                                        onClick={() => removeMentorSkill(skill)}
                                      >
                                        <X className="h-3 w-3 text-red-500" />
                                      </Button>
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>

                            <Button
                              type="button"
                              onClick={addMentor}
                              disabled={mentor.skills.length === 0}
                              className="w-full"
                            >
                              <Plus className="mr-2 h-4 w-4" />
                              {editingMentor ? "Update Mentor" : "Add Mentor"}
                            </Button>
                          </div>

                          {/* Added Mentors */}
                          {mentors.length > 0 && (
                            <div className="space-y-2">
                              <Label>Added Mentors</Label>
                              {mentors.map((m) => (
                                <div
                                  key={m.id}
                                  className="p-3 border rounded-lg bg-white"
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <div className="flex flex-wrap gap-1">
                                        {m.skills.map((skill) => (
                                          <Badge
                                            key={skill}
                                            variant="outline"
                                            className="text-xs"
                                          >
                                            {skill}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="flex gap-1">
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => editMentor(m)}
                                      >
                                        <Edit className="h-3 w-3" />
                                      </Button>
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeMentor(m.id)}
                                      >
                                        <X className="h-3 w-3 text-red-500" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Post
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
