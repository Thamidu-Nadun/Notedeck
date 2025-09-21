import { useEffect, useRef } from "react"

export function useMouseClick() {
    const click_audio = useRef(null);

    useEffect(() => {
        click_audio.current = new Audio('/assets/mouse_click_002.mp3');
    }, []);

    const play_sound = () => {
        if (click_audio.current) {
            click_audio.current.current_time = 0;
            click_audio.current.play();
        }
    };
    return play_sound;
}