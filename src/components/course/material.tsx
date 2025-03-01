import {
  faFacebook,
  faLinkedin,
  faSquareXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faBookOpen,
  faChalkboardUser,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = () => {
  const materialData = {
    duration: "3 weeks",
    lessons: 8,
    enrolled: 65,
    languages: ["English", "Arabic"],
  };
  return (
    <>
      <div
        id="video-player"
        className="w-full aspect-video rounded-lg overflow-hidden"
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/vN4iSTbNnfQ?si=pGgvQjYw7T7KpQfM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div id="course-links" className="py-8 flex gap-x-4 text-gray-600">
        <a href="" 
        aria-label="facebook"
        className="p-2 rounded-full border-2 hover:bg-gray-100">
          <FontAwesomeIcon icon={faFacebook} className="size-5" />
        </a>
        <a href="" 
        aria-label="linkedin"
        className="p-2 rounded-full border-2 hover:bg-gray-100">
          <FontAwesomeIcon icon={faLinkedin} className="size-5" />
        </a>
        <a href="" 
        aria-label="twitter"
        className="p-2 rounded-full border-2 hover:bg-gray-100">
          <FontAwesomeIcon icon={faSquareXTwitter} className="size-5" />
        </a>
        <a href="" 
        aria-label="youtube"
        className="p-2 rounded-full border-2 hover:bg-gray-100">
          <FontAwesomeIcon icon={faYoutube} className="size-5" />
        </a>
      </div>
      <div id="course-material" className="md:py-10 py-5">
        <h2 className="heading2">Course Materials</h2>
        <div className="p-6 shadow-[0px_0px_30.5px_15px_rgba(0,0,0,0.04)] rounded-lg my-6 divide-accent divide-y-2">
          <div className="flex items-center justify-between py-2 gap-x-2">
            <div className="center gap-x-2 ">
              <FontAwesomeIcon icon={faClock} className="size-4" />
              <span>Duration</span>
            </div>
            <span>{materialData.duration}</span>
          </div>
          <div className="flex items-center justify-between py-2 gap-x-2">
            <div className="center gap-x-2 ">
              <FontAwesomeIcon icon={faBookOpen} className="size-4" />
              <span>Lessons</span>
            </div>
            <span>{materialData.lessons}</span>
          </div>
          <div className="flex items-center justify-between py-2 gap-x-2">
            <div className="center gap-x-2 ">
              <FontAwesomeIcon icon={faChalkboardUser} className="size-4" />
              <span>Enrolled</span>
            </div>
            <span>{materialData.enrolled} students</span>
          </div>
          <div className="flex items-center justify-between py-2 gap-x-2">
            <div className="center gap-x-2 ">
              <FontAwesomeIcon icon={faGlobe} className="size-4" />
              <span>Language</span>
            </div>
            <div className="text-end">{materialData.languages.join(", ")}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Material;
