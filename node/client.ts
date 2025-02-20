import { CreateVideoContainerRequestBody, CreateVideoContainerResponse, CREATE_VIDEO_CONTAINER, DeleteVideoContainerRequestBody, DeleteVideoContainerResponse, DELETE_VIDEO_CONTAINER, GetVideoContainerRequestBody, GetVideoContainerResponse, GET_VIDEO_CONTAINER, CommitVideoContainerStagingDataRequestBody, CommitVideoContainerStagingDataResponse, COMMIT_VIDEO_CONTAINER_STAGING_DATA, ProcessVideoContainerWritingToFileTaskRequestBody, ProcessVideoContainerWritingToFileTaskResponse, PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK, ListVideoContainerWritingToFileTasksRequestBody, ListVideoContainerWritingToFileTasksResponse, LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS, ProcessVideoContainerSyncingTaskRequestBody, ProcessVideoContainerSyncingTaskResponse, PROCESS_VIDEO_CONTAINER_SYNCING_TASK, ListVideoContainerSyncingTasksRequestBody, ListVideoContainerSyncingTasksResponse, LIST_VIDEO_CONTAINER_SYNCING_TASKS, StartMediaUploadingRequestBody, StartMediaUploadingResponse, START_MEDIA_UPLOADING, CompleteMediaUploadingRequestBody, CompleteMediaUploadingResponse, COMPLETE_MEDIA_UPLOADING, CancelMediaUploadingRequestBody, CancelMediaUploadingResponse, CANCEL_MEDIA_UPLOADING, StartSubtitleUploadingRequestBody, StartSubtitleUploadingResponse, START_SUBTITLE_UPLOADING, CompleteSubtitleUploadingRequestBody, CompleteSubtitleUploadingResponse, COMPLETE_SUBTITLE_UPLOADING, CancelSubtitleUploadingRequestBody, CancelSubtitleUploadingResponse, CANCEL_SUBTITLE_UPLOADING, ProcessUploadedRecordingTaskRequestBody, ProcessUploadedRecordingTaskResponse, PROCESS_UPLOADED_RECORDING_TASK, ListUploadedRecordingTasksRequestBody, ListUploadedRecordingTasksResponse, LIST_UPLOADED_RECORDING_TASKS, ProcessMediaFormattingTaskRequestBody, ProcessMediaFormattingTaskResponse, PROCESS_MEDIA_FORMATTING_TASK, ListMediaFormattingTasksRequestBody, ListMediaFormattingTasksResponse, LIST_MEDIA_FORMATTING_TASKS, CancelMediaFormattingRequestBody, CancelMediaFormattingResponse, CANCEL_MEDIA_FORMATTING, ProcessSubtitleFormattingTaskRequestBody, ProcessSubtitleFormattingTaskResponse, PROCESS_SUBTITLE_FORMATTING_TASK, ListSubtitleFormattingTasksRequestBody, ListSubtitleFormattingTasksResponse, LIST_SUBTITLE_FORMATTING_TASKS, CancelSubtitleFormattingRequestBody, CancelSubtitleFormattingResponse, CANCEL_SUBTITLE_FORMATTING, ProcessStorageStartRecordingTaskRequestBody, ProcessStorageStartRecordingTaskResponse, PROCESS_STORAGE_START_RECORDING_TASK, ListStorageStartRecordingTasksRequestBody, ListStorageStartRecordingTasksResponse, LIST_STORAGE_START_RECORDING_TASKS, DeleteVideoTrackRequestBody, DeleteVideoTrackResponse, DELETE_VIDEO_TRACK, DropVideoTrackStagingDataRequestBody, DropVideoTrackStagingDataResponse, DROP_VIDEO_TRACK_STAGING_DATA, UpdateAudioTrackRequestBody, UpdateAudioTrackResponse, UPDATE_AUDIO_TRACK, DeleteAudioTrackRequestBody, DeleteAudioTrackResponse, DELETE_AUDIO_TRACK, DropAudioTrackStagingDataRequestBody, DropAudioTrackStagingDataResponse, DROP_AUDIO_TRACK_STAGING_DATA, UpdateSubtitleTrackRequestBody, UpdateSubtitleTrackResponse, UPDATE_SUBTITLE_TRACK, DeleteSubtitleTrackRequestBody, DeleteSubtitleTrackResponse, DELETE_SUBTITLE_TRACK, DropSubtitleTrackStagingDataRequestBody, DropSubtitleTrackStagingDataResponse, DROP_SUBTITLE_TRACK_STAGING_DATA, ProcessStorageEndRecordingTaskRequestBody, ProcessStorageEndRecordingTaskResponse, PROCESS_STORAGE_END_RECORDING_TASK, ListStorageEndRecordingTasksRequestBody, ListStorageEndRecordingTasksResponse, LIST_STORAGE_END_RECORDING_TASKS, ProcessGcsFileDeletingTaskRequestBody, ProcessGcsFileDeletingTaskResponse, PROCESS_GCS_FILE_DELETING_TASK, ListGcsFileDeletingTasksRequestBody, ListGcsFileDeletingTasksResponse, LIST_GCS_FILE_DELETING_TASKS, ProcessR2KeyDeletingTaskRequestBody, ProcessR2KeyDeletingTaskResponse, PROCESS_R2_KEY_DELETING_TASK, ListR2KeyDeletingTasksRequestBody, ListR2KeyDeletingTasksResponse, LIST_R2_KEY_DELETING_TASKS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newCreateVideoContainerRequest(
  body: CreateVideoContainerRequestBody,
): ClientRequestInterface<CreateVideoContainerResponse> {
  return {
    descriptor: CREATE_VIDEO_CONTAINER,
    body,
  };
}

export function newDeleteVideoContainerRequest(
  body: DeleteVideoContainerRequestBody,
): ClientRequestInterface<DeleteVideoContainerResponse> {
  return {
    descriptor: DELETE_VIDEO_CONTAINER,
    body,
  };
}

export function newGetVideoContainerRequest(
  body: GetVideoContainerRequestBody,
): ClientRequestInterface<GetVideoContainerResponse> {
  return {
    descriptor: GET_VIDEO_CONTAINER,
    body,
  };
}

export function newCommitVideoContainerStagingDataRequest(
  body: CommitVideoContainerStagingDataRequestBody,
): ClientRequestInterface<CommitVideoContainerStagingDataResponse> {
  return {
    descriptor: COMMIT_VIDEO_CONTAINER_STAGING_DATA,
    body,
  };
}

export function newProcessVideoContainerWritingToFileTaskRequest(
  body: ProcessVideoContainerWritingToFileTaskRequestBody,
): ClientRequestInterface<ProcessVideoContainerWritingToFileTaskResponse> {
  return {
    descriptor: PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK,
    body,
  };
}

export function newListVideoContainerWritingToFileTasksRequest(
  body: ListVideoContainerWritingToFileTasksRequestBody,
): ClientRequestInterface<ListVideoContainerWritingToFileTasksResponse> {
  return {
    descriptor: LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS,
    body,
  };
}

export function newProcessVideoContainerSyncingTaskRequest(
  body: ProcessVideoContainerSyncingTaskRequestBody,
): ClientRequestInterface<ProcessVideoContainerSyncingTaskResponse> {
  return {
    descriptor: PROCESS_VIDEO_CONTAINER_SYNCING_TASK,
    body,
  };
}

export function newListVideoContainerSyncingTasksRequest(
  body: ListVideoContainerSyncingTasksRequestBody,
): ClientRequestInterface<ListVideoContainerSyncingTasksResponse> {
  return {
    descriptor: LIST_VIDEO_CONTAINER_SYNCING_TASKS,
    body,
  };
}

export function newStartMediaUploadingRequest(
  body: StartMediaUploadingRequestBody,
): ClientRequestInterface<StartMediaUploadingResponse> {
  return {
    descriptor: START_MEDIA_UPLOADING,
    body,
  };
}

export function newCompleteMediaUploadingRequest(
  body: CompleteMediaUploadingRequestBody,
): ClientRequestInterface<CompleteMediaUploadingResponse> {
  return {
    descriptor: COMPLETE_MEDIA_UPLOADING,
    body,
  };
}

export function newCancelMediaUploadingRequest(
  body: CancelMediaUploadingRequestBody,
): ClientRequestInterface<CancelMediaUploadingResponse> {
  return {
    descriptor: CANCEL_MEDIA_UPLOADING,
    body,
  };
}

export function newStartSubtitleUploadingRequest(
  body: StartSubtitleUploadingRequestBody,
): ClientRequestInterface<StartSubtitleUploadingResponse> {
  return {
    descriptor: START_SUBTITLE_UPLOADING,
    body,
  };
}

export function newCompleteSubtitleUploadingRequest(
  body: CompleteSubtitleUploadingRequestBody,
): ClientRequestInterface<CompleteSubtitleUploadingResponse> {
  return {
    descriptor: COMPLETE_SUBTITLE_UPLOADING,
    body,
  };
}

export function newCancelSubtitleUploadingRequest(
  body: CancelSubtitleUploadingRequestBody,
): ClientRequestInterface<CancelSubtitleUploadingResponse> {
  return {
    descriptor: CANCEL_SUBTITLE_UPLOADING,
    body,
  };
}

export function newProcessUploadedRecordingTaskRequest(
  body: ProcessUploadedRecordingTaskRequestBody,
): ClientRequestInterface<ProcessUploadedRecordingTaskResponse> {
  return {
    descriptor: PROCESS_UPLOADED_RECORDING_TASK,
    body,
  };
}

export function newListUploadedRecordingTasksRequest(
  body: ListUploadedRecordingTasksRequestBody,
): ClientRequestInterface<ListUploadedRecordingTasksResponse> {
  return {
    descriptor: LIST_UPLOADED_RECORDING_TASKS,
    body,
  };
}

export function newProcessMediaFormattingTaskRequest(
  body: ProcessMediaFormattingTaskRequestBody,
): ClientRequestInterface<ProcessMediaFormattingTaskResponse> {
  return {
    descriptor: PROCESS_MEDIA_FORMATTING_TASK,
    body,
  };
}

export function newListMediaFormattingTasksRequest(
  body: ListMediaFormattingTasksRequestBody,
): ClientRequestInterface<ListMediaFormattingTasksResponse> {
  return {
    descriptor: LIST_MEDIA_FORMATTING_TASKS,
    body,
  };
}

export function newCancelMediaFormattingRequest(
  body: CancelMediaFormattingRequestBody,
): ClientRequestInterface<CancelMediaFormattingResponse> {
  return {
    descriptor: CANCEL_MEDIA_FORMATTING,
    body,
  };
}

export function newProcessSubtitleFormattingTaskRequest(
  body: ProcessSubtitleFormattingTaskRequestBody,
): ClientRequestInterface<ProcessSubtitleFormattingTaskResponse> {
  return {
    descriptor: PROCESS_SUBTITLE_FORMATTING_TASK,
    body,
  };
}

export function newListSubtitleFormattingTasksRequest(
  body: ListSubtitleFormattingTasksRequestBody,
): ClientRequestInterface<ListSubtitleFormattingTasksResponse> {
  return {
    descriptor: LIST_SUBTITLE_FORMATTING_TASKS,
    body,
  };
}

export function newCancelSubtitleFormattingRequest(
  body: CancelSubtitleFormattingRequestBody,
): ClientRequestInterface<CancelSubtitleFormattingResponse> {
  return {
    descriptor: CANCEL_SUBTITLE_FORMATTING,
    body,
  };
}

export function newProcessStorageStartRecordingTaskRequest(
  body: ProcessStorageStartRecordingTaskRequestBody,
): ClientRequestInterface<ProcessStorageStartRecordingTaskResponse> {
  return {
    descriptor: PROCESS_STORAGE_START_RECORDING_TASK,
    body,
  };
}

export function newListStorageStartRecordingTasksRequest(
  body: ListStorageStartRecordingTasksRequestBody,
): ClientRequestInterface<ListStorageStartRecordingTasksResponse> {
  return {
    descriptor: LIST_STORAGE_START_RECORDING_TASKS,
    body,
  };
}

export function newDeleteVideoTrackRequest(
  body: DeleteVideoTrackRequestBody,
): ClientRequestInterface<DeleteVideoTrackResponse> {
  return {
    descriptor: DELETE_VIDEO_TRACK,
    body,
  };
}

export function newDropVideoTrackStagingDataRequest(
  body: DropVideoTrackStagingDataRequestBody,
): ClientRequestInterface<DropVideoTrackStagingDataResponse> {
  return {
    descriptor: DROP_VIDEO_TRACK_STAGING_DATA,
    body,
  };
}

export function newUpdateAudioTrackRequest(
  body: UpdateAudioTrackRequestBody,
): ClientRequestInterface<UpdateAudioTrackResponse> {
  return {
    descriptor: UPDATE_AUDIO_TRACK,
    body,
  };
}

export function newDeleteAudioTrackRequest(
  body: DeleteAudioTrackRequestBody,
): ClientRequestInterface<DeleteAudioTrackResponse> {
  return {
    descriptor: DELETE_AUDIO_TRACK,
    body,
  };
}

export function newDropAudioTrackStagingDataRequest(
  body: DropAudioTrackStagingDataRequestBody,
): ClientRequestInterface<DropAudioTrackStagingDataResponse> {
  return {
    descriptor: DROP_AUDIO_TRACK_STAGING_DATA,
    body,
  };
}

export function newUpdateSubtitleTrackRequest(
  body: UpdateSubtitleTrackRequestBody,
): ClientRequestInterface<UpdateSubtitleTrackResponse> {
  return {
    descriptor: UPDATE_SUBTITLE_TRACK,
    body,
  };
}

export function newDeleteSubtitleTrackRequest(
  body: DeleteSubtitleTrackRequestBody,
): ClientRequestInterface<DeleteSubtitleTrackResponse> {
  return {
    descriptor: DELETE_SUBTITLE_TRACK,
    body,
  };
}

export function newDropSubtitleTrackStagingDataRequest(
  body: DropSubtitleTrackStagingDataRequestBody,
): ClientRequestInterface<DropSubtitleTrackStagingDataResponse> {
  return {
    descriptor: DROP_SUBTITLE_TRACK_STAGING_DATA,
    body,
  };
}

export function newProcessStorageEndRecordingTaskRequest(
  body: ProcessStorageEndRecordingTaskRequestBody,
): ClientRequestInterface<ProcessStorageEndRecordingTaskResponse> {
  return {
    descriptor: PROCESS_STORAGE_END_RECORDING_TASK,
    body,
  };
}

export function newListStorageEndRecordingTasksRequest(
  body: ListStorageEndRecordingTasksRequestBody,
): ClientRequestInterface<ListStorageEndRecordingTasksResponse> {
  return {
    descriptor: LIST_STORAGE_END_RECORDING_TASKS,
    body,
  };
}

export function newProcessGcsFileDeletingTaskRequest(
  body: ProcessGcsFileDeletingTaskRequestBody,
): ClientRequestInterface<ProcessGcsFileDeletingTaskResponse> {
  return {
    descriptor: PROCESS_GCS_FILE_DELETING_TASK,
    body,
  };
}

export function newListGcsFileDeletingTasksRequest(
  body: ListGcsFileDeletingTasksRequestBody,
): ClientRequestInterface<ListGcsFileDeletingTasksResponse> {
  return {
    descriptor: LIST_GCS_FILE_DELETING_TASKS,
    body,
  };
}

export function newProcessR2KeyDeletingTaskRequest(
  body: ProcessR2KeyDeletingTaskRequestBody,
): ClientRequestInterface<ProcessR2KeyDeletingTaskResponse> {
  return {
    descriptor: PROCESS_R2_KEY_DELETING_TASK,
    body,
  };
}

export function newListR2KeyDeletingTasksRequest(
  body: ListR2KeyDeletingTasksRequestBody,
): ClientRequestInterface<ListR2KeyDeletingTasksResponse> {
  return {
    descriptor: LIST_R2_KEY_DELETING_TASKS,
    body,
  };
}
