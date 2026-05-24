export const fetchCourses = async (searchTerm = '') => {
  console.log();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas?search=${searchTerm}`);
  const data = await res.json();
  return data || [];
};


export const fetchFeaturedCourses = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);
  const data = await res.json();
  return data || [];
};



export const fetchIdeasByEmail = async (email) => {
  if (!email) return [];
  // console.log("Fetching ideas for email:", email);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-ideas?email=${email}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    // console.log(data);
    return data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};


export const fetchInteractions = async (email) => {
  if (!email) return [];
  // console.log("Fetching interactions for email:", email);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-interactions?email=${email}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    // console.log(data);
    return data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};




