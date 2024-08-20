import { EventData, getGDGEvents, getGDSCEvents } from "@/queries/events";
import handleError from "@/utils/errors";
import { NextRequest } from "next/server";

/**
 * Route for getting upcoming events from the given organization.
 *
 * @param {NextRequest} request - The incoming HTTP request.
 * @param param1 - The organization name (gdsc or gdg)
 * @returns {Response} - Response with event data or error code.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { org: string } },
): Promise<Response> {
  try {
    const queryParams = request.nextUrl.searchParams;
    const orderByProximity = queryParams.get("orderByProximity");
    const proximity = queryParams.get("proximity");

    if (params.org == "gdsc") {
      const response: EventData[] = await getGDSCEvents(
        orderByProximity ? true : false,
        proximity ? parseInt(proximity) : undefined,
      );
      return new Response(JSON.stringify(response), { status: 200 });
    } else if (params.org == "gdg") {
      const response: EventData[] = await getGDGEvents(
        orderByProximity ? true : false,
        proximity ? parseInt(proximity) : undefined,
      );
      return new Response(JSON.stringify(response), { status: 200 });
    }

    return new Response("Invalid organization name.", { status: 400 });
  } catch (error: any) {
    return handleError(error);
  }
}
