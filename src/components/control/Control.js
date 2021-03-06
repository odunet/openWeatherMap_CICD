import Temperature from './temperature';
import Title from './title';
import Wind from './wind';
import { ControlDiv } from './Control.style';

export default function Control() {
  return (
    <>
      <ControlDiv>
        <Title />
        <Temperature />
        <Wind />
      </ControlDiv>
    </>
  );
}
