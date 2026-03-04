// categories
const categories = async (level) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/level/${level}`)
    const data = await res.json()
    displayCategories(data.data)
}

// display categories
const displayCategories = (category) => {
    // console.log(category);
    const categoryContainer = document.getElementById('category-container');
    const categoryTextContainer = document.getElementById('category-text-container');
    categoryTextContainer.classList.add('hidden');
    categoryContainer.innerHTML = '';


    if (category.length === 0) {
        categoryContainer.classList.remove('grid');
        categoryContainer.innerHTML = `
                <div class="flex flex-col justify-center items-center space-y-3 py-20">
                    <img src="assets/alert-error.png" alt="">
                    <h4 class="hind-siliguri text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h4>
                    <h3 class="hind-siliguri font-medium text-3xl">নেক্সট Lesson এ যান</h3>
                </div>
            `
    }
    else {
        categoryContainer.classList.add('grid');
    }

    category.forEach(vocabulary => {
        // console.log(vocabulary);

        const vocabularyDiv = document.createElement('div');

        vocabularyDiv.innerHTML = `
                <div class="bg-base-100 w-[320px] rounded-xl shadow-sm md:w-[450px] lg:w-[420px]">
                    <div class="card-body text-center">
                        <h2 class="font-bold text-[32px] mb-6">${vocabulary.word}</h2>
                        <p class="poppins font-medium text-xl mb-6">Meaning /Pronounciation</p>
                        <p class="hind-siliguri font-black text-xl opacity-80 mb-14 md:whitespace-nowrap lg:text-lg">${vocabulary.meaning} / ${vocabulary.pronunciation}</p>
                        <div class="card-actions justify-between">
                            <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF70]"><i class="fa-solid fa-circle-info"></i></button>
                            <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF70]"><i class="fa-solid fa-volume-high"></i></button>
                        </div>
                    </div>
                </div>
            `
        categoryContainer.appendChild(vocabularyDiv);
    });
}
