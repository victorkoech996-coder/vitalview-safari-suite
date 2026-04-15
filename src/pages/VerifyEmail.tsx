import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ShieldCheck } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerifyEmail = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as { email?: string })?.email ?? "";

  const handleVerify = async () => {
    if (code.length < 6) {
      toast.error("Please enter the 6-digit code from your email");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.verifyOtp({
      email,
      token: code,
      type: "email",
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Email verified! Welcome aboard.");
    navigate("/dashboard");
  };

  const handleResend = async () => {
    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("A new code has been sent to your email");
    }
  };

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">No email address found.</p>
          <Link to="/signup" className="text-gold-dark font-semibold hover:underline">
            Go to Sign Up
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <ShieldCheck className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl font-bold font-heading text-foreground">Verify Your Email</h1>
          <p className="text-muted-foreground mt-2">
            We sent a 6-digit code to <span className="font-medium text-foreground">{email}</span>
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-lg border border-border space-y-6">
          <div className="flex justify-center">
            <InputOTP maxLength={6} value={code} onChange={setCode}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <Button
            onClick={handleVerify}
            disabled={loading || code.length < 6}
            className="w-full gold-gradient text-earth font-semibold hover:opacity-90"
          >
            {loading ? "Verifying..." : "Verify Email"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Didn't receive a code?{" "}
            <button onClick={handleResend} className="text-gold-dark font-semibold hover:underline">
              Resend Code
            </button>
          </p>
        </div>

        <div className="text-center mt-6">
          <Link to="/signup" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
