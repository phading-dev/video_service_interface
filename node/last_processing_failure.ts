import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export enum ProcessingFailureReason {
  VIDEO_CODEC_REQUIRES_H264 = 1,
  AUDIO_CODEC_REQUIRES_AAC = 2,
  SUBTITLE_ZIP_FORMAT_INVALID = 3,
}

export let PROCESSING_FAILURE_REASON: EnumDescriptor<ProcessingFailureReason> = {
  name: 'ProcessingFailureReason',
  values: [{
    name: 'VIDEO_CODEC_REQUIRES_H264',
    value: 1,
  }, {
    name: 'AUDIO_CODEC_REQUIRES_AAC',
    value: 2,
  }, {
    name: 'SUBTITLE_ZIP_FORMAT_INVALID',
    value: 3,
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
