export type ProductsResponseType = {
  results: {
    imgPath: {};
    newProducts: Product[];
    recommendProducts: Product[];
    yeoshinTv: YeoshinTv[];
  };
  serverCode: string;
  serverMsg: string;
};

export type Product = {
  locationName: string;
  distance?: string;
  displayName: string;
  customerCode: string;
  rateScore: number;
  customerName: string;
  thumbnailImageUrl: string;
  wishIcon: string;
  productCode: string;
  cpmBudgetScore?: number;
  detailLinkUrl: string;
  currencyName: string;
  reviewCount: number;
  price: number;
  name: string;
  comment: string;
  wishCount: number;
};

type YeoshinTv = {
  tvCode: "S0351298";
  tvId: "95";
  tvImgType: "direct";
  tvInputDate: "2021-04-02 13:23:16.0";
  tvMetatagTitle: "";
  tvNameMain: "[카프리레이저] 여드름, 뿌리부터 뽑아야 좋아지지~";
  tvVideoId: "Gmv4l-_Z6MI";
  tvVideoThumb: "https://d10fvx8ndeqwvu.cloudfront.net/upfiles/product/2322908901.jpg?w=320&amp;h=180&amp;f=webp&amp;q=90";
  tvVideoUrl: "https://youtu.be/Gmv4l-_Z6MI";
  tvViewCount: "2394";
};
