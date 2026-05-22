import CourseCard from "@/components/CourseCard";
import CoursesHeader from "@/components/CoursesHeader";
import { fetchCourses } from "@/lib/courses/data";
import { Button } from "@heroui/react";
import { BookOpen, Filter } from "lucide-react";


// const FetchIdeas = async () =>{
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas`);
//     const ideas = await res.json();
//     return ideas || [];
// }

const ideasPage = async ({ searchParams }) => {
    // console.log(searchParams);
    const { sParams, category } = await searchParams;
    // console.log(sParams);

    const ideas = await fetchCourses(sParams?.searchTerm || "");

    // const ideas = await FetchIdeas();
    // console.log(ideas); 

    // const { category, search } = await searchParams;
    // console.log(category)
    // const res = await fetch('', { cache: 'no-store' })
    // const books = await res.json()

    let filteredIdeas = ideas;
    if (category) {
        filteredIdeas = ideas.filter(idea => idea.category.toLowerCase() === category.toLowerCase());
    }


    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <CoursesHeader />

            <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                        All Ideas
                    </h2>
                    <Button

                        variant="flat"
                        startContent={<Filter className="w-4 h-4" />}
                        className="rounded-full font-bold"
                    >
                        Filters
                        {/* {filteredIdeas.map((category) => (
                            <CourseCard key={category._id} category={category} />
                        ))} */}
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        ideas?.map((mongoidea) => <CourseCard key={mongoidea._id} mongoidea={mongoidea} />)
                    }
                </div>


            </main>
        </div>
    );
};

export default ideasPage;
