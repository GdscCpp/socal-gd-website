//Event object
interface EventInfo {
  id: number;
  title: string;
  description: string;
  picture: object;
  city: string;
  date: Date;
  eventType: string;
  url: string;
  chapterTitle: string;
}

//Error response object
interface ErrorResponse {
  message: string;
  cause: any;
}

/*
* Fetches upcoming GDSC events.
*
* @param {boolean} orderByProximity?   Optional: If true, events are ordered by proximity based on the client's location.
* @param {number} proximity?           Optional: If specified, only events in the given proximity from the client's location are fetched.
*
* @return {Promise<EventInfo[] | ErrorResponse>} An array of EventInfo objects that hold information on upcoming events, or an error response object if an error occurs.
*/
export async function getEventsGdsc(
  orderByProximity?: boolean,
  proximity?: number,
): Promise<EventInfo[] | ErrorResponse> {
  try {
    const url: string = `https://gdsc.community.dev/api/search/?result_types=upcoming_event${orderByProximity ? "&order_by_proximity=true" : ""}${proximity ? `&proximity=${proximity}` : ""}`;
    const response = await fetch(url);
    const json = await response.json();
    const events: Array<EventInfo> = json["results"].map((result: any) => {
      const event: EventInfo = {
        id: result.id,
        title: result.title,
        description: result.description_short,
        picture: result.picture,
        city: result.city,
        date: new Date(result.start_date),
        eventType: result.event_type_title,
        url: result.url,
        chapterTitle: result.chapter.title,
      };
      return event;
    });
    return events;
  } catch (error: any) {
    const response: ErrorResponse = {
      message: error.message,
      cause: error.cause,
    };
    return response;
  }
}

/*
* Fetches upcoming GDG events.
*
* @param {boolean} orderByProximity?   Optional: If true, events are ordered by proximity based on the client's location.
* @param {number} proximity?           Optional: If specified, only events in the given proximity from the client's location are fetched.
*
* @return {Promise<EventInfo[] | ErrorResponse>} An array of EventInfo objects that hold information on upcoming events, or an error response object if an error occurs.
*/
export async function getEventsGDG(
  orderByProximity?: boolean,
  proximity?: number,
): Promise<EventInfo[] | ErrorResponse> {
  try {
    const url: string = `https://gdg.community.dev/api/search/?result_types=upcoming_event${orderByProximity ? "&order_by_proximity=true" : ""}${proximity ? `&proximity=${proximity}` : ""}`;
    const response = await fetch(url);
    const json = await response.json();
    const events: Array<EventInfo> = json["results"].map((result: any) => {
      const event: EventInfo = {
        id: result.id,
        title: result.title,
        description: result.description_short,
        picture: result.picture,
        city: result.city,
        date: new Date(result.start_date),
        eventType: result.event_type_title,
        url: result.url,
        chapterTitle: result.chapter.title,
      };
      return event;
    });
    return events;
  } catch (error: any) {
    const response: ErrorResponse = {
      message: error.message,
      cause: error.cause,
    };
    return response;
  }
}
