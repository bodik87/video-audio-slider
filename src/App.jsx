import { VideoBg } from "./components/VideoBg";
import { VideoControls } from "./components/VideoControls";
import { Audio } from "./components/Audio";

export const App = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <VideoBg />
      <VideoControls />
      <Audio />
    </div>
  );
};
