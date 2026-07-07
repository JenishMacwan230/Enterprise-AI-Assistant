"use client";

import { Camera } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function SettingsProfile() {
  return (
    <div className="space-y-6">
      {/* Avatar Section */}
      <div className="flex items-center gap-6">
        <div className="group relative">
          <Avatar className="size-20 ring-2 ring-border ring-offset-2 ring-offset-background transition-all duration-300 group-hover:ring-primary/50">
            <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-lg font-semibold text-foreground">
              JM
            </AvatarFallback>
          </Avatar>
          {/* Edit overlay */}
          <button className="absolute inset-0 flex items-center justify-center rounded-full bg-black/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <Camera className="size-5 text-white" />
          </button>
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground">
            Profile Picture
          </h3>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Click on the avatar to upload a new photo
          </p>
        </div>
      </div>

      <Separator className="opacity-50" />

      {/* Form Card */}
      <Card className="glass border-border/30">
        <CardHeader>
          <CardTitle className="text-base">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Full Name */}
          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-foreground"
            >
              Full Name
            </label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              defaultValue="Jenish Macwan"
              className="bg-background/50 transition-all duration-200 focus-visible:bg-background"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              defaultValue="jenish@example.com"
              className="bg-background/50 transition-all duration-200 focus-visible:bg-background"
            />
          </div>

          {/* Role / Title */}
          <div className="space-y-2">
            <label
              htmlFor="role"
              className="text-sm font-medium text-foreground"
            >
              Role / Title
            </label>
            <Input
              id="role"
              placeholder="e.g. Software Engineer"
              defaultValue="Full Stack Developer"
              className="bg-background/50 transition-all duration-200 focus-visible:bg-background"
            />
          </div>

          <Separator className="opacity-50" />

          {/* Actions */}
          <div className="flex items-center gap-3 pt-1">
            <Button className="glow-primary transition-shadow duration-300 hover:shadow-lg">
              Save Changes
            </Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
