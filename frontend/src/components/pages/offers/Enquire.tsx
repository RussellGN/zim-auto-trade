import ContentModal from "@/components/general/ContentModal";
import { Button } from "@/components/ui/button";
import { iconSize, placeholderImage } from "@/lib/constants";
import { ListingInterface } from "@/lib/interfaces";
import { AtSign, LinkIcon, Mail, MapPin, Phone, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type propTypes = {
  disabled: boolean;
  listing: ListingInterface;
};

export default function Enquire({ disabled, listing }: propTypes) {
  return (
    <ContentModal
      trigger={
        <Button disabled={disabled} className="w-full bg-primary-default text-white">
          Enquire <Mail size={iconSize} />
        </Button>
      }
      icon={<Mail size={iconSize} />}
      title="Enquire Listing"
      description={`Here's how to get in touch with the ${listing.lister.type} that listed this vehicle`}
    >
      <div>
        <div className="grid grid-cols-12 justify-between gap-5 md:w-[80vw] md:py-5">
          <div className="col-span-12 md:col-span-6">
            <div className="md:px-3">
              <h3 className="mb-3 w-fit border-b-2 px-2 text-lg">Profile</h3>

              <div className="flex items-start gap-4">
                <Image
                  alt={listing.lister.name}
                  src={listing.lister.image || placeholderImage}
                  width={80}
                  height={80}
                  className="size-[4rem] rounded-md border bg-slate-700 object-cover shadow md:size-[9rem]"
                />

                <div>
                  <div className="mb-1 text-lg font-semibold md:mb-2">{listing.lister.name}</div>

                  <div className="mb-1 flex items-center gap-1 md:mb-2">
                    <MapPin size={iconSize - 2} />
                    {listing.lister.location}
                  </div>

                  <div className="mb-2 flex items-center gap-1 md:mb-3">
                    <Users size={iconSize - 2} />
                    {listing.lister.type}
                  </div>

                  <div className="w-fit rounded border bg-[whitesmoke] p-0.5 shadow-sm md:p-2">
                    <p className="max-w-prose text-sm md:text-base">{listing.lister.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div>
              <h3 className="mb-3 w-fit border-b-2 px-2 text-lg">Contact details</h3>

              <div className="mb-8 rounded border bg-[whitesmoke] px-2 py-1 text-sm shadow md:rounded-lg md:p-3 md:text-base">
                <div className="mb-2 flex flex-wrap items-center gap-1 md:mb-1 md:flex-nowrap">
                  <Phone size={iconSize - 2} />
                  <div>Phone numbers: </div>
                  <div>{listing.lister.phoneNumbers.join(", ")}</div>
                </div>

                <div className="mb-2 flex flex-wrap items-center gap-1 md:mb-1 md:flex-nowrap">
                  <AtSign size={iconSize - 2} />
                  <div>Email: </div>
                  <Link
                    href={`mailto:${listing.lister.email}`}
                    className="text-primary-default underline"
                  >
                    {listing.lister.email}
                  </Link>
                </div>

                {listing.lister.website && (
                  <div className="mb-2 flex flex-wrap items-center gap-1 md:mb-1 md:flex-nowrap">
                    <LinkIcon size={iconSize - 2} />
                    <div>Website: </div>
                    <Link
                      href={`mailto:${listing.lister.website}`}
                      className="text-primary-default underline"
                    >
                      {listing.lister.website}
                    </Link>
                  </div>
                )}
              </div>

              {listing.lister.socials && (
                <div className="md:px-3">
                  <h4 className="mb-2">Social Media accounts</h4>

                  <div className="flex flex-wrap gap-2">
                    {listing.lister.socials.map((social) => (
                      <Link
                        key={social.platform}
                        href={social.url}
                        className="flex items-center gap-1 rounded border bg-white px-1 py-0.5 text-sm text-primary-default shadow"
                      >
                        <Image
                          alt={social.platform}
                          src={`/platform-logos/${social.platform.toLowerCase()}.svg`}
                          width={80}
                          height={80}
                          className="size-6 object-cover"
                        />
                        {social.platform}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ContentModal>
  );
}
