"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Share,
  Globe,
  Linkedin,
  FileText,
  Download,
  AlertCircle,
} from "lucide-react";
import { EligibilityAlert } from "@/components/homeComponents/Opportunity";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function OpportunityApply() {
  const jobDescription = `
    <h3><strong>Responsibilities:</strong></h3>
    <ul>
      <li>Design, develop, and maintain scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
      <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
      <li>Write clean, efficient, and reusable code across the full stack.</li>
      <li>Debug, troubleshoot, and resolve application issues.</li>
      <li>Develop and consume RESTful APIs and integrate third-party services.</li>
      <li>Participate in code reviews, standups, and sprint planning meetings.</li>
      <li>Ensure applications are optimized for speed, scalability, and responsiveness.</li>
    </ul>
    
    <h3><strong>Skill Requirements:</strong></h3>
    <ul>
      <li>Strong proficiency in JavaScript (ES6+), HTML, and CSS.</li>
      <li>Hands-on experience with React.js (components, hooks, state management).</li>
      <li>Solid understanding of Node.js and Express.js for server-side development.</li>
      <li>Experience working with MongoDB.</li>
      <li>Knowledge of RESTful APIs, JSON, and asynchronous request handling.</li>
      <li>Experience with version control systems like Git.</li>
      <li>Basic understanding of deployment tools and environments (Heroku, Vercel, etc.) is a plus.</li>
      <li>Eagerness to learn, collaborate, and contribute to a fast-paced development environment.</li>
    </ul>
    
    <p>Based on performance, the stipend may be increased up to ₹20,000.</p>
  `;

  const requiredSkills = ["react", "javascript", "typescript", "node.js"];
  const preferredSkills = ["mongodb"];

  return (
    <div className="min-h-screen bg-muted">
      <div className="p-4 pb-24">
        <Card className="max-w-3xl mx-auto bg-white relative">
          <CardContent className="p-4 sm:p-6">
            {/* Share Icon - Top Right */}
            <div className="absolute top-6 right-6">
              <Share className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
            </div>

            {/* Company & Role Info */}
            <div className="mb-6 pr-12">
              <p className="text-sm text-gray-600 mb-2">i10Ai</p>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                MERN Stack Developer Intern
              </h2>

              {/* Social Links */}
              <div className="flex gap-3 mb-4">
                <Globe className="w-5 h-5 text-gray-600" />
                <Linkedin className="w-5 h-5 text-blue-600" />
              </div>

              {/* Job Status */}
              <Badge className="bg-green-100 text-green-800 mb-4">
                Active Job
              </Badge>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge
                  variant="outline"
                  className="text-gray-600 border-gray-300 bg-gray-50"
                >
                  ₹8,000 - ₹12,000
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
            </div>

            {/* Eligibility Alert */}
            <EligibilityAlert />

            {/* Job Description */}
            <div className="my-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Job Description
              </h3>
              <div
                className="text-sm text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: jobDescription }}
              />
            </div>

            {/* Required Skills */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Required Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {requiredSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`${
                      skill === "javascript"
                        ? "bg-blue-100 text-blue-800 border-blue-300"
                        : "text-gray-600 border-gray-300 bg-gray-50"
                    }`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Preferred Skills */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Preferred Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {preferredSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-gray-600 border-gray-300 bg-gray-50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Assignment Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Assignment Details
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Demonstrate your understanding of full-stack development using
                the MERN stack by building a basic e-commerce web application
                with core features.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Please refer the document for more details and submit the
                assignment within the deadline.
              </p>

              {/* View Assignment */}
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-900">
                      View Document (PDF)
                    </p>
                    <p className="text-sm text-blue-700">
                      Assignment uploaded by employer
                    </p>
                  </div>
                </div>
                <Download className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-orange-600">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Deadline passed</span>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                Apply Now
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-scroll z-[100] w-[100vw]">
              <SheetHeader>
                <SheetTitle>Submit Your Project</SheetTitle>
                <SheetDescription>
                  Please provide the URLs for your project submission.
                </SheetDescription>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4 py-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="github-url"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      GitHub Live URL
                    </label>
                    <input
                      id="github-url"
                      type="url"
                      placeholder="https://github.com/username/repository"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hosted-url"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Hosted Site URL
                    </label>
                    <input
                      id="hosted-url"
                      type="url"
                      placeholder="https://yoursite.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="docs-url"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Documentation URL
                    </label>
                    <input
                      id="docs-url"
                      type="url"
                      placeholder="https://docs.yoursite.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md mt-6">
                    Submit Project
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default OpportunityApply;
