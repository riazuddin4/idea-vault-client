"use client"
import CourseCardIdeas from '@/components/CourseCardIdeas';
import { authClient } from '@/lib/auth-client';
import { fetchIdeasByEmail } from '@/lib/courses/data';
import { BookOpen } from 'lucide-react';
import React, { useState, useEffect } from 'react';


const MyIdeasPage = ({ user }) => {
    const [myIdeas, setMyIdeas] = useState([]);
    const [loading, setLoading] = useState(true); 
   const {data: session} = authClient.useSession();
   
   console.log("Session in MyIdeasPage:", session);
    useEffect(() => {
        const getIdeas = async () => {
            console.log("Fetching ideas for email:", user);
            if (session?.user?.email) {
                setLoading(true);
                const ideas = await fetchIdeasByEmail(session?.user?.email);
                setMyIdeas(ideas);
                setLoading(false);
            }
        };
        getIdeas();
    }, [session?.user?.email]); 

    return (
        <div className="min-h-screen ">
            <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                        My Ideas
                    </h2>
                </div>

                
                {loading ? (
                    <p className="text-center text-gray-500">Loading your ideas...</p>
                ) : myIdeas.length === 0 ? (
                    <p className="text-center text-gray-500">No ideas found.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {myIdeas.map((mongoidea) => (
                            <CourseCardIdeas key={mongoidea._id} mongoidea={mongoidea} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default MyIdeasPage;