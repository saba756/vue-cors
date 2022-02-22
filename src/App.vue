<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
// import { GetImage } from './DqcServiceV1_pb';
import { DqcServiceClient } from './DqcServiceV1_grpc_web_pb';
import google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb.js';

export default {
  name: 'app',
  components: {},
  data: function () {
    return {
      inputField: '',
      todos: [],
    };
  },
  created: function () {
    var metadata = {
      // 'custom-header-1':
      //   'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwMTc5YmIzLTM0YWYtNGMyMi04ZWVmLTNkOGVlMDYwNTg3MSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2NvdW50IiwiYXpwIjoiZnJvbnRlbmQiLCJleHAiOjE2NDU0MDE2NjYsImlhdCI6MTY0NTM5ODY2NiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdC9hdXRoLyIsImp0aSI6ImIxNjAzMGRiLWM5YWEtNGFjZS1iY2YwLTViNzNlN2I1ZjcwNSIsInByZWZlcnJlZF91c2VybmFtZSI6ImxhYi11c2VyIiwic3ViIjoibGFiLXVzZXIiLCJ0eXAiOiJCZWFyZXIifQ.ldRS3xFoCl1BUP-C0vOyF6I6fvEXbe2B7Ry1RVD3bY7wlNtiE1QaoBaAA7qIuctQeaXc9sk3csQRTCd45NVRfRw4TXfcnVOV4jqWksVWPTQAoApDLfsIntTEGFNjUnSxL9L8H7dn70t51fh3vRPS3k8ZHiKGFILwVpl14_vOviDh0yBAsXtjKe4MmHgjTpsnGApR0S7mkUzJGhjTJi0Z1M-X-jOqpG1TG9Fm2S7TKMuEtgwD8xjo0g6HyrpFaTU-ajeq3PSTCjP7qOiCcezfj-UBWjW5scN-NTft2Ne9pPo5oqQaXwkefkpQ9H3w4afvG2OzWim8Q7fQSyRfKzp6RQ',
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwMTc5YmIzLTM0YWYtNGMyMi04ZWVmLTNkOGVlMDYwNTg3MSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2NvdW50IiwiYXpwIjoiZnJvbnRlbmQiLCJleHAiOjE2NDU0MDE2NjYsImlhdCI6MTY0NTM5ODY2NiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdC9hdXRoLyIsImp0aSI6ImIxNjAzMGRiLWM5YWEtNGFjZS1iY2YwLTViNzNlN2I1ZjcwNSIsInByZWZlcnJlZF91c2VybmFtZSI6ImxhYi11c2VyIiwic3ViIjoibGFiLXVzZXIiLCJ0eXAiOiJCZWFyZXIifQ.ldRS3xFoCl1BUP-C0vOyF6I6fvEXbe2B7Ry1RVD3bY7wlNtiE1QaoBaAA7qIuctQeaXc9sk3csQRTCd45NVRfRw4TXfcnVOV4jqWksVWPTQAoApDLfsIntTEGFNjUnSxL9L8H7dn70t51fh3vRPS3k8ZHiKGFILwVpl14_vOviDh0yBAsXtjKe4MmHgjTpsnGApR0S7mkUzJGhjTJi0Z1M-X-jOqpG1TG9Fm2S7TKMuEtgwD8xjo0g6HyrpFaTU-ajeq3PSTCjP7qOiCcezfj-UBWjW5scN-NTft2Ne9pPo5oqQaXwkefkpQ9H3w4afvG2OzWim8Q7fQSyRfKzp6RQ',

      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      // 'Access-Control-Allow-Headers':
      //   'keep-alive,user-agent,cache-control,content-type,content-transfer-encoding,custom-header-1,x-accept-content-transfer-encoding,x-accept-response-streaming,x-user-agent,x-grpc-web,grpc-timeout',
    };

    this.client = new DqcServiceClient(
      'http://localhost/api/v1/grpc',
      null,
      null
    );
    var empty = new google_protobuf_empty_pb.Empty();
    this.client.getParameters(empty, metadata, (err, response) => {
      console.log(err);
      console.log(response);
    });

    // this.getTodos();
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
