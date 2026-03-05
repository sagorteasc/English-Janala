// search word
document.getElementById('search-btn').addEventListener('click', function () {
    nonActiveBtnDisplay();
    showSpiner();

    document.getElementById('category-text-container').classList.add('hidden');
    document.getElementById('category-container').innerHTML = '';

    const input = document.getElementById('input-value');
    const inputValue = input.value.trim().toLowerCase();
    input.value = '';

    // fetch all words
    setTimeout(() => {
        fetch('https://openapi.programming-hero.com/api/words/all')
            .then(res => res.json())
            .then(data => {
                const allWords = data.data;
                const searchWord = allWords.filter(word => word.word.trim().includes(inputValue));

                displayCategories(searchWord);
                removeSpinner();
            });
    }, 2000);
})