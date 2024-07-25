//Functions to retrieve event info from each site's API

//GDSC Events
export async function getEventsGdsc(
  orderByProximity?: boolean,
  proximity?: number,
) {
  try {
    const url: string = `https://gdsc.community.dev/api/search/?result_types=upcoming_event${orderByProximity ? "&order_by_proximity=true" : ""}${proximity ? `&proximity=${proximity}` : ""}`;
    const response = await fetch(url);
    const json = await response.json();
    return json["results"];
  } catch (error: any) {
    console.log(error.message);
    return error;
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
    return json["results"];
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
}
