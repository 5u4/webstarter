import { OAuthLoginButton } from "@/components/auth/oauth-login-button";
import { PasswordLoginForm } from "@/components/auth/password-login-form";
import { PasswordSignUpForm } from "@/components/auth/password-signup-form";
import { Button } from "@/components/ui/button";
import { SeparatorWithText } from "@/components/ui/separator-with-text";
import { useState } from "react";

export function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex flex-col gap-6 px-4 max-w-md w-full">
      <div className="text-center space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-normal text-balance">
          Welcome back!
        </h1>
        <LoginSignUpSwitchText isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
      </div>

      {isSignUp ? <PasswordSignUpForm /> : <PasswordLoginForm />}
      <SeparatorWithText className="text-sm uppercase" text="or sign in with" />
      <OAuthLoginButton provider="discord" />
    </div>
  );
}

interface LoginSignUpSwitchTextProps {
  isSignUp: boolean;
  setIsSignUp: (value: boolean) => void;
}

function LoginSignUpSwitchText({
  isSignUp,
  setIsSignUp,
}: LoginSignUpSwitchTextProps) {
  return (
    <p className="text-muted-foreground text-sm">
      {isSignUp ? (
        <>
          Already have an account?{" "}
          <Button
            variant="link"
            className="p-0"
            onClick={() => setIsSignUp(false)}
          >
            Log in
          </Button>
        </>
      ) : (
        <>
          New to webstarter?{" "}
          <Button
            variant="link"
            className="p-0"
            onClick={() => setIsSignUp(true)}
          >
            Sign up
          </Button>
        </>
      )}
    </p>
  );
}
