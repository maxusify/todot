import { CalendarCheck } from "lucide-react";
import Link from "next/link";

const NavigationBranding = () => {
  return (
    <div>
      <Link href="/">
        <h1 className="font-extrabold text-[2.5rem] flex items-center">
          <CalendarCheck className="mr-2 w-9 h-9" />
          <span>Todot</span>
        </h1>
      </Link>
    </div>
  );
};

export default NavigationBranding;
