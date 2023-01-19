import "./GaugeBar.css";

export default function GaugeBar({ name }) {
  let root = document.documentElement;
  function load() {
    changeColor(name);
    root.style.setProperty("--my-var", name + "%");
  }

  function changeColor(name) {
    const span = document.querySelector(".progress-value");
    if (name > 70) {
      span.style.backgroundColor = "tomato";
    } else if (name > 50) {
      span.style.backgroundColor = "orange";
    } else if (name > 34) {
      span.style.backgroundColor = "#76c545";
    } else if (name > 1) {
      span.style.backgroundColor = "#5f7592";
    }
  }
  return (
    <div className="progress">
      <span className="progress-value" onLoad={load()}></span>
    </div>
  );
}
