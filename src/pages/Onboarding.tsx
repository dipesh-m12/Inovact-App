/* eslint-disable @typescript-eslint/no-unused-vars */
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

const entrepreneurPositions = [
  "Founder",
  "Co-Founder",
  "CEO",
  "CTO",
  "COO",
  "CFO",
  "CMO",
  "CPO",
  "Director",
  "Sole Proprietor",
  "Partner",
  "Other (Please specify)",
];

const mentorPositions = [
  "Founder",
  "Product Manager",
  "Software Engineer",
  "Marketing Lead",
  "Growth Manager",
  "UX Designer",
  "Data Scientist",
  "Strategy Consultant",
  "Engineering Manager",
  "HR Manager",
  "Professor",
  "Working Professional",
  "Investor",
  "Other (Please specify)",
];

const skillLevels = ["Beginner", "Intermediate", "Expert"];

export default function OnboardPage() {
  const [step, setStep] = useState(1);
  const [profileType, setProfileType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    organization: "",
    college: "",
    degree: "",
    position: "",
    customPosition: "",
    graduationYear: "",
  });
  const currentYear = new Date().getFullYear();
  const maxGraduationYear = currentYear + 8;
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [skills, setSkills] = useState<{ name: string; level: string }[]>([]);
  const [beginnerSkill, setBeginnerSkill] = useState("");
  const [intermediateSkill, setIntermediateSkill] = useState("");
  const [expertSkill, setExpertSkill] = useState("");

  const progress = (step / 4) * 100;

  const addSkill = (skill: string, level: string) => {
    const trimmedSkill = skill.trim();
    if (!trimmedSkill) return;

    // Check if skill already exists at this level
    const skillExists = skills.some(
      (s) =>
        s.name.toLowerCase() === trimmedSkill.toLowerCase() && s.level === level
    );

    if (skillExists) {
      // Clear the input field if skill already exists
      if (level === "Beginner") setBeginnerSkill("");
      if (level === "Intermediate") setIntermediateSkill("");
      if (level === "Expert") setExpertSkill("");
      return;
    }

    // Check if max skills (5) reached for this level
    const skillsAtLevel = skills.filter((s) => s.level === level).length;
    if (skillsAtLevel >= 5) {
      alert(`Maximum 5 skills allowed for ${level.toLowerCase()} level`);
      return;
    }

    setSkills([...skills, { name: trimmedSkill, level }]);

    // Clear the input field
    if (level === "Beginner") setBeginnerSkill("");
    if (level === "Intermediate") setIntermediateSkill("");
    if (level === "Expert") setExpertSkill("");
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    level: string
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Clear custom position when position changes to non-other
      ...(name === "position" && value !== "Other (Please specify)"
        ? { customPosition: "" }
        : {}),
    }));
  };

  const handleNext = () => {
    if (step === 1 && !profileType) {
      alert("Please select a profile type");
      return;
    }

    if (step === 2) {
      // Basic validation
      if (!formData.firstName || !formData.lastName || !formData.bio) {
        alert("Please fill in all required fields");
        return;
      }

      // Validate bio length
      if (formData.bio.length > 200) {
        alert("Bio cannot exceed 200 characters");
        return;
      }

      // College and graduation year are required for all roles
      if (!formData.college || !formData.graduationYear) {
        alert("Please fill in all required education information");
        return;
      }

      // Role-specific validation
      if (profileType === "student") {
        if (!formData.degree) {
          alert("Please select your degree");
          return;
        }
      } else {
        // For entrepreneurs and mentors
        if (!formData.organization || !formData.position) {
          alert("Please fill in all required fields");
          return;
        }

        // Check if "Other" was selected but no custom position provided
        if (
          formData.position === "Other (Please specify)" &&
          !formData.customPosition
        ) {
          alert("Please specify your position");
          return;
        }
      }

      // Validate graduation year format
      const graduationYear = parseInt(formData.graduationYear);
      if (
        isNaN(graduationYear) ||
        graduationYear < 1000 ||
        graduationYear > 9999
      ) {
        alert("Please enter your year of graduation");
        return;
      }

      // Check if graduation year is too old
      if (graduationYear < 1925) {
        alert("Are you 100 years old?");
        return;
      }

      // Check if graduation year is in the future but not more than 8 years ahead
      if (graduationYear > maxGraduationYear) {
        alert(
          `Please enter a valid year of graduation (up to ${maxGraduationYear})`
        );
        return;
      }
    }

    if (step === 3 && selectedInterests.length < 3) {
      alert("Please select at least 3 interests");
      return;
    }

    if (step === 4 && skills.length === 0) {
      alert("Please add at least one skill");
      return;
    }

    // Proceed to next step
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Form submission
      console.log("Form submitted:", {
        ...formData,
        profileType,
        selectedInterests,
        skills,
      });
      // router.push("/loading");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Render step 1: Profile Type Selection
  const renderProfileTypeStep = () => (
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
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
                <type.icon className="h-6 w-6 text-blue-600" />
              </div>
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
  );

  // Render step 2: Personal Information
  const renderPersonalInfoStep = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="firstName">
            First Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="lastName">
            Last Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <Label htmlFor="bio">
            Bio <span className="text-red-500">*</span>
          </Label>
          <span
            className={`text-xs ${
              formData.bio.length > 200 ? "text-red-500" : "text-gray-500"
            }`}
          >
            {formData.bio.length}/200
          </span>
        </div>
        <Textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={(e) => {
            if (e.target.value.length <= 200) {
              handleInputChange(e);
            }
          }}
          placeholder="Tell us about yourself..."
          rows={3}
        />
      </div>
      {profileType !== "student" && (
        <div className="space-y-1">
          <Label htmlFor="organization">
            {profileType === "entrepreneur"
              ? "Name of your startup/company"
              : "Current Organization"}
            <span className="text-red-500">*</span>
          </Label>
          <Input
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            placeholder={
              profileType === "entrepreneur"
                ? "Enter your startup/company name"
                : "Enter your organization name"
            }
          />
        </div>
      )}
      <div className="space-y-1">
        <Label htmlFor="institute">
          {profileType === "student"
            ? "College/University Name"
            : "College/University Name"}
          <span className="text-red-500">*</span>
        </Label>
        <Input
          id="institute"
          name="college"
          value={formData.college}
          onChange={handleInputChange}
          placeholder="Your current institute or company"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profileType === "student" ? (
          <div className="space-y-1">
            <Label htmlFor="degree">
              Degree <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.degree}
              onValueChange={(value) => handleSelectChange("degree", value)}
            >
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
        ) : (
          <div className="space-y-1">
            <Label htmlFor="position">
              Role <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.position}
              onValueChange={(value) => handleSelectChange("position", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder={`Select your ${
                    profileType === "entrepreneur" ? "role" : "position"
                  }`}
                />
              </SelectTrigger>
              <SelectContent>
                {(profileType === "entrepreneur"
                  ? entrepreneurPositions
                  : mentorPositions
                ).map((pos) => (
                  <SelectItem key={pos} value={pos}>
                    {pos}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formData.position === "Other (Please specify)" && (
              <div className="mt-2">
                <Input
                  id="customPosition"
                  name="customPosition"
                  value={formData.customPosition}
                  onChange={handleInputChange}
                  placeholder="Please specify your position"
                />
              </div>
            )}
          </div>
        )}
        <div className="space-y-1">
          <Label htmlFor="year">
            Graduation Year <span className="text-red-500">*</span>
          </Label>
          <Input
            id="year"
            name="graduationYear"
            type="text"
            inputMode="numeric"
            value={formData.graduationYear}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || /^\d{1,4}$/.test(value)) {
                handleInputChange(e);
              }
            }}
            placeholder="YYYY"
            className="w-full"
          />
          {formData.graduationYear &&
            formData.graduationYear.length === 4 &&
            parseInt(formData.graduationYear) < 1925 && (
              <p className="mt-1 text-sm text-red-500">
                Are you 100 years old?
              </p>
            )}
          {formData.graduationYear &&
            formData.graduationYear.length === 4 &&
            parseInt(formData.graduationYear) > maxGraduationYear && (
              <p className="mt-1 text-sm text-red-500">
                Please enter a valid year of graduation (up to{" "}
                {maxGraduationYear})
              </p>
            )}
        </div>
      </div>
    </div>
  );

  // Render step 3: Interests
  const renderInterestsStep = () => {
    const minInterests = 3;
    const hasMinInterests = selectedInterests.length >= minInterests;

    return (
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-1">
            Select areas that interest you (choose multiple)
          </p>
          <p className="text-xs text-gray-500">
            Select at least {minInterests} interests
            {!hasMinInterests && selectedInterests.length > 0 && (
              <span className="text-red-500 ml-2">
                ({minInterests - selectedInterests.length} more required)
              </span>
            )}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <Badge
              key={interest}
              variant={
                selectedInterests.includes(interest) ? "default" : "outline"
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
    );
  };

  // Render step 4: Skills
  const renderSkillsStep = () => {
    // const getSkillsCount = (level: string) => {
    //   return skills.filter((skill) => skill.level === level).length;
    // };

    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-600">
            Show what you're good at and how good you are!
          </p>
          {step === 4 && skills.length === 0 && (
            <p className="text-sm text-red-500 mt-1">
              Please add at least one skill to continue
            </p>
          )}
        </div>

        {skillLevels.map((level) => {
          const skillsAtLevel = skills.filter((skill) => skill.level === level);
          const maxSkillsReached = skillsAtLevel.length >= 5;

          return (
            <div
              key={level}
              className="space-y-2 bg-white p-4 rounded-lg border border-gray-200"
            >
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium text-gray-700">
                  {level} Skills
                </h4>
                <span className="text-xs text-gray-500">
                  {skillsAtLevel.length}/5 skills
                </span>
              </div>

              <div className="flex gap-2">
                <Input
                  type="text"
                  value={
                    level === "Beginner"
                      ? beginnerSkill
                      : level === "Intermediate"
                      ? intermediateSkill
                      : expertSkill
                  }
                  onChange={(e) => {
                    const value = e.target.value;
                    if (level === "Beginner") setBeginnerSkill(value);
                    if (level === "Intermediate") setIntermediateSkill(value);
                    if (level === "Expert") setExpertSkill(value);
                  }}
                  onKeyDown={(e) => handleKeyPress(e, level)}
                  placeholder={
                    maxSkillsReached
                      ? `Maximum 5 skills reached for ${level.toLowerCase()} level`
                      : `Add ${level.toLowerCase()} skill`
                  }
                  disabled={maxSkillsReached}
                  className={`flex-1 text-sm ${
                    maxSkillsReached ? "bg-gray-50 cursor-not-allowed" : ""
                  }`}
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

              <div className="flex flex-wrap gap-2 pt-2">
                {skillsAtLevel.map((skill, index) => (
                  <div key={`${level}-${index}`} className="relative group">
                    <div className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {skill.name}
                      <button
                        type="button"
                        onClick={() => {
                          const skillIndex = skills.findIndex(
                            (s) => s.name === skill.name && s.level === level
                          );
                          if (skillIndex !== -1) {
                            removeSkill(skillIndex);
                          }
                        }}
                        className="ml-1.5 text-blue-400 hover:text-blue-600 transition-colors"
                      >
                        <X className="h-3 w-3 inline" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
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
            {step === 1 && renderProfileTypeStep()}
            {step === 2 && renderPersonalInfoStep()}
            {step === 3 && renderInterestsStep()}
            {step === 4 && renderSkillsStep()}

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
                  (step === 3 && selectedInterests.length < 3) ||
                  (step === 4 && skills.length === 0)
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
