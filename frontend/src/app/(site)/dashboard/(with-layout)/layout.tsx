import { getListerAction } from "@/actions";
import Container from "@/components/layout/Container";
import DashNavigation from "@/components/pages/dashboard/DashNavigation";
import DashSidebar from "@/components/pages/dashboard/DashSidebar";
import { PropsWithChildren } from "react";

export default async function layout({ children }: PropsWithChildren) {
  const lister = await getListerAction();

  return (
    <Container>
      <div className="grid grid-cols-12 items-start gap-5 md:py-5">
        <div className="col-span-12 md:col-span-3">
          <DashSidebar lister={lister} />
        </div>

        <div className="col-span-12 px-5 md:col-span-9 md:p-5">
          <DashNavigation lister={lister} />
          {children}
        </div>
      </div>
    </Container>
  );
}
