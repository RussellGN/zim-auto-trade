import BackBtn from "@/components/layout/BackBtn";
import Container from "@/components/layout/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { settings } from "@/lib/constants";

export default function page() {
  return (
    <Container>
      <div className="my-10">
        <BackBtn />
      </div>

      <div className="mb-20">
        <Tabs className="grid grid-cols-4 items-start gap-4">
          <TabsList className="col-span-1 flex flex-col gap-2">
            {settings.map((setting) => (
              <TabsTrigger key={setting.title} value={setting.title} asChild>
                <Button variant="outline" size="lg" className="justify-start bg-white">
                  {setting.icon}
                  {setting.title}
                </Button>
              </TabsTrigger>
            ))}
          </TabsList>

          <div id="tab_content_container" className="col-span-3">
            {settings.map((setting) => (
              <TabsContent key={setting.title} value={setting.title} className="relative w-full">
                <p className="mb-3 flex items-center gap-3 px-3">
                  {setting.icon}
                  {setting.description}
                </p>

                <div className="rounded-lg bg-white p-8">{setting.content}</div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </Container>
  );
}
