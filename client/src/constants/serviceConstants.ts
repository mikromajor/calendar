const SERVICE_INIT = {
  isLoading: false,
  isError: false,
  message: "",
};
export const ERROR = {
  serverError: "Server error",
  clientError: "Client error",
  invalidData: "Invalid data",
  noData: "No data found",
  noAuth: "No authorization",
  notFound: "Not found",
  expiredToken: "Expired token",
  tooManyRequests: "Too many requests",
  conflict: "Conflict",
  noResponse: "No response from server",
};

export default SERVICE_INIT;
