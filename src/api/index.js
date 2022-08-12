
import { getProducts, deleteProducts, postProduct, getProduct, putProduct} from "./products";
import { getCategories } from "./categories";
import { uploadImage } from "./s3_images";
import { postImage, getProductImages, getImages, putImages} from "./images";

export {putImages, putProduct, getImages, getProductImages, getProduct, getProducts, getCategories, deleteProducts, postProduct, uploadImage, postImage}
