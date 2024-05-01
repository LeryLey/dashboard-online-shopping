const AddProduct = () => {
  return (
    <div>
      <div
        id="addProducts"
        className="relative w-full h-full flex items-center justify-center duration-500 p-6 "
      >
        <div className="w-full h-full bg-gray-300/70 rounded-xl  overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full p-4 ">
          <h2 className="text-xl font-medium text-gray-700 text-center">
            Add Products
          </h2>
          <form
            method="post"
            className="my-4 flex justify-center sm:gap-20 gap-16 items-center flex-wrap "
          >
            <div>
              <label htmlFor="name" className="text-gray-900 ">
                Product Name*
              </label>
              <br />
              <input type="text" name="name" id="name" className="inputBox" />
              <br />
              <label htmlFor="dec" className="text-gray-280 ">
                Descriptions*
              </label>
              <br />
              <textarea
                name="dec"
                id="dec"
                cols="30"
                rows="6"
                className="inputBox"
              ></textarea>
              <br />
              <label htmlFor="category" className="text-gray-280 ">
                Category*
              </label>
              <br />
              <input
                type="text"
                name="category"
                id="category"
                className="inputBox"
              />
              <br />
              <label htmlFor="price" className="text-gray-800 ">
                Price*
              </label>
              <br />
              <input type="text" name="price" id="price" className="inputBox" />
              <br />
            </div>
            <div>
              <label htmlFor="code" className="text-gray-800 ">
                Item code*
              </label>
              <br />
              <input type="text" name="code" id="code" className="inputBox" />
              <br />
              <label htmlFor="code" className="text-gray-800 ">
                Stock size*
              </label>
              <br />
              <input type="text" name="stock" id="stock" className="inputBox" />
              <br />

              <label htmlFor="category" className="text-gray-800 ">
                Store availability*
              </label>
              <br />
              <input
                type="text"
                name="availability"
                id="availability"
                className="inputBox"
              />
              <br />
              <label htmlFor="price" className="text-gray-800 ">
                Product Photo*
              </label>
              <br />
              <input
                type="text"
                name="photo"
                id="photo"
                className="inputBox h-40"
              />
              <br />
            </div>
          </form>
          <div className="w-full flex justify-center items-center space-x-4">
            <button
              type="button"
              name="btnSaveProduct"
              id="btnSaveProduct"
              className="btn w-40 rounded-md"
            >
              Save Product
            </button>
            {/* <button
              type="button"
              name="btnSaveProduct"
              id="btnSaveProduct"
              className="btn bg-red-600 ring-red-500 active:bg-red-700 w-40 rounded-md"
            >
              Cancel
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
