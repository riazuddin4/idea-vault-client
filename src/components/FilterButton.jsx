// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { Button } from "@heroui/react";
// import { Filter } from "lucide-react";

// const categories = ["Health", "AI", "Tech", "Education"]; // তোমার ক্যাটাগরি লিস্ট

// export default function FilterButton({ currentCategory }) {
//     const router = useRouter();
//     const searchParams = useSearchParams();

//     const handleFilter = (category) => {
//         const params = new URLSearchParams(searchParams.toString());

//         if (category === "All") {
//             params.delete("category");
//         } else {
//             params.set("category", category);
//         }

//         router.push(`?${params.toString()}`);
//     };

//     return (
//         <div className="flex gap-2">
//             {categories.map((cat) => (
//                 <Button
//                     key={cat}
//                     variant={currentCategory === cat.toLowerCase() ? "solid" : "flat"}
//                     startContent={<Filter className="w-4 h-4" />}
//                     onClick={() => handleFilter(cat)}
//                 >
//                     {cat}
//                 </Button>
//             ))}
//         </div>
//     );
// }



"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button, SelectIndicator, SelectPopover, SelectTrigger, SelectValue, ListBox, Select, ListBoxItem } from "@heroui/react";
import { Filter, List } from "lucide-react";


const categories = ["All", "Health", "AI", "Tech", "Education"];

export default function FilterButton({ currentCategory }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleFilter = (category) => {
        const params = new URLSearchParams(searchParams.toString());

        if (category === "All") {
            params.delete("category");
        } else {
            params.set("category", category.toLowerCase());
        }

        router.push(`?${params.toString()}`);
    };

    return (
        <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => {

                const isActive =
                    (cat === "All" && !currentCategory) ||
                    currentCategory === cat.toLowerCase();

                return (
                    <Button
                        key={cat}
                        variant={isActive ? "solid" : "flat"}
                        color={isActive ? "primary" : "default"}
                        startContent={<Filter className="w-4 h-4" />}
                        onClick={() => handleFilter(cat)}
                        className="font-semibold rounded-full"
                    >
                        {cat}
                    </Button>
                );
            })}
        </div>

        // <div className="space-y-2">
        //     <label className="text-sm font-bold text-slate-700 ml-1">Category</label>
        //     <Select
        //         id="category"
        //         name='Category'
        //         required
        //         placeholder="Select a category"
        //         className="w-full"
        //     >
        //         <SelectTrigger className="h-14 border-2 border-slate-200 hover:border-blue-600/50 data-[focus-within=true]:border-blue-600 rounded-2xl bg-white transition-all duration-300 flex items-center px-4 shadow-none outline-none group">
        //             <div className="flex items-center gap-3 w-full">
        //                 <List className="w-5 h-5 text-slate-400 group-data-[focus-within=true]:text-blue-600 transition-colors" />
        //                 <SelectValue className="font-medium text-slate-600" />
        //             </div>
        //             <SelectIndicator className="ml-auto">
        //                 <div className="text-slate-400 group-data-[focus-within=true]:text-blue-600 transition-colors">
        //                     <List className="w-4 h-4" />
        //                 </div>
        //             </SelectIndicator>
        //         </SelectTrigger>
        //         <SelectPopover className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-2 mt-2">
        //             <ListBox>
        //                 {categories.map((cat) => (
        //                     <ListBoxItem
        //                         key={cat}
        //                         id={cat}
        //                         className="px-4 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl cursor-pointer transition-colors font-medium"
        //                     >
        //                         {cat}
        //                     </ListBoxItem>
        //                 ))}
        //             </ListBox>
        //         </SelectPopover>
        //     </Select>
        // </div>
        
    );
}

