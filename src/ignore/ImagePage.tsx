import { Img } from "@dnb/eufemia";
import styled from "styled-components";

const StyledImg = styled(Img)`
  border-radius: 1rem;
`;

export interface ImagePageProps {
  url_img;
}

export const ImagePage = (props: ImagePageProps) => {
  const { url_img } = props;

  return (
    <StyledImg
      width="100%"
      height="100%"
      alt="Application Goal"
      src={url_img}
    />
  );
};
