//Data response object
interface DataResponse {
  status: number;
  data: EventData[];
}

//Event object
interface EventData {
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

/*
* Fetches upcoming GDSC events.
*
* @param {boolean} orderByProximity?   Optional: If true, events are ordered by proximity based on the client's location.
* @param {number} proximity?           Optional: If specified, only events in the given proximity from the client's location are fetched.
*
* @return {Promise<DataResponse>} Data response object that contains the response status and the event data returned.
*/
export async function getEventsGdsc(
  orderByProximity?: boolean,
  proximity?: number,
): Promise<DataResponse> {
  const url: string = `https://gdsc.community.dev/api/search/?result_types=upcoming_event${orderByProximity ? "&order_by_proximity=true" : ""}${proximity ? `&proximity=${proximity}` : ""}`;
  const response = await fetch(url);
  const json = await response.json();

  if (!json["results"]) {
    throw new Error("404 (Not Found)");
  }

  const events: Array<EventData> = json["results"].map((result: any) => {
    const event: EventData = {
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
  return {
    status: response.status,
    data: events
  };
}

/*
* Fetches upcoming GDG events.
*
* @param {boolean} orderByProximity?   Optional: If true, events are ordered by proximity based on the client's location.
* @param {number} proximity?           Optional: If specified, only events in the given proximity from the client's location are fetched.
*
* @return {Promise<DataResponse>} Data response object that contains the response status and the event data returned.
*/
export async function getEventsGDG(
  orderByProximity?: boolean,
  proximity?: number,
): Promise<DataResponse> {
  const url: string = `https://gdg.community.dev/api/search/?result_types=upcoming_event${orderByProximity ? "&order_by_proximity=true" : ""}${proximity ? `&proximity=${proximity}` : ""}`;
  const response = await fetch(url);
  const json = await response.json();

  if (!json["results"]) {
    throw new Error("404 (Not Found)");
  }

  const events: Array<EventData> = json["results"].map((result: any) => {
    const event: EventData = {
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
  return {
    status: response.status,
    data: events
  };
}
