"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Import Input component for role name

// Define the type for the capabilities state
type Capabilities = {
  view: boolean;
  update: boolean;
  create: boolean;
  delete: boolean;
  manageUsers: boolean;
  manageRoles: boolean;
  publishContent: boolean;
};

const NewRoleDialog = () => {
  const [roleName, setRoleName] = useState(""); // State for role name
  const [capabilities, setCapabilities] = useState<Capabilities>({
    view: false,
    update: false,
    create: false,
    delete: false,
    manageUsers: false,
    manageRoles: false,
    publishContent: false,
  });

  // Toggle capability state
  const toggleCapability = (capability: keyof Capabilities) => {
    setCapabilities((prev) => ({ ...prev, [capability]: !prev[capability] }));
  };

  // Handle form submission
  const handleSubmit = () => {
    const selectedCapabilities = Object.entries(capabilities)
      .filter(([, isEnabled]) => isEnabled)
      .map(([capability]) => capability);

    console.log("New Role Created:", {
      roleName,
      capabilities: selectedCapabilities,
    });

    // Reset form
    setRoleName("");
    setCapabilities({
      view: false,
      update: false,
      create: false,
      delete: false,
      manageUsers: false,
      manageRoles: false,
      publishContent: false,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">New Role</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        {" "}
        {/* Wider dialog */}
        <DialogHeader>
          <DialogTitle>Create New Role</DialogTitle>
          <DialogDescription>
            Define a new role and assign capabilities.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 font-poppins">
          {/* Role Name Input */}
          <div className="space-y-2">
            <Label htmlFor="roleName">Role Name</Label>
            <Input
              id="roleName"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              placeholder="Enter role name"
            />
          </div>

          {/* Capabilities Section */}
          <div className="space-y-4">
            <Label>Capabilities</Label>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(capabilities).map(([capability, isEnabled]) => (
                <div key={capability} className="flex items-center space-x-2">
                  <Checkbox
                    id={capability}
                    checked={isEnabled}
                    onCheckedChange={() =>
                      toggleCapability(capability as keyof Capabilities)
                    }
                  />
                  <Label htmlFor={capability} className="capitalize">
                    {capability}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <Button onClick={handleSubmit} className="w-full">
            Create Role
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewRoleDialog;
