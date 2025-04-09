"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/auth-store";
import { useToggleComponentStore } from "@/store/toggle-component-store";

import { Separator } from "@/components/ui/separator";
import PageHeaderCard from "@/components/dashboard/page-header-card";
import ParamsCard from "@/components/dashboard/params-card";
import DataTableCard from "@/components/dashboard/data-table-card";
import ViewDetailsCard from "@/components/dashboard/view-details-card";


export default function Page() {
  const router = useRouter();
  const { userId, sessionExpiry, setUserId, logout } = useAuthStore();

  // useEffect(() => {
  //   const checkSession = async () => {
  //     console.log("Checking session...");

  //     if (sessionExpiry && Date.now() > sessionExpiry) {
  //       console.log("Session expired. Logging out...");
  //       logout();
  //       router.replace("http://localhost/website/index.php");
  //       return;
  //     }

  //     if (!userId) {
  //       try {
  //         const res = await fetch("http://localhost/website/check-auth.php", {
  //           credentials: "include",
  //           cache: "no-store",
  //           headers: { "Content-Type": "application/json" },
  //         });

  //         if (!res.ok) {
  //           throw new Error(`HTTP error! Status: ${res.status}`);
  //         }

  //         const data = await res.json();
  //         console.log("Auth response:", data);

  //         if (data.authenticated) {
  //           setUserId(data.user_id, Date.now() + 60 * 1000);
  //         } else {
  //           console.log("User not authenticated. Redirecting...");
  //           router.replace(data.login_url);
  //         }
  //       } catch (error) {
  //         console.error("Auth check failed:", error);
  //         router.replace("http://localhost/website/index.php");
  //       }
  //     }
  //   };

  //   checkSession();

  //   const interval = setInterval(checkSession, 5 * 60 * 1000);
  //   return () => clearInterval(interval);
  // }, [userId, sessionExpiry, setUserId, logout, router]);

  // Switch components Dashboard Component - View Details Component
  const { value } = useToggleComponentStore();

  return (
    <div className="px-32 py-16 space-y-16">
      <PageHeaderCard />

      {/* <div>Welcome to the Dashboard, User ID: {userId}</div> */}
      <div className="space-y-12">
        <ParamsCard />
        <Separator />
        {value ? <ViewDetailsCard /> : <DataTableCard />}
      </div>
    </div>
  );
}
