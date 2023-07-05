export const handleClickOutside = (callbackFn) =>{
    document.addEventListener("click", callbackFn);

    return () => document.removeEventListener("click", callbackFn);
}