interface CourseParams {
  params: Promise<{ course: string }>;
}
interface course {
  course: string;
}

interface courseId {
  courseId: number;
}

interface courseData {
  title: string;
  id: number;
}

interface materialData {
  videoUrl: string;
  duration: string;
  lessons: number;
  enrolled: number;
  languages: string[];
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
