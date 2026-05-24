
"use client";

import { useState } from 'react';
import { createCommentIdeas } from '@/lib/courses/action';
import { useRouter } from 'next/navigation';
import { useSession } from '@/lib/auth-client';
import { EditModal } from './EditModal';
import { DeleteAlert } from './DeleteAlert';

export default function CommentForm({ ideas }) {
    // const {} = ideas
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);

    // Destructuring data if you are using standard auth clients (like Better Auth)
    const { data: session } = useSession();
    const router = useRouter();

    const handleComment = async (e) => {
        e.preventDefault();
        if (!comment.trim()) return;

        const form = e.target;
        const formData = new FormData(form);

        const userEmail = session?.user?.email || "anonymous@domain.com";

        const dynamicTitle = ideas?.IdeaTitle || "Untitled Course";
        console.log("Submitting comment for course:", dynamicTitle); 


        const now = new Date();  
        const autoTime = now.toLocaleString(); 


        formData.append("email", userEmail);

        formData.append("title", dynamicTitle); 
        formData.append("time", autoTime);  
        formData.append("comment", comment); 

        try {
            const commentsData = await createCommentIdeas(formData);

            if (commentsData?.insertedId) {
                const newCommentObj = {
                    id: commentsData.insertedId,
                    title: dynamicTitle,
                    time: autoTime,
                    text: comment,
                    email: userEmail
                };

                setCommentsList((prev) => [...prev, newCommentObj]);
                setComment('');
                form.reset();
            }
        } catch (error) {
            console.error("Failed to post comment:", error);
        }
    };

    return (
        <div className="w-full max-w-md bg-gray-400 rounded-xl p-4">
            <h2 className="text-sm font-semibold text-black mb-2">
                Comments ({commentsList.length})
            </h2>
            <h2 className="text-lg font-bold text-black mb-2">Write a Comment</h2>

            <form onSubmit={handleComment}>


                <textarea
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full h-24 rounded border border-gray-500 bg-gray-300 p-2 text-sm text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600"
                    placeholder="Type your comment..."
                />
                <button
                    type="submit"
                    className="bg-indigo-900 hover:bg-indigo-800 disabled:opacity-50 text-white text-sm px-4 py-1.5 rounded transition-colors mt-2"
                >
                    Post
                </button>
            </form>

            {commentsList.length > 0 && (
                <div className="mt-4 space-y-2 border-t border-gray-500 pt-3">
                    {commentsList.map((c) => (
                        <div key={c.id} className="bg-gray-300 p-2 rounded text-sm text-black">
                            <p className="font-semibold text-xs text-gray-700">{c.email}</p>
                            <p className="mt-1">{c.text}</p>
                            {/* <DeleteAlert commentId={c.id} />
                            <EditModal commentId={c.id} /> */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}