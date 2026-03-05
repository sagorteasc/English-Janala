// fetch detail
const wordDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    const data = await res.json()
    showDetailModal(data.data);
}

// synonyms array
const synonymsDisplay = (items) => {
    const synonyms = items.map(item => `<span class="btn mr-2">${item}</span>`)
    return (synonyms.join(" "));
}

// detail modal
const showDetailModal = (detail) => {
    console.log(detail);
    const modal = document.getElementById('detail-modal');
    modal.showModal();
    const modalDisplay = document.getElementById('modal-description');
    modalDisplay.innerHTML = '';
    const modalDescription = document.createElement('div');
    modalDescription.classList.add('poppins', 'p-5', 'space-y-5');
    modalDescription.innerHTML = `
        <div class="font-semibold text-xl flex gap-1 flex-wrap md:text-4xl">
            <h3>${detail.word}</h3>
            <h4>(<i class="fa-solid fa-microphone" style="color: rgb(0, 0, 0);"></i>:${detail.pronunciation})</h4>
        </div>
        <div>
            <h3 class="font-semibold text-lg md:text-2xl">Meaning</h3>
            <p class="hind-siliguri font-medium text-lg md:text-2xl">${detail.meaning}</p>
        </div>
        <div>
            <h3 class="font-semibold text-lg md:text-2xl">Example</h3>
            <p class="opacity-80 text-lg md:text-2xl">${detail.sentence}</p>
        </div>
        <h3 class="hind-siliguri font-medium text-lg md:text-2xl">সমার্থক শব্দ গুলো</h3>
        <div class="flex gap-1 flex-wrap text-xl opacity-80 md:gap-2">
            ${synonymsDisplay(detail.synonyms)}
        </div>
        <form method="dialog">
            <button class="btn bg-[#422AD5] rounded-lg text-white">Complete Learning</button>
        </form>
    `
    modalDisplay.appendChild(modalDescription);
}
