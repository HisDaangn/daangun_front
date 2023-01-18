import "./GaugeBar.css";

export default function GaugeBar({ name }) {
  function load() {
    document.documentElement.style.setProperty("--my-var", { name });
  }

  return (
    <div className="progress">
      <span className="progress-value" onLoad={load()}></span>
    </div>
  );
}
