import React from "react";
import ReactDOM from "react-dom/client";

//*Header
//  -Logo
//  -Nav-items
//*Body
//  -Search
//  -Restaurent Cards
//      -Name
//      -Image
//      -Other Details
//*Footer
//  -Copyright
//  -Other things

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurants = [
  {
    info: {
      id: "248579",
      name: "Paragon",
      cloudinaryImageId: "yao00hcrdysj6pnoc1zj",
      locality: "Heera Kinara Road",
      areaName: "Kesavadasapuram",
      costForTwo: "₹600 for two",
      cuisines: [
        "Biryani",
        "Chinese",
        "Arabian",
        "Indian",
        "Beverages",
        "South Indian",
      ],
      avgRating: 4.6,
      parentId: "20193",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=15563333~p=0~adgrpid=15563333#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=248579~eid=f408f8d3-e04e-45b8-a33f-09ddd8b6338a~srvts=1721449131769~collid=45995",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Gourmet.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-North%20Indian.png",
            description: "Delivery!",
          },
          {
            imageId: "v1669879258/GFF_logo_new_xbycg6.png",
            description: "gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                },
              },
              {
                attributes: {
                  imageId: "Rxawards/_CATEGORY-Gourmet.png",
                  description: "Delivery!",
                },
              },
              {
                attributes: {
                  imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                  description: "Delivery!",
                },
              },
              {
                attributes: {
                  description: "gourmet",
                  imageId: "v1669879258/GFF_logo_new_xbycg6.png",
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=248579",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "212089",
      name: "Hotel Chinnus - Keshavadasapuram",
      cloudinaryImageId: "sfqa2q7svnybbjajui58",
      locality: "NSP Nagar",
      areaName: "Kesavadasapuram",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "Chinese", "Fast Food"],
      avgRating: 4.5,
      parentId: "20389",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 22:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                },
              },
            ],
          },
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹45",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=212089",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "106026",
      name: "Aiswariya",
      cloudinaryImageId: "kc7ybhmlvh14rr7jd4op",
      areaName: "Vazhuthacaud",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian", "Continental", "North Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "19996",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=106026",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "205238",
      name: "Ariya Nivas - Thampanoor",
      cloudinaryImageId: "fzstljsgk873pilflkei",
      locality: "Aristo Junction",
      areaName: "Thampanoor",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "Chinese", "Beverages", "Salads"],
      avgRating: 4.6,
      veg: true,
      parentId: "20397",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=205238",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "78858",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/793025c0-291a-4ac8-8fce-f35d77bff979_78858.JPG",
      locality: "Thiruvananthapuram",
      areaName: "Bakery Fly Over",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=14856690~p=1~adgrpid=14856690#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=78858~eid=eb6fa437-f198-4b3e-8d07-3e655ee09605~srvts=1721449131769~collid=45995",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-21 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=78858",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "117586",
      name: "Srii Saravana Bhavan",
      cloudinaryImageId: "teddzer7n8dyawldn74w",
      locality: "Womens and Children Hospital Road",
      areaName: "Thycaud",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Chinese"],
      avgRating: 4.4,
      veg: true,
      parentId: "194883",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=117586",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "317722",
      name: "Hotel Aryaas Park",
      cloudinaryImageId: "bz4fgs9yhrl6cesd7wg4",
      locality: "Station Road",
      areaName: "Thampanoor",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Chinese", "North Indian", "South Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "20778",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=317722",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "77454",
      name: "Mother's Veg Plaza",
      cloudinaryImageId: "fgx275d7fsk4g1oqzbkk",
      locality: "Vanross",
      areaName: "Palayam",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Kerala", "Chinese"],
      avgRating: 4.6,
      parentId: "20799",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                  description: "Delivery!",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=77454",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "589230",
      name: "Brothers Family Restaurant",
      cloudinaryImageId: "jnnln7rdn2dggyk6csoz",
      locality: "Chavadinda",
      areaName: "Sreekaryam",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian", "Grill", "Arabian", "Chinese"],
      avgRating: 4.3,
      parentId: "335458",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=15563919~p=2~adgrpid=15563919#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=589230~eid=dcd67012-272b-4fef-ba31-a126a03ab579~srvts=1721449131769~collid=45995",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 9.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "9.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=589230",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "282992",
      name: "Dine @ Kumars",
      cloudinaryImageId: "kewshvgvu2j4w0u9amjy",
      locality: "Chalai Manacaud",
      areaName: "Killippalam",
      costForTwo: "₹350 for two",
      cuisines: ["South Indian", "Biryani", "Chinese"],
      avgRating: 4.5,
      parentId: "73081",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=282992",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "77433",
      name: "Steampot Restaurant",
      cloudinaryImageId: "k5et8u3mczf49irgg0f7",
      locality: "Pottakuzhy",
      areaName: "Pattom",
      costForTwo: "₹200 for two",
      cuisines: [
        "South Indian",
        "Biryani",
        "Chinese",
        "Beverages",
        "North Indian",
      ],
      avgRating: 4.5,
      parentId: "20801",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=77433",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "741538",
      name: "SREE GURUVAYOORAPPAN HOTEL",
      cloudinaryImageId: "f5d7798fc262df016f07c3d964cb5765",
      locality: "Gandhari Amman Kovil Road",
      areaName: "Statue",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Chinese", "Juices", "Snacks"],
      avgRating: 4.6,
      parentId: "440091",
      avgRatingString: "4.6",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=741538",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "107462",
      name: "New Ananthapuri Restaurant",
      cloudinaryImageId: "q6q7iv31eekukodmhmyt",
      locality: "Jawahar Nagar",
      areaName: "Sasthamangalam",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Biryani", "Street Food", "Fast Food"],
      avgRating: 4.2,
      parentId: "20630",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      promoted: true,
      adTrackingId:
        "cid=14904568~p=3~adgrpid=14904568#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=107462~eid=65e9799e-2fd8-44c6-9521-09715a7338ba~srvts=1721449131769~collid=45995",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 21:50:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=107462",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "607925",
      name: "Anna Bhavan",
      cloudinaryImageId: "n55lcszbym6yomh9soki",
      locality: "Puthanchantha",
      areaName: "Statue",
      costForTwo: "₹190 for two",
      cuisines: ["South Indian", "Chinese", "Juices", "Snacks"],
      avgRating: 4.4,
      veg: true,
      parentId: "361698",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=607925",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "365163",
      name: "Alankar Pure Veg Restaurant",
      cloudinaryImageId: "bbxrczzhyejrapjpoi3j",
      locality: "Vattiyoorkavu Circle",
      areaName: "Ambalamukku",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Chinese", "South Indian", "Ice Cream"],
      avgRating: 4.5,
      veg: true,
      parentId: "279382",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹150",
        discountTag: "SAVE BIG",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=365163",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "243862",
      name: "Sai Anandhaas",
      cloudinaryImageId: "vw4ze1uvsrdtba4dhknu",
      locality: "PKK Hwy Road",
      areaName: "Karamana",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Indian", "North Indian", "Chinese"],
      avgRating: 4.5,
      veg: true,
      parentId: "12002",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-20 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=243862",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  }
];

const ResCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId,name,cuisines,sla,costForTwo,avgRating} = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="ruchi"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="Ruchi"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">Search</div>
      <div className="res-container">
        {restaurants.map(restaurant=>{
          return <ResCard resData={restaurant} />
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
