import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { VideoContainer, VIDEO_CONTAINER } from './video_container';
import { VideoContainerStagingData, VIDEO_CONTAINER_STAGING_DATA } from './video_container_staging_data';
import { ValidationError, VALIDATION_ERROR } from './validation_error';
import { VIDEO_NODE_SERVICE } from '../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

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

export interface SaveVideoContainerStagingDataRequestBody {
  containerId?: string,
  videoContainer?: VideoContainerStagingData,
}

export let SAVE_VIDEO_CONTAINER_STAGING_DATA_REQUEST_BODY: MessageDescriptor<SaveVideoContainerStagingDataRequestBody> = {
  name: 'SaveVideoContainerStagingDataRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'videoContainer',
    index: 2,
    messageType: VIDEO_CONTAINER_STAGING_DATA,
  }],
};

export interface SaveVideoContainerStagingDataResponse {
  error?: ValidationError,
}

export let SAVE_VIDEO_CONTAINER_STAGING_DATA_RESPONSE: MessageDescriptor<SaveVideoContainerStagingDataResponse> = {
  name: 'SaveVideoContainerStagingDataResponse',
  fields: [{
    name: 'error',
    index: 1,
    enumType: VALIDATION_ERROR,
  }],
};

export interface CommitVideoContainerStagingDataRequestBody {
  containerId?: string,
  videoContainer?: VideoContainerStagingData,
}

export let COMMIT_VIDEO_CONTAINER_STAGING_DATA_REQUEST_BODY: MessageDescriptor<CommitVideoContainerStagingDataRequestBody> = {
  name: 'CommitVideoContainerStagingDataRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'videoContainer',
    index: 2,
    messageType: VIDEO_CONTAINER_STAGING_DATA,
  }],
};

export interface CommitVideoContainerStagingDataResponse {
  error?: ValidationError,
}

export let COMMIT_VIDEO_CONTAINER_STAGING_DATA_RESPONSE: MessageDescriptor<CommitVideoContainerStagingDataResponse> = {
  name: 'CommitVideoContainerStagingDataResponse',
  fields: [{
    name: 'error',
    index: 1,
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

export interface StartUploadingRequestBody {
  containerId?: string,
  contentLength?: number,
  fileExt?: string,
  md5?: string,
}

export let START_UPLOADING_REQUEST_BODY: MessageDescriptor<StartUploadingRequestBody> = {
  name: 'StartUploadingRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'contentLength',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'fileExt',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'md5',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface StartUploadingResponse {
  uploadSessionUrl?: string,
  byteOffset?: number,
}

export let START_UPLOADING_RESPONSE: MessageDescriptor<StartUploadingResponse> = {
  name: 'StartUploadingResponse',
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

export interface CompleteUploadingRequestBody {
  containerId?: string,
  uploadSessionUrl?: string,
}

export let COMPLETE_UPLOADING_REQUEST_BODY: MessageDescriptor<CompleteUploadingRequestBody> = {
  name: 'CompleteUploadingRequestBody',
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

export interface CompleteUploadingResponse {
}

export let COMPLETE_UPLOADING_RESPONSE: MessageDescriptor<CompleteUploadingResponse> = {
  name: 'CompleteUploadingResponse',
  fields: [],
};

export interface CancelUploadingRequestBody {
  containerId?: string,
}

export let CANCEL_UPLOADING_REQUEST_BODY: MessageDescriptor<CancelUploadingRequestBody> = {
  name: 'CancelUploadingRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CancelUploadingResponse {
}

export let CANCEL_UPLOADING_RESPONSE: MessageDescriptor<CancelUploadingResponse> = {
  name: 'CancelUploadingResponse',
  fields: [],
};

export interface ProcessUploadedRecordingTaskRequestBody {
  gcsKey?: string,
  accountId?: string,
  totalBytes?: number,
}

export let PROCESS_UPLOADED_RECORDING_TASK_REQUEST_BODY: MessageDescriptor<ProcessUploadedRecordingTaskRequestBody> = {
  name: 'ProcessUploadedRecordingTaskRequestBody',
  fields: [{
    name: 'gcsKey',
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

export interface ProcessMediaUploadingTaskRequestBody {
  containerId?: string,
  gcsDirname?: string,
}

export let PROCESS_MEDIA_UPLOADING_TASK_REQUEST_BODY: MessageDescriptor<ProcessMediaUploadingTaskRequestBody> = {
  name: 'ProcessMediaUploadingTaskRequestBody',
  fields: [{
    name: 'containerId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'gcsDirname',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessMediaUploadingTaskResponse {
}

export let PROCESS_MEDIA_UPLOADING_TASK_RESPONSE: MessageDescriptor<ProcessMediaUploadingTaskResponse> = {
  name: 'ProcessMediaUploadingTaskResponse',
  fields: [],
};

export interface ListMediaUploadingTasksRequestBody {
}

export let LIST_MEDIA_UPLOADING_TASKS_REQUEST_BODY: MessageDescriptor<ListMediaUploadingTasksRequestBody> = {
  name: 'ListMediaUploadingTasksRequestBody',
  fields: [],
};

export interface ListMediaUploadingTasksResponse {
  tasks?: Array<ProcessMediaUploadingTaskRequestBody>,
}

export let LIST_MEDIA_UPLOADING_TASKS_RESPONSE: MessageDescriptor<ListMediaUploadingTasksResponse> = {
  name: 'ListMediaUploadingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_MEDIA_UPLOADING_TASK_REQUEST_BODY,
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

export interface ProcessGcsUploadFileDeletingTaskRequestBody {
  gcsFilename?: string,
  uploadSessionUrl?: string,
}

export let PROCESS_GCS_UPLOAD_FILE_DELETING_TASK_REQUEST_BODY: MessageDescriptor<ProcessGcsUploadFileDeletingTaskRequestBody> = {
  name: 'ProcessGcsUploadFileDeletingTaskRequestBody',
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

export interface ProcessGcsUploadFileDeletingTaskResponse {
}

export let PROCESS_GCS_UPLOAD_FILE_DELETING_TASK_RESPONSE: MessageDescriptor<ProcessGcsUploadFileDeletingTaskResponse> = {
  name: 'ProcessGcsUploadFileDeletingTaskResponse',
  fields: [],
};

export interface ListGcsUploadFileDeletingTasksRequestBody {
}

export let LIST_GCS_UPLOAD_FILE_DELETING_TASKS_REQUEST_BODY: MessageDescriptor<ListGcsUploadFileDeletingTasksRequestBody> = {
  name: 'ListGcsUploadFileDeletingTasksRequestBody',
  fields: [],
};

export interface ListGcsUploadFileDeletingTasksResponse {
  tasks?: Array<ProcessGcsUploadFileDeletingTaskRequestBody>,
}

export let LIST_GCS_UPLOAD_FILE_DELETING_TASKS_RESPONSE: MessageDescriptor<ListGcsUploadFileDeletingTasksResponse> = {
  name: 'ListGcsUploadFileDeletingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_GCS_UPLOAD_FILE_DELETING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessGcsKeyDeletingTaskRequestBody {
  key?: string,
}

export let PROCESS_GCS_KEY_DELETING_TASK_REQUEST_BODY: MessageDescriptor<ProcessGcsKeyDeletingTaskRequestBody> = {
  name: 'ProcessGcsKeyDeletingTaskRequestBody',
  fields: [{
    name: 'key',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessGcsKeyDeletingTaskResponse {
}

export let PROCESS_GCS_KEY_DELETING_TASK_RESPONSE: MessageDescriptor<ProcessGcsKeyDeletingTaskResponse> = {
  name: 'ProcessGcsKeyDeletingTaskResponse',
  fields: [],
};

export interface ListGcsKeyDeletingTasksRequestBody {
}

export let LIST_GCS_KEY_DELETING_TASKS_REQUEST_BODY: MessageDescriptor<ListGcsKeyDeletingTasksRequestBody> = {
  name: 'ListGcsKeyDeletingTasksRequestBody',
  fields: [],
};

export interface ListGcsKeyDeletingTasksResponse {
  tasks?: Array<ProcessGcsKeyDeletingTaskRequestBody>,
}

export let LIST_GCS_KEY_DELETING_TASKS_RESPONSE: MessageDescriptor<ListGcsKeyDeletingTasksResponse> = {
  name: 'ListGcsKeyDeletingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_GCS_KEY_DELETING_TASK_REQUEST_BODY,
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

export let CREATE_VIDEO_CONTAINER: RemoteCallDescriptor = {
  name: "CreateVideoContainer",
  service: VIDEO_NODE_SERVICE,
  path: "/CreateVideoContainer",
  body: {
    messageType: CREATE_VIDEO_CONTAINER_REQUEST_BODY,
  },
  response: {
    messageType: CREATE_VIDEO_CONTAINER_RESPONSE,
  },
}

export let DELETE_VIDEO_CONTAINER: RemoteCallDescriptor = {
  name: "DeleteVideoContainer",
  service: VIDEO_NODE_SERVICE,
  path: "/DeleteVideoContainer",
  body: {
    messageType: DELETE_VIDEO_CONTAINER_REQUEST_BODY,
  },
  response: {
    messageType: DELETE_VIDEO_CONTAINER_RESPONSE,
  },
}

export let GET_VIDEO_CONTAINER: RemoteCallDescriptor = {
  name: "GetVideoContainer",
  service: VIDEO_NODE_SERVICE,
  path: "/GetVideoContainer",
  body: {
    messageType: GET_VIDEO_CONTAINER_REQUEST_BODY,
  },
  response: {
    messageType: GET_VIDEO_CONTAINER_RESPONSE,
  },
}

export let SAVE_VIDEO_CONTAINER_STAGING_DATA: RemoteCallDescriptor = {
  name: "SaveVideoContainerStagingData",
  service: VIDEO_NODE_SERVICE,
  path: "/SaveVideoContainerStagingData",
  body: {
    messageType: SAVE_VIDEO_CONTAINER_STAGING_DATA_REQUEST_BODY,
  },
  response: {
    messageType: SAVE_VIDEO_CONTAINER_STAGING_DATA_RESPONSE,
  },
}

export let COMMIT_VIDEO_CONTAINER_STAGING_DATA: RemoteCallDescriptor = {
  name: "CommitVideoContainerStagingData",
  service: VIDEO_NODE_SERVICE,
  path: "/CommitVideoContainerStagingData",
  body: {
    messageType: COMMIT_VIDEO_CONTAINER_STAGING_DATA_REQUEST_BODY,
  },
  response: {
    messageType: COMMIT_VIDEO_CONTAINER_STAGING_DATA_RESPONSE,
  },
}

export let PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK: RemoteCallDescriptor = {
  name: "ProcessVideoContainerWritingToFileTask",
  service: VIDEO_NODE_SERVICE,
  path: "/ProcessVideoContainerWritingToFileTask",
  body: {
    messageType: PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK_RESPONSE,
  },
}

export let LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS: RemoteCallDescriptor = {
  name: "ListVideoContainerWritingToFileTasks",
  service: VIDEO_NODE_SERVICE,
  path: "/ListVideoContainerWritingToFileTasks",
  body: {
    messageType: LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS_RESPONSE,
  },
}

export let PROCESS_VIDEO_CONTAINER_SYNCING_TASK: RemoteCallDescriptor = {
  name: "ProcessVideoContainerSyncingTask",
  service: VIDEO_NODE_SERVICE,
  path: "/ProcessVideoContainerSyncingTask",
  body: {
    messageType: PROCESS_VIDEO_CONTAINER_SYNCING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_VIDEO_CONTAINER_SYNCING_TASK_RESPONSE,
  },
}

export let LIST_VIDEO_CONTAINER_SYNCING_TASKS: RemoteCallDescriptor = {
  name: "ListVideoContainerSyncingTasks",
  service: VIDEO_NODE_SERVICE,
  path: "/ListVideoContainerSyncingTasks",
  body: {
    messageType: LIST_VIDEO_CONTAINER_SYNCING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_VIDEO_CONTAINER_SYNCING_TASKS_RESPONSE,
  },
}

export let START_UPLOADING: RemoteCallDescriptor = {
  name: "StartUploading",
  service: VIDEO_NODE_SERVICE,
  path: "/StartUploading",
  body: {
    messageType: START_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: START_UPLOADING_RESPONSE,
  },
}

export let COMPLETE_UPLOADING: RemoteCallDescriptor = {
  name: "CompleteUploading",
  service: VIDEO_NODE_SERVICE,
  path: "/CompleteUploading",
  body: {
    messageType: COMPLETE_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: COMPLETE_UPLOADING_RESPONSE,
  },
}

export let CANCEL_UPLOADING: RemoteCallDescriptor = {
  name: "CancelUploading",
  service: VIDEO_NODE_SERVICE,
  path: "/CancelUploading",
  body: {
    messageType: CANCEL_UPLOADING_REQUEST_BODY,
  },
  response: {
    messageType: CANCEL_UPLOADING_RESPONSE,
  },
}

export let PROCESS_UPLOADED_RECORDING_TASK: RemoteCallDescriptor = {
  name: "ProcessUploadedRecordingTask",
  service: VIDEO_NODE_SERVICE,
  path: "/ProcessUploadedRecordingTask",
  body: {
    messageType: PROCESS_UPLOADED_RECORDING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_UPLOADED_RECORDING_TASK_RESPONSE,
  },
}

export let LIST_UPLOADED_RECORDING_TASKS: RemoteCallDescriptor = {
  name: "ListUploadedRecordingTasks",
  service: VIDEO_NODE_SERVICE,
  path: "/ListUploadedRecordingTasks",
  body: {
    messageType: LIST_UPLOADED_RECORDING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_UPLOADED_RECORDING_TASKS_RESPONSE,
  },
}

export let PROCESS_MEDIA_FORMATTING_TASK: RemoteCallDescriptor = {
  name: "ProcessMediaFormattingTask",
  service: VIDEO_NODE_SERVICE,
  path: "/ProcessMediaFormattingTask",
  body: {
    messageType: PROCESS_MEDIA_FORMATTING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_MEDIA_FORMATTING_TASK_RESPONSE,
  },
}

export let LIST_MEDIA_FORMATTING_TASKS: RemoteCallDescriptor = {
  name: "ListMediaFormattingTasks",
  service: VIDEO_NODE_SERVICE,
  path: "/ListMediaFormattingTasks",
  body: {
    messageType: LIST_MEDIA_FORMATTING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_MEDIA_FORMATTING_TASKS_RESPONSE,
  },
}

export let PROCESS_MEDIA_UPLOADING_TASK: RemoteCallDescriptor = {
  name: "ProcessMediaUploadingTask",
  service: VIDEO_NODE_SERVICE,
  path: "/ProcessMediaUploadingTask",
  body: {
    messageType: PROCESS_MEDIA_UPLOADING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_MEDIA_UPLOADING_TASK_RESPONSE,
  },
}

export let LIST_MEDIA_UPLOADING_TASKS: RemoteCallDescriptor = {
  name: "ListMediaUploadingTasks",
  service: VIDEO_NODE_SERVICE,
  path: "/ListMediaUploadingTasks",
  body: {
    messageType: LIST_MEDIA_UPLOADING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_MEDIA_UPLOADING_TASKS_RESPONSE,
  },
}

export let CANCEL_MEDIA_FORMATTING: RemoteCallDescriptor = {
  name: "CancelMediaFormatting",
  service: VIDEO_NODE_SERVICE,
  path: "/CancelMediaFormatting",
  body: {
    messageType: CANCEL_MEDIA_FORMATTING_REQUEST_BODY,
  },
  response: {
    messageType: CANCEL_MEDIA_FORMATTING_RESPONSE,
  },
}

export let PROCESS_SUBTITLE_FORMATTING_TASK: RemoteCallDescriptor = {
  name: "ProcessSubtitleFormattingTask",
  service: VIDEO_NODE_SERVICE,
  path: "/ProcessSubtitleFormattingTask",
  body: {
    messageType: PROCESS_SUBTITLE_FORMATTING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_SUBTITLE_FORMATTING_TASK_RESPONSE,
  },
}

export let LIST_SUBTITLE_FORMATTING_TASKS: RemoteCallDescriptor = {
  name: "ListSubtitleFormattingTasks",
  service: VIDEO_NODE_SERVICE,
  path: "/ListSubtitleFormattingTasks",
  body: {
    messageType: LIST_SUBTITLE_FORMATTING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_SUBTITLE_FORMATTING_TASKS_RESPONSE,
  },
}

export let CANCEL_SUBTITLE_FORMATTING: RemoteCallDescriptor = {
  name: "CancelSubtitleFormatting",
  service: VIDEO_NODE_SERVICE,
  path: "/CancelSubtitleFormatting",
  body: {
    messageType: CANCEL_SUBTITLE_FORMATTING_REQUEST_BODY,
  },
  response: {
    messageType: CANCEL_SUBTITLE_FORMATTING_RESPONSE,
  },
}

export let PROCESS_STORAGE_START_RECORDING_TASK: RemoteCallDescriptor = {
  name: "ProcessStorageStartRecordingTask",
  service: VIDEO_NODE_SERVICE,
  path: "/ProcessStorageStartRecordingTask",
  body: {
    messageType: PROCESS_STORAGE_START_RECORDING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_STORAGE_START_RECORDING_TASK_RESPONSE,
  },
}

export let LIST_STORAGE_START_RECORDING_TASKS: RemoteCallDescriptor = {
  name: "ListStorageStartRecordingTasks",
  service: VIDEO_NODE_SERVICE,
  path: "/ListStorageStartRecordingTasks",
  body: {
    messageType: LIST_STORAGE_START_RECORDING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_STORAGE_START_RECORDING_TASKS_RESPONSE,
  },
}

export let PROCESS_STORAGE_END_RECORDING_TASK: RemoteCallDescriptor = {
  name: "ProcessStorageEndRecordingTask",
  service: VIDEO_NODE_SERVICE,
  path: "/ProcessStorageEndRecordingTask",
  body: {
    messageType: PROCESS_STORAGE_END_RECORDING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_STORAGE_END_RECORDING_TASK_RESPONSE,
  },
}

export let LIST_STORAGE_END_RECORDING_TASKS: RemoteCallDescriptor = {
  name: "ListStorageEndRecordingTasks",
  service: VIDEO_NODE_SERVICE,
  path: "/ListStorageEndRecordingTasks",
  body: {
    messageType: LIST_STORAGE_END_RECORDING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_STORAGE_END_RECORDING_TASKS_RESPONSE,
  },
}

export let PROCESS_GCS_UPLOAD_FILE_DELETING_TASK: RemoteCallDescriptor = {
  name: "ProcessGcsUploadFileDeletingTask",
  service: VIDEO_NODE_SERVICE,
  path: "/ProcessGcsUploadFileDeletingTask",
  body: {
    messageType: PROCESS_GCS_UPLOAD_FILE_DELETING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_GCS_UPLOAD_FILE_DELETING_TASK_RESPONSE,
  },
}

export let LIST_GCS_UPLOAD_FILE_DELETING_TASKS: RemoteCallDescriptor = {
  name: "ListGcsUploadFileDeletingTasks",
  service: VIDEO_NODE_SERVICE,
  path: "/ListGcsUploadFileDeletingTasks",
  body: {
    messageType: LIST_GCS_UPLOAD_FILE_DELETING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_GCS_UPLOAD_FILE_DELETING_TASKS_RESPONSE,
  },
}

export let PROCESS_GCS_KEY_DELETING_TASK: RemoteCallDescriptor = {
  name: "ProcessGcsKeyDeletingTask",
  service: VIDEO_NODE_SERVICE,
  path: "/ProcessGcsKeyDeletingTask",
  body: {
    messageType: PROCESS_GCS_KEY_DELETING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_GCS_KEY_DELETING_TASK_RESPONSE,
  },
}

export let LIST_GCS_KEY_DELETING_TASKS: RemoteCallDescriptor = {
  name: "ListGcsKeyDeletingTasks",
  service: VIDEO_NODE_SERVICE,
  path: "/ListGcsKeyDeletingTasks",
  body: {
    messageType: LIST_GCS_KEY_DELETING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_GCS_KEY_DELETING_TASKS_RESPONSE,
  },
}

export let PROCESS_R2_KEY_DELETING_TASK: RemoteCallDescriptor = {
  name: "ProcessR2KeyDeletingTask",
  service: VIDEO_NODE_SERVICE,
  path: "/ProcessR2KeyDeletingTask",
  body: {
    messageType: PROCESS_R2_KEY_DELETING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_R2_KEY_DELETING_TASK_RESPONSE,
  },
}

export let LIST_R2_KEY_DELETING_TASKS: RemoteCallDescriptor = {
  name: "ListR2KeyDeletingTasks",
  service: VIDEO_NODE_SERVICE,
  path: "/ListR2KeyDeletingTasks",
  body: {
    messageType: LIST_R2_KEY_DELETING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_R2_KEY_DELETING_TASKS_RESPONSE,
  },
}
