const categoryDefaultBtns = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/levels/all')
        const data = await res.json();
        displayBtns(data.data);
    }
    catch (err) {
        alert('Error', err);
    }
}

const displayBtns = (data) => {
    // console.log(data);
    const defaultBtns = document.getElementById('default-btns');

    data.forEach(btn => {
        const btnDiv = document.createElement('div');
        // console.log(btn.level_no);
        btnDiv.innerHTML = `
        <button onclick="categories(${btn.level_no})" class="btn categoryBtn text-[#422AD5] font-semibold text-sm border border-[#422AD5] rounded"><img
                            src="assets/fa-book-open.png" alt="">Lesson -${btn.level_no}</button>
    `
        defaultBtns.appendChild(btnDiv);
    });

}

categoryDefaultBtns();