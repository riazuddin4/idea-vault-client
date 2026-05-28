// "use client";

// import { authClient } from "@/lib/auth-client";
// import { TrashBin } from "@gravity-ui/icons";
// import { AlertDialog, Button } from "@heroui/react";
// import { useRouter } from "next/navigation";

// export function DeleteAlertComment({ ideas }) {

//     const router = useRouter();

//     const { IdeaTitle, _id } = ideas;


//     const handleDelete = async () => {
//         const {data} = await authClient.token();
//         console.log("Auth token data in DeleteAlertComment:", data);
//         try {
//             const res = await fetch(
//                 `${process.env.NEXT_PUBLIC_API_URL}/ideas//${ideaId}/comments/${commentId}`,
//                 {
//                     method: "DELETE",
//                     headers: {
//                         "content-type": "application/json",
//                         Authorization: `Bearer ${data.token}`,
//                     },
//                 }
//             );

//             if (!res.ok) {
//                 throw new Error("Delete failed");
//             }

//             // router.push("/my-ideas");
//             router.refresh();
//         } catch (error) {
//             console.error(error);
//         }
//     };



//     return (
//         <AlertDialog>
//             <Button
//                 className="text-red-500 rounded-none"
//                 variant="outline"
//             >
//                 <TrashBin /> Delete
//             </Button>

//             <AlertDialog.Backdrop>
//                 <AlertDialog.Container>
//                     <AlertDialog.Dialog className="sm:max-w-[400px]">
//                         <AlertDialog.CloseTrigger />

//                         <AlertDialog.Header>
//                             <AlertDialog.Icon status="danger" />
//                             <AlertDialog.Heading>
//                                 Delete Comment permanently?
//                             </AlertDialog.Heading>
//                         </AlertDialog.Header>

//                         <AlertDialog.Body>
//                             <p>
//                                 This will permanently delete{" "}
//                                 <strong>{IdeaTitle}</strong> and all of its
//                                 data. This action cannot be undone.
//                             </p>
//                         </AlertDialog.Body>

//                         <AlertDialog.Footer>
//                             <Button slot="close" variant="tertiary">
//                                 Cancel
//                             </Button>

//                             <Button
//                                 onClick={handleDelete}
//                                 slot="close"
//                                 variant="danger"
//                             >
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

export function DeleteAlertComment({ comment, ideaId }) {
    // comment = { _id, text, ... }
    // ideaId = ideas এর _id

    const router = useRouter();
    const commentId = comment._id;

    const handleDelete = async () => {
        const { data } = await authClient.token();
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/ideas/${ideaId}/comments/${commentId}`,
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

            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AlertDialog>
            <Button className="text-red-500 rounded-none" variant="outline">
                <TrashBin /> Delete
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete Comment permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}