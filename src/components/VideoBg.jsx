import videoBg from "/media/video1.mp4";

export const VideoBg = () => {
  return (
    <div className="w-screen h-32 flex justify-center items-center">
      <p className="absolute w-min text-white text-center font-semibold z-10">
        Example text
      </p>
      <div className="absolute inset-0 bg-black/50" />
      <video
        className="w-full h-full object-cover" //object-top invert
        src={videoBg}
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};
