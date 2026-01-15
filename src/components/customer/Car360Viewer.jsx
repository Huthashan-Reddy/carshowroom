export default function Car360Viewer() {
  return (
    <div className="viewer-box">
      <img
        src="/cars/360/frame1.jpg"
        alt="360 car view"
        draggable="false"
      />
      <p>Drag to rotate car</p>
    </div>
  );
}
