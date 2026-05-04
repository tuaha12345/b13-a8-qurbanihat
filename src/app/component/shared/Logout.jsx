"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await authClient.signOut({ callbackURL: "/" });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("SignOut successful");
      router.refresh();
    }
  };

  return (
    <>
      <li className="text-red-400 cursor-pointer font-bold" onClick={handleLogout}>
        LogOut
      </li>
    </>
  );
}
