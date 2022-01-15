import NavAdmin from "../../../components/navadmin";
import data from "../../../data";

const EditPage = {
    render(id) {
        const found = data.find((element) => element.id === id);

        return /* html */ `
        ${NavAdmin.render()}
        <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Chỉnh sửa tin tức
                        </h2>
                        </div>
                    </div>
                </div>
            </header>
            <main>
              <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div class="px-4 py-6 sm:px-0">
                  <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                    <div class="max-w-5xl mx-auto">

                      <h1>${found.title}(${found.id})</h1>
                      <img src="${found.img}" />
                      <p>${found.content}</p>
                    </div>
                  </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sửa
                </button>
              </div>
              </div>
            </main>
       `;
    },
};
export default EditPage;