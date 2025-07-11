import { ThumbnailContainer, ThumbnailImage } from "./styles";

type Props = {
  src: string;

};

export function Thumbnail({ src }: Props) {
  return (
    <ThumbnailContainer>
      <ThumbnailImage src={src} alt={"BeTalent"} />
    </ThumbnailContainer>
  );
}
