const SERVICE_INIT = {
  isLoading: false,
  isError: false,
  message: "",
};
export const ERROR_MESSAGE = {
  serverError: "Server error",
  clientError: "Client error",
  invalidData: "Invalid data",
  noAuth: "No authorization",
  notFound: "Not found",
  expiredToken: "Expired token",
  noResponse: "No response from server",
};
export const SUCCESS_MESSAGE = {
  loggedOut: "Logged out successfully",
};

export default SERVICE_INIT;
