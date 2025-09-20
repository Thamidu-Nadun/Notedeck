import { useCallback } from "react";

const KEY = "markdown";

export const useLocalMarkdown = () => {
    const saveMarkdown = useCallback((markdown) => {
        try {
            localStorage.setItem(KEY, markdown);
        } catch (error) {
            console.error("Failed to save markdown to localStorage:", error);
        }
    }, []);

    const loadMarkdown = useCallback(() => {
        try {
            return localStorage.getItem(KEY) || null;
        } catch (error) {
            console.error("Failed to load markdown from localStorage:", error);
            return "";
        }
    }, []);

    const clearMarkdown = useCallback(() => {
        try {
            localStorage.removeItem(KEY);
        } catch (error) {
            console.error("Failed to clear markdown from localStorage:", error);
        }
    }, []);

    return { saveMarkdown, loadMarkdown, clearMarkdown };
}