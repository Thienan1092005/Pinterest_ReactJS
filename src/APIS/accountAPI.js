import { baseAPI } from "./baseEndPoint";

export const userLoginAPI = async (email, password) => {
  try {
    const { data } = await baseAPI({
      method: "POST",
      url: "auth/login",
      data: {
        email,
        password,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

// export const userRegesterAPI = async (credentials) => {
//   const { email, fullName, password, age, avatar } = credentials;
//   try {
//     const { data } = await baseAPI({
//       method: "POST",
//       url: "auth/login",
//       data: {
//         email,
//         password,
//         fullName,
//         age,
//         avatar,
//       },
//     });
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };
