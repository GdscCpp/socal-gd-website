//Functions to retrieve event info from each site's API

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

interface ErrorResponse {
  message: string;
  cause: any;
}

//GDSC Events
export async function getEventsGdsc(
  orderByProximity?: boolean,
  proximity?: number,
) {
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

//GDG Events
export async function getEventsGDG(
  orderByProximity?: boolean,
  proximity?: number,
) {
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
