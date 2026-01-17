
// ****************
//  audio player
// *****************
let play = document.querySelector(".bigplay");
let audio = new Audio("playlist\\song0.mp3");
let rangebar = document.querySelector(".range");
let timebox = document.querySelector(".box-time");
let timebox2 = document.querySelector(".box-time2");



// ***********
//songlist
// **************
let songlist = [
    { song_name: "Baaton ko teri hum bhula ", src: "playlist\\song0.mp3", cover: "cover\\cover0.jpg" },
    { song_name: "Mai phir bhi tumko chahunga", src: "playlist\\song1.mp3", cover: "cover\\cover1.jpg" },
    { song_name: "chale Aana", src: "playlist\\song2.mp3", cover: "cover\\cover2.jpg" },
    { song_name: "Dhadak title song", src: "playlist\\song3.mp3", cover: "cover\\cover3.jpg" },
    { song_name: "Heart Attack", src: "playlist\\song4.mp3", cover: "cover\\cover4.jpg" },
    { song_name: "Sanam Re ", src: "playlist\\song5.mp3", cover: "cover\\cover5.jpg" },
    { song_name: "Feelings", src: "playlist\\song6.mp3", cover: "cover\\cover6.jpg" },
    { song_name: "Ye Mausam Ki Barish", src: "playlist\\song7.mp3", cover: "cover\\cover7.jpg" },
    { song_name: "Zihale miskeen", src: "playlist\\song8.mp3", cover: "cover\\cover8.jpg" },
    { song_name: "Baarish Yaariyan", src: "playlist\\song9.mp3", cover: "cover\\cover9.jpg" }
];
// ***********************************************************
// controlling songlist display of website........
// *********************************************************

let song_arr = document.querySelectorAll(".song");

song_arr.forEach((el, i) => {

    el.getElementsByTagName("img")[0].src = songlist[i].cover;
    el.getElementsByTagName("img")[0].addEventListener("click", () => {
        open(`cover\\cover${i}.jpg`, "_parent");
    })

    el.getElementsByTagName("atif")[0].innerText = songlist[i].song_name;

    el.addEventListener("mouseover", () => {

        el.style.boxShadow = " 5px 5px 10px 10px white";
    });


    el.addEventListener("mouseout", () => {
        // console.log(el.getElementsByTagName("i")[0].classList);
        if (el.getElementsByTagName("i")[0].classList[3] == "fa-circle-pause") { }
        else
            el.style.boxShadow = "none";
    });

    // //body play-pause icon music control

    //     el.getElementsByTagName("i")[0].addEventListener("click",(eve)=>{
    //         audio=new Audio(`${songlist[i].src}`)

    //         if(audio.paused)
    //         {
    //             audio.play();
    //             eve.target.classList.remove("fa-circle-play");
    //             eve.target.classList.add("fa-circle-pause");

    //             play.classList.remove("fa-circle-play");
    //             play.classList.add("fa-circle-pause");
    //         }

    //         else 
    //         {
    //             audio.pause();
    //             eve.target.classList.remove("fa-circle-pause");
    //             eve.target.classList.add("fa-circle-play");

    //             play.classList.remove("fa-circle-pause");
    //             play.classList.add("fa-circle-play");
    //         }



    //     })

})



//body play-pause icon music control

let title = document.querySelector("t");
let gif = document.querySelector(".gif");
let disco = document.querySelectorAll(".disco");
let mini_player = document.querySelectorAll(".mini");
let current_song_playing;
let current_song_number = 0;

function Music_on() {
    audio.play();
    atifnawab();
    console.log(current_song_number);
    mini_player[current_song_number].classList.remove("fa-circle-play");
    mini_player[current_song_number].classList.add("fa-circle-pause");
    disco[current_song_number].style.opacity = "1";
    gif.style.opacity = "1";
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-circle-pause");
    title.innerText = `${songlist[current_song_number].song_name}`;
    song_arr[current_song_number].style.boxShadow = "5px 5px 10px 10px white";

}

function Music_off() {
    audio.pause();
    mini_player[current_song_number].classList.remove("fa-circle-pause");
    mini_player[current_song_number].classList.add("fa-circle-play");
    disco[current_song_number].style.opacity = "0";
    gif.style.opacity = "0";
    play.classList.remove("fa-circle-pause");
    play.classList.add("fa-circle-play");
    song_arr[current_song_number].style.boxShadow = "none";
}


mini_player.forEach((el, i) => {


    el.addEventListener("click", (eve) => {


        if (audio.paused) {
            audio = new Audio(`${songlist[i].src}`);

            current_song_playing = songlist[i].src;
            current_song_number = i;


            // audio.play();
            //             // *********************************************
            // atifnawab();//very important .....calling for timechange.....
            //             // ***************************************************


            // eve.target.classList.remove("fa-circle-play");
            // eve.target.classList.add("fa-circle-pause");
            // disco[i].style.opacity="1";
            // gif.style.opacity="1";

            // play.classList.remove("fa-circle-play");
            // play.classList.add("fa-circle-pause");
            // title.innerText=`${songlist[i].song_name}`;

            Music_on();
        }

        else if (audio.played && current_song_playing == songlist[i].src) {
            // audio.pause();
            // eve.target.classList.remove("fa-circle-pause");
            // eve.target.classList.add("fa-circle-play");
            // disco[i].style.opacity="0";
            // gif.style.opacity="0";

            // play.classList.remove("fa-circle-pause");
            // play.classList.add("fa-circle-play");
            Music_off();
        }
        else {
            audio.pause();

            audio = new Audio(`${songlist[i].src}`);
            current_song_playing = songlist[i].src;
            song_arr[current_song_number].style.boxShadow = "none";
            current_song_number = i;
            let x = 0;
            mini_player.forEach((el) => {

                el.classList.remove("fa-circle-pause");
                el.classList.add("fa-circle-play");
                disco[x].style.opacity = "0";

                x++;
            })

            // play.classList.remove("fa-circle-pause");
            // play.classList.add("fa-circle-play");
            audio.play();
            // *********************************************
            atifnawab();//very important .....calling for timechange.....
            // ***************************************************


            eve.target.classList.remove("fa-circle-play");
            eve.target.classList.add("fa-circle-pause");
            disco[i].style.opacity = "1";
            gif.style.opacity = "1";

            play.classList.remove("fa-circle-play");
            play.classList.add("fa-circle-pause");
            title.innerText = `${songlist[i].song_name}`;
            song_arr[current_song_number].style.boxShadow = "5px 5px 10px 10px white";
        }



    })

})





// ******************
// footer audio control 
// ******************

play.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        play.classList.remove("fa-circle-play");
        play.classList.add("fa-circle-pause");
        console.log("play");


    }
    else {
        audio.pause();
        play.classList.remove("fa-circle-pause");
        play.classList.add("fa-circle-play");
    }
})


// ****************************************************
// time control
// ******************************************************
let atifnawab = () => {

    audio.addEventListener("timeupdate", () => {
        // console.log(audio.duration);

        let progress = parseInt((audio.currentTime / audio.duration) * 100);
        rangebar.value = progress;
        timebox.innerText = rangebar.value;
        if (rangebar.value == 100) {
            // play.classList.remove("fa-circle-pause");
            // play.classList.add("fa-circle-play");
            if (current_song_number < 9) {
                mini_player[current_song_number].classList.remove("fa-circle-pause");
                mini_player[current_song_number].classList.add("fa-circle-play");
                disco[current_song_number].style.opacity = "0";
                song_arr[current_song_number].style.boxShadow = "none";
                current_song_number++;
                audio = new Audio(`${songlist[current_song_number].src}`);
                current_song_playing = songlist[current_song_number].src;
                Music_on();
            }
            else {
                mini_player[current_song_number].classList.remove("fa-circle-pause");
                mini_player[current_song_number].classList.add("fa-circle-play");
                disco[current_song_number].style.opacity = "0";
                song_arr[current_song_number].style.boxShadow = "none";
                current_song_number = 0;
                audio = new Audio(`${songlist[current_song_number].src}`);
                current_song_playing = songlist[current_song_number].src;
                Music_on();
            }
        }
        //time controlling beside rangebar
        let mint = Math.floor(audio.currentTime / 60);
        let secs = audio.currentTime - mint * 60;


        if (mint < 10 && secs < 10)
            timebox.innerText = `0${mint}:0${Math.floor(secs)}`;
        else if (mint < 10 && secs > 9)
            timebox.innerText = `0${mint}:${Math.floor(secs)}`;
        else if (mint > 10 && secs < 10)
            timebox.innerText = `${mint}:0${Math.floor(secs)}`;
        else
            timebox.innerText = `${mint}:${Math.floor(secs)}`;


        let mint_duration = Math.floor(audio.duration / 60);
        let secs_duration = Math.floor(audio.duration - mint_duration * 60);


        if (mint_duration < 10 && secs_duration < 10)
            timebox2.innerText = `0${mint_duration}:0${secs_duration}`;
        else if (mint_duration < 10 && secs_duration > 9)
            timebox2.innerText = `0${mint_duration}:${secs_duration}`;
        else if (mint > 10 && secs < 10)
            timebox2.innerText = `${mint_duration}:0${secs_duration}`;
        else
            timebox2.innerText = `${mint_duration}:${secs_duration}`;

    })

}
atifnawab();
// ****************************
// seekbar
// ****************************
rangebar.addEventListener("change", () => {
    audio.currentTime = parseInt((rangebar.value * audio.duration) / 100);
})
// *********************
// forward &backward
// *********************
let forward_btn = document.querySelector(".fa-forward");
let backward_btn = document.querySelector(".fa-backward");

forward_btn.addEventListener("click", () => {
    if (current_song_number >= 0 && current_song_number < 9) {
        Music_off();
        current_song_number++;
        audio = new Audio(`${songlist[current_song_number].src}`);
        // audio.play(); 
        // atifnawab();
        Music_on();
        // atifnawab()
    }
    else {
        Music_off();
        current_song_number = 0;
        audio = new Audio(`${songlist[current_song_number].src}`);
        Music_on();
    }
})

backward_btn.addEventListener("click", () => {
    if (current_song_number > 0 && current_song_number <= 9) {
        Music_off();
        current_song_number--;
        audio = new Audio(`${songlist[current_song_number].src}`);
        // audio.play(); 
        // atifnawab();
        Music_on();

    }
    else {
        Music_off();
        current_song_number = 9;
        audio = new Audio(`${songlist[current_song_number].src}`);
        Music_on();
    }
})

// *******************
// background video 
// *****************

// let bg_vid=document.querySelector(".back_vid");
// let vid_obj = ["background_vid\\istock_pink.mp4", "background_vid\\istockphoto_blue_pink.mp4", "background_vid\\istockphoto_blue.mp4"];

// let cur_vid_indx=0;

// bg_vid.addEventListener("ended",()=>{
//     cur_vid_indx=(cur_vid_indx+1)%vid_obj.length;
//     bg_vid.src=vid_obj[cur_vid_indx];
//     bg_vid.load();
//     bg_vid.play();
// })




// // ********************
// // login page
// // ******************
// let cl,cl2;
// function login_page(cl,cl2) {
//     let pg = document.querySelector(`.${cl}`);
//     console.log(pg);
//     let logpg = document.querySelector(".login");
//     let homesection=document.querySelector(".homesection");
//     let container = document.querySelector(".container");
//     let hex =document.querySelector(`.${cl2}`)
//     let foot = document.querySelector(".footer");

//     pg.addEventListener("click", () => {
//             logpg.style.display = "flex";
//             container.style.display = "none";
//             foot.style.display = "none";
//             homesection.style.display="none";
//     })
//     hex.addEventListener("click",()=>{

//         logpg.style.display = "none";
//         container.style.display = "block";
//         foot.style.display = "flex";
//         homesection.style.display="none";

//     })



// }

// login_page("asd","srch");


// *********************
// home-section
// ********************

let homesection = document.querySelector(".homesection");
let container = document.querySelector(".container");
let foot = document.querySelector(".footer");
let aboutsec = document.querySelector(".aboutsection");
let logpg = document.querySelector(".login")

function homesection_dis() {
    homesection.style.display = "block";
    container.style.display = "none";
    foot.style.display = "none";
    aboutsec.style.display = "none";
    logpg.style.display = "none";
}

function login_dis() {
    homesection.style.display = "none";
    container.style.display = "none";
    foot.style.display = "none";
    aboutsec.style.display = "none";
    logpg.style.display = "flex";
}

function playlist_dis() {
    homesection.style.display = "none";
    container.style.display = "block";
    foot.style.display = "flex";
    aboutsec.style.display = "none";
    logpg.style.display = "none";
}

function about_dis() {
    aboutsec.style.display = "block";
    homesection.style.display = "none";
    container.style.display = "none";
    foot.style.display = "none";
    logpg.style.display = "none";
}
let home = document.querySelector(".hom");
let homeb = document.querySelector(".homb");
home.addEventListener("click", homesection_dis);
homeb.addEventListener("click", homesection_dis);

let logbtn = document.querySelector(".asd");
let logbtn2 = document.querySelector(".asdb");
logbtn.addEventListener("click", login_dis);
logbtn2.addEventListener("click", login_dis);

let playlist_btn = document.querySelector(".srch");
let playlist_btn2 = document.querySelector(".srchb");
playlist_btn.addEventListener("click", playlist_dis);
playlist_btn2.addEventListener("click", playlist_dis);

let aboutbtn = document.querySelector(".abt");
let aboutbtn2 = document.querySelector(".abtb");
aboutbtn.addEventListener("click", about_dis);
aboutbtn2.addEventListener("click", about_dis);


// *********
// side-bar
// *********
let bars = document.querySelector(".bars");
let side_bar = document.querySelector(".sidebar");
let tru = true;
bars.addEventListener("click", () => {

    if (tru) {
        side_bar.style.display = "block";
        side_bar.style.position = "fixed";
        tru = false;
    }
    else {
        side_bar.style.display = "none";
        tru = true;
    }
})

