import { writable } from "svelte/store";

export let source = writable(null),
  index = writable(0),
  title = writable("Pick a Song"),
  artist = writable("Artist"),
  imgName = writable("album.png"),
  isPlay = writable(false),
  isLoaded = writable(false),
  playMode = writable("normal");
