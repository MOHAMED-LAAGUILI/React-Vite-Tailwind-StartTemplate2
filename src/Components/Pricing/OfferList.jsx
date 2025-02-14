import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

/* eslint-disable react/prop-types */

const OfferList = ({
  text,
  status,
}) => {
  return (
    <div className="mb-3 flex items-center">
      <span className="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary dark:bg-darkText dark:text-darkBg">
        {status === "active" ?   <FaCheck/>
 :  <FaX/>}
      </span>
      <p className="m-0 text-base font-medium text-body-color  dark:text-white">{text}</p>
    </div>
  );
};

export default OfferList;
