const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full flex justify-center py-5">
      <div>
        <span>Made by</span>{" "}
        <a href="https://github.com/maxusify" target="_blank" className="font-bold">
          Michał Pędzik
        </a>{" "} 
        <span>&copy; 2023</span>
      </div>
    </div>
  );
};

export default Footer;
