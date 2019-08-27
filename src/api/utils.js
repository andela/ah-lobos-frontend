export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  if (response.status === 400) {
    const error = await response.text();
    throw Error(error);
  } else if (response.status === 409) {
    const error = response.json();
    return error;
  }
  return "Network response was not ok.";
}

export function handleError(error) {
  console.error(`API call failed. ${error}`);
  return error;
}
