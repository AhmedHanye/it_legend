interface CourseParams {
  params: Promise<{ course: string }>;
}
interface materials {
  title: string;
  url: string;
  locked: boolean;
  questions?: number;
  time?: number;
}

interface topic {
  title: string;
  description: string;
  materials: materials[];
  topics?: topic[];
}

interface comment {
  img: string;
  name: string;
  date: string;
  comment: string;
}
