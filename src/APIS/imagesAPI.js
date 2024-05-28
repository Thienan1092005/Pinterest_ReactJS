import { baseAPI } from "./baseEndPoint";

export const getImgAPI = async (_name) => {
  try {
    const { data } = await baseAPI({
      method: "GET",
      url: "media/get-images-by-name",
      params: {
        name: _name,
        limit: 8,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export async function getFullImage(page) {
  try {
    const { data } = await baseAPI({
      method: "GET",
      url: "media/get-images",
      params: {
        page,
        limit: 30,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCommentsByImgID(id) {
  try {
    const { data } = await baseAPI({
      method: "GET",
      url: "media/get-comments-image/" + id,
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getDetailByImgID(id) {
  try {
    const { data } = await baseAPI({
      method: "GET",
      url: "media/get-image-detail/" + id,
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
