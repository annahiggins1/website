import strings from "@/app/strings";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MentorBlock() {
  return (
    <>
      <div className="md:grid flex flex-col md:grid-cols-2 md:grid-rows-2 grid-rows-4 grid-cols-1 gap-8 mt-8 md:mb-0 mb-16">
        {strings.MentorBlock.points.map(({ title, tagline }, i) => (
          <div
            className="flex flex-row items-start justify-start gap-4 h-fit"
            key={i}
          >
            <FontAwesomeIcon
              className="p-2 bg-oa-green-pastel ring-4 ring-oa-extra-light h-4 w-4 flex items-center justify-center rounded-full text-oa-green"
              icon={faCheck}
            />
            <div>
              <h3>{title}</h3>
              <p>{tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
