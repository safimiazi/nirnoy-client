import mainApi from "../../MainApi";

const authApiMutation = mainApi.injectEndpoints({
  endpoints: (build) => ({
    studentLogin: build.mutation({
      query: (loginData) => {
        return {
          url: "/users/login",
          method: "POST",

          body: loginData,
        };
      },
      invalidatesTags: ["login_student"],
    }),
    studentRegistration: build.mutation({
      query: (data) => {
        return {
          url: "/users/student-registration",
          method: "POST",

          body: data,
        };
      },
    }),
    studentLogout: build.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
      invalidatesTags: ["login_student"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useStudentRegistrationMutation,
  useStudentLoginMutation,
  useStudentLogoutMutation,
} = authApiMutation;
