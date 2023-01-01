import videoBg from "/media/video1.mp4";
import videoPoster from "/media/poster.png";

export const VideoControls = () => {
  return (
    <div className="w-[300px]">
      <video
        controls
        poster={videoPoster}
        className="w-full h-full object-cover invert" //object-top
        src={videoBg}
        // autoPlay
        // preload="metadata" or "none" - только, если неактивен автоплей
        loop
        muted
      ></video>
    </div>
  );
};
