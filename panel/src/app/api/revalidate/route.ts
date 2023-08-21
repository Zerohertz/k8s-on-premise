import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const path = request.nextUrl.searchParams.get("path") || "/";

  if (typeof tag === "string") revalidateTag(tag);
  else revalidatePath(`/api${path}`);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
