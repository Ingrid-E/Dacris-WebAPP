
import { getProducts, deleteProducts, postProduct, getProduct, putProduct, getBestSellers, getNewestProducts, bestSellers_pagination} from "./products";
import { getCategories } from "./categories";
import { uploadImage } from "./s3_images";
import { postImage, getProductImages, getImages, putImages} from "./images";

export {bestSellers_pagination,getBestSellers, putImages, putProduct, getImages, getProductImages, getProduct, getProducts, getCategories, deleteProducts, postProduct, uploadImage, postImage, getNewestProducts}
