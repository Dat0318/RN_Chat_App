/**
 * Config environment
 * @author truongnv
 * @since 2020
 * @version 1.0.0
 */
export const Config = {
  fcm_token: null,
  timeout: 120000,
  base_url: 'http://dev.apec-edu.net/',
  base_url_api: () => {
    return Config.base_url;
  },
  chat: {
    base_url: 'http://dev.apec-edu.net/',
  },
  access_token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGVybWlzc2lvbnMiOm51bGwsInVzZXJuYW1lIjoiYWRtaW4iLCJuYW1lIjoiYWRtaW4iLCJsaW5rZWRfc3R1ZGVudF9pZCI6bnVsbCwibGlua2VkX3RlYWNoZXJfaWQiOm51bGwsIm90cCI6bnVsbCwiYXZhdGFyIjoiL3VwbG9hZC9kZW1vX2FwZWMtZWR1Lm5ldC9pbWFnZXMvMS8wamsxeHEzaXdxdGZfMTI4eDEyOC5qcGciLCJyb2xlIjoiYWRtaW4iLCJsb2NhdGlvbiI6IjAiLCJncm91cF9pZCI6MSwiaWF0IjoxNjAwMzMwMTUxLCJleHAiOjE2MDA5MzQ5NTF9.DgFoZZaVpx5P7JmVACj-C61b5PdkZfy1yzQutqlj7oY',
  lang_code: 'vi',
  //Key lưu async storage
  storage: {
    base_url: 'base_url',
    access_token: 'access_token',
    fcm_token: 'fcm_token',
  },
};
