// show spinner
const showSpiner = () => {
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden');
    spinner.classList.add('flex', 'justify-center', 'items-center', 'h-96');
}

// remove spinner
const removeSpinner = () => {
    const spinner = document.getElementById('spinner');
    spinner.classList.add('hidden');
    spinner.classList.remove('flex', 'justify-center', 'items-center', 'h-96');
}