import {Api, Request} from '@common/index';

export const general = {
  Chat: {
    getListChat: async (type) => {
      let jsonPost = {
        type: type,
      };
      // console.log(jsonPost);
      return await Request.post(Api.Chat.getListChat, jsonPost);
    },
    getListMessages: async (room_id, offset, limit) => {
      let jsonPost = {
        room_id: room_id,
        offset: offset * 50,
        limit: limit,
      };
      return await Request.post(Api.Chat.getListMessages, jsonPost);
    },
    sendMess: async (room_id, message) => {
      let jsonPost = {
        room_id: room_id,
        message: message,
      };
      return await Request.post(Api.Chat.sendMess, jsonPost);
    },
  },
};
