import { http } from "./httpService";
import { toast } from "react-toastify";



export const add = (media) => {
  try {
    http.post('/addMedia', media);
  } catch (error) {
    console.log("Unexpected Error - ", error.message);
    toast.error("Unexpected Error occured");
  }
};

export const update = (media) => {
  try {
    http.patch(`/updateMedia/${media.id}`, media);
  } catch (error) {
    console.log("Unexpected Error - ", error.message);
    toast.error("Unexpected Error occured");
  }
};

export const remove = (mediaId) => {
  try {
    http.delete(`/deleteMedia/${mediaId}`);
  } catch (error) {
    console.log("Unexpected Error - ", error.message);
    toast.error("Unexpected Error occured");
  }
};
export const getAll = async () => {
  const urlPath = `/getMedia`;

  try {
    const data = await http.get(urlPath);
    return data.data.Items;
  } catch (error) {
    console.error(error.message);
    toast.error("An error occured");
  }
};