import { Outlet } from "react-router-dom";
import { SideBar } from "@/components/SideBar";

import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

import { TooltipProvider } from "@/components/ui/tooltip";

export default function App() {
    return (
        <TooltipProvider>
            <SidebarProvider
                style={{
                    "--sidebar-width": "14rem",
                    "--sidebar-width-mobile": "18rem",
                }}
            >
                <SideBar />

                <SidebarInset className="relative min-h-screen w-full bg-transparent p-0">
                    <SidebarTrigger className="absolute left-3 top-3 z-50 bg-[#f4efe7]/90 text-[#171717] hover:bg-[#eadfd4]" />

                    <div className="min-h-screen w-full min-w-0 overflow-x-hidden p-0">
                        <Outlet />
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </TooltipProvider>
    );
}