import { api } from ".";

const getCategories = async (queries?: { [key: string]: string }) => {
  let path = "/api/v1/category";
  const queryString = queries ? `?${new URLSearchParams(queries).toString()}` : "";
  if (queries?.q) {
    path += `${queryString}`;
  }
  console.log(" path:", path)
  try {
    const res = await api.get(path);
    if (res.status === 200) {
      return { data: res.data?.data };
    }
  } catch (error) {
    console.log(" error on getting categories:", error);
    return { error: "Something went wrong" };
  }
};

export { getCategories };
