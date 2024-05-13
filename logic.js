let songcontainer=document.querySelectorAll(".song_container")
let box=document.querySelectorAll(".box");
let audio=new Audio('/song/01. Aap Ka Aana Dil Dhadkana.mp3');
let masterplay=document.querySelector('.masterplay');
let bar=document.querySelector(".bar");
let playing=document.querySelector(".playing");
let backward=document.querySelector(".backward");
let forward=document.querySelector(".forward");
let song_name=document.querySelector(".song_name");
let btn1=document.querySelector(".btn1")
let icon=document.querySelectorAll('.icon');
let index=0;
let prev=-1;

const song=[
    { name:"Aap ka aana dil dhadkana", songpath:"/song/01. Aap Ka Aana Dil Dhadkana.mp3"},
    { name:"Bholi si surat", songpath:"/song/Bholi Si Surat - Shahrukh Khan.mp3"},
    { name:"Jai shree Ram", songpath:"/song/Jai Shri Ram - Arijit Singh Version.mp3"},
    { name:"Main Khiladi", songpath:"/song/Main Khiladi - Selfiee.mp3"},
    { name:"Tauba ye sadgi", songpath:"/song/new_320_01 - Chand - PagalSongs.com.mp3"},
    { name:"Neela Neela ambar me ", songpath:"/song/Neele Neele Ambar Par Male Version Kalaakaar 320 Kbps.mp3"},
    { name:"Karda Kamaal Ni", songpath:"/song/One Love-(PagalWorld).mp3"},
    { name:"Paisa hai tho", songpath:"/song/Paisa Hai Toh_320(PagalWorldl).mp3"},
    { name:"Ram siya ram", songpath:"/song/Ram Siya Ram - Adipurush.mp3"},
    { name:"Tu tu hai wahi", songpath:"/song/Tu Tu Hai Wahi(PagalWorld).mp3"},
    { name:"Tumse milne ko dil", songpath:"/song/Tumse Milne Ko Dil - Phool Aur Kaante 320Kbps.mp3"},
]
   



masterplay.addEventListener('click',()=>{
    prev=index+1;
    song_name.innerHTML=song[index].name;
    if(audio.paused|| audio.currentTime<=0){
        masterplay.src="pause-removebg-preview.png";
    audio.play();
    playing.style.opacity=1;
    }
else
{
    masterplay.src="play-solid.svg";
audio.pause();
playing.style.opacity=0;
}
})

//update bar

audio.addEventListener('timeupdate',()=>{
    let ele=parseFloat((audio.currentTime/audio.duration)*100);
    bar.value=ele;
})

bar.addEventListener('change',()=>{
    audio.currentTime=(bar.value*audio.duration)/100;
})

box.forEach((ele) => {

    ele.addEventListener('click',()=>{
        masterplay.src="pause-removebg-preview.png";
        playing.style.opacity=1;

        if(ele.id==='1'){
            index=0;
            audio.src=song[0].songpath;
            song_name.innerHTML=song[index].name;
            if(audio.paused|| audio.currentTime<=0){
                audio.play();
                }
            }
       

        else if(ele.id==='2'){
            index=1;
            audio.src=song[1].songpath;
            song_name.innerHTML=song[index].name;
            if(audio.paused|| audio.currentTime<=0){
                audio.play();
                }
            }

           else if(ele.id==='3'){
            index=2;
            audio.src=song[2].songpath;
            song_name.innerHTML=song[index].name;
            if(audio.paused|| audio.currentTime<=0){
                audio.play();
                }
            else
            audio.pause();
           }

           else if(ele.id==='4'){
            index=3;
            audio.src=song[3].songpath;
            song_name.innerHTML=song[index].name;
            if(audio.paused|| audio.currentTime<=0){
                audio.play();
                }
            else
            audio.pause();
           }

           else if(ele.id==='5'){
            index=4;
            audio.src=song[4].songpath;
            song_name.innerHTML=song[index].name;
            if(audio.paused|| audio.currentTime<=0){
                audio.play();
                }
            else
            audio.pause();
           }

           else if(ele.id==='6'){
            index=5;
            audio.src=song[5].songpath;
            song_name.innerHTML=song[index].name;
            if(audio.paused|| audio.currentTime<=0){
                audio.play();
                }
            else
            audio.pause();
           }

           else if(ele.id==='7'){
            index=6;
            audio.src=song[6].songpath;
            song_name.innerHTML=song[index].name;
            if(audio.paused|| audio.currentTime<=0){
                audio.play();
                }
            else
            audio.pause();
           }

           else if(ele.id==='8'){
            index=7;
            audio.src=song[7].songpath;
            song_name.innerHTML=song[index].name;
            if(audio.paused|| audio.currentTime<=0){
                audio.play();
                }
            else
            audio.pause();
           }

           else if(ele.id==='9'){
            index=8;
            audio.src=song[8].songpath;
            song_name.innerHTML=song[index].name;
            if(audio.paused|| audio.currentTime<=0){
                audio.play();
                }
            else
            audio.pause();
           }

           else if(ele.id==='10'){
            index=9;
            audio.src=song[9].songpath;
            song_name.innerHTML=song[index].name;
            if(audio.paused|| audio.currentTime<=0){
                audio.play();
                }
            else
            audio.pause();
           }

           else if(ele.id==='11'){
            index=10;
            audio.src=song[10].songpath;
            song_name.innerHTML=song[index].name;
            if(audio.paused|| audio.currentTime<=0){
                audio.play();
                }
            else
            audio.pause();3
           }
    })
    
});

backward.addEventListener('click',()=>{
    if(index>0){
        index--;
        audio.src=song[index].songpath;
        masterplay.src="pause-removebg-preview.png";
        song_name.innerHTML=song[index].name;
        audio.play();
    }
})

forward.addEventListener('click',()=>{
    if(index<=song.length-1){
        ++index;
        audio.src=song[index].songpath;
        masterplay.src="pause-removebg-preview.png";
        song_name.innerHTML=song[index].name;
        audio.play();

    }
})
