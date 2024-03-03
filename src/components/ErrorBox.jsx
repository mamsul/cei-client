// eslint-disable-next-line react/prop-types
export default function ErrorBox({ message }) {
  return (
    <div
      style={{
        height: 40,
        backgroundColor: "#F28585",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40,
        width: "100%",
      }}
    >
      <span style={{ color: "white" }}>{message}</span>
    </div>
  );
}
