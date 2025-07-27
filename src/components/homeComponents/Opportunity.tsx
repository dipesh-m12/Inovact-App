"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ChevronRight, Clock, Briefcase, Send } from "lucide-react";

export function EligibilityAlert() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const eligibilitySteps = [
    "Ensure your GitHub and Innovact Social accounts use the same email ID",
    "Connect GitHub profile to Innovact Social (Profile -> Edit About Me)",
    "Verify your phone number (Profile -> Edit About Me)",
    "Upload a minimum of 3 Projects",
    "Link GitHub repos to all your projects (Add/Edit Project -> Github icon -> Add Repo link)",
    "Update your skills in the Profile",
    "Once you have checked all the above points, please click on 'Apply Now' to submit your assignment",
  ];
  return (
    <Alert className="bg-blue-50 border-blue-200 ">
      <ChevronRight
        onClick={() => setIsAlertOpen(!isAlertOpen)}
        className={`w-5 h-5 text-blue-600 transition-transform duration-200 cursor-pointer hover:bg-blue-100 rounded  ${
          isAlertOpen ? "rotate-90" : "rotate-0"
        }`}
      />
      <AlertTitle className=" text-gray-900 mb-3">
        Eligibility to Apply for a Job
      </AlertTitle>
      <AlertDescription>
        {isAlertOpen && (
          <ol className="space-y-3 mt-2">
            {eligibilitySteps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <span className="text-sm text-gray-700 leading-relaxed flex-1">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        )}
      </AlertDescription>
    </Alert>
  );
}

function Opportunity() {
  function JobCard() {
    return (
      <Card className="bg-white shadow-sm border border-gray-200 py-2">
        <CardContent className="p-3 sm:p-6">
          {/* Company Name */}
          <p className="text-sm text-gray-600 mb-2">Webinix</p>
          {/* Job Title */}
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Python Backend Developer Intern
          </h2>
          {/* Status Badge */}
          <Badge className="bg-green-100 text-green-800 mb-4">Active Job</Badge>
          {/* Job Details Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge
              variant="outline"
              className="text-gray-600 border-gray-300 bg-gray-50"
            >
              ₹15,000
            </Badge>
            <Badge
              variant="outline"
              className="text-gray-600 border-gray-300 bg-gray-50"
            >
              internship
            </Badge>
            <Badge
              variant="outline"
              className="text-gray-600 border-gray-300 bg-gray-50"
            >
              Remote
            </Badge>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Posted 5 days ago</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
              <Briefcase className="w-4 h-4 mr-2" />
              View job
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto space-y-4">
        {/* Collapsible Alert */}
        <EligibilityAlert />

        {/* Add Portfolio Link Section */}
        <div className="bg-white p-3 sm:p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg  text-gray-900 mb-2">Add portfolio link</h3>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Paste your portfolio link"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-600"
            />
            <div className="flex items-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Job Card */}
        <JobCard />
      </div>
    </div>
  );
}

export default Opportunity;
