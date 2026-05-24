// "use client";
// import { TrashBin } from "@gravity-ui/icons";
// import { AlertDialog, Button } from "@heroui/react";
// import { redirect } from "next/navigation";


// export function DeleteAlert({ mongoidea }) {
//     const { IdeaTitle, _id } = mongoidea;

//     const handleDelete = async () => {
//         const res = await fetch(`NEXT_PUBLIC_API_URL/ideas/${_id}`, {
//             method: "DELETE",
//             headers: {
//                 "content-type": "application/json",
//             },
//         });

//         const data = await res.json();
//         redirect('/my-ideas');
//         // console.log(data);
//     };
//     return (
//         <AlertDialog>
//             <Button className={'text-red-500 rounded-none '} variant="outline"><TrashBin /> Delete</Button>
//             <AlertDialog.Backdrop>
//                 <AlertDialog.Container>
//                     <AlertDialog.Dialog className="sm:max-w-[400px]">
//                         <AlertDialog.CloseTrigger />
//                         <AlertDialog.Header>
//                             <AlertDialog.Icon status="danger" />
//                             <AlertDialog.Heading>Delete My Ideas permanently?</AlertDialog.Heading>
//                         </AlertDialog.Header>
//                         <AlertDialog.Body>
//                             <p>
//                                 This will permanently delete <strong>{IdeaTitle}</strong> and all of its
//                                 data. This action cannot be undone.
//                             </p>
//                         </AlertDialog.Body>
//                         <AlertDialog.Footer>
//                             <Button slot="close" variant="tertiary">
//                                 Cancel
//                             </Button>
//                             <Button onClick={handleDelete} slot="close" variant="danger">
//                                 Delete
//                             </Button>
//                         </AlertDialog.Footer>
//                     </AlertDialog.Dialog>
//                 </AlertDialog.Container>
//             </AlertDialog.Backdrop>
//         </AlertDialog>
//     );
// }



"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeleteAlert({ mongoidea }) {

    const router = useRouter();

    const { IdeaTitle, _id } = mongoidea;

    const handleDelete = async () => {
        const {data} = await authClient.token();
        console.log("Auth token data in DeleteAlert:", data);
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/ideas/${_id}`,
                {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json",
                        Authorization: `Bearer ${data.token}`,
                    },
                }
            );

            if (!res.ok) {
                throw new Error("Delete failed");
            }

            router.push("/my-ideas");
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AlertDialog>
            <Button
                className="text-red-500 rounded-none"
                variant="outline"
            >
                <TrashBin /> Delete
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete My Ideas permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <p>
                                This will permanently delete{" "}
                                <strong>{IdeaTitle}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>

                            <Button
                                onClick={handleDelete}
                                slot="close"
                                variant="danger"
                            >
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}