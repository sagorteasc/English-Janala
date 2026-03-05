// load buttons
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

// display buttons
const displayBtns = (data) => {
    const defaultBtns = document.getElementById('default-btns');

    data.forEach(btn => {
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
        <button id="btn-${btn.level_no}" onclick="categories(${btn.level_no})" class="btn categoryBtn text-[#422AD5] font-semibold text-sm border border-[#422AD5] rounded"><i class="fa-solid fa-book-open"></i>Lesson -${btn.level_no}</button>
    `
        defaultBtns.appendChild(btnDiv);
    });
}

// remove active button 
const nonActiveBtnDisplay = () => {
    const nonActiveBtn = document.getElementsByClassName('categoryBtn');
    for (const btn of nonActiveBtn) {

        btn.classList.remove('bg-[#422AD5]', 'text-white', 'border-white');
    }
}

categoryDefaultBtns();