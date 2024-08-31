//Event object
export interface EventData {
  id: number;
  title: string;
  description: string;
  picture: {
    url: string;
  };
  city: string;
  date: Date;
  eventType: string;
  url: string;
  chapterTitle: string;
}

/**
 * Function to retireve GDSC event data from the GDSC API.
 *
 * @param {boolean} orderByProximity - If true, results are ordered by proximity.
 * @param {number} proximity - Proximity within which to fetch events
 * @returns {EventData[]} - Array of events objects returned from the GDSC API.
 */
export async function getGDSCEvents(
  orderByProximity?: boolean,
  proximity?: number,
): Promise<EventData[]> {
  const url: string = `https://gdsc.community.dev/api/search/?result_types=upcoming_event${orderByProximity ? "&order_by_proximity=true" : ""}${proximity ? `&proximity=${proximity}` : ""}`;
  const response = await fetch(url);
  const jsonResponse = await response.json();

  if (!jsonResponse["results"]) {
    throw new Error("Not found.");
  }

  const events: Array<EventData> = jsonResponse["results"].map(
    (result: any) => {
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
    },
  );
  return events;
}

/**
 * Function to retireve GDG event data from the GDG API.
 *
 * @param {boolean} orderByProximity - If true, results are ordered by proximity.
 * @param {number} proximity - Proximity within which to fetch events
 * @returns {EventData[]} - Array of events objects returned from the GDG API.
 */
export async function getGDGEvents(
  orderByProximity?: boolean,
  proximity?: number,
): Promise<EventData[]> {
  const url: string = `https://gdg.community.dev/api/search/?result_types=upcoming_event${orderByProximity ? "&order_by_proximity=true" : ""}${proximity ? `&proximity=${proximity}` : ""}`;
  const response = await fetch(url);
  const jsonResponse = await response.json();

  if (jsonResponse["results"].length == 0) {
    throw new Error("Not found.");
  }
  const events: Array<EventData> = jsonResponse["results"].map(
    (result: any) => {
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
    },
  );
  return events;
}
