import Link from "./Link";
import { PrimaryButton } from "./PrimaryButton";

export default function Header() {
  const links = ["Home", "Booking", "Guides", "Destination", "FAQ"];
  const headerContainer =
    "container mx-auto flex justify-between items-center py-4";

  return (
    <>
      <header>
        <div className="bg-teal shadow-md">
          <div className="bg-teal shadow-md text-white">
            <div className={headerContainer}>
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold">
                  AGTRAVEL
                </a>
              </div>
              <div className="flex space-x-4">
                {links.map((link: string) => (
                  <Link href={link}>{link}</Link>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <Link href="login">Login</Link>
                <PrimaryButton href="signup">Sign up</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
