const SERVICE_INIT = {
  isLoading: false,
  isError: false,
  message: "",
};
export const ERROR = {
  serverError: "Server error",
  clientError: "Client error",
  invalidData: "Invalid data",
  noAuth: "No authorization",
  notFound: "Not found",
  expiredToken: "Expired token",
  noResponse: "No response from server",
};

export default SERVICE_INIT;
