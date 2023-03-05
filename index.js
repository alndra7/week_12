const userName = document.querySelector ('.userName');
const userPic = document.querySelector ('.userPic');
const comment = document.querySelector ('.comment');

const nameChat = document.querySelector ('.nameChat');
const picChat = document.querySelector ('.picChat');
const commentChat = document.querySelector ('.commentChat')
const button = document.querySelector ('.button');

//ВЫВОД ДАННЫХ В ЧАТ
function chat () { 
  const checkName = userName.value[0].toUpperCase() + (userName.value.slice(1)).toLowerCase();
  nameChat.textContent = (checkName);
  
  let checkCom = ((comment.value).replace(/viagra/i,"***"));
  checkCom = checkCom.replace(/XXX/i,"***")
  commentChat.textContent = (checkCom);

  picChat.src = (userPic.value);
  picChat.alt = 'userpic';
}
button.addEventListener('click', chat);
  




//ЗАДАНИЕ ПОД ЗВЕЗДОЧКОЙ

const str ='<h3>Лошадь</h3><p>Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.</p></div><div class="pane pane2"><button class="remove-button-donkey">[x]</button><h3>Осёл</h3><p>Домашний осёл (лат. Equus asinus asinus), или ишак, — одомашненный подвид дикого осла (Equus asinus), сыгравший важную историческую роль в развитии хозяйства и культуры человека и по-прежнему широко в хозяйстве многих развивающихся стран.</p></div>'

function deleteTags(str) {
  regex = /( |<([^>]+)>)/ig;
  result = str.replace(regex, "");
  return result;
}

console.log(deleteTags(str));
