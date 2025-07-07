"use client";

import { useState, useEffect, useRef } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const tabIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      if (tabIndicatorRef.current) {
        const activeTabElement = document.querySelector(
          `[data-state="active"]`
        ) as HTMLElement;
        if (activeTabElement) {
          const tabRect = activeTabElement.getBoundingClientRect();
          const containerRect =
            tabIndicatorRef.current.parentElement?.getBoundingClientRect();

          if (containerRect) {
            const leftOffset = tabRect.left - containerRect.left;
            tabIndicatorRef.current.style.transform = `translateX(${leftOffset}px)`;
            tabIndicatorRef.current.style.width = `${tabRect.width}px`;
          }
        }
      }
    };

    // Initial update
    updateIndicator();

    // Update on resize
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  const handleGoogleAuth = () => {
    setIsLoading(true);
    // Simulate Google auth
  };

  const handleEmailAuth = (type: "login" | "register") => {
    setIsLoading(true);
    console.log(type);
    // Simulate email auth
  };

  const handleCheckboxChange = (checked: boolean | "indeterminate") => {
    setAcceptTerms(checked === true);
  };

  return (
    <div className="min-h-screen bg-muted flex items-start justify-center p-4 pt-10 md:pt-16 ">
      <div className="w-full  max-w-md">
        <Card className="border-blue-200 shadow-lg ">
          <CardHeader className="text-center p-0">
            <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
              {activeTab === "login" ? "Sign In" : "Create Account"}
            </CardTitle>
            <CardDescription className="text-gray-600">
              Choose your preferred method to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <Tabs
              defaultValue="login"
              className="w-full"
              onValueChange={(value) => setActiveTab(value)}
            >
              <TabsList className="grid w-full grid-cols-2 mb-6 relative bg-gray-100 p-1">
                <div
                  ref={tabIndicatorRef}
                  className="absolute top-1 left-1 h-[calc(100%-8px)] bg-blue-500 opacity-55 rounded-md transition-all duration-300 ease-out shadow-sm"
                  style={{ width: "calc(50% - 4px)" }}
                />
                <TabsTrigger
                  value="login"
                  className="relative z-10 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:shadow-none text-gray-600 font-medium"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="relative z-10 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:shadow-none text-gray-600 font-medium"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <Eye className="h-4 w-4" />
                      ) : (
                        <EyeOff className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                    Forgot password?
                  </button>
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => handleEmailAuth("login")}
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-gray-500">
                      or
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-gray-300 hover:bg-gray-50"
                  onClick={handleGoogleAuth}
                  disabled={isLoading}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </TabsContent>

              <TabsContent value="register" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reg-email" className="text-gray-700">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="reg-email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-password" className="text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="reg-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="pl-10 pr-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <Eye className="h-4 w-4" />
                      ) : (
                        <EyeOff className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-gray-700">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="pl-10 pr-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <Eye className="h-4 w-4" />
                      ) : (
                        <EyeOff className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={handleCheckboxChange}
                    className="mt-1 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                  <Label
                    htmlFor="terms"
                    className="text-xs sm:text-sm text-gray-700 leading-relaxed flex flex-wrap gap-x-1 gap-y-0
                    "
                  >
                    I agree to the{" "}
                    <button className="text-blue-600 hover:text-blue-800 hover:underline">
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button className="text-blue-600 hover:text-blue-800 hover:underline">
                      Privacy Policy
                    </button>
                  </Label>
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => handleEmailAuth("register")}
                  disabled={isLoading || !acceptTerms}
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
