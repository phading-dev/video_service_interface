import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { LastProcessingFailure, LAST_PROCESSING_FAILURE } from './last_processing_failure';

export interface ResumableUploadingState {
  fileExt?: string,
  md5?: string,
}

export let RESUMABLE_UPLOADING_STATE: MessageDescriptor<ResumableUploadingState> = {
  name: 'ResumableUploadingState',
  fields: [{
    name: 'fileExt',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'md5',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface FormattingState {
}

export let FORMATTING_STATE: MessageDescriptor<FormattingState> = {
  name: 'FormattingState',
  fields: [],
};

export interface OneOfProcessingState {
  uploading?: ResumableUploadingState,
  mediaFormatting?: FormattingState,
  subtitleFormatting?: FormattingState,
}

export let ONE_OF_PROCESSING_STATE: MessageDescriptor<OneOfProcessingState> = {
  name: 'OneOfProcessingState',
  fields: [{
    name: 'uploading',
    index: 1,
    messageType: RESUMABLE_UPLOADING_STATE,
  }, {
    name: 'mediaFormatting',
    index: 2,
    messageType: FORMATTING_STATE,
  }, {
    name: 'subtitleFormatting',
    index: 3,
    messageType: FORMATTING_STATE,
  }],
};

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

export interface VideoTrack {
  r2TrackDirname?: string,
  durationSec?: number,
  resolution?: string,
  totalBytes?: number,
  committed?: boolean,
  staging?: VideoTrackStagingData,
}

export let VIDEO_TRACK: MessageDescriptor<VideoTrack> = {
  name: 'VideoTrack',
  fields: [{
    name: 'r2TrackDirname',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'durationSec',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'resolution',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'totalBytes',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'committed',
    index: 5,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'staging',
    index: 6,
    messageType: VIDEO_TRACK_STAGING_DATA,
  }],
};

export interface AudioTrackData {
  name?: string,
  isDefault?: boolean,
}

export let AUDIO_TRACK_DATA: MessageDescriptor<AudioTrackData> = {
  name: 'AudioTrackData',
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

export interface AudioTrackStagingData {
  toAdd?: AudioTrackData,
  toDelete?: boolean,
}

export let AUDIO_TRACK_STAGING_DATA: MessageDescriptor<AudioTrackStagingData> = {
  name: 'AudioTrackStagingData',
  fields: [{
    name: 'toAdd',
    index: 1,
    messageType: AUDIO_TRACK_DATA,
  }, {
    name: 'toDelete',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface AudioTrack {
  r2TrackDirname?: string,
  totalBytes?: number,
  committed?: AudioTrackData,
  staging?: AudioTrackStagingData,
}

export let AUDIO_TRACK: MessageDescriptor<AudioTrack> = {
  name: 'AudioTrack',
  fields: [{
    name: 'r2TrackDirname',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'totalBytes',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'committed',
    index: 3,
    messageType: AUDIO_TRACK_DATA,
  }, {
    name: 'staging',
    index: 4,
    messageType: AUDIO_TRACK_STAGING_DATA,
  }],
};

export interface SubtitleTrackData {
  name?: string,
}

export let SUBTITLE_TRACK_DATA: MessageDescriptor<SubtitleTrackData> = {
  name: 'SubtitleTrackData',
  fields: [{
    name: 'name',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SubtitleTrackStagingData {
  toAdd?: SubtitleTrackData,
  toDelete?: boolean,
}

export let SUBTITLE_TRACK_STAGING_DATA: MessageDescriptor<SubtitleTrackStagingData> = {
  name: 'SubtitleTrackStagingData',
  fields: [{
    name: 'toAdd',
    index: 1,
    messageType: SUBTITLE_TRACK_DATA,
  }, {
    name: 'toDelete',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface SubtitleTrack {
  r2TrackDirname?: string,
  totalBytes?: number,
  committed?: SubtitleTrackData,
  staging?: SubtitleTrackStagingData,
}

export let SUBTITLE_TRACK: MessageDescriptor<SubtitleTrack> = {
  name: 'SubtitleTrack',
  fields: [{
    name: 'r2TrackDirname',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'totalBytes',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'committed',
    index: 3,
    messageType: SUBTITLE_TRACK_DATA,
  }, {
    name: 'staging',
    index: 4,
    messageType: SUBTITLE_TRACK_STAGING_DATA,
  }],
};

export interface WritingToFileState {
  version?: number,
}

export let WRITING_TO_FILE_STATE: MessageDescriptor<WritingToFileState> = {
  name: 'WritingToFileState',
  fields: [{
    name: 'version',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SyncingState {
  version?: number,
}

export let SYNCING_STATE: MessageDescriptor<SyncingState> = {
  name: 'SyncingState',
  fields: [{
    name: 'version',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SyncedState {
  version?: number,
}

export let SYNCED_STATE: MessageDescriptor<SyncedState> = {
  name: 'SyncedState',
  fields: [{
    name: 'version',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface MasterPlaylistState {
  writingToFile?: WritingToFileState,
  syncing?: SyncingState,
  synced?: SyncedState,
}

export let MASTER_PLAYLIST_STATE: MessageDescriptor<MasterPlaylistState> = {
  name: 'MasterPlaylistState',
  fields: [{
    name: 'writingToFile',
    index: 1,
    messageType: WRITING_TO_FILE_STATE,
  }, {
    name: 'syncing',
    index: 2,
    messageType: SYNCING_STATE,
  }, {
    name: 'synced',
    index: 3,
    messageType: SYNCED_STATE,
  }],
};

export interface VideoContainer {
  masterPlaylist?: MasterPlaylistState,
  processing?: OneOfProcessingState,
  lastProcessingFailure?: LastProcessingFailure,
  videos?: Array<VideoTrack>,
  audios?: Array<AudioTrack>,
  subtitles?: Array<SubtitleTrack>,
}

export let VIDEO_CONTAINER: MessageDescriptor<VideoContainer> = {
  name: 'VideoContainer',
  fields: [{
    name: 'masterPlaylist',
    index: 1,
    messageType: MASTER_PLAYLIST_STATE,
  }, {
    name: 'processing',
    index: 2,
    messageType: ONE_OF_PROCESSING_STATE,
  }, {
    name: 'lastProcessingFailure',
    index: 3,
    messageType: LAST_PROCESSING_FAILURE,
  }, {
    name: 'videos',
    index: 4,
    messageType: VIDEO_TRACK,
    isArray: true,
  }, {
    name: 'audios',
    index: 5,
    messageType: AUDIO_TRACK,
    isArray: true,
  }, {
    name: 'subtitles',
    index: 6,
    messageType: SUBTITLE_TRACK,
    isArray: true,
  }],
};
