import { writable } from "svelte/store";

export let source = writable(null),
            index = writable(0),
            title = writable('Pick a Song'),
            artist = writable('Artist'),
            isPlay = writable(false),
            isLoaded = writable(false)