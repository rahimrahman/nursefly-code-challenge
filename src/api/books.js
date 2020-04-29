import axios from "axios";

export const getBooks = async (searchText) => {
  return new Promise(async (resolve, reject) => {
    const books = [];
    const response = await axios.get(
      `${process.env.REACT_APP_GOOGLE_BOOK_API_URL}?q=${searchText}&maxResults=40`
    );

    if (response.status && response.status === 200) {
      if (response.data.items && response.data.items.length) {
        console.log(response.data);

        response.data.items.forEach((item) => {
          const { title, authors, description, imageLinks } = item.volumeInfo;
          const bookInfo = {
            id: item.id,
            title,
            authors,
            description,
            imageLinks: imageLinks || {
              thumbnail: "https://i.stack.imgur.com/mwFzF.png",
            },
          };
          books.push(bookInfo);
          resolve(books);
        });
      }
      resolve(books);
    } else {
      reject(new Error("error retrieving books"));
    }
  });
};
