import BackBtn from "@/components/layout/BackBtn";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="from flex min-h-[100vh] items-center justify-center bg-gradient-to-br from-primary-default to-primary-light">
      <div className="relative min-h-[50vh] w-[500px] rounded-xl border bg-white p-10 shadow-2xl md:p-20">
        <div className="absolute left-0 top-0 p-3">
          <BackBtn />
        </div>
        {children}
      </div>
    </div>
  );
}
