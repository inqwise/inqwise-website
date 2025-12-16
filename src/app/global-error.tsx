"use client";

import { useEffect } from "react";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Something went wrong</h1>
            <p className="text-muted-foreground">
              An unexpected error occurred. Please try again or return home.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={reset}
              className="bg-primary text-primary-foreground rounded px-4 py-2 text-sm font-medium"
            >
              Try again
            </button>
            <button
              type="button"
              onClick={() => (window.location.href = "/")}
              className="border border-input rounded px-4 py-2 text-sm"
            >
              Go to homepage
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
