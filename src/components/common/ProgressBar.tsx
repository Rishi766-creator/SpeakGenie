function ProgressBar({
  value = 50,
  bgColor = "bg-white/10",
  fillColor = "bg-green-500",
}) {
  return (
    <div className={`w-full h-2 rounded-full ${bgColor}`}>
      <div
        className={`h-full rounded-full ${fillColor}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default ProgressBar;
