/**
 * Function to handle errors and return a HTTP error response.
 *
 * @param {Error | unknown} error - The error object thrown elsewhere.
 * @returns {Response} - HTTP response with message and status.
 */
export default function handleError(error: Error | unknown): Response {
  if (error instanceof Error) {
    switch (error.message) {
      case "Not found.":
        return new Response("Not found.", {
          status: 404,
        });
      default:
        return new Response("Internal server error.", {
          status: 500,
        });
    }
  }
  return new Response("Internal server error.", {
    status: 500,
  });
}
