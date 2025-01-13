import { Riple } from "react-loading-indicators";

export default function Loading() {
    return (
        <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Riple color="#32cd32" size="medium" />
      </div>
    )
}
