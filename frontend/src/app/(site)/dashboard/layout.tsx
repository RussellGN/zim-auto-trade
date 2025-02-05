import { getLister } from "@/actions/listings";
import Container from "@/components/layout/Container";
import DashNavigation from "@/components/pages/dashboard/DashNavigation";
import DashSidebar from "@/components/pages/dashboard/DashSidebar";
import { PropsWithChildren } from "react";

export default async function layout({ children }: PropsWithChildren) {
  const lister = await getLister();

  return (
    <Container>
      <div className="grid grid-cols-12 items-start gap-5 py-5">
        <div className="col-span-12 md:col-span-3">
          <DashSidebar lister={lister} />
        </div>

        <div className="col-span-12 p-5 md:col-span-9">
          <DashNavigation />
          {children}
        </div>
      </div>
    </Container>
  );
}
