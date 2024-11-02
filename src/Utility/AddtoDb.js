const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("apply-list");

  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addStoredReadList = (id) => {
  const storedList = getStoredReadList();

  if (storedList.includes(id)) {
    alert("Already Applied");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("apply-list", storedListStr);
  }
};

export { addStoredReadList, getStoredReadList };
