
"use server";

import { headers } from "next/headers";
import { auth } from "../auth";

export const addIdeas = async (FormData) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const modifiedFormData = Object.fromEntries(FormData.entries());
  console.log(modifiedFormData);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(modifiedFormData),
  });
  console.log('response', res);
  return res
  
};

export const createCommentIdeas = async (FormData) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const commentFormData = Object.fromEntries(FormData.entries());
  console.log(commentFormData);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(commentFormData),
  });

  if (!res.ok) return null;
  return res.json();
};

// export const updateIdeas = async (id) => {
//   const { token } = await auth.api.getToken({
//     headers: await headers(),
//   });
//   const res = await fetch(`NEXT_PUBLIC_API_URL/${_id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       "Authorization": `Bearer ${token}`,
//     },
//     body: JSON.stringify(mongoidea)
//   })

//   const data = await res.json()
//   console.log(data)
// };



export const deleteEnrollment = async (id) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrollments/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) return null;
  const data = await res.json();
  //   console.log(data);

  return data;
};



