const INITIAL_STATE = {
  sections: [
    {
      title: "jackets",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_960_720.jpg",
      id: 1,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/02/03/02/14/keyboard-621830_960_720.jpg",
      id: 2,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/04/04/17/22/netgear-2202273_960_720.jpg",
      id: 3,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      size: "large",
      id: 4,
      linkUrl: "shop/mens",
    },
    {
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1579674862001-405e6b05fe0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      size: "large",
      id: 5,
      linkUrl: "shop/hats",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
