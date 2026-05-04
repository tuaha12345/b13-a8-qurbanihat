import ProfileCard from "@/app/component/ProfileCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ProfilePage = async() => {
          const session = await auth.api.getSession({
            headers: await headers()
        })
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <ProfileCard user={session.user} />
        </div>
    );
};

export default ProfilePage;