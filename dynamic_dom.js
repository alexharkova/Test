let h1 = document.createElement('h1');
h1.className = "title";
h1.innerHTML = "TEST";
document.body.append(h1);
for (j = 1; j <= 3; j++){
    let ol = document.createElement('ol');
    ol.className = "question";
    ol.innerHTML = `Question${j}`;
    document.body.append(ol);
    for (i = 1; i <= 3; i++){
        let li = document.createElement('li');
        li.className = "possibleAnswer";
        li.innerHTML = `Answer${i}`;
        document.body.append(li);
    }
}
let button = document.createElement('button');
button.className = "submit";
button.innerHTML = "Check";
document.body.append(button);