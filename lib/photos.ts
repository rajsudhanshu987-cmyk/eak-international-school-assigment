import manifest from "./photos.generated.json";

// Written by scripts/photos.mjs: which files exist in public/images.
export const photos = manifest as Record<string, string | undefined>;

// Alt text used when a photo replaces an illustration.
export const photoAlt: Record<string, string> = {
  campus: "The EAK school building and green quad",
  classroom: "Students working together in a bright classroom",
  lab: "Students doing an experiment in the science laboratory",
  library: "Students reading in the school library",
  field: "Students playing on the school sports field",
  auditorium: "The school auditorium with a stage and seating",
  canteen: "Students having lunch in the cafeteria",
  medical: "The school medical room",
  computer: "Students working at computers in the computer lab",
  bus: "A school bus on campus",
  hostel: "A boarding house room with beds and a window",
  art: "Students painting in the art studio",
};
