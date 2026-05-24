"use client"
import CommentInteraction from '@/components/CommentInteraction';
import CourseCardIdeas from '@/components/CourseCardIdeas';
import { authClient } from '@/lib/auth-client';
import { fetchInteractions } from '@/lib/courses/data';
import { BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';


const MyInteractionsPage = ({ user }) => {

    const [myInteractions, setMyInteractions] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data: session } = authClient.useSession();

    console.log("Session in MyInteractionsPage:", session);
    useEffect(() => {
        const getInteractions = async () => {
            console.log("Fetching interactions for email:", user);
            if (session?.user?.email) {
                setLoading(true);
                const interactions = await fetchInteractions(session?.user?.email);
                setMyInteractions(interactions);
                setLoading(false);
            }
        };
        getInteractions();
    }, [session?.user?.email]);


    return (
        // <div className="min-h-screen bg-slate-50">
        //     <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        //         <div className="flex justify-between items-center mb-12">
        //             <h2 className="text-2xl font-bold flex items-center gap-2">
        //                 <BookOpen className="w-6 h-6 text-blue-600" />
        //                 My Interactions
        //             </h2>
        //         </div>


        //         {loading ? (
        //             <p className="text-center text-gray-500">Loading your interactions...</p>
        //         ) : myInteractions.length === 0 ? (
        //             <p className="text-center text-gray-500">No interactions found.</p>
        //         ) : (
        //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        //                 {myInteractions.map((mongoidea) => (
        //                     <CourseCardIdeas key={mongoidea._id} mongoidea={mongoidea} />
        //                 ))}
        //             </div>
        //         )}
        //     </main>
        // </div>

        <div className="min-h-screen bg-slate-50">
            <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-6">My Interactions</h2>

                {loading ? (
                    <p className="text-center text-gray-500">Loading your interactions...</p>
                ) : myInteractions.length === 0 ? (
                    <p className="text-center text-gray-500">No interactions found.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {myInteractions.map((interaction) => (
                            <div
                                key={interaction._id}
                                className="w-[800px] mx-auto p-4 border border-gray-200 rounded-lg shadow-sm"
                            >
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {interaction.title}
                                </h3>
                                <p className="text-gray-600 mt-1">{interaction.comment}</p>
                                <span className="text-sm text-gray-400 mt-2 block">
                                    {new Date(interaction.time).toLocaleDateString()}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default MyInteractionsPage;