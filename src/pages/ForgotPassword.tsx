import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Mail, CheckCircle, Clock, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<"email" | "sent" | "success">("email");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [canResend, setCanResend] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0 && step === "sent") {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [countdown, step]);

  const handleSendReset = async () => {
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep("sent");
      setCountdown(30);
      setCanResend(false);
    }, 1500);
  };

  const handleResend = () => {
    if (!canResend) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCountdown(30);
      setCanResend(false);
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      {/* bg-gradient-to-br from-blue-50 to-indigo-100 */}
      <div className="w-full max-w-md fade-in">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
            {step === "email" && "Reset Password"}
            {step === "sent" && "Check Your Email"}
            {step === "success" && "Password Reset"}
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            {step === "email" &&
              "Enter your email to receive reset instructions"}
            {step === "sent" && "We've sent password reset instructions"}
            {step === "success" && "Your password has been successfully reset"}
          </p>
        </div>

        <Card className="border-blue-200">
          <CardHeader className="">
            <div className="flex items-center justify-center mb-4">
              {step === "email" && (
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
              )}
              {step === "sent" && (
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
              )}
              {step === "success" && (
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {step === "email" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <Button
                  onClick={handleSendReset}
                  disabled={isLoading || !email}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-gray-200"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Reset Instructions"
                  )}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Remember your password?{" "}
                    <Link
                      to="/auth"
                      className="text-blue-600 hover:underline font-medium "
                    >
                      Sign in instead
                    </Link>
                  </p>
                </div>
              </>
            )}

            {step === "sent" && (
              <>
                <Alert className="border-blue-200 bg-blue-50">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800">
                    We've sent password reset instructions to{" "}
                    <span className="font-medium break-all">{email}</span>
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">
                      Didn't receive the email? Check your spam folder or
                    </p>

                    {!canResend ? (
                      <div className="space-y-2">
                        <Progress
                          value={((30 - countdown) / 30) * 100}
                          className="h-2 bg-blue-100 rounded-full [&>div]:bg-blue-600 transition-colors duration-500"
                        />
                        <p className="text-sm text-gray-500">
                          Resend available in {formatTime(countdown)}
                        </p>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        onClick={handleResend}
                        disabled={isLoading}
                        className="w-full bg-transparent"
                      >
                        {isLoading ? (
                          <>
                            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                            Resending...
                          </>
                        ) : (
                          "Resend Email"
                        )}
                      </Button>
                    )}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">
                      What's next?
                    </h4>
                    <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                      <li>Check your email inbox</li>
                      <li>Click the reset link in the email</li>
                      <li>Create a new password</li>
                      <li>Sign in with your new password</li>
                    </ol>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    variant="ghost"
                    onClick={() => setStep("success")}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    I've reset my password
                  </Button>
                </div>
              </>
            )}

            {step === "success" && (
              <>
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Your password has been successfully reset. You can now sign
                    in with your new password.
                  </AlertDescription>
                </Alert>

                <Button
                  onClick={() => {}}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-gray-200"
                >
                  Continue to Sign In
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Need help?{" "}
                    <Link
                      to="/support"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Contact Support
                    </Link>
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            For security reasons, password reset links expire after 24 hours. If
            you didn't request this reset, you can safely ignore this email.
          </p>
        </div>
      </div>
    </div>
  );
}
