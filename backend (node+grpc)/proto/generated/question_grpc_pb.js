// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var question_pb = require('./question_pb.js');

function serialize_question_SearchRequest(arg) {
  if (!(arg instanceof question_pb.SearchRequest)) {
    throw new Error('Expected argument of type question.SearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_question_SearchRequest(buffer_arg) {
  return question_pb.SearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_question_SearchResponse(arg) {
  if (!(arg instanceof question_pb.SearchResponse)) {
    throw new Error('Expected argument of type question.SearchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_question_SearchResponse(buffer_arg) {
  return question_pb.SearchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var QuestionServiceService = exports.QuestionServiceService = {
  searchQuestions: {
    path: '/question.QuestionService/searchQuestions',
    requestStream: false,
    responseStream: false,
    requestType: question_pb.SearchRequest,
    responseType: question_pb.SearchResponse,
    requestSerialize: serialize_question_SearchRequest,
    requestDeserialize: deserialize_question_SearchRequest,
    responseSerialize: serialize_question_SearchResponse,
    responseDeserialize: deserialize_question_SearchResponse,
  },
};

exports.QuestionServiceClient = grpc.makeGenericClientConstructor(QuestionServiceService);
