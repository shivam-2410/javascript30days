const secondhand = document.querySelector('.second-hand');
const minutehand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

//function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsdeg = ((seconds/60)*360) +90;// because origin=0deg and 12:00 90deg (isko balance krne ke liye)
    secondhand.style.transform = `rotate(${secondsdeg}deg)`;   

    const minute = now.getMinutes();
    const mindeg = ((minute/60)*360) +90;// because origin=0deg and 12:00 90deg (isko balance krne ke liye)
    minutehand.style.transform = `rotate(${mindeg}deg)`;

    const hour = now.getHours();
    const hourdeg = ((hour/12)*360) + (minute/60*30) + 90;// because origin=0deg and 12:00 90deg (isko balance krne ke liye)
    hourhand.style.transform = `rotate(${hourdeg}deg)`;
}
setInterval(setDate , 1000);

setDate();