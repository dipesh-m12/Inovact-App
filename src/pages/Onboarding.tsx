"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Briefcase, Users, X } from "lucide-react";

const profileTypes = [
  {
    id: "student",
    label: "Student",
    icon: GraduationCap,
    description: "Looking for opportunities and learning",
  },
  {
    id: "entrepreneur",
    label: "Entrepreneur",
    icon: Briefcase,
    description: "Building and leading projects",
  },
  {
    id: "mentor",
    label: "Mentor",
    icon: Users,
    description: "Guiding and supporting others",
  },
];

const interests = [
  "Web Development",
  "Mobile Development",
  "AI/ML",
  "Data Science",
  "UI/UX Design",
  "Product Management",
  "Marketing",
  "Finance",
  "Blockchain",
  "IoT",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
  "Game Development",
  "AR/VR",
];

const degrees = [
  "B.E",
  "BBA",
  "MBA",
  "B.A",
  "M.A",
  "MTech",
  "BTech",
  "B.Com",
  "M.Com",
  "PhD",
  "BCA",
  "MCA",
];

const skillLevels = ["Beginner", "Intermediate", "Expert"];

export default function OnboardPage() {
  const [step, setStep] = useState(1);
  const [profileType, setProfileType] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [skills, setSkills] = useState<{ name: string; level: string }[]>([]);
  const [beginnerSkill, setBeginnerSkill] = useState("");
  const [intermediateSkill, setIntermediateSkill] = useState("");
  const [expertSkill, setExpertSkill] = useState("");

  const progress = (step / 4) * 100;

  const addSkill = (skill: string, level: string) => {
    if (
      skill &&
      !skills.some((s) => s.name.toLowerCase() === skill.toLowerCase())
    ) {
      setSkills([...skills, { name: skill, level }]);
      if (level === "Beginner") setBeginnerSkill("");
      if (level === "Intermediate") setIntermediateSkill("");
      if (level === "Expert") setExpertSkill("");
    }
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    level: string
  ) => {
    if (e.key === "Enter") {
      if (level === "Beginner") addSkill(beginnerSkill, level);
      if (level === "Intermediate") addSkill(intermediateSkill, level);
      if (level === "Expert") addSkill(expertSkill, level);
    }
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // router.push("/loading");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-muted flex items-start justify-center pt-8 px-4">
      <div className="w-full max-w-2xl fade-in sticky top-0">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
            Complete Your Profile
          </h1>
          <p className="text-gray-600 text-sm sm:text-base ">
            Help us personalize your experience
          </p>
          <Progress
            value={progress}
            className="mt-4 rounded-sm h-2 sm:h-3 bg-gray-200 [&>div]:bg-blue-600"
          />
        </div>

        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle>Step {step} of 4</CardTitle>
            <CardDescription>
              {step === 1 && "Select your profile type"}
              {step === 2 && "Tell us about yourself"}
              {step === 3 && "Choose your areas of interest"}
              {step === 4 && "Add your skills"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 ">
            {step === 1 && (
              <div className="space-y-3">
                {profileTypes.map((type) => (
                  <Card
                    key={type.id}
                    className={`cursor-pointer py-0 sm:py-2 transition-all hover:shadow-md ${
                      profileType === type.id
                        ? "ring-2 ring-blue-500 bg-blue-50"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setProfileType(type.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        {/* Icon container - fixed width */}
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
                          <type.icon className="h-6 w-6 text-blue-600" />
                        </div>

                        {/* Content container - full width */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {type.label}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {type.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="institute">Institute/Company</Label>
                  <Input
                    id="institute"
                    placeholder="Your current institute or company"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full">
                    <Label htmlFor="degree">Degree/Position</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select degree" />
                      </SelectTrigger>
                      <SelectContent>
                        {degrees.map((degree) => (
                          <SelectItem key={degree} value={degree}>
                            {degree}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full">
                    <Label htmlFor="year">Graduation Year</Label>
                    <Input
                      id="year"
                      type="number"
                      min="1900"
                      max="9999"
                      placeholder="YYYY"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <p className="text-sm text-gray-600 mb-4">
                  Select areas that interest you (choose multiple)
                </p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge
                      key={interest}
                      variant={
                        selectedInterests.includes(interest)
                          ? "default"
                          : "outline"
                      }
                      className={`cursor-pointer transition-colors text-sm py-2 px-4 ${
                        selectedInterests.includes(interest)
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "hover:bg-blue-50"
                      }`}
                      onClick={() => toggleInterest(interest)}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                {skillLevels.map((level) => (
                  <div key={level} className="space-y-2">
                    <Label>{level} Skills</Label>
                    <div className="flex gap-2">
                      <Input
                        placeholder={`Add ${level.toLowerCase()} skill`}
                        value={
                          level === "Beginner"
                            ? beginnerSkill
                            : level === "Intermediate"
                            ? intermediateSkill
                            : expertSkill
                        }
                        onChange={(e) => {
                          if (level === "Beginner")
                            setBeginnerSkill(e.target.value);
                          if (level === "Intermediate")
                            setIntermediateSkill(e.target.value);
                          if (level === "Expert")
                            setExpertSkill(e.target.value);
                        }}
                        onKeyPress={(e) => handleKeyPress(e, level)}
                        className="flex-1"
                      />
                      <Button
                        className="md:hidden bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() =>
                          addSkill(
                            level === "Beginner"
                              ? beginnerSkill
                              : level === "Intermediate"
                              ? intermediateSkill
                              : expertSkill,
                            level
                          )
                        }
                      >
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2">
                      {skills
                        .filter((skill) => skill.level === level)
                        .map((skill, index) => (
                          <div
                            key={index}
                            className="relative p-1 bg-transparent border border-gray-300 rounded-lg"
                          >
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute top-[-6px] right-[-12px] p-0 w-5 h-5 bg-gray-200 hover:text-red-500"
                              onClick={() => removeSkill(index)}
                            >
                              <X className="h-3 w-3  hover:text-red-500" />
                            </Button>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700"
                disabled={
                  (step === 1 && !profileType) ||
                  (step === 3 && selectedInterests.length === 0)
                }
              >
                {step === 4 ? "Complete Setup" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
