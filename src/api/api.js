import axios, * as others from "axios";

const constantUrl = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "1571e59b-ce2e-45ed-b179-f3186e751c02" },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return constantUrl
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  follow(userId) {
    return constantUrl.post(`follow/${userId}`, {}).then((response) => {
      return response.data;
    });
  },

  unfollow(userId) {
    return constantUrl.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  getProfile(userId) {
    return constantUrl.get(`profile/${userId}`);
  },
};

export const authAPI = {
  getHeader() {
    return constantUrl.get(`auth/me`);
  },
};
