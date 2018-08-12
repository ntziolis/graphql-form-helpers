import { connect } from "./connect";

type ObjectWithId = { id: string };
export function connectObject(
  objWithIds?: ObjectWithId | ObjectWithId[] | null
) {
  let ids;
  if (typeof objWithIds === "object" && (<ObjectWithId>objWithIds).id) {
    ids = objWithIds.id;
  } else if (Array.isArray(objWithIds)) {
    ids = objWithIds.map((o: any) => o.id);
  }

  return connect(ids);
}
