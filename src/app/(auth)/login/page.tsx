import { LoginForm } from "@/app/(auth)/login/login-form";
import { Layers } from "lucide-react";


const Page = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Layers />
            </div>
            TeamDesk
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
       
      </div>
    </div>
  );
};
export default Page;
