import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold font-display">404</h1>
        <p className="mt-4 text-muted-foreground">This page drifted into the void.</p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
