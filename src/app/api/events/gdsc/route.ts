import { EventData, getEventsGDSC } from "@/data/events";
import { NextRequest } from "next/server";
import handleError from "@/utils/errors";

/**
 * Route for getting GDSC events.
 *
 * @param {NextRequest} request - The incoming request data
 * @returns {Response} - Event data or error data response
 */
export async function GET(request: NextRequest): Promise<Response> {
  try {
    const queryParams = request.nextUrl.searchParams;
    const orderByProximity = queryParams.get("orderByProximity");
    const proximity = queryParams.get("proximity");
    const response: EventData[] = await getEventsGDSC(
      orderByProximity ? true : false,
      proximity ? parseInt(proximity) : undefined,
    );

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
}
