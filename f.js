/** 6. You are developing a music playlist management system. Implement functions that leverage closures
and higher-order functions to perform common playlist operations.
Task 1: Create a function createPlaylist that takes a playlist name as a parameter and returns a closure. This
closure should allow adding and listing songs for the given playlist.
Task 2: Create a function addSong that takes a song name and artist as parameters and adds the song to the
specified playlist. Use the closure created in TASK 1.
Task 3: Create a function listSongs that lists all the songs in a specified playlist. Use the closure created in the
Task 1 */


function createPlaylist(playlistName) {
    const songs = [];

    function addSong(songName, artist) {
        songs.push({ songName, artist });
        console.log(`Added '${songName}' by ${artist} to '${playlistName}' playlist.`);
    }

    function listSongs() {
        console.log(`Songs in '${playlistName}' playlist:`);
        songs.forEach(song => {
            console.log(`- ${song.songName} by ${song.artist}`);
        });
    }

    return { addSong, listSongs };
}
const myPlaylist = createPlaylist('Chill Vibes');

myPlaylist.addSong('Sunset Lover', 'Petit Biscuit');
myPlaylist.addSong('Cold Little Heart', 'Michael Kiwanuka');
myPlaylist.listSongs();


/***output
Added 'Sunset Lover' by Petit Biscuit to 'Chill Vibes' playlist.
Added 'Cold Little Heart' by Michael Kiwanuka to 'Chill Vibes' playlist.
Songs in 'Chill Vibes' playlist:
- Sunset Lover by Petit Biscuit
- Cold Little Heart by Michael Kiwanuka   */
