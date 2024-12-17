import { EnumDescriptor } from '@selfage/message/descriptor';

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
