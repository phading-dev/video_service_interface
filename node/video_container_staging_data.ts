import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AudioTrackMutableData, AUDIO_TRACK_MUTABLE_DATA, SubtitleTrackMutableData, SUBTITLE_TRACK_MUTABLE_DATA } from './track_mutable_data';

export interface VideoTrackStagingData {
  toAdd?: boolean,
  toDelete?: boolean,
}

export let VIDEO_TRACK_STAGING_DATA: MessageDescriptor<VideoTrackStagingData> = {
  name: 'VideoTrackStagingData',
  fields: [{
    name: 'toAdd',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'toDelete',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface AudioTrackStagingData {
  toAdd?: AudioTrackMutableData,
  toDelete?: boolean,
}

export let AUDIO_TRACK_STAGING_DATA: MessageDescriptor<AudioTrackStagingData> = {
  name: 'AudioTrackStagingData',
  fields: [{
    name: 'toAdd',
    index: 1,
    messageType: AUDIO_TRACK_MUTABLE_DATA,
  }, {
    name: 'toDelete',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface SubtitleTrackStagingData {
  toAdd?: SubtitleTrackMutableData,
  toDelete?: boolean,
}

export let SUBTITLE_TRACK_STAGING_DATA: MessageDescriptor<SubtitleTrackStagingData> = {
  name: 'SubtitleTrackStagingData',
  fields: [{
    name: 'toAdd',
    index: 1,
    messageType: SUBTITLE_TRACK_MUTABLE_DATA,
  }, {
    name: 'toDelete',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface VideoTrack {
  r2TrackDirname?: string,
  staging?: VideoTrackStagingData,
}

export let VIDEO_TRACK: MessageDescriptor<VideoTrack> = {
  name: 'VideoTrack',
  fields: [{
    name: 'r2TrackDirname',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'staging',
    index: 2,
    messageType: VIDEO_TRACK_STAGING_DATA,
  }],
};

export interface AudioTrack {
  r2TrackDirname?: string,
  staging?: AudioTrackStagingData,
}

export let AUDIO_TRACK: MessageDescriptor<AudioTrack> = {
  name: 'AudioTrack',
  fields: [{
    name: 'r2TrackDirname',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'staging',
    index: 2,
    messageType: AUDIO_TRACK_STAGING_DATA,
  }],
};

export interface SubtitleTrack {
  r2TrackDirname?: string,
  staging?: SubtitleTrackStagingData,
}

export let SUBTITLE_TRACK: MessageDescriptor<SubtitleTrack> = {
  name: 'SubtitleTrack',
  fields: [{
    name: 'r2TrackDirname',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'staging',
    index: 2,
    messageType: SUBTITLE_TRACK_STAGING_DATA,
  }],
};

export interface VideoContainerStagingData {
  videos?: Array<VideoTrack>,
  audios?: Array<AudioTrack>,
  subtitles?: Array<SubtitleTrack>,
}

export let VIDEO_CONTAINER_STAGING_DATA: MessageDescriptor<VideoContainerStagingData> = {
  name: 'VideoContainerStagingData',
  fields: [{
    name: 'videos',
    index: 1,
    messageType: VIDEO_TRACK,
    isArray: true,
  }, {
    name: 'audios',
    index: 2,
    messageType: AUDIO_TRACK,
    isArray: true,
  }, {
    name: 'subtitles',
    index: 3,
    messageType: SUBTITLE_TRACK,
    isArray: true,
  }],
};
