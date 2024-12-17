import { PrimitiveType, MessageDescriptor, EnumDescriptor } from '@selfage/message/descriptor';
import { VideoContainer, VIDEO_CONTAINER } from './video_container';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface CreateVideoContainerRequestBody {
  showId?: string,
  containerId?: string,
}

export let CREATE_VIDEO_CONTAINER_REQUEST_BODY: MessageDescriptor<CreateVideoContainerRequestBody> = {
  name: 'CreateVideoContainerRequestBody',
  fields: [{
    name: 'showId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'containerId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CreateVideoContainerResponse {
}

export let CREATE_VIDEO_CONTAINER_RESPONSE: MessageDescriptor<CreateVideoContainerResponse> = {
  name: 'CreateVideoContainerResponse',
  fields: [],
};

export interface DeleteVideoContainerRequestBody {
  containerId?: string,
}

export let DELETE_VIDEO_CONTAINER_REQUEST_BODY: MessageDescriptor<DeleteVideoContainerRequestBody> = {
  name: 'DeleteVideoContainerRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DeleteVideoContainerResponse {
}

export let DELETE_VIDEO_CONTAINER_RESPONSE: MessageDescriptor<DeleteVideoContainerResponse> = {
  name: 'DeleteVideoContainerResponse',
  fields: [],
};

export interface GetVideoContainerRequestBody {
  containerId?: string,
}

export let GET_VIDEO_CONTAINER_REQUEST_BODY: MessageDescriptor<GetVideoContainerRequestBody> = {
  name: 'GetVideoContainerRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetVideoContainerResponse {
  videoContainer?: VideoContainer,
}

export let GET_VIDEO_CONTAINER_RESPONSE: MessageDescriptor<GetVideoContainerResponse> = {
  name: 'GetVideoContainerResponse',
  fields: [{
    name: 'videoContainer',
    index: 1,
    messageType: VIDEO_CONTAINER,
  }],
};

export interface CommitVideoContainerStagingDataRequestBody {
  containerId?: string,
}

export let COMMIT_VIDEO_CONTAINER_STAGING_DATA_REQUEST_BODY: MessageDescriptor<CommitVideoContainerStagingDataRequestBody> = {
  name: 'CommitVideoContainerStagingDataRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export enum ValidationError {
  NO_VIDEO_TRACK = 1,
  MORE_THAN_ONE_VIDEO_TRACKS = 2,
  TOO_MANY_AUDIO_TRACKS = 3,
  NO_DEFAULT_AUDIO_TRACK = 4,
  MORE_THAN_ONE_DEFAULT_AUDIO_TRACKS = 5,
  TOO_MANY_SUBTITLE_TRACKS = 6,
  NO_DEFAULT_SUBTITLE_TRACK = 7,
  MORE_THAN_ONE_DEFAULT_SUBTITLE_TRACKS = 8,
}

export let VALIDATION_ERROR: EnumDescriptor<ValidationError> = {
  name: 'ValidationError',
  values: [{
    name: 'NO_VIDEO_TRACK',
    value: 1,
  }, {
    name: 'MORE_THAN_ONE_VIDEO_TRACKS',
    value: 2,
  }, {
    name: 'TOO_MANY_AUDIO_TRACKS',
    value: 3,
  }, {
    name: 'NO_DEFAULT_AUDIO_TRACK',
    value: 4,
  }, {
    name: 'MORE_THAN_ONE_DEFAULT_AUDIO_TRACKS',
    value: 5,
  }, {
    name: 'TOO_MANY_SUBTITLE_TRACKS',
    value: 6,
  }, {
    name: 'NO_DEFAULT_SUBTITLE_TRACK',
    value: 7,
  }, {
    name: 'MORE_THAN_ONE_DEFAULT_SUBTITLE_TRACKS',
    value: 8,
  }]
}

export interface CommitVideoContainerStagingDataResponse {
  success?: boolean,
  error?: ValidationError,
}

export let COMMIT_VIDEO_CONTAINER_STAGING_DATA_RESPONSE: MessageDescriptor<CommitVideoContainerStagingDataResponse> = {
  name: 'CommitVideoContainerStagingDataResponse',
  fields: [{
    name: 'success',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'error',
    index: 2,
    enumType: VALIDATION_ERROR,
  }],
};

export interface ProcessVideoContainerWritingToFileTaskRequestBody {
  containerId?: string,
  version?: number,
}

export let PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK_REQUEST_BODY: MessageDescriptor<ProcessVideoContainerWritingToFileTaskRequestBody> = {
  name: 'ProcessVideoContainerWritingToFileTaskRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'version',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ProcessVideoContainerWritingToFileTaskResponse {
}

export let PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK_RESPONSE: MessageDescriptor<ProcessVideoContainerWritingToFileTaskResponse> = {
  name: 'ProcessVideoContainerWritingToFileTaskResponse',
  fields: [],
};

export interface GetVideoContainerWritingToFileTasksRequestBody {
}

export let GET_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS_REQUEST_BODY: MessageDescriptor<GetVideoContainerWritingToFileTasksRequestBody> = {
  name: 'GetVideoContainerWritingToFileTasksRequestBody',
  fields: [],
};

export interface GetVideoContainerWritingToFileTasksResponse {
  tasks?: Array<ProcessVideoContainerWritingToFileTaskRequestBody>,
}

export let GET_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS_RESPONSE: MessageDescriptor<GetVideoContainerWritingToFileTasksResponse> = {
  name: 'GetVideoContainerWritingToFileTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessVideoContainerSyncingTaskRequestBody {
  containerId?: string,
  version?: number,
}

export let PROCESS_VIDEO_CONTAINER_SYNCING_TASK_REQUEST_BODY: MessageDescriptor<ProcessVideoContainerSyncingTaskRequestBody> = {
  name: 'ProcessVideoContainerSyncingTaskRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'version',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ProcessVideoContainerSyncingTaskResponse {
}

export let PROCESS_VIDEO_CONTAINER_SYNCING_TASK_RESPONSE: MessageDescriptor<ProcessVideoContainerSyncingTaskResponse> = {
  name: 'ProcessVideoContainerSyncingTaskResponse',
  fields: [],
};

export interface GetVideoContainerSyncingTasksRequestBody {
}

export let GET_VIDEO_CONTAINER_SYNCING_TASKS_REQUEST_BODY: MessageDescriptor<GetVideoContainerSyncingTasksRequestBody> = {
  name: 'GetVideoContainerSyncingTasksRequestBody',
  fields: [],
};

export interface GetVideoContainerSyncingTasksResponse {
  tasks?: Array<ProcessVideoContainerSyncingTaskRequestBody>,
}

export let GET_VIDEO_CONTAINER_SYNCING_TASKS_RESPONSE: MessageDescriptor<GetVideoContainerSyncingTasksResponse> = {
  name: 'GetVideoContainerSyncingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_VIDEO_CONTAINER_SYNCING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface StartMediaUploadingRequestBody {
  containerId?: string,
  contentLength?: number,
  fileType?: string,
}

export let START_MEDIA_UPLOADING_REQUEST_BODY: MessageDescriptor<StartMediaUploadingRequestBody> = {
  name: 'StartMediaUploadingRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'contentLength',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'fileType',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface StartMediaUploadingResponse {
  uploadSessionUrl?: string,
  byteOffset?: number,
}

export let START_MEDIA_UPLOADING_RESPONSE: MessageDescriptor<StartMediaUploadingResponse> = {
  name: 'StartMediaUploadingResponse',
  fields: [{
    name: 'uploadSessionUrl',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'byteOffset',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface CompleteMediaUploadingRequestBody {
  containerId?: string,
  uploadSessionUrl?: string,
}

export let COMPLETE_MEDIA_UPLOADING_REQUEST_BODY: MessageDescriptor<CompleteMediaUploadingRequestBody> = {
  name: 'CompleteMediaUploadingRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'uploadSessionUrl',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CompleteMediaUploadingResponse {
}

export let COMPLETE_MEDIA_UPLOADING_RESPONSE: MessageDescriptor<CompleteMediaUploadingResponse> = {
  name: 'CompleteMediaUploadingResponse',
  fields: [],
};

export interface CancelMediaUploadingRequestBody {
  containerId?: string,
}

export let CANCEL_MEDIA_UPLOADING_REQUEST_BODY: MessageDescriptor<CancelMediaUploadingRequestBody> = {
  name: 'CancelMediaUploadingRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CancelMediaUploadingResponse {
}

export let CANCEL_MEDIA_UPLOADING_RESPONSE: MessageDescriptor<CancelMediaUploadingResponse> = {
  name: 'CancelMediaUploadingResponse',
  fields: [],
};

export interface StartSubtitleUploadingRequestBody {
  containerId?: string,
  contentLength?: number,
  fileType?: string,
}

export let START_SUBTITLE_UPLOADING_REQUEST_BODY: MessageDescriptor<StartSubtitleUploadingRequestBody> = {
  name: 'StartSubtitleUploadingRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'contentLength',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'fileType',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface StartSubtitleUploadingResponse {
  uploadSessionUrl?: string,
  byteOffset?: number,
}

export let START_SUBTITLE_UPLOADING_RESPONSE: MessageDescriptor<StartSubtitleUploadingResponse> = {
  name: 'StartSubtitleUploadingResponse',
  fields: [{
    name: 'uploadSessionUrl',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'byteOffset',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface CompleteSubtitleUploadingRequestBody {
  containerId?: string,
  uploadSessionUrl?: string,
}

export let COMPLETE_SUBTITLE_UPLOADING_REQUEST_BODY: MessageDescriptor<CompleteSubtitleUploadingRequestBody> = {
  name: 'CompleteSubtitleUploadingRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'uploadSessionUrl',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CompleteSubtitleUploadingResponse {
}

export let COMPLETE_SUBTITLE_UPLOADING_RESPONSE: MessageDescriptor<CompleteSubtitleUploadingResponse> = {
  name: 'CompleteSubtitleUploadingResponse',
  fields: [],
};

export interface CancelSubtitleUploadingRequestBody {
  containerId?: string,
}

export let CANCEL_SUBTITLE_UPLOADING_REQUEST_BODY: MessageDescriptor<CancelSubtitleUploadingRequestBody> = {
  name: 'CancelSubtitleUploadingRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CancelSubtitleUploadingResponse {
}

export let CANCEL_SUBTITLE_UPLOADING_RESPONSE: MessageDescriptor<CancelSubtitleUploadingResponse> = {
  name: 'CancelSubtitleUploadingResponse',
  fields: [],
};

export interface ProcessMediaFormattingTaskRequestBody {
  containerId?: string,
  gcsFilename?: string,
}

export let PROCESS_MEDIA_FORMATTING_TASK_REQUEST_BODY: MessageDescriptor<ProcessMediaFormattingTaskRequestBody> = {
  name: 'ProcessMediaFormattingTaskRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'gcsFilename',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessMediaFormattingTaskResponse {
}

export let PROCESS_MEDIA_FORMATTING_TASK_RESPONSE: MessageDescriptor<ProcessMediaFormattingTaskResponse> = {
  name: 'ProcessMediaFormattingTaskResponse',
  fields: [],
};

export interface GetMediaFormattingTasksRequestBody {
}

export let GET_MEDIA_FORMATTING_TASKS_REQUEST_BODY: MessageDescriptor<GetMediaFormattingTasksRequestBody> = {
  name: 'GetMediaFormattingTasksRequestBody',
  fields: [],
};

export interface GetMediaFormattingTasksResponse {
  tasks?: Array<ProcessMediaFormattingTaskRequestBody>,
}

export let GET_MEDIA_FORMATTING_TASKS_RESPONSE: MessageDescriptor<GetMediaFormattingTasksResponse> = {
  name: 'GetMediaFormattingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_MEDIA_FORMATTING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface CancelMediaFormattingRequestBody {
  containerId?: string,
}

export let CANCEL_MEDIA_FORMATTING_REQUEST_BODY: MessageDescriptor<CancelMediaFormattingRequestBody> = {
  name: 'CancelMediaFormattingRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CancelMediaFormattingResponse {
}

export let CANCEL_MEDIA_FORMATTING_RESPONSE: MessageDescriptor<CancelMediaFormattingResponse> = {
  name: 'CancelMediaFormattingResponse',
  fields: [],
};

export interface ProcessSubtitleFormattingTaskRequestBody {
  containerId?: string,
  gcsFilename?: string,
}

export let PROCESS_SUBTITLE_FORMATTING_TASK_REQUEST_BODY: MessageDescriptor<ProcessSubtitleFormattingTaskRequestBody> = {
  name: 'ProcessSubtitleFormattingTaskRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'gcsFilename',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessSubtitleFormattingTaskResponse {
}

export let PROCESS_SUBTITLE_FORMATTING_TASK_RESPONSE: MessageDescriptor<ProcessSubtitleFormattingTaskResponse> = {
  name: 'ProcessSubtitleFormattingTaskResponse',
  fields: [],
};

export interface GetSubtitleFormattingTasksRequestBody {
}

export let GET_SUBTITLE_FORMATTING_TASKS_REQUEST_BODY: MessageDescriptor<GetSubtitleFormattingTasksRequestBody> = {
  name: 'GetSubtitleFormattingTasksRequestBody',
  fields: [],
};

export interface GetSubtitleFormattingTasksResponse {
  tasks?: Array<ProcessSubtitleFormattingTaskRequestBody>,
}

export let GET_SUBTITLE_FORMATTING_TASKS_RESPONSE: MessageDescriptor<GetSubtitleFormattingTasksResponse> = {
  name: 'GetSubtitleFormattingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_SUBTITLE_FORMATTING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface CancelSubtitleFormattingRequestBody {
  containerId?: string,
}

export let CANCEL_SUBTITLE_FORMATTING_REQUEST_BODY: MessageDescriptor<CancelSubtitleFormattingRequestBody> = {
  name: 'CancelSubtitleFormattingRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CancelSubtitleFormattingResponse {
}

export let CANCEL_SUBTITLE_FORMATTING_RESPONSE: MessageDescriptor<CancelSubtitleFormattingResponse> = {
  name: 'CancelSubtitleFormattingResponse',
  fields: [],
};

export interface DeleteVideoTrackRequestBody {
  containerId?: string,
  r2TrackDirname?: string,
}

export let DELETE_VIDEO_TRACK_REQUEST_BODY: MessageDescriptor<DeleteVideoTrackRequestBody> = {
  name: 'DeleteVideoTrackRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DeleteVideoTrackResponse {
}

export let DELETE_VIDEO_TRACK_RESPONSE: MessageDescriptor<DeleteVideoTrackResponse> = {
  name: 'DeleteVideoTrackResponse',
  fields: [],
};

export interface DropVideoTrackStagingDataRequestBody {
  containerId?: string,
  r2TrackDirname?: string,
}

export let DROP_VIDEO_TRACK_STAGING_DATA_REQUEST_BODY: MessageDescriptor<DropVideoTrackStagingDataRequestBody> = {
  name: 'DropVideoTrackStagingDataRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DropVideoTrackStagingDataResponse {
}

export let DROP_VIDEO_TRACK_STAGING_DATA_RESPONSE: MessageDescriptor<DropVideoTrackStagingDataResponse> = {
  name: 'DropVideoTrackStagingDataResponse',
  fields: [],
};

export interface UpdateAudioTrackRequestBody {
  containerId?: string,
  r2TrackDirname?: string,
  name?: string,
  isDefault?: boolean,
}

export let UPDATE_AUDIO_TRACK_REQUEST_BODY: MessageDescriptor<UpdateAudioTrackRequestBody> = {
  name: 'UpdateAudioTrackRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'isDefault',
    index: 4,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface UpdateAudioTrackResponse {
}

export let UPDATE_AUDIO_TRACK_RESPONSE: MessageDescriptor<UpdateAudioTrackResponse> = {
  name: 'UpdateAudioTrackResponse',
  fields: [],
};

export interface DeleteAudioTrackRequestBody {
  containerId?: string,
  r2TrackDirname?: string,
}

export let DELETE_AUDIO_TRACK_REQUEST_BODY: MessageDescriptor<DeleteAudioTrackRequestBody> = {
  name: 'DeleteAudioTrackRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DeleteAudioTrackResponse {
}

export let DELETE_AUDIO_TRACK_RESPONSE: MessageDescriptor<DeleteAudioTrackResponse> = {
  name: 'DeleteAudioTrackResponse',
  fields: [],
};

export interface DropAudioTrackStagingDataRequestBody {
  containerId?: string,
  r2TrackDirname?: string,
}

export let DROP_AUDIO_TRACK_STAGING_DATA_REQUEST_BODY: MessageDescriptor<DropAudioTrackStagingDataRequestBody> = {
  name: 'DropAudioTrackStagingDataRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DropAudioTrackStagingDataResponse {
}

export let DROP_AUDIO_TRACK_STAGING_DATA_RESPONSE: MessageDescriptor<DropAudioTrackStagingDataResponse> = {
  name: 'DropAudioTrackStagingDataResponse',
  fields: [],
};

export interface UpdateSubtitleTrackRequestBody {
  containerId?: string,
  r2TrackDirname?: string,
  name?: string,
  isDefault?: boolean,
}

export let UPDATE_SUBTITLE_TRACK_REQUEST_BODY: MessageDescriptor<UpdateSubtitleTrackRequestBody> = {
  name: 'UpdateSubtitleTrackRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'isDefault',
    index: 4,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface UpdateSubtitleTrackResponse {
}

export let UPDATE_SUBTITLE_TRACK_RESPONSE: MessageDescriptor<UpdateSubtitleTrackResponse> = {
  name: 'UpdateSubtitleTrackResponse',
  fields: [],
};

export interface DeleteSubtitleTrackRequestBody {
  containerId?: string,
  r2TrackDirname?: string,
}

export let DELETE_SUBTITLE_TRACK_REQUEST_BODY: MessageDescriptor<DeleteSubtitleTrackRequestBody> = {
  name: 'DeleteSubtitleTrackRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DeleteSubtitleTrackResponse {
}

export let DELETE_SUBTITLE_TRACK_RESPONSE: MessageDescriptor<DeleteSubtitleTrackResponse> = {
  name: 'DeleteSubtitleTrackResponse',
  fields: [],
};

export interface DropSubtitleTrackStagingDataRequestBody {
  containerId?: string,
  r2TrackDirname?: string,
}

export let DROP_SUBTITLE_TRACK_STAGING_DATA_REQUEST_BODY: MessageDescriptor<DropSubtitleTrackStagingDataRequestBody> = {
  name: 'DropSubtitleTrackStagingDataRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'r2TrackDirname',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface DropSubtitleTrackStagingDataResponse {
}

export let DROP_SUBTITLE_TRACK_STAGING_DATA_RESPONSE: MessageDescriptor<DropSubtitleTrackStagingDataResponse> = {
  name: 'DropSubtitleTrackStagingDataResponse',
  fields: [],
};

export interface ProcessGcsFileDeleteTaskRequestBody {
  gcsFilename?: string,
  uploadSessionUrl?: string,
}

export let PROCESS_GCS_FILE_DELETE_TASK_REQUEST_BODY: MessageDescriptor<ProcessGcsFileDeleteTaskRequestBody> = {
  name: 'ProcessGcsFileDeleteTaskRequestBody',
  fields: [{
    name: 'gcsFilename',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'uploadSessionUrl',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessGcsFileDeleteTaskResponse {
}

export let PROCESS_GCS_FILE_DELETE_TASK_RESPONSE: MessageDescriptor<ProcessGcsFileDeleteTaskResponse> = {
  name: 'ProcessGcsFileDeleteTaskResponse',
  fields: [],
};

export interface GetGcsFileDeleteTasksRequestBody {
}

export let GET_GCS_FILE_DELETE_TASKS_REQUEST_BODY: MessageDescriptor<GetGcsFileDeleteTasksRequestBody> = {
  name: 'GetGcsFileDeleteTasksRequestBody',
  fields: [],
};

export interface GetGcsFileDeleteTasksResponse {
  tasks?: Array<ProcessGcsFileDeleteTaskRequestBody>,
}

export let GET_GCS_FILE_DELETE_TASKS_RESPONSE: MessageDescriptor<GetGcsFileDeleteTasksResponse> = {
  name: 'GetGcsFileDeleteTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_GCS_FILE_DELETE_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessR2KeyDeleteTaskRequestBody {
  key?: string,
}

export let PROCESS_R2_KEY_DELETE_TASK_REQUEST_BODY: MessageDescriptor<ProcessR2KeyDeleteTaskRequestBody> = {
  name: 'ProcessR2KeyDeleteTaskRequestBody',
  fields: [{
    name: 'key',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessR2KeyDeleteTaskResponse {
}

export let PROCESS_R2_KEY_DELETE_TASK_RESPONSE: MessageDescriptor<ProcessR2KeyDeleteTaskResponse> = {
  name: 'ProcessR2KeyDeleteTaskResponse',
  fields: [],
};

export interface GetR2KeyDeleteTasksRequestBody {
}

export let GET_R2_KEY_DELETE_TASKS_REQUEST_BODY: MessageDescriptor<GetR2KeyDeleteTasksRequestBody> = {
  name: 'GetR2KeyDeleteTasksRequestBody',
  fields: [],
};

export interface GetR2KeyDeleteTasksResponse {
  tasks?: Array<ProcessR2KeyDeleteTaskRequestBody>,
}

export let GET_R2_KEY_DELETE_TASKS_RESPONSE: MessageDescriptor<GetR2KeyDeleteTasksResponse> = {
  name: 'GetR2KeyDeleteTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_R2_KEY_DELETE_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export let CREATE_VIDEO_CONTAINER: WebRemoteCallDescriptor = {
  name: "CreateVideoContainer",
  path: "/CreateVideoContainer",
  body: {
    messageType: CREATE_VIDEO_CONTAINER_REQUEST_BODY,
  },
  response: {
    messageType: CREATE_VIDEO_CONTAINER_RESPONSE,
  },
}

export let DELETE_VIDEO_CONTAINER: WebRemoteCallDescriptor = {
  name: "DeleteVideoContainer",
  path: "/DeleteVideoContainer",
  body: {
    messageType: DELETE_VIDEO_CONTAINER_REQUEST_BODY,
  },
  response: {
    messageType: DELETE_VIDEO_CONTAINER_RESPONSE,
  },
}

export let GET_VIDEO_CONTAINER: WebRemoteCallDescriptor = {
  name: "GetVideoContainer",
  path: "/GetVideoContainer",
  body: {
    messageType: GET_VIDEO_CONTAINER_REQUEST_BODY,
  },
  response: {
    messageType: GET_VIDEO_CONTAINER_RESPONSE,
  },
}

export let COMMIT_VIDEO_CONTAINER_STAGING_DATA: WebRemoteCallDescriptor = {
  name: "CommitVideoContainerStagingData",
  path: "/CommitVideoContainerStagingData",
  body: {
    messageType: COMMIT_VIDEO_CONTAINER_STAGING_DATA_REQUEST_BODY,
  },
  response: {
    messageType: COMMIT_VIDEO_CONTAINER_STAGING_DATA_RESPONSE,
  },
}

export let PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK: WebRemoteCallDescriptor = {
  name: "ProcessVideoContainerWritingToFileTask",
  path: "/ProcessVideoContainerWritingToFileTask",
  body: {
    messageType: PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK_RESPONSE,
  },
}

export let GET_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS: WebRemoteCallDescriptor = {
  name: "GetVideoContainerWritingToFileTasks",
  path: "/GetVideoContainerWritingToFileTasks",
  body: {
    messageType: GET_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: GET_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS_RESPONSE,
  },
}

export let PROCESS_VIDEO_CONTAINER_SYNCING_TASK: WebRemoteCallDescriptor = {
  name: "ProcessVideoContainerSyncingTask",
  path: "/ProcessVideoContainerSyncingTask",
  body: {
    messageType: PROCESS_VIDEO_CONTAINER_SYNCING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_VIDEO_CONTAINER_SYNCING_TASK_RESPONSE,
  },
}

export let GET_VIDEO_CONTAINER_SYNCING_TASKS: WebRemoteCallDescriptor = {
  name: "GetVideoContainerSyncingTasks",
  path: "/GetVideoContainerSyncingTasks",
  body: {
    messageType: GET_VIDEO_CONTAINER_SYNCING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: GET_VIDEO_CONTAINER_SYNCING_TASKS_RESPONSE,
  },
}

export let START_MEDIA_UPLOADING: WebRemoteCallDescriptor = {
  name: "StartMediaUploading",
  path: "/StartMediaUploading",
  body: {
    messageType: START_MEDIA_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: START_MEDIA_UPLOADING_RESPONSE,
  },
}

export let COMPLETE_MEDIA_UPLOADING: WebRemoteCallDescriptor = {
  name: "CompleteMediaUploading",
  path: "/CompleteMediaUploading",
  body: {
    messageType: COMPLETE_MEDIA_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: COMPLETE_MEDIA_UPLOADING_RESPONSE,
  },
}

export let CANCEL_MEDIA_UPLOADING: WebRemoteCallDescriptor = {
  name: "CancelMediaUploading",
  path: "/CancelMediaUploading",
  body: {
    messageType: CANCEL_MEDIA_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: CANCEL_MEDIA_UPLOADING_RESPONSE,
  },
}

export let START_SUBTITLE_UPLOADING: WebRemoteCallDescriptor = {
  name: "StartSubtitleUploading",
  path: "/StartSubtitleUploading",
  body: {
    messageType: START_SUBTITLE_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: START_SUBTITLE_UPLOADING_RESPONSE,
  },
}

export let COMPLETE_SUBTITLE_UPLOADING: WebRemoteCallDescriptor = {
  name: "CompleteSubtitleUploading",
  path: "/CompleteSubtitleUploading",
  body: {
    messageType: COMPLETE_SUBTITLE_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: COMPLETE_SUBTITLE_UPLOADING_RESPONSE,
  },
}

export let CANCEL_SUBTITLE_UPLOADING: WebRemoteCallDescriptor = {
  name: "CancelSubtitleUploading",
  path: "/CancelSubtitleUploading",
  body: {
    messageType: CANCEL_SUBTITLE_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: CANCEL_SUBTITLE_UPLOADING_RESPONSE,
  },
}

export let PROCESS_MEDIA_FORMATTING_TASK: WebRemoteCallDescriptor = {
  name: "ProcessMediaFormattingTask",
  path: "/ProcessMediaFormattingTask",
  body: {
    messageType: PROCESS_MEDIA_FORMATTING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_MEDIA_FORMATTING_TASK_RESPONSE,
  },
}

export let GET_MEDIA_FORMATTING_TASKS: WebRemoteCallDescriptor = {
  name: "GetMediaFormattingTasks",
  path: "/GetMediaFormattingTasks",
  body: {
    messageType: GET_MEDIA_FORMATTING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: GET_MEDIA_FORMATTING_TASKS_RESPONSE,
  },
}

export let CANCEL_MEDIA_FORMATTING: WebRemoteCallDescriptor = {
  name: "CancelMediaFormatting",
  path: "/CancelMediaFormatting",
  body: {
    messageType: CANCEL_MEDIA_FORMATTING_REQUEST_BODY,
  },
  response: {
    messageType: CANCEL_MEDIA_FORMATTING_RESPONSE,
  },
}

export let PROCESS_SUBTITLE_FORMATTING_TASK: WebRemoteCallDescriptor = {
  name: "ProcessSubtitleFormattingTask",
  path: "/ProcessSubtitleFormattingTask",
  body: {
    messageType: PROCESS_SUBTITLE_FORMATTING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_SUBTITLE_FORMATTING_TASK_RESPONSE,
  },
}

export let GET_SUBTITLE_FORMATTING_TASKS: WebRemoteCallDescriptor = {
  name: "GetSubtitleFormattingTasks",
  path: "/GetSubtitleFormattingTasks",
  body: {
    messageType: GET_SUBTITLE_FORMATTING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: GET_SUBTITLE_FORMATTING_TASKS_RESPONSE,
  },
}

export let CANCEL_SUBTITLE_FORMATTING: WebRemoteCallDescriptor = {
  name: "CancelSubtitleFormatting",
  path: "/CancelSubtitleFormatting",
  body: {
    messageType: CANCEL_SUBTITLE_FORMATTING_REQUEST_BODY,
  },
  response: {
    messageType: CANCEL_SUBTITLE_FORMATTING_RESPONSE,
  },
}

export let DELETE_VIDEO_TRACK: WebRemoteCallDescriptor = {
  name: "DeleteVideoTrack",
  path: "/DeleteVideoTrack",
  body: {
    messageType: DELETE_VIDEO_TRACK_REQUEST_BODY,
  },
  response: {
    messageType: DELETE_VIDEO_TRACK_RESPONSE,
  },
}

export let DROP_VIDEO_TRACK_STAGING_DATA: WebRemoteCallDescriptor = {
  name: "DropVideoTrackStagingData",
  path: "/DropVideoTrackStagingData",
  body: {
    messageType: DROP_VIDEO_TRACK_STAGING_DATA_REQUEST_BODY,
  },
  response: {
    messageType: DROP_VIDEO_TRACK_STAGING_DATA_RESPONSE,
  },
}

export let UPDATE_AUDIO_TRACK: WebRemoteCallDescriptor = {
  name: "UpdateAudioTrack",
  path: "/UpdateAudioTrack",
  body: {
    messageType: UPDATE_AUDIO_TRACK_REQUEST_BODY,
  },
  response: {
    messageType: UPDATE_AUDIO_TRACK_RESPONSE,
  },
}

export let DELETE_AUDIO_TRACK: WebRemoteCallDescriptor = {
  name: "DeleteAudioTrack",
  path: "/DeleteAudioTrack",
  body: {
    messageType: DELETE_AUDIO_TRACK_REQUEST_BODY,
  },
  response: {
    messageType: DELETE_AUDIO_TRACK_RESPONSE,
  },
}

export let DROP_AUDIO_TRACK_STAGING_DATA: WebRemoteCallDescriptor = {
  name: "DropAudioTrackStagingData",
  path: "/DropAudioTrackStagingData",
  body: {
    messageType: DROP_AUDIO_TRACK_STAGING_DATA_REQUEST_BODY,
  },
  response: {
    messageType: DROP_AUDIO_TRACK_STAGING_DATA_RESPONSE,
  },
}

export let UPDATE_SUBTITLE_TRACK: WebRemoteCallDescriptor = {
  name: "UpdateSubtitleTrack",
  path: "/UpdateSubtitleTrack",
  body: {
    messageType: UPDATE_SUBTITLE_TRACK_REQUEST_BODY,
  },
  response: {
    messageType: UPDATE_SUBTITLE_TRACK_RESPONSE,
  },
}

export let DELETE_SUBTITLE_TRACK: WebRemoteCallDescriptor = {
  name: "DeleteSubtitleTrack",
  path: "/DeleteSubtitleTrack",
  body: {
    messageType: DELETE_SUBTITLE_TRACK_REQUEST_BODY,
  },
  response: {
    messageType: DELETE_SUBTITLE_TRACK_RESPONSE,
  },
}

export let DROP_SUBTITLE_TRACK_STAGING_DATA: WebRemoteCallDescriptor = {
  name: "DropSubtitleTrackStagingData",
  path: "/DropSubtitleTrackStagingData",
  body: {
    messageType: DROP_SUBTITLE_TRACK_STAGING_DATA_REQUEST_BODY,
  },
  response: {
    messageType: DROP_SUBTITLE_TRACK_STAGING_DATA_RESPONSE,
  },
}

export let PROCESS_GCS_FILE_DELETE_TASK: WebRemoteCallDescriptor = {
  name: "ProcessGcsFileDeleteTask",
  path: "/ProcessGcsFileDeleteTask",
  body: {
    messageType: PROCESS_GCS_FILE_DELETE_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_GCS_FILE_DELETE_TASK_RESPONSE,
  },
}

export let GET_GCS_FILE_DELETE_TASKS: WebRemoteCallDescriptor = {
  name: "GetGcsFileDeleteTasks",
  path: "/GetGcsFileDeleteTasks",
  body: {
    messageType: GET_GCS_FILE_DELETE_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: GET_GCS_FILE_DELETE_TASKS_RESPONSE,
  },
}

export let PROCESS_R2_KEY_DELETE_TASK: WebRemoteCallDescriptor = {
  name: "ProcessR2KeyDeleteTask",
  path: "/ProcessR2KeyDeleteTask",
  body: {
    messageType: PROCESS_R2_KEY_DELETE_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_R2_KEY_DELETE_TASK_RESPONSE,
  },
}

export let GET_R2_KEY_DELETE_TASKS: WebRemoteCallDescriptor = {
  name: "GetR2KeyDeleteTasks",
  path: "/GetR2KeyDeleteTasks",
  body: {
    messageType: GET_R2_KEY_DELETE_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: GET_R2_KEY_DELETE_TASKS_RESPONSE,
  },
}