const ReservateForm = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "22px",
      }}
    >
      <span style={{ font: "var(--font-b4)" }}>
        변경이 필요한 부분을 선택해 수정하실 수 있습니다
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "13px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "11px",
          }}
        >
          <span style={{ display: "block", font: "var(--font-b3-m)" }}>
            이름
          </span>
          <input type="text" style={{ width: "150px" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "11px",
          }}
        >
          <span style={{ display: "block" }}>생년월일</span>
          <input type="number" style={{ width: "150px" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "11px",
            }}
          >
            <span style={{ display: "block" }}>휴대폰번호</span>
            <input type="tel" style={{ width: "150px" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "11px",
            }}
          >
            <span style={{ display: "block" }}>이메일주소</span>
            <input type="email" style={{ width: "225px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservateForm;