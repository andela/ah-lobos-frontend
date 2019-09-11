export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  if (response.status === 400) {
    const error = response.json();
    return error;
  }
  if (response.status === 409) {
    const error = response.json();
    return error;
  }
  return "Network response was not ok.";
}

export function handleError(error) {
  return error;
}
