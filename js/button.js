document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.selectable-button');

    buttons.forEach(button =>  {
        button.addEventListener('click', function () {
            button.classList.toggle('bg-green-500');
            button.classList.toggle('text-white');
            button.classList.toggle('bg-gray-300');
            button.classList.toggle('text-gray-700');
        });
    });
});
