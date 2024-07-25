// function solve(input) {
//     class Song {
//         constructor(typeList, name, time) {
//             this.typeList = typeList;
//             this.name = name;
//             this.time = time;
//         }
//     }
//     let songs = [];
//     let numberOfSongs = input.shift();
//     let typeSong = input.pop();
    
//     for (let i = 0; i < numberOfSongs; i++) {
//         let [typeList, name, time] = input[i].split('_');
//         let song = new Song(typeList, name, time);
//         songs.push(song);

//     }
    
//     if (typeSong === 'all') {
//         songs.forEach((song) => console.log(song.name));
//     } else {
//         let filtered = songs.filter((song) => song.typeList === typeSong);
//         filtered.forEach((song) => console.log(song.name))
//     }
// };

function solve(input) {
    class Song {
        constructor(name, time) {
            this.name = name;
            this.time = time;
        }

        print() {
            console.log(this.name);
        }
    }

    const count = input.shift();
    const songLibrary = {};
    const allSongs = [];

    for (let i = 0; i < count; i++) {
        const [typeList, name, time] = input.shift().split('_');

        if (!songLibrary[typeList]) {
            songLibrary[typeList] = [];
        }

        const newSong = new Song(name, time);
        songLibrary[typeList].push(newSong);
        allSongs.push(newSong);
    }

    const typeList = input.shift();

    if (typeList === 'all') {
        allSongs.forEach(song => song.print());
    } else {
        songLibrary[typeList].forEach(song => song.print());
    }
}


solve([3, 'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
    
    // DownTown
    // Kiss
    // Smooth Criminal
    
    solve([4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater']);	
        // Andalouse
        
        solve([2,
            'like_Replay_3:15',
            'ban_Photoshop_3:48',
            'all']);
            //Replay
            //Photoshop
            