import { toast } from "react-toastify";

export async function handleResponse(response) {
  if (response.ok) {
    const data = await response.json();
    sessionStorage.setItem("token", data.user.token);
    toast.success(`Welcome back ${data.user.username}`);
    return data;
  }
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  if (response.status === 401) {
    const error = await response.json();
    toast.error(error.message);
    throw new Error(error);
  }
  if (response.status === 404) {
    const error = await response.text();
    toast.info("You don't have an account yet. Please sign up");
    throw new Error(error);
  }
  if (response.status === 500) {
    const error = await response.text();
    toast.info("Oops something went wrong");
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  console.error(`API call failed. ${error}`);
  throw error;
}

export async function handleLoggout(response) {
  if (response.ok) {
    window.sessionStorage.clear();
    const data = await response.json();
    window.location = "/";
    return data;
  }
  throw new Error("Network response was not ok.");
}
