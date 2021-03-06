// source: DqcServiceV1.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.v1.DqcParametersRequest', null, global);
goog.exportSymbol('proto.v1.DqcParametersResponse', null, global);
goog.exportSymbol('proto.v1.ImageResponse', null, global);
goog.exportSymbol('proto.v1.ImageType', null, global);
goog.exportSymbol('proto.v1.TransferStatus', null, global);
goog.exportSymbol('proto.v1.ValueRange', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.ImageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.ImageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.ImageResponse.displayName = 'proto.v1.ImageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.ValueRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.ValueRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.ValueRange.displayName = 'proto.v1.ValueRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.DqcParametersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.DqcParametersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.DqcParametersResponse.displayName = 'proto.v1.DqcParametersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.v1.DqcParametersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.DqcParametersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.DqcParametersRequest.displayName = 'proto.v1.DqcParametersRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.ImageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.ImageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.ImageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.ImageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    image: msg.getImage_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.ImageResponse}
 */
proto.v1.ImageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.ImageResponse;
  return proto.v1.ImageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.ImageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.ImageResponse}
 */
proto.v1.ImageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.v1.ImageType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!proto.v1.TransferStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.ImageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.ImageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.ImageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.ImageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getImage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional ImageType type = 1;
 * @return {!proto.v1.ImageType}
 */
proto.v1.ImageResponse.prototype.getType = function() {
  return /** @type {!proto.v1.ImageType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.v1.ImageType} value
 * @return {!proto.v1.ImageResponse} returns this
 */
proto.v1.ImageResponse.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional TransferStatus status = 2;
 * @return {!proto.v1.TransferStatus}
 */
proto.v1.ImageResponse.prototype.getStatus = function() {
  return /** @type {!proto.v1.TransferStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.v1.TransferStatus} value
 * @return {!proto.v1.ImageResponse} returns this
 */
proto.v1.ImageResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bytes image = 3;
 * @return {!(string|Uint8Array)}
 */
proto.v1.ImageResponse.prototype.getImage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes image = 3;
 * This is a type-conversion wrapper around `getImage()`
 * @return {string}
 */
proto.v1.ImageResponse.prototype.getImage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImage()));
};


/**
 * optional bytes image = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImage()`
 * @return {!Uint8Array}
 */
proto.v1.ImageResponse.prototype.getImage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.v1.ImageResponse} returns this
 */
proto.v1.ImageResponse.prototype.setImage = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.ValueRange.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.ValueRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.ValueRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.ValueRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    minimum: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    maximum: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.ValueRange}
 */
proto.v1.ValueRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.ValueRange;
  return proto.v1.ValueRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.ValueRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.ValueRange}
 */
proto.v1.ValueRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinimum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaximum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.ValueRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.ValueRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.ValueRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.ValueRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMinimum();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getMaximum();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double value = 1;
 * @return {number}
 */
proto.v1.ValueRange.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.v1.ValueRange} returns this
 */
proto.v1.ValueRange.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double minimum = 2;
 * @return {number}
 */
proto.v1.ValueRange.prototype.getMinimum = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.v1.ValueRange} returns this
 */
proto.v1.ValueRange.prototype.setMinimum = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double maximum = 3;
 * @return {number}
 */
proto.v1.ValueRange.prototype.getMaximum = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.v1.ValueRange} returns this
 */
proto.v1.ValueRange.prototype.setMaximum = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.DqcParametersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.DqcParametersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.DqcParametersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.DqcParametersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    vacuum: (f = msg.getVacuum()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    triggerDelay: (f = msg.getTriggerDelay()) && proto.v1.ValueRange.toObject(includeInstance, f),
    horizontalPosition: (f = msg.getHorizontalPosition()) && proto.v1.ValueRange.toObject(includeInstance, f),
    focusPosition: (f = msg.getFocusPosition()) && proto.v1.ValueRange.toObject(includeInstance, f),
    strokeLength: (f = msg.getStrokeLength()) && proto.v1.ValueRange.toObject(includeInstance, f),
    strokeVelocity: (f = msg.getStrokeVelocity()) && proto.v1.ValueRange.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.DqcParametersResponse}
 */
proto.v1.DqcParametersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.DqcParametersResponse;
  return proto.v1.DqcParametersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.DqcParametersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.DqcParametersResponse}
 */
proto.v1.DqcParametersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setVacuum(value);
      break;
    case 2:
      var value = new proto.v1.ValueRange;
      reader.readMessage(value,proto.v1.ValueRange.deserializeBinaryFromReader);
      msg.setTriggerDelay(value);
      break;
    case 3:
      var value = new proto.v1.ValueRange;
      reader.readMessage(value,proto.v1.ValueRange.deserializeBinaryFromReader);
      msg.setHorizontalPosition(value);
      break;
    case 4:
      var value = new proto.v1.ValueRange;
      reader.readMessage(value,proto.v1.ValueRange.deserializeBinaryFromReader);
      msg.setFocusPosition(value);
      break;
    case 5:
      var value = new proto.v1.ValueRange;
      reader.readMessage(value,proto.v1.ValueRange.deserializeBinaryFromReader);
      msg.setStrokeLength(value);
      break;
    case 6:
      var value = new proto.v1.ValueRange;
      reader.readMessage(value,proto.v1.ValueRange.deserializeBinaryFromReader);
      msg.setStrokeVelocity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.DqcParametersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.DqcParametersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.DqcParametersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.DqcParametersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVacuum();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getTriggerDelay();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.ValueRange.serializeBinaryToWriter
    );
  }
  f = message.getHorizontalPosition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.v1.ValueRange.serializeBinaryToWriter
    );
  }
  f = message.getFocusPosition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.v1.ValueRange.serializeBinaryToWriter
    );
  }
  f = message.getStrokeLength();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.v1.ValueRange.serializeBinaryToWriter
    );
  }
  f = message.getStrokeVelocity();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.v1.ValueRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.BoolValue vacuum = 1;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.v1.DqcParametersResponse.prototype.getVacuum = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.v1.DqcParametersResponse} returns this
*/
proto.v1.DqcParametersResponse.prototype.setVacuum = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.DqcParametersResponse} returns this
 */
proto.v1.DqcParametersResponse.prototype.clearVacuum = function() {
  return this.setVacuum(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.DqcParametersResponse.prototype.hasVacuum = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ValueRange trigger_delay = 2;
 * @return {?proto.v1.ValueRange}
 */
proto.v1.DqcParametersResponse.prototype.getTriggerDelay = function() {
  return /** @type{?proto.v1.ValueRange} */ (
    jspb.Message.getWrapperField(this, proto.v1.ValueRange, 2));
};


/**
 * @param {?proto.v1.ValueRange|undefined} value
 * @return {!proto.v1.DqcParametersResponse} returns this
*/
proto.v1.DqcParametersResponse.prototype.setTriggerDelay = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.DqcParametersResponse} returns this
 */
proto.v1.DqcParametersResponse.prototype.clearTriggerDelay = function() {
  return this.setTriggerDelay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.DqcParametersResponse.prototype.hasTriggerDelay = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ValueRange horizontal_position = 3;
 * @return {?proto.v1.ValueRange}
 */
proto.v1.DqcParametersResponse.prototype.getHorizontalPosition = function() {
  return /** @type{?proto.v1.ValueRange} */ (
    jspb.Message.getWrapperField(this, proto.v1.ValueRange, 3));
};


/**
 * @param {?proto.v1.ValueRange|undefined} value
 * @return {!proto.v1.DqcParametersResponse} returns this
*/
proto.v1.DqcParametersResponse.prototype.setHorizontalPosition = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.DqcParametersResponse} returns this
 */
proto.v1.DqcParametersResponse.prototype.clearHorizontalPosition = function() {
  return this.setHorizontalPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.DqcParametersResponse.prototype.hasHorizontalPosition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ValueRange focus_position = 4;
 * @return {?proto.v1.ValueRange}
 */
proto.v1.DqcParametersResponse.prototype.getFocusPosition = function() {
  return /** @type{?proto.v1.ValueRange} */ (
    jspb.Message.getWrapperField(this, proto.v1.ValueRange, 4));
};


/**
 * @param {?proto.v1.ValueRange|undefined} value
 * @return {!proto.v1.DqcParametersResponse} returns this
*/
proto.v1.DqcParametersResponse.prototype.setFocusPosition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.DqcParametersResponse} returns this
 */
proto.v1.DqcParametersResponse.prototype.clearFocusPosition = function() {
  return this.setFocusPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.DqcParametersResponse.prototype.hasFocusPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ValueRange stroke_length = 5;
 * @return {?proto.v1.ValueRange}
 */
proto.v1.DqcParametersResponse.prototype.getStrokeLength = function() {
  return /** @type{?proto.v1.ValueRange} */ (
    jspb.Message.getWrapperField(this, proto.v1.ValueRange, 5));
};


/**
 * @param {?proto.v1.ValueRange|undefined} value
 * @return {!proto.v1.DqcParametersResponse} returns this
*/
proto.v1.DqcParametersResponse.prototype.setStrokeLength = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.DqcParametersResponse} returns this
 */
proto.v1.DqcParametersResponse.prototype.clearStrokeLength = function() {
  return this.setStrokeLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.DqcParametersResponse.prototype.hasStrokeLength = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ValueRange stroke_velocity = 6;
 * @return {?proto.v1.ValueRange}
 */
proto.v1.DqcParametersResponse.prototype.getStrokeVelocity = function() {
  return /** @type{?proto.v1.ValueRange} */ (
    jspb.Message.getWrapperField(this, proto.v1.ValueRange, 6));
};


/**
 * @param {?proto.v1.ValueRange|undefined} value
 * @return {!proto.v1.DqcParametersResponse} returns this
*/
proto.v1.DqcParametersResponse.prototype.setStrokeVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.DqcParametersResponse} returns this
 */
proto.v1.DqcParametersResponse.prototype.clearStrokeVelocity = function() {
  return this.setStrokeVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.DqcParametersResponse.prototype.hasStrokeVelocity = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1.DqcParametersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.DqcParametersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.DqcParametersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.DqcParametersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    vacuum: (f = msg.getVacuum()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    triggerDelay: (f = msg.getTriggerDelay()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    horizontalPosition: (f = msg.getHorizontalPosition()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    focusPosition: (f = msg.getFocusPosition()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    strokeLength: (f = msg.getStrokeLength()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    strokeVelocity: (f = msg.getStrokeVelocity()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.v1.DqcParametersRequest}
 */
proto.v1.DqcParametersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.DqcParametersRequest;
  return proto.v1.DqcParametersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.DqcParametersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.DqcParametersRequest}
 */
proto.v1.DqcParametersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setVacuum(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setTriggerDelay(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setHorizontalPosition(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFocusPosition(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setStrokeLength(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setStrokeVelocity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.v1.DqcParametersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.DqcParametersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.DqcParametersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.DqcParametersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVacuum();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getTriggerDelay();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getHorizontalPosition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFocusPosition();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getStrokeLength();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getStrokeVelocity();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.BoolValue vacuum = 1;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.v1.DqcParametersRequest.prototype.getVacuum = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.v1.DqcParametersRequest} returns this
*/
proto.v1.DqcParametersRequest.prototype.setVacuum = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.DqcParametersRequest} returns this
 */
proto.v1.DqcParametersRequest.prototype.clearVacuum = function() {
  return this.setVacuum(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.DqcParametersRequest.prototype.hasVacuum = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue trigger_delay = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.v1.DqcParametersRequest.prototype.getTriggerDelay = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.v1.DqcParametersRequest} returns this
*/
proto.v1.DqcParametersRequest.prototype.setTriggerDelay = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.DqcParametersRequest} returns this
 */
proto.v1.DqcParametersRequest.prototype.clearTriggerDelay = function() {
  return this.setTriggerDelay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.DqcParametersRequest.prototype.hasTriggerDelay = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue horizontal_position = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.v1.DqcParametersRequest.prototype.getHorizontalPosition = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.v1.DqcParametersRequest} returns this
*/
proto.v1.DqcParametersRequest.prototype.setHorizontalPosition = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.DqcParametersRequest} returns this
 */
proto.v1.DqcParametersRequest.prototype.clearHorizontalPosition = function() {
  return this.setHorizontalPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.DqcParametersRequest.prototype.hasHorizontalPosition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue focus_position = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.v1.DqcParametersRequest.prototype.getFocusPosition = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.v1.DqcParametersRequest} returns this
*/
proto.v1.DqcParametersRequest.prototype.setFocusPosition = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.DqcParametersRequest} returns this
 */
proto.v1.DqcParametersRequest.prototype.clearFocusPosition = function() {
  return this.setFocusPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.DqcParametersRequest.prototype.hasFocusPosition = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue stroke_length = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.v1.DqcParametersRequest.prototype.getStrokeLength = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.v1.DqcParametersRequest} returns this
*/
proto.v1.DqcParametersRequest.prototype.setStrokeLength = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.DqcParametersRequest} returns this
 */
proto.v1.DqcParametersRequest.prototype.clearStrokeLength = function() {
  return this.setStrokeLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.DqcParametersRequest.prototype.hasStrokeLength = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue stroke_velocity = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.v1.DqcParametersRequest.prototype.getStrokeVelocity = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.v1.DqcParametersRequest} returns this
*/
proto.v1.DqcParametersRequest.prototype.setStrokeVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.DqcParametersRequest} returns this
 */
proto.v1.DqcParametersRequest.prototype.clearStrokeVelocity = function() {
  return this.setStrokeVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.DqcParametersRequest.prototype.hasStrokeVelocity = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * @enum {number}
 */
proto.v1.ImageType = {
  IMAGETYPE_UNDEFINED: 0,
  IMAGETYPE_JPG: 1,
  IMAGETYPE_PNG: 2
};

/**
 * @enum {number}
 */
proto.v1.TransferStatus = {
  TRANSFERSTATUS_UNKNOWN: 0,
  TRANSFERSTATUS_PARTIAL: 1,
  TRANSFERSTATUS_COMPLETE: 2
};

goog.object.extend(exports, proto.v1);
