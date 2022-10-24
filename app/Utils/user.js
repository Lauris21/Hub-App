
export const showName = () => {
    const name = localStorage.getItem("user");
    return name;
}