import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { VideoTrackStagingData, VIDEO_TRACK_STAGING_DATA, AudioTrackStagingData, AUDIO_TRACK_STAGING_DATA, SubtitleTrackStagingData, SUBTITLE_TRACK_STAGING_DATA } from './video_container';

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
