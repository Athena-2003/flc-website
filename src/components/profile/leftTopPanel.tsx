import { Pencil } from "lucide-react";
import React, { forwardRef } from "react";
import { LuShare2 } from "react-icons/lu";
import { toast } from "sonner";

import NotFound from "~/pages/404";

import { Button } from "~/components/ui/button";

import EditUserForm from "~/components/profile/editUserForm";
import ProfileImage from "~/components/profile/profileImage";
import QRCode from "~/components/profile/qrcode";
import { RadialCard } from "~/components/utils/radialCard";
import { env } from "~/env";
import { cn } from "~/lib/utils";
import { type User, useUser } from "~/store";

const LeftPanel = forwardRef<
  HTMLDivElement,
  { className?: string; notMine: boolean }
>(({ className, notMine }, ref) => {
  const { user } = useUser();
  if (!user) return <NotFound />;
  return (
    <InnerLeftPanel
      ref={ref}
      className={className}
      user={user}
      notMine={notMine}
    />
  );
});
LeftPanel.displayName = "LeftPanel";

const InnerLeftPanel = forwardRef<
  HTMLDivElement,
  { className?: string; user: User; notMine: boolean }
>(({ className, user, notMine }, ref) => {
  return (
    <RadialCard
      ref={ref}
      className={cn(
        className,
        "relative flex flex-col items-center justify-evenly gap-3 rounded-lg  bg-card p-10",
      )}
    >
      <Button
        variant={"ghost"}
        className="absolute right-0 top-0 m-4 px-2"
        onClick={async () => {
          await navigator.clipboard.writeText(
            env.NEXT_PUBLIC_CANONICAL_URL + "profile/" + user.id,
          );
          toast.success("Copied to clipboard");
        }}
      >
        <LuShare2 className="size-8" />
      </Button>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <ProfileImage notMine={notMine} />
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <p className="text-center text-3xl">{user.name}</p>
          <p className="text-sm opacity-60">
            FLC Position - {user.position ?? "None"}
          </p>
          <div className="flex gap-5">
            <QRCode />
            {!notMine && (
              <EditUserForm>
                Edit<Pencil className="ml-2 size-5"></Pencil>
              </EditUserForm>
            )}
          </div>
        </div>
      </div>
      <div className="mx-0 flex flex-col gap-3 self-start text-lg first:*:*:opacity-60 md:mx-10">
        <div>
          <p>Phone</p>
          <p>{user.phone}</p>
        </div>
        <div>
          <p>Email</p>
          <p>{user.email}</p>
        </div>
        <div>
          <p>Branch</p>
          <p>{user.Branch.name}</p>
        </div>
        <div>
          <p>Bio</p>
          <p>{user.bio.length > 0 ? user.bio : "-"}</p>
        </div>
      </div>
    </RadialCard>
  );
});
InnerLeftPanel.displayName = "InnerLeftPanel";

export default LeftPanel;
