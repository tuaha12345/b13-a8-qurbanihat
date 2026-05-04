import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';

const UpdateProfileModal = ({ isOpen, currentName, currentImageUrl, onSave, onClose }) => {
    const [formName, setFormName] = useState("");
    const [formImageUrl, setFormImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Sync form with current values when modal opens
    useEffect(() => {
        if (isOpen) {
            setFormName(currentName);
            setFormImageUrl(currentImageUrl);
        }
    }, [isOpen, currentName, currentImageUrl]);

    const handleSave = async () => {
        if (!formName.trim()) {
            toast.error("Name cannot be empty");
            return;
        }
        
        setIsLoading(true);
        await onSave({ name: formName, imageUrl: formImageUrl });
        setIsLoading(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6 md:px-1">
            <div className="bg-base-100 rounded-xl shadow-lg w-96 p-6 flex flex-col gap-4">

                <h2 className="text-lg font-semibold">Update Profile</h2>

                {/* Name Input */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-400">Name</label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Enter your name"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                    />
                </div>

                {/* Image URL Input */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-400">Profile Image URL</label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="https://example.com/photo.jpg"
                        value={formImageUrl}
                        onChange={(e) => setFormImageUrl(e.target.value)}
                    />
                </div>

                {/* Image Preview */}
                {formImageUrl && (
                    <div className="flex items-center gap-3">
                        <Image
                            src={formImageUrl}
                            alt="Preview"
                            width={48}
                            height={48}
                            className="rounded-full border-2 border-green-500 object-cover"
                        />
                        <span className="text-sm text-gray-400">Preview</span>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-end gap-2 mt-2">
                    <button 
                        onClick={onClose} 
                        className="btn btn-ghost btn-sm"
                        disabled={isLoading}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="btn btn-success btn-sm"
                        disabled={isLoading}
                    >
                        {isLoading ? "Saving..." : "Save"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default UpdateProfileModal;