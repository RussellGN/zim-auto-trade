import BackBtn from "@/components/layout/BackBtn";
import Container from "@/components/layout/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { settings } from "@/lib/constants";

export default function page() {
  return (
    <Container>
      <div className="p-5 text-sm md:text-base">
        <div className="mb-5 md:my-10">
          <BackBtn />
        </div>

        <div className="md:mb-20">
          <Tabs className="grid grid-cols-4 items-start gap-4">
            <TabsList className="col-span-4 flex justify-center gap-2 md:col-span-1 md:flex-col md:justify-start">
              {settings.map((setting) => (
                <TabsTrigger key={setting.title} value={setting.title} asChild>
                  <Button variant="outline" size="lg" className="justify-start bg-white">
                    {setting.icon}
                    {setting.title}
                  </Button>
                </TabsTrigger>
              ))}
            </TabsList>

            <div id="tab_content_container" className="col-span-4 md:col-span-3">
              {settings.map((setting) => (
                <TabsContent key={setting.title} value={setting.title} className="relative w-full">
                  <p className="mb-3 flex items-center gap-3 px-3">
                    {setting.icon}
                    {setting.description}
                  </p>

                  <div className="rounded-lg bg-white p-5 md:p-8">{setting.content}</div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </Container>
  );
}
