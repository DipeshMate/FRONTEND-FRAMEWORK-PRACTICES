const t1 = performance.now();

for(let i=0; i<=20;i++)
{
    const newElement=Document.createElement('p');
    newElement.textContent='this is para '+ i;

    Document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("this took "+(t2-t1) + "ms");

// const myDiv = Document.createElement('div');
// for(let i=0; i<=20;i++)
// {
//     const element=Document.createElement('p');
//     element.textContent='this is para '+ i;

//     myDiv.appendChild(element);
// }

// Document.body.appendChild(myDiv);