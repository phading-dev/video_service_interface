import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export enum ProcessingFailureReason {
  MEDIA_FORMAT_INVALID = 1,
  MEDIA_FORMAT_FAILURE = 2,
  VIDEO_CODEC_REQUIRES_H264 = 3,
  AUDIO_CODEC_REQUIRES_AAC = 4,
  SUBTITLE_ZIP_FORMAT_INVALID = 5,
}

export let PROCESSING_FAILURE_REASON: EnumDescriptor<ProcessingFailureReason> = {
  name: 'ProcessingFailureReason',
  values: [{
    name: 'MEDIA_FORMAT_INVALID',
    value: 1,
  }, {
    name: 'MEDIA_FORMAT_FAILURE',
    value: 2,
  }, {
    name: 'VIDEO_CODEC_REQUIRES_H264',
    value: 3,
  }, {
    name: 'AUDIO_CODEC_REQUIRES_AAC',
    value: 4,
  }, {
    name: 'SUBTITLE_ZIP_FORMAT_INVALID',
    value: 5,
  }]
}

export interface LastProcessingFailure {
  reasons?: Array<ProcessingFailureReason>,
  timeMs?: number,
}

export let LAST_PROCESSING_FAILURE: MessageDescriptor<LastProcessingFailure> = {
  name: 'LastProcessingFailure',
  fields: [{
    name: 'reasons',
    index: 1,
    enumType: PROCESSING_FAILURE_REASON,
    isArray: true,
  }, {
    name: 'timeMs',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};
