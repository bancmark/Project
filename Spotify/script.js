console.log("JavaScript");

async function getSong(params) {
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text()
    console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    console.log(as);
    let song = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            song.push(element.href)
        }
    }
    return song
}

async function main(params) { 
    let song = await getSong();
    console.log(song);
    //play the first song
    document.querySelector(".Songlist")
    var audio = new Audio(song[0]);
    //audio.play();

    audio.addEventListener("loadeddata", () =>{
        let duration = audio.duration;
        console.log(audio.duration, audio.currentTime, audio.currentSrc);
    })
}
main()