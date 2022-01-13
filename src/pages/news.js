import data from "../data";

const New = {
    renden(id) {
        const found = data.find((element) => element.id === id);
        return `<div class="max-w-5xl mx-auto">
        <h1>${found.title}</h1>
        <img src="${found.img}" />
        <p>${found.content}</p>
    </div>`;
    },
};
export default New;