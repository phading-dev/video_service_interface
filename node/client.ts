import { CreateVideoContainerRequestBody, CreateVideoContainerResponse, CREATE_VIDEO_CONTAINER, DeleteVideoContainerRequestBody, DeleteVideoContainerResponse, DELETE_VIDEO_CONTAINER, GetVideoContainerRequestBody, GetVideoContainerResponse, GET_VIDEO_CONTAINER, CommitVideoContainerStagingDataRequestBody, CommitVideoContainerStagingDataResponse, COMMIT_VIDEO_CONTAINER_STAGING_DATA, ProcessVideoContainerWritingToFileTaskRequestBody, ProcessVideoContainerWritingToFileTaskResponse, PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK, ListVideoContainerWritingToFileTasksRequestBody, ListVideoContainerWritingToFileTasksResponse, LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS, ProcessVideoContainerSyncingTaskRequestBody, ProcessVideoContainerSyncingTaskResponse, PROCESS_VIDEO_CONTAINER_SYNCING_TASK, ListVideoContainerSyncingTasksRequestBody, ListVideoContainerSyncingTasksResponse, LIST_VIDEO_CONTAINER_SYNCING_TASKS, StartMediaUploadingRequestBody, StartMediaUploadingResponse, START_MEDIA_UPLOADING, CompleteMediaUploadingRequestBody, CompleteMediaUploadingResponse, COMPLETE_MEDIA_UPLOADING, CancelMediaUploadingRequestBody, CancelMediaUploadingResponse, CANCEL_MEDIA_UPLOADING, StartSubtitleUploadingRequestBody, StartSubtitleUploadingResponse, START_SUBTITLE_UPLOADING, CompleteSubtitleUploadingRequestBody, CompleteSubtitleUploadingResponse, COMPLETE_SUBTITLE_UPLOADING, CancelSubtitleUploadingRequestBody, CancelSubtitleUploadingResponse, CANCEL_SUBTITLE_UPLOADING, ProcessMediaFormattingTaskRequestBody, ProcessMediaFormattingTaskResponse, PROCESS_MEDIA_FORMATTING_TASK, ListMediaFormattingTasksRequestBody, ListMediaFormattingTasksResponse, LIST_MEDIA_FORMATTING_TASKS, CancelMediaFormattingRequestBody, CancelMediaFormattingResponse, CANCEL_MEDIA_FORMATTING, ProcessSubtitleFormattingTaskRequestBody, ProcessSubtitleFormattingTaskResponse, PROCESS_SUBTITLE_FORMATTING_TASK, ListSubtitleFormattingTasksRequestBody, ListSubtitleFormattingTasksResponse, LIST_SUBTITLE_FORMATTING_TASKS, CancelSubtitleFormattingRequestBody, CancelSubtitleFormattingResponse, CANCEL_SUBTITLE_FORMATTING, DeleteVideoTrackRequestBody, DeleteVideoTrackResponse, DELETE_VIDEO_TRACK, DropVideoTrackStagingDataRequestBody, DropVideoTrackStagingDataResponse, DROP_VIDEO_TRACK_STAGING_DATA, UpdateAudioTrackRequestBody, UpdateAudioTrackResponse, UPDATE_AUDIO_TRACK, DeleteAudioTrackRequestBody, DeleteAudioTrackResponse, DELETE_AUDIO_TRACK, DropAudioTrackStagingDataRequestBody, DropAudioTrackStagingDataResponse, DROP_AUDIO_TRACK_STAGING_DATA, UpdateSubtitleTrackRequestBody, UpdateSubtitleTrackResponse, UPDATE_SUBTITLE_TRACK, DeleteSubtitleTrackRequestBody, DeleteSubtitleTrackResponse, DELETE_SUBTITLE_TRACK, DropSubtitleTrackStagingDataRequestBody, DropSubtitleTrackStagingDataResponse, DROP_SUBTITLE_TRACK_STAGING_DATA, ProcessGcsFileDeletingTaskRequestBody, ProcessGcsFileDeletingTaskResponse, PROCESS_GCS_FILE_DELETING_TASK, ListGcsFileDeletingTasksRequestBody, ListGcsFileDeletingTasksResponse, LIST_GCS_FILE_DELETING_TASKS, ProcessR2KeyDeletingTaskRequestBody, ProcessR2KeyDeletingTaskResponse, PROCESS_R2_KEY_DELETING_TASK, ListR2KeyDeletingTasksRequestBody, ListR2KeyDeletingTasksResponse, LIST_R2_KEY_DELETING_TASKS } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function createVideoContainer(
  client: NodeClientInterface,
  body: CreateVideoContainerRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: DeleteVideoContainerRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: GetVideoContainerRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: CommitVideoContainerStagingDataRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: ProcessVideoContainerWritingToFileTaskRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: ListVideoContainerWritingToFileTasksRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: ProcessVideoContainerSyncingTaskRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: ListVideoContainerSyncingTasksRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: StartMediaUploadingRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: CompleteMediaUploadingRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: CancelMediaUploadingRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: StartSubtitleUploadingRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: CompleteSubtitleUploadingRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: CancelSubtitleUploadingRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: ProcessMediaFormattingTaskRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: ListMediaFormattingTasksRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: CancelMediaFormattingRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: ProcessSubtitleFormattingTaskRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: ListSubtitleFormattingTasksRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: CancelSubtitleFormattingRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: DeleteVideoTrackRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: DropVideoTrackStagingDataRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: UpdateAudioTrackRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: DeleteAudioTrackRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: DropAudioTrackStagingDataRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: UpdateSubtitleTrackRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: DeleteSubtitleTrackRequestBody,
  options?: NodeClientOptions,
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
  client: NodeClientInterface,
  body: DropSubtitleTrackStagingDataRequestBody,
  options?: NodeClientOptions,
): Promise<DropSubtitleTrackStagingDataResponse> {
  return client.send(
    {
      descriptor: DROP_SUBTITLE_TRACK_STAGING_DATA,
      body,
    },
    options,
  );
}

export function processGcsFileDeletingTask(
  client: NodeClientInterface,
  body: ProcessGcsFileDeletingTaskRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessGcsFileDeletingTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_GCS_FILE_DELETING_TASK,
      body,
    },
    options,
  );
}

export function listGcsFileDeletingTasks(
  client: NodeClientInterface,
  body: ListGcsFileDeletingTasksRequestBody,
  options?: NodeClientOptions,
): Promise<ListGcsFileDeletingTasksResponse> {
  return client.send(
    {
      descriptor: LIST_GCS_FILE_DELETING_TASKS,
      body,
    },
    options,
  );
}

export function processR2KeyDeletingTask(
  client: NodeClientInterface,
  body: ProcessR2KeyDeletingTaskRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessR2KeyDeletingTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_R2_KEY_DELETING_TASK,
      body,
    },
    options,
  );
}

export function listR2KeyDeletingTasks(
  client: NodeClientInterface,
  body: ListR2KeyDeletingTasksRequestBody,
  options?: NodeClientOptions,
): Promise<ListR2KeyDeletingTasksResponse> {
  return client.send(
    {
      descriptor: LIST_R2_KEY_DELETING_TASKS,
      body,
    },
    options,
  );
}
