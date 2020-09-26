const INITIAL_STATE = {
  sections: [
    {
      title: "processors",
      imageUrl:
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 1,
      linkUrl: "shop/processors",
      isFullWidth: true,
    },
    {
      title: "casings",
      imageUrl:
        "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 2,
      linkUrl: "shop/casings",
    },
    {
      title: "headphones",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 3,
      linkUrl: "shop/headphones",
    },
    {
      title: "mouse",
      imageUrl:
        "https://images.unsplash.com/photo-1563297007-0686b7003af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

      id: 4,
      linkUrl: "shop/mouse",
    },
    {
      title: "gpu",
      imageUrl:
        "https://images.unsplash.com/photo-1555618568-bdf0a992c512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

      id: 5,
      linkUrl: "shop/gpu",
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
