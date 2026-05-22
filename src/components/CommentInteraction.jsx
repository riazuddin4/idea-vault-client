import { Button, Chip } from '@heroui/react';
import { Link } from 'lucide-react';
import Image from 'next/image';

const CommentInteraction = ({ interaction }) => {
    const { _id, IdeaTitle, ImageURL, email, Category, ShortDescription, DetailedDescription, Tags, EstimatedBudget, TargetAudience, ProblemStatement, ProposedSolution} = interaction;
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile */}
                <div className="w-full md:w-1/4">
                    <div className="p-6 bg-white border rounded-2xl">
                        <Image
                            src={ImageURL|| "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"}
                            alt="profile"
                            className="w-24 h-24 rounded-full"
                        />

                        <h2 className="text-xl font-bold mt-4">{IdeaTitle}</h2>
                        <p className="text-sm text-slate-500">{email}</p>
                    </div>
                </div>

                {/* Enrollments */}
                <div className="w-full md:w-3/4">
                    <h1 className="text-3xl font-bold mb-6">My Enrolled Ideas</h1>

                    {interaction?.length === 0 ? (
                        <div className="p-12 text-center bg-slate-50 border rounded-2xl">
                            <p className="mb-4">No Ideas yet</p>

                            <Link href="/courses">
                                <Button>Browse Ideas</Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {enrollments?.map((enrollment) => (
                                <div
                                    key={enrollment?._id}
                                    className="flex gap-4 p-4 bg-white border rounded-xl"
                                >
                                    <Image
                                        src={enrollment?.thumbnail}
                                        alt="course"
                                        width={120}
                                        height={90}
                                        className="rounded-lg"
                                    />

                                    <div className="flex flex-col grow justify-between">
                                        <div>
                                            <h3 className="font-bold">{enrollment?.courseTitle}</h3>
                                            <p className="text-sm text-slate-500">{new Date(enrollment?.enrolledAt).toDateString()}</p>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <Chip
                                                color="success"
                                                size="sm"
                                            >
                                                Active
                                            </Chip>

                                            {/* <CancelEnrollButton /> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommentInteraction;