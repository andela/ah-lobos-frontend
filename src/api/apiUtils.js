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
    return error;
  }
  if (response.status === 401) {
    const error = await response.json();
    toast.error(error.message);
    return error;
  }
  if (response.status === 404) {
    const error = await response.text();
    toast.info("You don't have an account yet. Please sign up");
    return error;
  }
  if (response.status === 500) {
    const error = await response.text();
    toast.info("Oops something went wrong");
    return error;
  }
  return "Network response was not ok.";
}

export function handleError(error) {
  return error;
}

export async function handleLoggout(response) {
  if (response.ok) {
    window.sessionStorage.clear();
    const data = await response.json();
    window.location = "/";
    return data;
  }
  return "Network response was not ok.";
}

export async function commentResponse(response) {
  if (response.ok) {
    const data = await response.json();
    toast.success(data.message);
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
    toast.info("Article not found");
    throw new Error(error);
  }
  if (response.status === 500) {
    const error = await response.text();
    toast.info("Oops something went wrong");
    throw new Error(error);
  }
  return "Network response was not ok.";
}

export async function getAllComments(response) {
  if (response) {
    const data = await response.json();
    return data;
  }
  return "No comment";
}

export async function deleteCommentResponse(response) {
  if (response.ok) {
    const data = await response.json();
    toast.success(data.message);
    return data;
  }
  if (response.status === 403) {
    const error = await response.text();
    toast.info("You are not allowed to delete this comment");
    throw new Error(error);
  }
  if (response.status === 404) {
    const error = await response.text();
    toast.info("Comment not found");
    throw new Error(error);
  }
  if (response.status === 500) {
    const error = await response.text();
    toast.info("Oops something went wrong");
    throw new Error(error);
  }
  return "Network response was not ok.";
}

export async function updatedCommentResponse(response) {
  if (response.ok) {
    const data = await response.json();
    toast.success("Comment updated successfully");
    return data;
  }
  if (response.status === 403) {
    const error = await response.text();
    toast.info("You are not allowed to delete this comment");
    throw new Error(error);
  }
  if (response.status === 404) {
    const error = await response.text();
    toast.info("Comment not found");
    throw new Error(error);
  }
  if (response.status === 500) {
    const error = await response.text();
    toast.info("Oops something went wrong");
    throw new Error(error);
  }
  return "Network response was not ok.";
}

export async function readArticleStats(response) {
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  if (response.status === 401) {
    const error = await response.text();
    toast.info("Please signup or signin");
    throw new Error(error);
  }
  if (response.status === 404) {
    const error = await response.text();
    toast.info("No article found");
    throw new Error(error);
  }
  if (response.status === 500) {
    const error = await response.text();
    toast.info("Oops something went wrong");
    throw new Error(error);
  }
  return "Network response was not ok.";
}

export async function getUserStats(response) {
  if (response) {
    const data = await response.json();
    return data;
  }
  return "You have no stats";
}
