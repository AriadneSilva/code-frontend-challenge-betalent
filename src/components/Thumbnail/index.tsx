import { ThumbnailContainer, ThumbnailImage } from "./styles";

type Props = {
  src: string;
  alt?: string;
};

export function Thumbnail({ src, alt = "Protótipo" }: Props) {

  return (
    <ThumbnailContainer>
      <ThumbnailImage src={src} alt={alt} />
    </ThumbnailContainer>
  );
}
