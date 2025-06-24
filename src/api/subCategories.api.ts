"use server";
import { api } from ".";

const getSubCategories = async (subcat_id: string) => {
  try {
    const res = await api.get(`/api/v1/subcategory/${subcat_id}`);
    if (res.status === 200) {
      return { data: res.data?.data };
    }
  } catch (error) {
    console.log(" error:", error);
    return { error: "Something went wrong" };
  }
};

export { getSubCategories };
