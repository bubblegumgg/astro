document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("birthdate-form");

 // 模拟星盘计算
  function calculateAstrology(birthdate) {
    const positions = Array.from({ length: 4 }, (_, i) => {
      const offset = new Date(birthdate).getDate() + i;
      return (offset % 12) + 1;
    });
    return {
      Sun: positions[0],
      Moon: positions[1],
      Venus: positions[2],
      Mars: positions[3],
    };
  }

  // 预测情绪
  function predictEmotion(data) {
    const emotions = ['Energetic', 'Emotional', 'Romantic', 'Ambitious'];
    return emotions[data.Sun % emotions.length];
  }

  // 分析建议
  function generateAnalysis(emotion) {
    const suggestions = {
      Energetic: "Set a new plan for this week, go challenge yourself!",
      Emotional: "Find solace from your family or friends. Otherwise, you can stay alone.",
      Romantic: "Spend more time with your lover, explore your intimate moments.",
      Ambitious: "Focus on your work cause you're gonna nail it!",
    };
    return suggestions[emotion];
  }

  // 绘制星盘
  function drawStarChart(data) {
    const canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 300;
    const ctx = canvas.getContext("2d");

    // 绘制宫位
    const radius = 140;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(150, 150, radius, 0, Math.PI * 2);
    ctx.stroke();

    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI * 2) / 12 - Math.PI / 2;
      const x = 150 + radius * Math.cos(angle);
      const y = 150 + radius * Math.sin(angle);
      ctx.fillStyle = "white";
      ctx.fillText(i + 1, x - 5, y + 5);
      ctx.moveTo(150, 150);
      ctx.lineTo(x, y);
    }
    ctx.stroke();

    // 绘制行星
    const planets = ["Sun", "Moon", "Venus", "Mars"];
    const colors = ["gold", "silver", "yellow", "red"];
    planets.forEach((planet, index) => {
      const angle = (data[planet] * Math.PI * 2) / 12 - Math.PI / 2;
      const x = 150 + (radius - 20) * Math.cos(angle);
      const y = 150 + (radius - 20) * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = colors[index];
      ctx.fill();
      ctx.fillText(planet, x - 10, y - 10);
    });

    return canvas;
  }

  // 显示结果的模态框
  function showResult(birthdate, emotion, analysis, starChartCanvas) {
    const modal = document.createElement("div");
    modal.className = "result-modal";
    modal.innerHTML = `
      <div class="modal-content">
        <h2>Your Astrology Reading</h2>
        <p><strong>Emotion:</strong> ${emotion}</p>
        <p><strong>Analysis:</strong> ${analysis}</p>
        <div id="chart-container"></div>
        <button id="close-modal">Close</button>
        <div class="stickers"></div>
      </div>
    `;
    document.body.appendChild(modal);

    const chartContainer = modal.querySelector("#chart-container");
    chartContainer.appendChild(starChartCanvas);

    // 触发贴纸掉落效果
    const stickerMap = {
      Energetic: "stickers/rainbow1.png",
      Emotional: "stickers/rain.png",
      Romantic: "stickers/heart.png",
      Ambitious: "stickers/fire.webp",
    };
    const stickerImage = stickerMap[emotion];

    const stickersContainer = modal.querySelector(".stickers");
    for (let i = 0; i < 30; i++) {
      const sticker = document.createElement("img");
      sticker.src = stickerImage;
      sticker.className = "sticker";
      sticker.style.setProperty("--random-x", Math.random() * 100);
      stickersContainer.appendChild(sticker);

      setTimeout(() => sticker.remove(), 10000);
    }

    const closeModal = modal.querySelector("#close-modal");
    closeModal.addEventListener("click", () => {
      modal.remove();
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const birthdate = document.getElementById("birthdate").value;
    const data = calculateAstrology(birthdate);
    const emotion = predictEmotion(data);
    const analysisText = generateAnalysis(emotion);
    const starChartCanvas = drawStarChart(data);

    showResult(birthdate, emotion, analysisText, starChartCanvas);
  });
});
