import "./GaugeBar.css";

export default function GaugeBar({ name }) {
  let root = document.documentElement;
  function load() {
    root.style.setProperty("--my-var", name + "%");
  }
  //function
  // => name에 따라서 className을 다르게 적용
  //if() * 4
  //  return span (4개)
  return (
    <div className="progress">
      {/* <span className="progress-value" onLoad={load()}></span> */}
    </div>
  );
}
