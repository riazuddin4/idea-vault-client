

// "use client";

// import { useState } from "react";
// import { authClient } from "@/lib/auth-client";
// import { Button, Modal, Surface } from "@heroui/react";
// import { BiEdit } from "react-icons/bi";
// import { useRouter } from "next/navigation";

// export function EditCommentModal({ comment, ideaId, onEdit }) {
//     // const [editText, setEditText] = useState(comment.text); 
//     const {comment} = comment;
//     const router = useRouter();
//     const commentId = comment._id;

//     const onSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const { data } = await authClient.token();

//             const res = await fetch(
//                 `${process.env.NEXT_PUBLIC_API_URL}/ideas/${ideaId}/comments/${commentId}`,
//                 {
//                     method: "PATCH",
//                     headers: {
//                         "Content-Type": "application/json",
//                         Authorization: `Bearer ${data.token}`,
//                     },
//                     body: JSON.stringify({ editText }), 
//                 }
//             );

//             if (!res.ok) throw new Error("Edit failed");

//             onEdit?.(commentId, editText); // 
//             router.refresh();
//         } catch (error) {
//             console.error("Edit error:", error);
//         }
//     };

//     return (
//         <Modal>
//             <Button variant="outline" className="rounded-none">
//                 <BiEdit /> Edit
//             </Button>

//             <Modal.Backdrop>
//                 <Modal.Container placement="auto">
//                     <Modal.Dialog className="sm:max-w-lg">
//                         <Modal.CloseTrigger />
//                         <Modal.Header>
//                             <Modal.Heading>Edit Comment</Modal.Heading>
//                         </Modal.Header>
//                         <Modal.Body className="p-6">
//                             <Surface variant="default">
//                                 <form onSubmit={onSubmit}> 
//                                     <textarea
//                                         name="comment"
//                                         value={editText}           
//                                         onChange={(e) => setEditText(e.target.value)} 
//                                         className="w-full h-24 rounded border border-gray-500 bg-gray-300 p-2 text-sm text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600"
//                                         placeholder="Type your comment..."
//                                     />
//                                     <button
//                                         type="submit"
//                                         className="bg-indigo-900 hover:bg-indigo-800 disabled:opacity-50 text-white text-sm px-4 py-1.5 rounded transition-colors mt-2"
//                                     >
//                                         Save
//                                     </button>
//                                 </form>
//                             </Surface>
//                         </Modal.Body>
//                     </Modal.Dialog>
//                 </Modal.Container>
//             </Modal.Backdrop>
//         </Modal>
//     );
// }

"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Modal, Surface } from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import { useRouter } from "next/navigation";

export function EditCommentModal({ comment, ideaId, onEdit }) {
    const [editText, setEditText] = useState(comment?.text || "");
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await authClient.token();

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/ideas/${ideaId}/comments/${comment._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${data.token}`,
                    },
                    body: JSON.stringify({ comment: editText }), 
                }
            );

            if (!res.ok) throw new Error("Edit failed");

            onEdit?.(comment._id, editText);
            router.refresh();
        } catch (error) {
            console.error("Edit error:", error);
        }
    };

    return (
        <Modal>
            <Button variant="outline" className="rounded-none">
                <BiEdit /> Edit
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-lg">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Edit Comment</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit}>
                                    <textarea
                                        name="comment"
                                        defaultValue={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        className="w-full h-24 rounded border border-gray-500 bg-gray-300 p-2 text-sm text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600"
                                        placeholder="Type your comment..."
                                    />
                                    <button
                                        type="submit"
                                        className="bg-indigo-900 hover:bg-indigo-800 disabled:opacity-50 text-white text-sm px-4 py-1.5 rounded transition-colors mt-2"
                                    >
                                        Save
                                    </button>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}