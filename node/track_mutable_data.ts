import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface AudioTrackMutableData {
  name?: string,
  isDefault?: boolean,
}

export let AUDIO_TRACK_MUTABLE_DATA: MessageDescriptor<AudioTrackMutableData> = {
  name: 'AudioTrackMutableData',
  fields: [{
    name: 'name',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'isDefault',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface SubtitleTrackMutableData {
  name?: string,
}

export let SUBTITLE_TRACK_MUTABLE_DATA: MessageDescriptor<SubtitleTrackMutableData> = {
  name: 'SubtitleTrackMutableData',
  fields: [{
    name: 'name',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};
