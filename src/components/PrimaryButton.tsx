export function PrimaryButton({
  children,
  href = "/",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <button
      type="button"
      className="bg-blue-500 text-white px-4 py-2 rounded-md bg-brown shadow-md"
    >
      <a href={href}>{children}</a>
    </button>
  );
}
