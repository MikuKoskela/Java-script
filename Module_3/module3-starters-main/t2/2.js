
const div = document.querySelector('#target');
const body =
   `<li>First item</li>
    <ul class="my-item">
    <li>Second item</li>
    </ul>
    <li>Third item</li>`;
div.innerHTML = body;

    const t = document.createTextNode(`<li>First item</li>
    <li>Second item</li>
    <li>Third item</li>`);
const p = document.createElement('p');
    p.appendChild(t);
    div.appendChild(p);
