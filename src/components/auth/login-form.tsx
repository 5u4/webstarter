import { OAuthLoginButton } from "@/components/auth/oauth-login-button";

export function LoginForm() {
  return (
    <div className="flex flex-col gap-6">
      <OAuthLoginButton provider="discord" />
    </div>
  );
}
