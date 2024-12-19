import Product from "./Product";
import Progressbar from "./Progressbar";
import Stepper from "./Stepper";
import Wrapper from "./Wrapper";
import ToggleWrapper from "./ToggleWrapper";

const Component = (props) => {
  return (
    <div style={{ width: "375px" }}>
      <Product title="KTX NNN" />
      <Product title="KTX NNN">content</Product>
      <Progressbar text="여행상품선택" type="active" />
      <Progressbar text="여행상품선택" type="unactive" />
      <Stepper num={0} />
      <ToggleWrapper title="인원선택">
        <Wrapper>인원</Wrapper>
      </ToggleWrapper>
    </div>
  );
};

export default Component;