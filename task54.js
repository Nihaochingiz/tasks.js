/*
ou have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).


*/


const friends = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
  }]

/*
  let currentStatus = friends2.map(a => a.status);
  let currentUsername = friends2.map(b => b.username);
  let currentLastActivity = friends2.map(c => c.lastActivity);
  */
function whosOnline  (friends)  {

  const online= []
  const offline = []
  const away = []

  friends.map(n=>n.status==='online'&&n.lastActivity<11?online.push(n.username)
  :n.status ==='offline'?offline.push(n.username):away.push(n.username)
  )
  /* Нам нужно изменить массив из объектов, чтобы обращаться к ключам  мы пользуемся методом map Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива задаем переменную n и обращаемся по ней уже к ключу status, если статус онлайн и значение ключа ластактивити меньше 11 мы добавляем в массив online  наш юзернейм в противном случае статус будет оффлайн, знак вопроса говорит нам, что если так, то мы добаляем юзернейм в масив оффлайн, в противном случае добавляем в массив away*/
if(online.length>0&&offline.length>0&&away.length>0)
return {online,offline,away}
if(online.length>0&&away.length>0)
return {online, away}
if(offline.length>0&&away.length>0)
return {offline,away}
return {}

}
console.log(whosOnline(friends));


//console.log(currentStatus);
//console.log(Object.values(friends));
//let gg = (Object.values(friends));
//let result = friends.map(a => a.status);



/*



const whosOnline = (friends) => {
  const whosonline = {
    online : [],
    offline : [],
    away : []
  }
  for(let a of friends){
    if(a['status'] == 'online' && a['lastActivity'] <= 10){
      whosonline['online'].push(a['username']);
    }
    else if(a['status'] == 'offline'){
      whosonline['offline'].push(a['username']);
    }
    else{
      whosonline['away'].push(a['username']);
    }
  }
  if(whosonline['online'].length == 0){
    delete whosonline['online'];
  }
  if(whosonline['offline'].length == 0){
    delete whosonline['offline'];
  }
  if(whosonline['away'].length == 0){
    delete whosonline['away'];
  }
  return whosonline;
}


const whosOnline = (friends) => {
  let output = {};
  friends.forEach(e => {
      let status = e.status;
      if(status === 'online' && e.lastActivity > 10) status = 'away';
      let temp = output[status];
      if(output[status]) {
          output[status].push(e.username);
      }
      else {
          output[status] = [e.username];
      }
  });
  return output;
}
*/