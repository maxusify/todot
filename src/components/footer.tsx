import { Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full flex justify-center py-5">
      <div>
        <span>Made by</span>{" "}
        <a
          href="https://github.com/maxusify"
          target="_blank"
          className="font-bold"
        >
          Michał Pędzik
        </a>{" "}
        <span>&copy; 2023</span>
      </div>
      <span className="ml-2"> | </span>
      <div className="ml-2 flex items-center">
        <Github className="mr-1 w-4 h-4" />
        <a href="https://github.com/maxusify/todot">GitHub Repository</a>
      </div>
    </div>
  );
};

export default Footer;
