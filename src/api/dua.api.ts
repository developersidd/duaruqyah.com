"use server";
import { api } from ".";

const getDuasByCategory = async (cat_id: string) => {
  try {
    const res = await api.get(`/api/v1/dua/${cat_id}`);
    if (res.status === 200) {
      return { data: res.data?.data };
    }
  } catch (error) {
    return { error: "Something went wrong fetching Duas" };
  }
};

export { getDuasByCategory };
