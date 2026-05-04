"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import UpdateProfileModal from './UpdateProfileModal';

const ProfileCard = ({ user }) => {
    console.log("user name from profile", user);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState(user.name);
    const [imageUrl, setImageUrl] = useState(user.image);
    const [isLoading, setIsLoading] = useState(false);

    const handleSave = async ({ name: newName, imageUrl: newUrl }) => {
        if (!newName.trim()) {
            toast.error("Name cannot be empty");
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch('/api/user/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newName, imageUrl: newUrl })
            });

            if (response.ok) {
                setName(newName);
                setImageUrl(newUrl);
                setIsModalOpen(false);
                toast.success("Profile updated successfully!");
            } else {
                const error = await response.json();
                toast.error("Update failed: " + error.error);
            }
        } catch (error) {
            console.error('Profile update error:', error);
            toast.error("An error occurred while updating profile");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="card bg-base-100 shadow-md w-96 p-8 flex flex-col items-center gap-4">
                <Image
                    src={imageUrl}
                    alt="Profile Picture"
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-green-500 object-cover"
                />

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn btn-outline btn-sm btn-success"
                >
                    Update Profile
                </button>

                <div className="text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Name</p>
                    <p className="text-lg font-semibold">{name}</p>
                </div>

                <div className="text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Email</p>
                    <p className="text-lg font-semibold">{user.email}</p>
                </div>
            </div>

            <UpdateProfileModal
                isOpen={isModalOpen}
                currentName={name}
                currentImageUrl={imageUrl}
                onSave={handleSave}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default ProfileCard;