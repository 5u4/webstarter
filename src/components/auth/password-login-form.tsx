import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuthMutating } from "@/lib/api/auth/keys";
import {
  passwordLoginFormSchema,
  passwordLoginMutationOptions,
} from "@/lib/api/auth/password-login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";

export function PasswordLoginForm() {
  const form = useForm<z.infer<typeof passwordLoginFormSchema>>({
    resolver: zodResolver(passwordLoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const authMutating = useAuthMutating();
  const { mutate, error, isPending } = useMutation(
    passwordLoginMutationOptions()
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => mutate(values))}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          disabled={authMutating > 0}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          disabled={authMutating > 0}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && (
          <div className="text-destructive text-sm">
            {error.message ?? "An error occurred during log in."}
          </div>
        )}

        <Button type="submit" className="w-full" disabled={authMutating > 0}>
          {isPending ? <LoaderCircleIcon className="animate-spin" /> : <></>}
          Login Now
        </Button>
      </form>
    </Form>
  );
}
