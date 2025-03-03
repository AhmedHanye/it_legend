const slowTime = (time: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export const getCourseData = async (
  course: string
): Promise<courseData | number> => {
  await slowTime(500);
  if (course.toLowerCase() === "course details")
    return {
      title: "Starting SEO as your Home Based Business",
      id: 1,
    };
  return 404;
};

export const getMaterialData = async (
  course: number
): Promise<materialData> => {
  await slowTime(1000);
  console.log(course);
  return {
    videoUrl: "https://www.youtube.com/embed/vN4iSTbNnfQ?si=pGgvQjYw7T7KpQfM",
    duration: "3 weeks",
    lessons: 8,
    enrolled: 65,
    languages: ["English", "Arabic"],
  };
};

export const getTopics = async (
  course: number
): Promise<{
  progress: number;
  topics: topic[];
}> => {
  await slowTime(1500);
  console.log(course);
  return {
    progress: 63,
    topics: [
      {
        title: "Week 1-4",
        description:
          "Advanced story telling techniques for writers: bradajanmed",
        materials: [
          {
            title: "Introduction",
            url: "",
            locked: false,
          },
          {
            title: "Course Overview",
            url: "",
            locked: true,
          },
          {
            title:
              "Course Overview lorem ipsum dolor sit amet Course Overview lorem ipsum dolor sit amet Course Overview lorem ipsum dolor sit amet",
            url: "",
            locked: true,
            questions: 0,
            time: 0,
          },
          {
            title: "Course Exercise / Reference Files",
            url: "",
            locked: true,
          },
          {
            title: "Code Editor Installation (Optional if you have one)",
            url: "",
            locked: true,
          },
          {
            title: "Embedding PHP in HTML",
            url: "",
            locked: true,
          },
        ],
      },
      {
        title: "Week 5-8",
        description:
          "Advanced story telling techniques for writers: Personas, Characters & Plots",
        materials: [
          {
            title: "Defining Functions",
            url: "",
            locked: false,
          },
          {
            title: "Function Parameters",
            url: "",
            locked: true,
          },
          {
            title: "Return Values From Functions",
            url: "",
            locked: true,
            questions: 2,
            time: 15,
          },
          {
            title: "Course Exercise / Reference Files",
            url: "",
            locked: true,
          },
          {
            title: "Code Editor Installation (Optional if you have one)",
            url: "",
            locked: true,
          },
          {
            title: "Embedding PHP in HTML",
            url: "",
            locked: true,
          },
        ],
      },
      {
        title: "Week 9-12",
        description:
          "Advanced story telling techniques for writers: bradajanmed",
        materials: [
          {
            title: "Introduction",
            url: "",
            locked: false,
          },
          {
            title: "Course Overview",
            url: "",
            locked: true,
          },
          {
            title:
              "Course Overview lorem ipsum dolor sit amet Course Overview lorem ipsum dolor sit amet Course Overview lorem ipsum dolor sit amet",
            url: "",
            locked: true,
            questions: 10,
            time: 20,
          },
          {
            title: "Course Exercise / Reference Files",
            url: "",
            locked: true,
          },
          {
            title: "Code Editor Installation (Optional if you have one)",
            url: "",
            locked: true,
          },
          {
            title: "Embedding PHP in HTML",
            url: "",
            locked: true,
          },
        ],
      },
    ],
  };
};

export const getComments = async (course: number): Promise<comment[]> => {
  await slowTime(2000);
  console.log(course);
  return [
    {
      img: "/profile_img.svg",
      name: "Student Name Goes Here",
      date: "Oct 10, 2021",
      comment:
        "Lorem ipsum dolor sit ametr consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/profile_img.svg",
      name: "Student Name Goes Here",
      date: "Oct 10, 2021",
      comment:
        "Lorem ipsum dolor sit ametr consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/profile_img.svg",
      name: "Student Name Goes Here",
      date: "Oct 10, 2021",
      comment:
        "Lorem ipsum dolor sit ametr consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
};
