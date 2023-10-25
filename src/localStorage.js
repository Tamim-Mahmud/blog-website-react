
// for locatlstorage time
const getLocalStorageTime = (readTime) => {
  const previousTime = localStorage.getItem("reading-time");

  if (previousTime) {
    const newTime = parseInt(readTime) + parseInt(previousTime);
    localStorage.setItem("reading-time", newTime);
    return parseInt(newTime);
  } else {
    localStorage.setItem("reading-time", readTime);
  }
  return 0;
};
const setLocalStorageTime = () => {
  return localStorage.getItem("reading-time");
};

//for localstorage bookmarks
const getBookmarksToStorage = (courseName) => {
    console.log(courseName);
    const previousBookmark = localStorage.getItem("bookmarks");

    if(previousBookmark) {
        const bookmarks = JSON.parse(previousBookmark);
        const newBookmarks = [courseName, ...bookmarks];
        localStorage.setItem("bookmarks",JSON.stringify(newBookmarks))

    }
    else{
        const bookmarks =[];
        bookmarks.push(courseName);
        localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
    }
};
const setBookmarksToStorage = () => {
    return JSON.parse(localStorage.getItem("bookmarks"));
};


export {
  getLocalStorageTime,
  setLocalStorageTime,
  setBookmarksToStorage,
  getBookmarksToStorage,
};
