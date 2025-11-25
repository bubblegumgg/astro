const zodiacData = {
  Aries: { name: "Aries", dates:"Mar 21-Apr 19", description: "Eager, dynamic,quick and compeltitive" ,image: 'imgs/Aries.webp'},
  Taurus: { name: "Taurus", dates:"Apr 20-May 20", description: "Strong, dependable, sensual and creative" ,image: 'imgs/Taurus.webp'},
  Cancer: { name: "Cancer", dates:"Jun 21-Jul 22", description: "Intuitive, sentimental, compassionale and protective" ,image: 'imgs/Cancer.webp'},
  Leo: { name: "Leo", dates:"Jul 23-Aug 22", description: "Dramatic, outgoing, fiery and self-assured" ,image: 'imgs/Leo.png'},
  Libra: { name: "Libra", dates:"Sep 23-Oct 22", description: "Social, fair-minded, diplomatic and gracious" ,image: 'imgs/Libra.webp'},
  Scorpio: { name: "Scorpio", dates:"Oct 23-Nov 21", description: "Passionate, stubborn, resourceful and brave" ,image: 'imgs/Scorpio.webp'},
  Capricorn: { name: "Capricorn", dates:"Dec 22-Jan 19", description: "Serious, independent, disciplined and tenacious" ,image: 'imgs/Capricorn.webp'},
  Gemini: { name: "Gemini", dates:"May 21-Jun 20", description: "Versatile, expressive, curious and kind" ,image: 'imgs/Gemini.webp'},
  Pisces: { name: "Pisces", dates:"Feb 19-Mar 20", description: "Aflectionate, empathetic, wise and artistic" ,image: 'imgs/Pisces.webp'},
  Sagittarius: { name: "Sagittarius", dates:"Nov 22-Dec 21", description: "Extroverted, optimistic, funny and generous" ,image: 'imgs/Sagittarius.png'},
  Virgo: { name: "Virgo", dates:"Aug 23-Sep 22", description: "Practical, loyal, gentle and analytical" ,image: 'imgs/Virgo.png'},
  Aquarius: { name: "Aquarius", dates:"Jan 20-Feb 18", description: "Deep, imaginative, original and uncompromising" ,image: 'imgs/Aquarius.webp'},
};

const zodiacIcons = document.querySelectorAll('.zodiac-icon');
const modal = document.getElementById('zodiac-modal');
const zodiacInfo = document.getElementById('zodiac-info');
const closeModal = document.getElementById('close-modal');

// 每个图标绑定事件
zodiacIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const zodiac = icon.getAttribute('data-sign'); 
    const data = zodiacData[zodiac]; 

    if (data) {
      zodiacInfo.innerHTML = `
        <img class="zodiac-image" src="${data.image}" alt="${data.name}">
        <h2>${data.name}</h2>
        <p>${data.dates}</p>
        <p>${data.description}</p>
      `;
      modal.classList.remove('hidden');
      modal.style.display = "block";
    }
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.style.display = "none";
});
