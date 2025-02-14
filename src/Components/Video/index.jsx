import { useState } from "react";
import Modal from "react-modal";
import SectionTitle from "../Common/SectionTitle";
import { FaX } from "react-icons/fa6";

Modal.setAppElement("#root"); // Ensure accessibility

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 flex flex-wrap justify-center">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md" data-wow-delay=".15s">
              <div className="relative aspect-[16/9] flex items-center justify-center">
                {/* Video Thumbnail */}
                <img 
                  src="https://www.uctoday.com/wp-content/uploads/2023/03/How-to-Integrate-Microsoft-Teams-Rooms-With-Other-Conference-Room-Technology.jpg" 
                  alt="video thumbnail" 
                  className="rounded-md"
                />
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="relative z-20 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg width="16" height="18" viewBox="0 0 16 18" className="fill-current">
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Modal 
        isOpen={isOpen} 
        onRequestClose={() => setOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-[9999] bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
      >
        <div className="relative w-[90%] md:w-[700px] bg-black rounded-md p-4">
          {/* Close Button */}
          <button 
            onClick={() => setOpen(false)} 
            className="absolute top-2 right-4 text-white text-2xl"
          >
           <FaX/>
          </button>
          {/* Embedded YouTube Video */}
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/wVCuNtZNBH4?autoplay=1"
            title="Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="rounded-md"
          />
        </div>
      </Modal>

      
    </section>
  );
};

export default Video;
