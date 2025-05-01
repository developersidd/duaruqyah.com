import { api } from ".";

const getCategories = async () => {
  try {
    const res = await api.get("/api/v1/category");
    if (res.status === 200) {
      return { data: res.data?.data };
    }
  } catch (error) {
    console.log(" error:", error)
    return { error: "Something went wrong" };
  }
};

export { getCategories };