'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const select = document.querySelector('#target');

for (let i = 0; i < students.length; i++) {
  const text1 =
      `<option ${students[i]}>John</option>`;
  const text2 =
    `<option ${students[i]}>Paul</option>`;
  const text3 =
    `<option ${students[i]}>jones</option>`;
select.innerHTML = text1;
select.innerHTML = text2;
select.innerHTML = text3;
}
