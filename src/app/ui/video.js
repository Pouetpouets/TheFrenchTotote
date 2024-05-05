import videoSrc from '../../../public/asssets/herovideo.mp4';

export function Video() {
  return (
    <video >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
