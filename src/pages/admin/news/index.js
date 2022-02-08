import axios from "axios";
import { reRender } from "../../utils/rerender";

const AdminPost = {
    async render() {
        const { data } = await axios.get("https://5e79b4b817314d00161333da.mockapi.io/posts");

        return /* html */`
        <div class="max-w-5xl mx-auto"> 
            <div class="my-3">
                <img src="https://picsum.photos/1024/400" />
            </div>
            <div class="news">
                <h2>Quản lý tin tức</h2>
                <table>
                    <tbody>
                        ${data.map((post, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${post.title}</td>
                                <td>
                                    <button data-id="${post.id}" class="btn">Remove</button>
                                </td>
                            </tr>
                        `).join("")}    
                    </tbody>
                </table>
                
            </div>
        </div>
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", async () => {
                const confirm = window.confirm("Bạn có chắc chắn không??");
                if (confirm) {
                    axios.delete(`https://5e79b4b817314d00161333da.mockapi.io/posts/${id}`).then(() => {
                        reRender(AdminPost, "#content");
                    });
                }
            });
        });
    },
};

export default AdminPost;