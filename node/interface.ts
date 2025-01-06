import { PrimitiveType, MessageDescriptor, EnumDescriptor } from '@selfage/message/descriptor';
import { VideoContainer, VIDEO_CONTAINER } from './video_container';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface CreateVideoContainerRequestBody {
  videoContainerId?: string,
  seasonId?: string,
  episodeId?: string,
  accountId?: string,
}

export let CREATE_VIDEO_CONTAINER_REQUEST_BODY: MessageDescriptor<CreateVideoContainerRequestBody> = {
  name: 'CreateVideoContainerRequestBody',
  fields: [{
    name: 'videoContainerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'seasonId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'episodeId',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountId',
    index: 4,
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

export interface ListVideoContainerWritingToFileTasksRequestBody {
}

export let LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS_REQUEST_BODY: MessageDescriptor<ListVideoContainerWritingToFileTasksRequestBody> = {
  name: 'ListVideoContainerWritingToFileTasksRequestBody',
  fields: [],
};

export interface ListVideoContainerWritingToFileTasksResponse {
  tasks?: Array<ProcessVideoContainerWritingToFileTaskRequestBody>,
}

export let LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS_RESPONSE: MessageDescriptor<ListVideoContainerWritingToFileTasksResponse> = {
  name: 'ListVideoContainerWritingToFileTasksResponse',
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

export interface ListVideoContainerSyncingTasksRequestBody {
}

export let LIST_VIDEO_CONTAINER_SYNCING_TASKS_REQUEST_BODY: MessageDescriptor<ListVideoContainerSyncingTasksRequestBody> = {
  name: 'ListVideoContainerSyncingTasksRequestBody',
  fields: [],
};

export interface ListVideoContainerSyncingTasksResponse {
  tasks?: Array<ProcessVideoContainerSyncingTaskRequestBody>,
}

export let LIST_VIDEO_CONTAINER_SYNCING_TASKS_RESPONSE: MessageDescriptor<ListVideoContainerSyncingTasksResponse> = {
  name: 'ListVideoContainerSyncingTasksResponse',
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

export interface ProcessUploadedRecordingTaskRequestBody {
  gcsFilename?: string,
  accountId?: string,
  totalBytes?: number,
}

export let PROCESS_UPLOADED_RECORDING_TASK_REQUEST_BODY: MessageDescriptor<ProcessUploadedRecordingTaskRequestBody> = {
  name: 'ProcessUploadedRecordingTaskRequestBody',
  fields: [{
    name: 'gcsFilename',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'totalBytes',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ProcessUploadedRecordingTaskResponse {
}

export let PROCESS_UPLOADED_RECORDING_TASK_RESPONSE: MessageDescriptor<ProcessUploadedRecordingTaskResponse> = {
  name: 'ProcessUploadedRecordingTaskResponse',
  fields: [],
};

export interface ListUploadedRecordingTasksRequestBody {
}

export let LIST_UPLOADED_RECORDING_TASKS_REQUEST_BODY: MessageDescriptor<ListUploadedRecordingTasksRequestBody> = {
  name: 'ListUploadedRecordingTasksRequestBody',
  fields: [],
};

export interface ListUploadedRecordingTasksResponse {
  tasks?: Array<ProcessUploadedRecordingTaskRequestBody>,
}

export let LIST_UPLOADED_RECORDING_TASKS_RESPONSE: MessageDescriptor<ListUploadedRecordingTasksResponse> = {
  name: 'ListUploadedRecordingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_UPLOADED_RECORDING_TASK_REQUEST_BODY,
    isArray: true,
  }],
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

export interface ListMediaFormattingTasksRequestBody {
}

export let LIST_MEDIA_FORMATTING_TASKS_REQUEST_BODY: MessageDescriptor<ListMediaFormattingTasksRequestBody> = {
  name: 'ListMediaFormattingTasksRequestBody',
  fields: [],
};

export interface ListMediaFormattingTasksResponse {
  tasks?: Array<ProcessMediaFormattingTaskRequestBody>,
}

export let LIST_MEDIA_FORMATTING_TASKS_RESPONSE: MessageDescriptor<ListMediaFormattingTasksResponse> = {
  name: 'ListMediaFormattingTasksResponse',
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

export interface ListSubtitleFormattingTasksRequestBody {
}

export let LIST_SUBTITLE_FORMATTING_TASKS_REQUEST_BODY: MessageDescriptor<ListSubtitleFormattingTasksRequestBody> = {
  name: 'ListSubtitleFormattingTasksRequestBody',
  fields: [],
};

export interface ListSubtitleFormattingTasksResponse {
  tasks?: Array<ProcessSubtitleFormattingTaskRequestBody>,
}

export let LIST_SUBTITLE_FORMATTING_TASKS_RESPONSE: MessageDescriptor<ListSubtitleFormattingTasksResponse> = {
  name: 'ListSubtitleFormattingTasksResponse',
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

export interface ProcessStorageStartRecordingTaskRequestBody {
  r2Dirname?: string,
  accountId?: string,
  totalBytes?: number,
  startTimeMs?: number,
}

export let PROCESS_STORAGE_START_RECORDING_TASK_REQUEST_BODY: MessageDescriptor<ProcessStorageStartRecordingTaskRequestBody> = {
  name: 'ProcessStorageStartRecordingTaskRequestBody',
  fields: [{
    name: 'r2Dirname',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'totalBytes',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'startTimeMs',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ProcessStorageStartRecordingTaskResponse {
}

export let PROCESS_STORAGE_START_RECORDING_TASK_RESPONSE: MessageDescriptor<ProcessStorageStartRecordingTaskResponse> = {
  name: 'ProcessStorageStartRecordingTaskResponse',
  fields: [],
};

export interface ListStorageStartRecordingTasksRequestBody {
}

export let LIST_STORAGE_START_RECORDING_TASKS_REQUEST_BODY: MessageDescriptor<ListStorageStartRecordingTasksRequestBody> = {
  name: 'ListStorageStartRecordingTasksRequestBody',
  fields: [],
};

export interface ListStorageStartRecordingTasksResponse {
  tasks?: Array<ProcessStorageStartRecordingTaskRequestBody>,
}

export let LIST_STORAGE_START_RECORDING_TASKS_RESPONSE: MessageDescriptor<ListStorageStartRecordingTasksResponse> = {
  name: 'ListStorageStartRecordingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_STORAGE_START_RECORDING_TASK_REQUEST_BODY,
    isArray: true,
  }],
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

export interface ProcessStorageEndRecordingTaskRequestBody {
  r2Dirname?: string,
  accountId?: string,
  endTimeMs?: number,
}

export let PROCESS_STORAGE_END_RECORDING_TASK_REQUEST_BODY: MessageDescriptor<ProcessStorageEndRecordingTaskRequestBody> = {
  name: 'ProcessStorageEndRecordingTaskRequestBody',
  fields: [{
    name: 'r2Dirname',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'endTimeMs',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ProcessStorageEndRecordingTaskResponse {
}

export let PROCESS_STORAGE_END_RECORDING_TASK_RESPONSE: MessageDescriptor<ProcessStorageEndRecordingTaskResponse> = {
  name: 'ProcessStorageEndRecordingTaskResponse',
  fields: [],
};

export interface ListStorageEndRecordingTasksRequestBody {
}

export let LIST_STORAGE_END_RECORDING_TASKS_REQUEST_BODY: MessageDescriptor<ListStorageEndRecordingTasksRequestBody> = {
  name: 'ListStorageEndRecordingTasksRequestBody',
  fields: [],
};

export interface ListStorageEndRecordingTasksResponse {
  tasks?: Array<ProcessStorageEndRecordingTaskRequestBody>,
}

export let LIST_STORAGE_END_RECORDING_TASKS_RESPONSE: MessageDescriptor<ListStorageEndRecordingTasksResponse> = {
  name: 'ListStorageEndRecordingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_STORAGE_END_RECORDING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessGcsFileDeletingTaskRequestBody {
  gcsFilename?: string,
  uploadSessionUrl?: string,
}

export let PROCESS_GCS_FILE_DELETING_TASK_REQUEST_BODY: MessageDescriptor<ProcessGcsFileDeletingTaskRequestBody> = {
  name: 'ProcessGcsFileDeletingTaskRequestBody',
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

export interface ProcessGcsFileDeletingTaskResponse {
}

export let PROCESS_GCS_FILE_DELETING_TASK_RESPONSE: MessageDescriptor<ProcessGcsFileDeletingTaskResponse> = {
  name: 'ProcessGcsFileDeletingTaskResponse',
  fields: [],
};

export interface ListGcsFileDeletingTasksRequestBody {
}

export let LIST_GCS_FILE_DELETING_TASKS_REQUEST_BODY: MessageDescriptor<ListGcsFileDeletingTasksRequestBody> = {
  name: 'ListGcsFileDeletingTasksRequestBody',
  fields: [],
};

export interface ListGcsFileDeletingTasksResponse {
  tasks?: Array<ProcessGcsFileDeletingTaskRequestBody>,
}

export let LIST_GCS_FILE_DELETING_TASKS_RESPONSE: MessageDescriptor<ListGcsFileDeletingTasksResponse> = {
  name: 'ListGcsFileDeletingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_GCS_FILE_DELETING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessR2KeyDeletingTaskRequestBody {
  key?: string,
}

export let PROCESS_R2_KEY_DELETING_TASK_REQUEST_BODY: MessageDescriptor<ProcessR2KeyDeletingTaskRequestBody> = {
  name: 'ProcessR2KeyDeletingTaskRequestBody',
  fields: [{
    name: 'key',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessR2KeyDeletingTaskResponse {
}

export let PROCESS_R2_KEY_DELETING_TASK_RESPONSE: MessageDescriptor<ProcessR2KeyDeletingTaskResponse> = {
  name: 'ProcessR2KeyDeletingTaskResponse',
  fields: [],
};

export interface ListR2KeyDeletingTasksRequestBody {
}

export let LIST_R2_KEY_DELETING_TASKS_REQUEST_BODY: MessageDescriptor<ListR2KeyDeletingTasksRequestBody> = {
  name: 'ListR2KeyDeletingTasksRequestBody',
  fields: [],
};

export interface ListR2KeyDeletingTasksResponse {
  tasks?: Array<ProcessR2KeyDeletingTaskRequestBody>,
}

export let LIST_R2_KEY_DELETING_TASKS_RESPONSE: MessageDescriptor<ListR2KeyDeletingTasksResponse> = {
  name: 'ListR2KeyDeletingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_R2_KEY_DELETING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export let CREATE_VIDEO_CONTAINER: NodeRemoteCallDescriptor = {
  name: "CreateVideoContainer",
  path: "/CreateVideoContainer",
  body: {
    messageType: CREATE_VIDEO_CONTAINER_REQUEST_BODY,
  },
  response: {
    messageType: CREATE_VIDEO_CONTAINER_RESPONSE,
  },
}

export let DELETE_VIDEO_CONTAINER: NodeRemoteCallDescriptor = {
  name: "DeleteVideoContainer",
  path: "/DeleteVideoContainer",
  body: {
    messageType: DELETE_VIDEO_CONTAINER_REQUEST_BODY,
  },
  response: {
    messageType: DELETE_VIDEO_CONTAINER_RESPONSE,
  },
}

export let GET_VIDEO_CONTAINER: NodeRemoteCallDescriptor = {
  name: "GetVideoContainer",
  path: "/GetVideoContainer",
  body: {
    messageType: GET_VIDEO_CONTAINER_REQUEST_BODY,
  },
  response: {
    messageType: GET_VIDEO_CONTAINER_RESPONSE,
  },
}

export let COMMIT_VIDEO_CONTAINER_STAGING_DATA: NodeRemoteCallDescriptor = {
  name: "CommitVideoContainerStagingData",
  path: "/CommitVideoContainerStagingData",
  body: {
    messageType: COMMIT_VIDEO_CONTAINER_STAGING_DATA_REQUEST_BODY,
  },
  response: {
    messageType: COMMIT_VIDEO_CONTAINER_STAGING_DATA_RESPONSE,
  },
}

export let PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK: NodeRemoteCallDescriptor = {
  name: "ProcessVideoContainerWritingToFileTask",
  path: "/ProcessVideoContainerWritingToFileTask",
  body: {
    messageType: PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK_RESPONSE,
  },
}

export let LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS: NodeRemoteCallDescriptor = {
  name: "ListVideoContainerWritingToFileTasks",
  path: "/ListVideoContainerWritingToFileTasks",
  body: {
    messageType: LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS_RESPONSE,
  },
}

export let PROCESS_VIDEO_CONTAINER_SYNCING_TASK: NodeRemoteCallDescriptor = {
  name: "ProcessVideoContainerSyncingTask",
  path: "/ProcessVideoContainerSyncingTask",
  body: {
    messageType: PROCESS_VIDEO_CONTAINER_SYNCING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_VIDEO_CONTAINER_SYNCING_TASK_RESPONSE,
  },
}

export let LIST_VIDEO_CONTAINER_SYNCING_TASKS: NodeRemoteCallDescriptor = {
  name: "ListVideoContainerSyncingTasks",
  path: "/ListVideoContainerSyncingTasks",
  body: {
    messageType: LIST_VIDEO_CONTAINER_SYNCING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_VIDEO_CONTAINER_SYNCING_TASKS_RESPONSE,
  },
}

export let START_MEDIA_UPLOADING: NodeRemoteCallDescriptor = {
  name: "StartMediaUploading",
  path: "/StartMediaUploading",
  body: {
    messageType: START_MEDIA_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: START_MEDIA_UPLOADING_RESPONSE,
  },
}

export let COMPLETE_MEDIA_UPLOADING: NodeRemoteCallDescriptor = {
  name: "CompleteMediaUploading",
  path: "/CompleteMediaUploading",
  body: {
    messageType: COMPLETE_MEDIA_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: COMPLETE_MEDIA_UPLOADING_RESPONSE,
  },
}

export let CANCEL_MEDIA_UPLOADING: NodeRemoteCallDescriptor = {
  name: "CancelMediaUploading",
  path: "/CancelMediaUploading",
  body: {
    messageType: CANCEL_MEDIA_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: CANCEL_MEDIA_UPLOADING_RESPONSE,
  },
}

export let START_SUBTITLE_UPLOADING: NodeRemoteCallDescriptor = {
  name: "StartSubtitleUploading",
  path: "/StartSubtitleUploading",
  body: {
    messageType: START_SUBTITLE_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: START_SUBTITLE_UPLOADING_RESPONSE,
  },
}

export let COMPLETE_SUBTITLE_UPLOADING: NodeRemoteCallDescriptor = {
  name: "CompleteSubtitleUploading",
  path: "/CompleteSubtitleUploading",
  body: {
    messageType: COMPLETE_SUBTITLE_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: COMPLETE_SUBTITLE_UPLOADING_RESPONSE,
  },
}

export let CANCEL_SUBTITLE_UPLOADING: NodeRemoteCallDescriptor = {
  name: "CancelSubtitleUploading",
  path: "/CancelSubtitleUploading",
  body: {
    messageType: CANCEL_SUBTITLE_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: CANCEL_SUBTITLE_UPLOADING_RESPONSE,
  },
}

export let PROCESS_UPLOADED_RECORDING_TASK: NodeRemoteCallDescriptor = {
  name: "ProcessUploadedRecordingTask",
  path: "/ProcessUploadedRecordingTask",
  body: {
    messageType: PROCESS_UPLOADED_RECORDING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_UPLOADED_RECORDING_TASK_RESPONSE,
  },
}

export let LIST_UPLOADED_RECORDING_TASKS: NodeRemoteCallDescriptor = {
  name: "ListUploadedRecordingTasks",
  path: "/ListUploadedRecordingTasks",
  body: {
    messageType: LIST_UPLOADED_RECORDING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_UPLOADED_RECORDING_TASKS_RESPONSE,
  },
}

export let PROCESS_MEDIA_FORMATTING_TASK: NodeRemoteCallDescriptor = {
  name: "ProcessMediaFormattingTask",
  path: "/ProcessMediaFormattingTask",
  body: {
    messageType: PROCESS_MEDIA_FORMATTING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_MEDIA_FORMATTING_TASK_RESPONSE,
  },
}

export let LIST_MEDIA_FORMATTING_TASKS: NodeRemoteCallDescriptor = {
  name: "ListMediaFormattingTasks",
  path: "/ListMediaFormattingTasks",
  body: {
    messageType: LIST_MEDIA_FORMATTING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_MEDIA_FORMATTING_TASKS_RESPONSE,
  },
}

export let CANCEL_MEDIA_FORMATTING: NodeRemoteCallDescriptor = {
  name: "CancelMediaFormatting",
  path: "/CancelMediaFormatting",
  body: {
    messageType: CANCEL_MEDIA_FORMATTING_REQUEST_BODY,
  },
  response: {
    messageType: CANCEL_MEDIA_FORMATTING_RESPONSE,
  },
}

export let PROCESS_SUBTITLE_FORMATTING_TASK: NodeRemoteCallDescriptor = {
  name: "ProcessSubtitleFormattingTask",
  path: "/ProcessSubtitleFormattingTask",
  body: {
    messageType: PROCESS_SUBTITLE_FORMATTING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_SUBTITLE_FORMATTING_TASK_RESPONSE,
  },
}

export let LIST_SUBTITLE_FORMATTING_TASKS: NodeRemoteCallDescriptor = {
  name: "ListSubtitleFormattingTasks",
  path: "/ListSubtitleFormattingTasks",
  body: {
    messageType: LIST_SUBTITLE_FORMATTING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_SUBTITLE_FORMATTING_TASKS_RESPONSE,
  },
}

export let CANCEL_SUBTITLE_FORMATTING: NodeRemoteCallDescriptor = {
  name: "CancelSubtitleFormatting",
  path: "/CancelSubtitleFormatting",
  body: {
    messageType: CANCEL_SUBTITLE_FORMATTING_REQUEST_BODY,
  },
  response: {
    messageType: CANCEL_SUBTITLE_FORMATTING_RESPONSE,
  },
}

export let PROCESS_STORAGE_START_RECORDING_TASK: NodeRemoteCallDescriptor = {
  name: "ProcessStorageStartRecordingTask",
  path: "/ProcessStorageStartRecordingTask",
  body: {
    messageType: PROCESS_STORAGE_START_RECORDING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_STORAGE_START_RECORDING_TASK_RESPONSE,
  },
}

export let LIST_STORAGE_START_RECORDING_TASKS: NodeRemoteCallDescriptor = {
  name: "ListStorageStartRecordingTasks",
  path: "/ListStorageStartRecordingTasks",
  body: {
    messageType: LIST_STORAGE_START_RECORDING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_STORAGE_START_RECORDING_TASKS_RESPONSE,
  },
}

export let DELETE_VIDEO_TRACK: NodeRemoteCallDescriptor = {
  name: "DeleteVideoTrack",
  path: "/DeleteVideoTrack",
  body: {
    messageType: DELETE_VIDEO_TRACK_REQUEST_BODY,
  },
  response: {
    messageType: DELETE_VIDEO_TRACK_RESPONSE,
  },
}

export let DROP_VIDEO_TRACK_STAGING_DATA: NodeRemoteCallDescriptor = {
  name: "DropVideoTrackStagingData",
  path: "/DropVideoTrackStagingData",
  body: {
    messageType: DROP_VIDEO_TRACK_STAGING_DATA_REQUEST_BODY,
  },
  response: {
    messageType: DROP_VIDEO_TRACK_STAGING_DATA_RESPONSE,
  },
}

export let UPDATE_AUDIO_TRACK: NodeRemoteCallDescriptor = {
  name: "UpdateAudioTrack",
  path: "/UpdateAudioTrack",
  body: {
    messageType: UPDATE_AUDIO_TRACK_REQUEST_BODY,
  },
  response: {
    messageType: UPDATE_AUDIO_TRACK_RESPONSE,
  },
}

export let DELETE_AUDIO_TRACK: NodeRemoteCallDescriptor = {
  name: "DeleteAudioTrack",
  path: "/DeleteAudioTrack",
  body: {
    messageType: DELETE_AUDIO_TRACK_REQUEST_BODY,
  },
  response: {
    messageType: DELETE_AUDIO_TRACK_RESPONSE,
  },
}

export let DROP_AUDIO_TRACK_STAGING_DATA: NodeRemoteCallDescriptor = {
  name: "DropAudioTrackStagingData",
  path: "/DropAudioTrackStagingData",
  body: {
    messageType: DROP_AUDIO_TRACK_STAGING_DATA_REQUEST_BODY,
  },
  response: {
    messageType: DROP_AUDIO_TRACK_STAGING_DATA_RESPONSE,
  },
}

export let UPDATE_SUBTITLE_TRACK: NodeRemoteCallDescriptor = {
  name: "UpdateSubtitleTrack",
  path: "/UpdateSubtitleTrack",
  body: {
    messageType: UPDATE_SUBTITLE_TRACK_REQUEST_BODY,
  },
  response: {
    messageType: UPDATE_SUBTITLE_TRACK_RESPONSE,
  },
}

export let DELETE_SUBTITLE_TRACK: NodeRemoteCallDescriptor = {
  name: "DeleteSubtitleTrack",
  path: "/DeleteSubtitleTrack",
  body: {
    messageType: DELETE_SUBTITLE_TRACK_REQUEST_BODY,
  },
  response: {
    messageType: DELETE_SUBTITLE_TRACK_RESPONSE,
  },
}

export let DROP_SUBTITLE_TRACK_STAGING_DATA: NodeRemoteCallDescriptor = {
  name: "DropSubtitleTrackStagingData",
  path: "/DropSubtitleTrackStagingData",
  body: {
    messageType: DROP_SUBTITLE_TRACK_STAGING_DATA_REQUEST_BODY,
  },
  response: {
    messageType: DROP_SUBTITLE_TRACK_STAGING_DATA_RESPONSE,
  },
}

export let PROCESS_STORAGE_END_RECORDING_TASK: NodeRemoteCallDescriptor = {
  name: "ProcessStorageEndRecordingTask",
  path: "/ProcessStorageEndRecordingTask",
  body: {
    messageType: PROCESS_STORAGE_END_RECORDING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_STORAGE_END_RECORDING_TASK_RESPONSE,
  },
}

export let LIST_STORAGE_END_RECORDING_TASKS: NodeRemoteCallDescriptor = {
  name: "ListStorageEndRecordingTasks",
  path: "/ListStorageEndRecordingTasks",
  body: {
    messageType: LIST_STORAGE_END_RECORDING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_STORAGE_END_RECORDING_TASKS_RESPONSE,
  },
}

export let PROCESS_GCS_FILE_DELETING_TASK: NodeRemoteCallDescriptor = {
  name: "ProcessGcsFileDeletingTask",
  path: "/ProcessGcsFileDeletingTask",
  body: {
    messageType: PROCESS_GCS_FILE_DELETING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_GCS_FILE_DELETING_TASK_RESPONSE,
  },
}

export let LIST_GCS_FILE_DELETING_TASKS: NodeRemoteCallDescriptor = {
  name: "ListGcsFileDeletingTasks",
  path: "/ListGcsFileDeletingTasks",
  body: {
    messageType: LIST_GCS_FILE_DELETING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_GCS_FILE_DELETING_TASKS_RESPONSE,
  },
}

export let PROCESS_R2_KEY_DELETING_TASK: NodeRemoteCallDescriptor = {
  name: "ProcessR2KeyDeletingTask",
  path: "/ProcessR2KeyDeletingTask",
  body: {
    messageType: PROCESS_R2_KEY_DELETING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_R2_KEY_DELETING_TASK_RESPONSE,
  },
}

export let LIST_R2_KEY_DELETING_TASKS: NodeRemoteCallDescriptor = {
  name: "ListR2KeyDeletingTasks",
  path: "/ListR2KeyDeletingTasks",
  body: {
    messageType: LIST_R2_KEY_DELETING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_R2_KEY_DELETING_TASKS_RESPONSE,
  },
}
