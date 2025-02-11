"use client";

import ContentModal from "@/components/general/ContentModal";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { modalDialogSizes, violationOptions } from "@/lib/constants";
import { Info, MailWarning, MessageSquareWarning } from "lucide-react";

export default function ReportBtn() {
  return (
    <ContentModal
      trigger={
        <Button variant="outline" className="border-danger-default text-danger-default">
          Report <MessageSquareWarning size={18} className="-mb-1" />
        </Button>
      }
      icon={<MessageSquareWarning size={18} />}
      title="Report Listing"
      description="Report this listing if it contains incorrect information, is misleading, or violates our guidelines."
      size={modalDialogSizes.md}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-5"
      >
        <div className="mb-8">
          <Label className="mb-5 flex items-center gap-2 px-3" htmlFor="violation">
            <MailWarning size={18} />
            What's wrong with this listing?
          </Label>

          <Select name="violation" required>
            <SelectTrigger className="bg-[whitesmoke] transition-all">
              <SelectValue placeholder="Violation" />
            </SelectTrigger>

            <SelectContent className="mt-3 rounded-2xl bg-white">
              {violationOptions.map((option) => (
                <SelectItem key={option.value} value={option.value} className="capitalize">
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-10">
          <Label className="mb-5 flex items-center gap-2 ps-3" htmlFor="description">
            <Info size={18} />
            Elaborate on your report (optional)
          </Label>

          <Textarea
            className="w-full bg-[whitesmoke]"
            rows={5}
            id="description"
            name="description"
            maxLength={500}
            placeholder="Provide any additional details, such as contact attempts, suspicious behavior, or other concerns."
          />
        </div>

        <div className="px-5 text-right">
          <DialogClose asChild>
            <Button type="submit" className="bg-primary-default text-white">
              Submit
            </Button>
          </DialogClose>
        </div>
      </form>
    </ContentModal>
  );
}
