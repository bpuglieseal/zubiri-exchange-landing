import Button from "./button";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="text-[rgba(255,255,255,0.8)] hover:text-[rgba(255,255,255,1)] transition-colors"
    >
      {children}
    </a>
  );
};

export default function Header() {
  return (
    <header className="p-4 bg-dark text-white py-4 px-16 border-b border-b-border-header">
      <div className="flex flex-row justify-between items-center mx-auto xl:max-w-6xl">
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center gap-4">
            <img
              src="logo.png"
              alt="Zubiri Exchange Logo"
              className="w-12 h-12 rounded-xl"
            />
            <h2 className="text-2xl font-medium">Zubiri Exchange</h2>
          </div>
          <div>
            <nav>
              <ul className="flex flex-row items-center space-x-3.5">
                <li>
                  <NavLink href="#">Overview</NavLink>
                </li>
                <li>
                  <NavLink href="#">Benefits</NavLink>
                </li>
                <li>
                  <NavLink href="#">Features</NavLink>
                </li>
                <li>
                  <NavLink href="#">Testimonials</NavLink>
                </li>
                <li>
                  <NavLink href="#">Pricing</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex flex-row items-center gap-5">
          <NavLink href="#">Contact Us</NavLink>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}
