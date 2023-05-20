import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { END_POINTS } from "./end-points";

const getTags = async () => {
    const url = `${END_POINTS.TAGS.GET_TAGS}`;
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'X-Country-Id': 'TR',
          'X-Language-Id': 'TR'
        }
      };
    const response = await axios.get(url,config);
    return response.data;
  };
  export const UseGetTags = () => {
    const { isLoading, data, refetch } = useQuery(['getTags'], () => getTags(),{cacheTime:6000});
    return { isLoading, data, refetch };
  }
  
  const getTagsById = async (Id: number) => {
    const url = `${END_POINTS.PROMOTIONS.PROMOTIONS_BY_ID}${Id}`;
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'X-Country-Id': 'TR',
          'X-Language-Id': 'TR'
        }
      };
    const response = await axios.get(url,config);
    return response.data;
  };
  export const UseGetTagsById = (Id: number) => {
    const { isLoading, data, refetch } = useQuery(['getTagsById'], () => getTagsById(Id));
    return { isLoading, data, refetch };
  }
  

  const getPromotion = async () => {
    const url = `${END_POINTS.PROMOTIONS.PROMOTIONS_LIST}`;
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'X-Country-Id': 'TR',
          'X-Language-Id': 'TR'
        }
      };
    const response = await axios.get(url,config);
    return response.data;
  };
  export const UseGetPromotion = () => {
    const { isLoading, data, refetch } = useQuery(['getPromotion'], () => getPromotion());
    return { isLoading, data, refetch };
  }