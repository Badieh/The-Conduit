import { Riple } from "react-loading-indicators";

export default function Loading() {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Riple color="#3275CDFF" size="medium" />
    </div>
  );
}
