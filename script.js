document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ===== EDIT THIS BLOCK ONLY ===== */
  const BASE = "https://videoplayer.telvue.com/player/h5YXQ1tu-XWPP7hPbMpI7hU3yTHI36_B";
  const OPTS = "?showtabssearch=true&fullscreen=false&show_title_description_summary=true";

  // thumb: path to your series image (leave "" to show the placeholder color)
  const SERIES = [
    { name: "Fireside Chat", id: 6022, color: "#8a5a1f", thumb: "fc.png" },
    { name: "Residents\u2019 Council", id: 5648, color: "#1f6f6b", thumb: "rc.png" },
    { name: "Speaking of Art", id: 6083, color: "#a24b2a", thumb: "speaking-of-art.png" },
    { name: "Let\u2019s Talk Science", id: 6084, color: "#24578f", thumb: "lets-talk-science.png" },
    { name: "Secular Humanists", id: 6077, color: "#5b4b8a", thumb: "secular-humanist.png" },
    { name: "Writers Read!", id: 6082, color: "#6b3f5e", thumb: "writers-read.png" },
    { name: "Neighborhoods", id: 6254, color: "#3d6b2e", thumb: "neighborhoods.png" },
    { name: "Life Journeys", id: 6076, color: "#7a3b3b", thumb: "life-journeys.png" },
    { name: "Wellness", id: 6257, color: "#2e6b57", thumb: "wellness.png" }
  ];
  /* ===== END EDIT BLOCK ===== */

  const list = document.getElementById("series-list");
  if (list) {
    list.innerHTML = SERIES.map(s => `
      <a class="series-row" href="${BASE}/series/${s.id}${OPTS}" target="_blank" rel="noopener">
        <div class="series-thumb" style="background-color:${s.color};${s.thumb ? `background-image:url('${s.thumb}')` : ""}"></div>
        <span class="series-name">${s.name}</span>
      </a>`).join("");
  }
});
