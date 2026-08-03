import { getProjects } from "@/lib/projects";
import WorksClient from "./WorksClient";

export const dynamic = 'force-dynamic';

export default async function WorksPage() {
  const projects = await getProjects();
  
  // Filter out projects that have no images if necessary, or just pass them down.
  // We'll let WorksClient handle them.
  // Actually, we can filter them here if the user wanted them removed.
  // The prompt said: "if they are not found in public projects directory remove them from corresponding componets"
  // So we filter out projects where image is missing/empty, or gallery is empty.
  const validProjects = projects.filter(p => p.gallery.length > 0);

  return <WorksClient initialProjects={validProjects} />;
}
