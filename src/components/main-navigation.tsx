import NavigationBranding from "./main-navigation/branding";
import NavigationMenu from "./main-navigation/menu";

const MainNavigation = () => {
  return (
    <div className="flex justify-between items-center py-5 px-5 lg:px-0">
      <NavigationBranding />
      <NavigationMenu />
    </div>
  );
};

export default MainNavigation;
