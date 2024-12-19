import { CreateVideoContainerRequestBody, CreateVideoContainerResponse, CREATE_VIDEO_CONTAINER, DeleteVideoContainerRequestBody, DeleteVideoContainerResponse, DELETE_VIDEO_CONTAINER, GetVideoContainerRequestBody, GetVideoContainerResponse, GET_VIDEO_CONTAINER, CommitVideoContainerStagingDataRequestBody, CommitVideoContainerStagingDataResponse, COMMIT_VIDEO_CONTAINER_STAGING_DATA, ProcessVideoContainerWritingToFileTaskRequestBody, ProcessVideoContainerWritingToFileTaskResponse, PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK, ListVideoContainerWritingToFileTasksRequestBody, ListVideoContainerWritingToFileTasksResponse, LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS, ProcessVideoContainerSyncingTaskRequestBody, ProcessVideoContainerSyncingTaskResponse, PROCESS_VIDEO_CONTAINER_SYNCING_TASK, ListVideoContainerSyncingTasksRequestBody, ListVideoContainerSyncingTasksResponse, LIST_VIDEO_CONTAINER_SYNCING_TASKS, StartMediaUploadingRequestBody, StartMediaUploadingResponse, START_MEDIA_UPLOADING, CompleteMediaUploadingRequestBody, CompleteMediaUploadingResponse, COMPLETE_MEDIA_UPLOADING, CancelMediaUploadingRequestBody, CancelMediaUploadingResponse, CANCEL_MEDIA_UPLOADING, StartSubtitleUploadingRequestBody, StartSubtitleUploadingResponse, START_SUBTITLE_UPLOADING, CompleteSubtitleUploadingRequestBody, CompleteSubtitleUploadingResponse, COMPLETE_SUBTITLE_UPLOADING, CancelSubtitleUploadingRequestBody, CancelSubtitleUploadingResponse, CANCEL_SUBTITLE_UPLOADING, ProcessMediaFormattingTaskRequestBody, ProcessMediaFormattingTaskResponse, PROCESS_MEDIA_FORMATTING_TASK, ListMediaFormattingTasksRequestBody, ListMediaFormattingTasksResponse, LIST_MEDIA_FORMATTING_TASKS, CancelMediaFormattingRequestBody, CancelMediaFormattingResponse, CANCEL_MEDIA_FORMATTING, ProcessSubtitleFormattingTaskRequestBody, ProcessSubtitleFormattingTaskResponse, PROCESS_SUBTITLE_FORMATTING_TASK, ListSubtitleFormattingTasksRequestBody, ListSubtitleFormattingTasksResponse, LIST_SUBTITLE_FORMATTING_TASKS, CancelSubtitleFormattingRequestBody, CancelSubtitleFormattingResponse, CANCEL_SUBTITLE_FORMATTING, DeleteVideoTrackRequestBody, DeleteVideoTrackResponse, DELETE_VIDEO_TRACK, DropVideoTrackStagingDataRequestBody, DropVideoTrackStagingDataResponse, DROP_VIDEO_TRACK_STAGING_DATA, UpdateAudioTrackRequestBody, UpdateAudioTrackResponse, UPDATE_AUDIO_TRACK, DeleteAudioTrackRequestBody, DeleteAudioTrackResponse, DELETE_AUDIO_TRACK, DropAudioTrackStagingDataRequestBody, DropAudioTrackStagingDataResponse, DROP_AUDIO_TRACK_STAGING_DATA, UpdateSubtitleTrackRequestBody, UpdateSubtitleTrackResponse, UPDATE_SUBTITLE_TRACK, DeleteSubtitleTrackRequestBody, DeleteSubtitleTrackResponse, DELETE_SUBTITLE_TRACK, DropSubtitleTrackStagingDataRequestBody, DropSubtitleTrackStagingDataResponse, DROP_SUBTITLE_TRACK_STAGING_DATA, ProcessGcsFileDeleteTaskRequestBody, ProcessGcsFileDeleteTaskResponse, PROCESS_GCS_FILE_DELETE_TASK, ListGcsFileDeleteTasksRequestBody, ListGcsFileDeleteTasksResponse, LIST_GCS_FILE_DELETE_TASKS, ProcessR2KeyDeleteTaskRequestBody, ProcessR2KeyDeleteTaskResponse, PROCESS_R2_KEY_DELETE_TASK, ListR2KeyDeleteTasksRequestBody, ListR2KeyDeleteTasksResponse, LIST_R2_KEY_DELETE_TASKS } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function createVideoContainer(
  client: WebClientInterface,
  body: CreateVideoContainerRequestBody,
  options?: WebClientOptions,
): Promise<CreateVideoContainerResponse> {
  return client.send(
    {
      descriptor: CREATE_VIDEO_CONTAINER,
      body,
    },
    options,
  );
}

export function deleteVideoContainer(
  client: WebClientInterface,
  body: DeleteVideoContainerRequestBody,
  options?: WebClientOptions,
): Promise<DeleteVideoContainerResponse> {
  return client.send(
    {
      descriptor: DELETE_VIDEO_CONTAINER,
      body,
    },
    options,
  );
}

export function getVideoContainer(
  client: WebClientInterface,
  body: GetVideoContainerRequestBody,
  options?: WebClientOptions,
): Promise<GetVideoContainerResponse> {
  return client.send(
    {
      descriptor: GET_VIDEO_CONTAINER,
      body,
    },
    options,
  );
}

export function commitVideoContainerStagingData(
  client: WebClientInterface,
  body: CommitVideoContainerStagingDataRequestBody,
  options?: WebClientOptions,
): Promise<CommitVideoContainerStagingDataResponse> {
  return client.send(
    {
      descriptor: COMMIT_VIDEO_CONTAINER_STAGING_DATA,
      body,
    },
    options,
  );
}

export function processVideoContainerWritingToFileTask(
  client: WebClientInterface,
  body: ProcessVideoContainerWritingToFileTaskRequestBody,
  options?: WebClientOptions,
): Promise<ProcessVideoContainerWritingToFileTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK,
      body,
    },
    options,
  );
}

export function listVideoContainerWritingToFileTasks(
  client: WebClientInterface,
  body: ListVideoContainerWritingToFileTasksRequestBody,
  options?: WebClientOptions,
): Promise<ListVideoContainerWritingToFileTasksResponse> {
  return client.send(
    {
      descriptor: LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS,
      body,
    },
    options,
  );
}

export function processVideoContainerSyncingTask(
  client: WebClientInterface,
  body: ProcessVideoContainerSyncingTaskRequestBody,
  options?: WebClientOptions,
): Promise<ProcessVideoContainerSyncingTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_VIDEO_CONTAINER_SYNCING_TASK,
      body,
    },
    options,
  );
}

export function listVideoContainerSyncingTasks(
  client: WebClientInterface,
  body: ListVideoContainerSyncingTasksRequestBody,
  options?: WebClientOptions,
): Promise<ListVideoContainerSyncingTasksResponse> {
  return client.send(
    {
      descriptor: LIST_VIDEO_CONTAINER_SYNCING_TASKS,
      body,
    },
    options,
  );
}

export function startMediaUploading(
  client: WebClientInterface,
  body: StartMediaUploadingRequestBody,
  options?: WebClientOptions,
): Promise<StartMediaUploadingResponse> {
  return client.send(
    {
      descriptor: START_MEDIA_UPLOADING,
      body,
    },
    options,
  );
}

export function completeMediaUploading(
  client: WebClientInterface,
  body: CompleteMediaUploadingRequestBody,
  options?: WebClientOptions,
): Promise<CompleteMediaUploadingResponse> {
  return client.send(
    {
      descriptor: COMPLETE_MEDIA_UPLOADING,
      body,
    },
    options,
  );
}

export function cancelMediaUploading(
  client: WebClientInterface,
  body: CancelMediaUploadingRequestBody,
  options?: WebClientOptions,
): Promise<CancelMediaUploadingResponse> {
  return client.send(
    {
      descriptor: CANCEL_MEDIA_UPLOADING,
      body,
    },
    options,
  );
}

export function startSubtitleUploading(
  client: WebClientInterface,
  body: StartSubtitleUploadingRequestBody,
  options?: WebClientOptions,
): Promise<StartSubtitleUploadingResponse> {
  return client.send(
    {
      descriptor: START_SUBTITLE_UPLOADING,
      body,
    },
    options,
  );
}

export function completeSubtitleUploading(
  client: WebClientInterface,
  body: CompleteSubtitleUploadingRequestBody,
  options?: WebClientOptions,
): Promise<CompleteSubtitleUploadingResponse> {
  return client.send(
    {
      descriptor: COMPLETE_SUBTITLE_UPLOADING,
      body,
    },
    options,
  );
}

export function cancelSubtitleUploading(
  client: WebClientInterface,
  body: CancelSubtitleUploadingRequestBody,
  options?: WebClientOptions,
): Promise<CancelSubtitleUploadingResponse> {
  return client.send(
    {
      descriptor: CANCEL_SUBTITLE_UPLOADING,
      body,
    },
    options,
  );
}

export function processMediaFormattingTask(
  client: WebClientInterface,
  body: ProcessMediaFormattingTaskRequestBody,
  options?: WebClientOptions,
): Promise<ProcessMediaFormattingTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_MEDIA_FORMATTING_TASK,
      body,
    },
    options,
  );
}

export function listMediaFormattingTasks(
  client: WebClientInterface,
  body: ListMediaFormattingTasksRequestBody,
  options?: WebClientOptions,
): Promise<ListMediaFormattingTasksResponse> {
  return client.send(
    {
      descriptor: LIST_MEDIA_FORMATTING_TASKS,
      body,
    },
    options,
  );
}

export function cancelMediaFormatting(
  client: WebClientInterface,
  body: CancelMediaFormattingRequestBody,
  options?: WebClientOptions,
): Promise<CancelMediaFormattingResponse> {
  return client.send(
    {
      descriptor: CANCEL_MEDIA_FORMATTING,
      body,
    },
    options,
  );
}

export function processSubtitleFormattingTask(
  client: WebClientInterface,
  body: ProcessSubtitleFormattingTaskRequestBody,
  options?: WebClientOptions,
): Promise<ProcessSubtitleFormattingTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_SUBTITLE_FORMATTING_TASK,
      body,
    },
    options,
  );
}

export function listSubtitleFormattingTasks(
  client: WebClientInterface,
  body: ListSubtitleFormattingTasksRequestBody,
  options?: WebClientOptions,
): Promise<ListSubtitleFormattingTasksResponse> {
  return client.send(
    {
      descriptor: LIST_SUBTITLE_FORMATTING_TASKS,
      body,
    },
    options,
  );
}

export function cancelSubtitleFormatting(
  client: WebClientInterface,
  body: CancelSubtitleFormattingRequestBody,
  options?: WebClientOptions,
): Promise<CancelSubtitleFormattingResponse> {
  return client.send(
    {
      descriptor: CANCEL_SUBTITLE_FORMATTING,
      body,
    },
    options,
  );
}

export function deleteVideoTrack(
  client: WebClientInterface,
  body: DeleteVideoTrackRequestBody,
  options?: WebClientOptions,
): Promise<DeleteVideoTrackResponse> {
  return client.send(
    {
      descriptor: DELETE_VIDEO_TRACK,
      body,
    },
    options,
  );
}

export function dropVideoTrackStagingData(
  client: WebClientInterface,
  body: DropVideoTrackStagingDataRequestBody,
  options?: WebClientOptions,
): Promise<DropVideoTrackStagingDataResponse> {
  return client.send(
    {
      descriptor: DROP_VIDEO_TRACK_STAGING_DATA,
      body,
    },
    options,
  );
}

export function updateAudioTrack(
  client: WebClientInterface,
  body: UpdateAudioTrackRequestBody,
  options?: WebClientOptions,
): Promise<UpdateAudioTrackResponse> {
  return client.send(
    {
      descriptor: UPDATE_AUDIO_TRACK,
      body,
    },
    options,
  );
}

export function deleteAudioTrack(
  client: WebClientInterface,
  body: DeleteAudioTrackRequestBody,
  options?: WebClientOptions,
): Promise<DeleteAudioTrackResponse> {
  return client.send(
    {
      descriptor: DELETE_AUDIO_TRACK,
      body,
    },
    options,
  );
}

export function dropAudioTrackStagingData(
  client: WebClientInterface,
  body: DropAudioTrackStagingDataRequestBody,
  options?: WebClientOptions,
): Promise<DropAudioTrackStagingDataResponse> {
  return client.send(
    {
      descriptor: DROP_AUDIO_TRACK_STAGING_DATA,
      body,
    },
    options,
  );
}

export function updateSubtitleTrack(
  client: WebClientInterface,
  body: UpdateSubtitleTrackRequestBody,
  options?: WebClientOptions,
): Promise<UpdateSubtitleTrackResponse> {
  return client.send(
    {
      descriptor: UPDATE_SUBTITLE_TRACK,
      body,
    },
    options,
  );
}

export function deleteSubtitleTrack(
  client: WebClientInterface,
  body: DeleteSubtitleTrackRequestBody,
  options?: WebClientOptions,
): Promise<DeleteSubtitleTrackResponse> {
  return client.send(
    {
      descriptor: DELETE_SUBTITLE_TRACK,
      body,
    },
    options,
  );
}

export function dropSubtitleTrackStagingData(
  client: WebClientInterface,
  body: DropSubtitleTrackStagingDataRequestBody,
  options?: WebClientOptions,
): Promise<DropSubtitleTrackStagingDataResponse> {
  return client.send(
    {
      descriptor: DROP_SUBTITLE_TRACK_STAGING_DATA,
      body,
    },
    options,
  );
}

export function processGcsFileDeleteTask(
  client: WebClientInterface,
  body: ProcessGcsFileDeleteTaskRequestBody,
  options?: WebClientOptions,
): Promise<ProcessGcsFileDeleteTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_GCS_FILE_DELETE_TASK,
      body,
    },
    options,
  );
}

export function listGcsFileDeleteTasks(
  client: WebClientInterface,
  body: ListGcsFileDeleteTasksRequestBody,
  options?: WebClientOptions,
): Promise<ListGcsFileDeleteTasksResponse> {
  return client.send(
    {
      descriptor: LIST_GCS_FILE_DELETE_TASKS,
      body,
    },
    options,
  );
}

export function processR2KeyDeleteTask(
  client: WebClientInterface,
  body: ProcessR2KeyDeleteTaskRequestBody,
  options?: WebClientOptions,
): Promise<ProcessR2KeyDeleteTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_R2_KEY_DELETE_TASK,
      body,
    },
    options,
  );
}

export function listR2KeyDeleteTasks(
  client: WebClientInterface,
  body: ListR2KeyDeleteTasksRequestBody,
  options?: WebClientOptions,
): Promise<ListR2KeyDeleteTasksResponse> {
  return client.send(
    {
      descriptor: LIST_R2_KEY_DELETE_TASKS,
      body,
    },
    options,
  );
}
