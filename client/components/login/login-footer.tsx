"use client";

import Link from "next/link";

export function LoginFooter() {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Sign up
        </Link>
      </p>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link
          href="/terms"
          className="hover:text-foreground transition-colors"
        >
          Terms of Service
        </Link>
        <span>·</span>
        <Link
          href="/privacy"
          className="hover:text-foreground transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
