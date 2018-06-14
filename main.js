const addButton = document.getElementById('addButton');
const input = document.getElementById('input');
const list = document.getElementById('list');

let createItem = () => {
  const li = document.createElement('li');
  li.className = 'item';
  list.appendChild(li);

  let visebleContainer = () => {
    let s = document.createElement('spun');
    li.appendChild(s);
    s.className = 'container';
    let p = document.createElement('p');
    s.appendChild(p);
    p.className = 'text';
    p.innerText = input.value;
    let b = document.createElement('button');
    s.appendChild(b);
    b.innerText = 'option';
    b.className = 'change';
  }

  let hidenContainer = () => {
    let s = document.createElement('spun');
    li.appendChild(s);
    s.className = 'container';
    s.classList.add('container--hiden');
    let i = document.createElement('input');
    s.appendChild(i);
    i.className = 'input';
    i.value = input.value;
    let saveBtn = document.createElement('button');
    s.appendChild(saveBtn);
    saveBtn.innerText = 'save';
    saveBtn.className = 'save';
    let checkBtn = document.createElement('button');
    s.appendChild(checkBtn);
    checkBtn.innerText = 'check';
    checkBtn.className = 'check';
  }

  visebleContainer();
  hidenContainer();
}

let addItem = () => {
  if (input.value) createItem();
  input.value = '';
}

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addItem();
})

addButton.addEventListener('click', () => {
  addItem();
})

list.addEventListener('click', (e) => {
  let target = e.target;
  let firstParent = target.parentElement;
  let grandParent = firstParent.parentElement;
  let children = grandParent.children;
  let text = grandParent.firstElementChild.firstElementChild;
  let chInput = grandParent.lastElementChild.firstElementChild;

  let toggleFn = () => {
    for (i of children) {
      i.classList.toggle('container--hiden');
    }
    text.innerText = chInput.value
  }

  if (target.className === 'change') toggleFn();

  if (target.className === 'save') toggleFn();

  if (target.className === 'check') {
    toggleFn();
    text.classList.toggle('checked');
  }

})