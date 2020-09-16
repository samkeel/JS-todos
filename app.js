const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-centre">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    // trim white space
    const todo = addForm.add.value.trim();
    // check form isnt empty
    if (todo.length) {
        generateTemplate(todo);
        // rest the fields
        addForm.reset();
    }

});