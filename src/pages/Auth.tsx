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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    // <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-4">
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md transform transition-all duration-300 hover:scale-[1.01]">
        <Card className="border border-blue-100 shadow-2xl overflow-hidden relative bg-white py-0">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
          <CardHeader className="text-center p-3 sm:p-6 pb-4">
            <div className="mx-auto flex items-center justify-center mb-4">
              <img
                src="/images/inovact_dp.png"
                alt="Inovact Logo"
                className="h-16 w-auto"
                onError={(e) => {
                  // Fallback in case the image fails to load
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzI1NjNjYSI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptLTEgMTVoMnYyaC0ydi0yem0wLTEzaDJ2MTBoLTJWNnoiLz48L3N2Zz4=";
                }}
              />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">
              {activeTab === "login"
                ? "Look who’s back"
                : "Start Your Proof Era"}
            </CardTitle>
            <CardDescription className="text-gray-500 mt-1">
              {activeTab === "login"
                ? "Sign in and get back to the grind (the fun kind)"
                : "The future is collaborative. Join in now!"}
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-8 pb-8">
            <Tabs
              defaultValue="login"
              className="w-full"
              onValueChange={(value) => setActiveTab(value)}
            >
              <TabsList className="flex w-full mb-8 bg-gray-100 p-1 rounded-xl h-11">
                <TabsTrigger
                  value="login"
                  className="flex-1 h-full flex items-center justify-center text-sm uppercase tracking-wide font-medium 
                    rounded-lg transition-colors duration-200
                    data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm
                    data-[state=inactive]:text-gray-500 hover:text-gray-600"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="flex-1 h-full flex items-center justify-center text-sm uppercase tracking-wide font-medium 
                    rounded-lg transition-colors duration-200
                    data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm
                    data-[state=inactive]:text-gray-500 hover:text-gray-600"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-11 transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700">
                    Password
                  </Label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-11 transition-all duration-200"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-blue-600 transition-colors flex items-center justify-center"
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 font-medium text-base shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                  onClick={() => handleEmailAuth("login")}
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>

                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-3 text-sm text-gray-400">
                      or
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-gray-300 hover:bg-gray-50 h-11 font-medium text-gray-700 transition-all duration-200 hover:border-gray-400"
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
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      Email
                    </Label>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-11 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700">
                      Password
                    </Label>
                    <div className="relative group">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-11 transition-all duration-200"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-blue-600 transition-colors flex items-center justify-center"
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
                    <div className="relative group">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                      <Input
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-11 transition-all duration-200"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-blue-600 transition-colors flex items-center justify-center"
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
                </div>

                <div className="pt-2">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="terms"
                      checked={acceptTerms}
                      onCheckedChange={handleCheckboxChange}
                      className="h-4 w-4 rounded border-gray-300 text-white focus:ring-blue-500 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-gray-600 flex-1 leading-tight"
                    >
                      I agree to the{" "}
                      <a
                        href="https://www.inovact.in/terms-of-use"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://www.inovact.in/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 font-medium text-base shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                    onClick={() => handleEmailAuth("register")}
                    disabled={isLoading || !acceptTerms}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
