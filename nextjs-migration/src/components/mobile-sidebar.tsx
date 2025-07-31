"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GuidesSidebar } from "@/components/guides-sidebar"
import { defaultGuideNavItems } from "@/components/guides-sidebar"

export function MobileSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>
      {open && (
        <div className="fixed inset-0 top-14 z-50 bg-background md:hidden">
          <div className="container flex justify-end py-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <GuidesSidebar 
            items={defaultGuideNavItems} 
            onItemClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  )
}