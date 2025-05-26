import { EnumDescriptor } from '@selfage/message/descriptor';

export enum ValidationError {
  TRACK_MISMATCH = 1,
  NO_VIDEO_TRACK = 2,
  MORE_THAN_ONE_VIDEO_TRACKS = 3,
  TOO_MANY_AUDIO_TRACKS = 4,
  NO_DEFAULT_AUDIO_TRACK = 5,
  MORE_THAN_ONE_DEFAULT_AUDIO_TRACKS = 6,
  TOO_MANY_SUBTITLE_TRACKS = 7,
}

export let VALIDATION_ERROR: EnumDescriptor<ValidationError> = {
  name: 'ValidationError',
  values: [{
    name: 'TRACK_MISMATCH',
    value: 1,
  }, {
    name: 'NO_VIDEO_TRACK',
    value: 2,
  }, {
    name: 'MORE_THAN_ONE_VIDEO_TRACKS',
    value: 3,
  }, {
    name: 'TOO_MANY_AUDIO_TRACKS',
    value: 4,
  }, {
    name: 'NO_DEFAULT_AUDIO_TRACK',
    value: 5,
  }, {
    name: 'MORE_THAN_ONE_DEFAULT_AUDIO_TRACKS',
    value: 6,
  }, {
    name: 'TOO_MANY_SUBTITLE_TRACKS',
    value: 7,
  }]
}
