export default function Link({
  children,
  href = "/",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a href={href} className="text-sm font-medium">
      {children}
    </a>
  );
}
