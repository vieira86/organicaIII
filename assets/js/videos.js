/* ============================================================
   videos.js — lógica da página de vídeos
   ============================================================ */

let videoTopicId = "all";

const ALL_TOPICS_CHIP = { id: "all", title: "Todos os vídeos", short: "Todos", icon: "🎬" };

function initVideos(){
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("topic");
  if (fromUrl && getTopic(fromUrl)) videoTopicId = fromUrl;

  const chipsEl = document.getElementById("video-topic-chips");
  const topicsWithAll = [ALL_TOPICS_CHIP, ...TOPICS];
  renderTopicChips(chipsEl, topicsWithAll, videoTopicId, selectVideoTopic);
  renderVideos();
}

function selectVideoTopic(id){
  videoTopicId = id;
  const topicsWithAll = [ALL_TOPICS_CHIP, ...TOPICS];
  renderTopicChips(document.getElementById("video-topic-chips"), topicsWithAll, videoTopicId, selectVideoTopic);
  renderVideos();
}

function renderVideos(){
  const grid = document.getElementById("video-grid");
  grid.innerHTML = "";

  const idsToShow = videoTopicId === "all" ? TOPICS.map(t => t.id) : [videoTopicId];

  idsToShow.forEach(id => {
    const topic = getTopic(id);
    const list = VIDEOS[id] || [];
    list.forEach(v => {
      const card = document.createElement("div");
      card.className = "video-card";
      card.innerHTML = `
        <div class="frame-wrap">
          <iframe src="https://www.youtube.com/embed/${v.id}" title="${v.title}" loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="meta">
          <span class="tag">${topic.icon} ${topic.short}</span>
          <h4>${v.title}</h4>
          <p>${v.desc}</p>
          <span class="channel">${v.channel}</span>
        </div>
      `;
      grid.appendChild(card);
    });
  });

  if (grid.children.length === 0){
    grid.innerHTML = '<div class="empty-state">Nenhum vídeo cadastrado para este tópico ainda.</div>';
  }
}

document.addEventListener("DOMContentLoaded", initVideos);
