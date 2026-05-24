
import CourseCard from "@/components/CourseCard";
import CoursesHeader from "@/components/CoursesHeader";
import FilterButton from "@/components/FilterButton";
import { fetchCourses } from "@/lib/courses/data";
import { BookOpen } from "lucide-react";

const IdeasPage = async ({ searchParams }) => {
    const params = await searchParams;
    const searchTerm = params?.searchTerm || "";
    const category = params?.category || "";

    console.log("Search Term:", category);
    //  data fetching
    const ideas = await fetchCourses(searchTerm);

    // The real logic of filtering by category
    let filteredIdeas = ideas || [];
    if (category) {
        filteredIdeas = ideas.filter(
            (idea) => idea.Category?.toLowerCase() === category.toLowerCase()
        );
        console.log("Filtered Ideas:", filteredIdeas);
    }

    return (
        <div className="min-h-screen">
            {/* Header */}
            <CoursesHeader />

            <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                        All Ideas
                    </h2>
                    
                    <FilterButton currentCategory={category} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredIdeas.length > 0 ? (
                        filteredIdeas.map((mongoidea) => (
                            <CourseCard key={mongoidea._id} mongoidea={mongoidea} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-500 font-medium">
                                No ideas found in this category!
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default IdeasPage;
