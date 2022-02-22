/**
 * @fileoverview gRPC-Web generated client stub for v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.v1 = require('./DqcServiceV1_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.DqcServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.DqcServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.v1.ImageResponse>}
 */
const methodDescriptor_DqcService_GetImage = new grpc.web.MethodDescriptor(
  '/v1.DqcService/GetImage',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.v1.ImageResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.ImageResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.ImageResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.DqcServiceClient.prototype.getImage =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.DqcService/GetImage',
      request,
      metadata || {},
      methodDescriptor_DqcService_GetImage);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.ImageResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.DqcServicePromiseClient.prototype.getImage =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.DqcService/GetImage',
      request,
      metadata || {},
      methodDescriptor_DqcService_GetImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.v1.DqcParametersResponse>}
 */
const methodDescriptor_DqcService_GetParameters = new grpc.web.MethodDescriptor(
  '/v1.DqcService/GetParameters',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.v1.DqcParametersResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.DqcParametersResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.v1.DqcParametersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.DqcParametersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.DqcServiceClient.prototype.getParameters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.DqcService/GetParameters',
      request,
      metadata || {},
      methodDescriptor_DqcService_GetParameters,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.DqcParametersResponse>}
 *     Promise that resolves to the response
 */
proto.v1.DqcServicePromiseClient.prototype.getParameters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.DqcService/GetParameters',
      request,
      metadata || {},
      methodDescriptor_DqcService_GetParameters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.DqcParametersRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DqcService_SetParameters = new grpc.web.MethodDescriptor(
  '/v1.DqcService/SetParameters',
  grpc.web.MethodType.UNARY,
  proto.v1.DqcParametersRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.v1.DqcParametersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.v1.DqcParametersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.DqcServiceClient.prototype.setParameters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.DqcService/SetParameters',
      request,
      metadata || {},
      methodDescriptor_DqcService_SetParameters,
      callback);
};


/**
 * @param {!proto.v1.DqcParametersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.v1.DqcServicePromiseClient.prototype.setParameters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.DqcService/SetParameters',
      request,
      metadata || {},
      methodDescriptor_DqcService_SetParameters);
};


module.exports = proto.v1;

