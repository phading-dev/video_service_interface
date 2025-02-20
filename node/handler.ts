import { CreateVideoContainerRequestBody, CREATE_VIDEO_CONTAINER, CreateVideoContainerResponse, DeleteVideoContainerRequestBody, DELETE_VIDEO_CONTAINER, DeleteVideoContainerResponse, GetVideoContainerRequestBody, GET_VIDEO_CONTAINER, GetVideoContainerResponse, CommitVideoContainerStagingDataRequestBody, COMMIT_VIDEO_CONTAINER_STAGING_DATA, CommitVideoContainerStagingDataResponse, ProcessVideoContainerWritingToFileTaskRequestBody, PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK, ProcessVideoContainerWritingToFileTaskResponse, ListVideoContainerWritingToFileTasksRequestBody, LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS, ListVideoContainerWritingToFileTasksResponse, ProcessVideoContainerSyncingTaskRequestBody, PROCESS_VIDEO_CONTAINER_SYNCING_TASK, ProcessVideoContainerSyncingTaskResponse, ListVideoContainerSyncingTasksRequestBody, LIST_VIDEO_CONTAINER_SYNCING_TASKS, ListVideoContainerSyncingTasksResponse, StartMediaUploadingRequestBody, START_MEDIA_UPLOADING, StartMediaUploadingResponse, CompleteMediaUploadingRequestBody, COMPLETE_MEDIA_UPLOADING, CompleteMediaUploadingResponse, CancelMediaUploadingRequestBody, CANCEL_MEDIA_UPLOADING, CancelMediaUploadingResponse, StartSubtitleUploadingRequestBody, START_SUBTITLE_UPLOADING, StartSubtitleUploadingResponse, CompleteSubtitleUploadingRequestBody, COMPLETE_SUBTITLE_UPLOADING, CompleteSubtitleUploadingResponse, CancelSubtitleUploadingRequestBody, CANCEL_SUBTITLE_UPLOADING, CancelSubtitleUploadingResponse, ProcessUploadedRecordingTaskRequestBody, PROCESS_UPLOADED_RECORDING_TASK, ProcessUploadedRecordingTaskResponse, ListUploadedRecordingTasksRequestBody, LIST_UPLOADED_RECORDING_TASKS, ListUploadedRecordingTasksResponse, ProcessMediaFormattingTaskRequestBody, PROCESS_MEDIA_FORMATTING_TASK, ProcessMediaFormattingTaskResponse, ListMediaFormattingTasksRequestBody, LIST_MEDIA_FORMATTING_TASKS, ListMediaFormattingTasksResponse, CancelMediaFormattingRequestBody, CANCEL_MEDIA_FORMATTING, CancelMediaFormattingResponse, ProcessSubtitleFormattingTaskRequestBody, PROCESS_SUBTITLE_FORMATTING_TASK, ProcessSubtitleFormattingTaskResponse, ListSubtitleFormattingTasksRequestBody, LIST_SUBTITLE_FORMATTING_TASKS, ListSubtitleFormattingTasksResponse, CancelSubtitleFormattingRequestBody, CANCEL_SUBTITLE_FORMATTING, CancelSubtitleFormattingResponse, ProcessStorageStartRecordingTaskRequestBody, PROCESS_STORAGE_START_RECORDING_TASK, ProcessStorageStartRecordingTaskResponse, ListStorageStartRecordingTasksRequestBody, LIST_STORAGE_START_RECORDING_TASKS, ListStorageStartRecordingTasksResponse, DeleteVideoTrackRequestBody, DELETE_VIDEO_TRACK, DeleteVideoTrackResponse, DropVideoTrackStagingDataRequestBody, DROP_VIDEO_TRACK_STAGING_DATA, DropVideoTrackStagingDataResponse, UpdateAudioTrackRequestBody, UPDATE_AUDIO_TRACK, UpdateAudioTrackResponse, DeleteAudioTrackRequestBody, DELETE_AUDIO_TRACK, DeleteAudioTrackResponse, DropAudioTrackStagingDataRequestBody, DROP_AUDIO_TRACK_STAGING_DATA, DropAudioTrackStagingDataResponse, UpdateSubtitleTrackRequestBody, UPDATE_SUBTITLE_TRACK, UpdateSubtitleTrackResponse, DeleteSubtitleTrackRequestBody, DELETE_SUBTITLE_TRACK, DeleteSubtitleTrackResponse, DropSubtitleTrackStagingDataRequestBody, DROP_SUBTITLE_TRACK_STAGING_DATA, DropSubtitleTrackStagingDataResponse, ProcessStorageEndRecordingTaskRequestBody, PROCESS_STORAGE_END_RECORDING_TASK, ProcessStorageEndRecordingTaskResponse, ListStorageEndRecordingTasksRequestBody, LIST_STORAGE_END_RECORDING_TASKS, ListStorageEndRecordingTasksResponse, ProcessGcsFileDeletingTaskRequestBody, PROCESS_GCS_FILE_DELETING_TASK, ProcessGcsFileDeletingTaskResponse, ListGcsFileDeletingTasksRequestBody, LIST_GCS_FILE_DELETING_TASKS, ListGcsFileDeletingTasksResponse, ProcessR2KeyDeletingTaskRequestBody, PROCESS_R2_KEY_DELETING_TASK, ProcessR2KeyDeletingTaskResponse, ListR2KeyDeletingTasksRequestBody, LIST_R2_KEY_DELETING_TASKS, ListR2KeyDeletingTasksResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class CreateVideoContainerHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CREATE_VIDEO_CONTAINER;
  public abstract handle(
    loggingPrefix: string,
    body: CreateVideoContainerRequestBody,
  ): Promise<CreateVideoContainerResponse>;
}

export abstract class DeleteVideoContainerHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DELETE_VIDEO_CONTAINER;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteVideoContainerRequestBody,
  ): Promise<DeleteVideoContainerResponse>;
}

export abstract class GetVideoContainerHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_VIDEO_CONTAINER;
  public abstract handle(
    loggingPrefix: string,
    body: GetVideoContainerRequestBody,
  ): Promise<GetVideoContainerResponse>;
}

export abstract class CommitVideoContainerStagingDataHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = COMMIT_VIDEO_CONTAINER_STAGING_DATA;
  public abstract handle(
    loggingPrefix: string,
    body: CommitVideoContainerStagingDataRequestBody,
  ): Promise<CommitVideoContainerStagingDataResponse>;
}

export abstract class ProcessVideoContainerWritingToFileTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_VIDEO_CONTAINER_WRITING_TO_FILE_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessVideoContainerWritingToFileTaskRequestBody,
  ): Promise<ProcessVideoContainerWritingToFileTaskResponse>;
}

export abstract class ListVideoContainerWritingToFileTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_VIDEO_CONTAINER_WRITING_TO_FILE_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListVideoContainerWritingToFileTasksRequestBody,
  ): Promise<ListVideoContainerWritingToFileTasksResponse>;
}

export abstract class ProcessVideoContainerSyncingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_VIDEO_CONTAINER_SYNCING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessVideoContainerSyncingTaskRequestBody,
  ): Promise<ProcessVideoContainerSyncingTaskResponse>;
}

export abstract class ListVideoContainerSyncingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_VIDEO_CONTAINER_SYNCING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListVideoContainerSyncingTasksRequestBody,
  ): Promise<ListVideoContainerSyncingTasksResponse>;
}

export abstract class StartMediaUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = START_MEDIA_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: StartMediaUploadingRequestBody,
  ): Promise<StartMediaUploadingResponse>;
}

export abstract class CompleteMediaUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = COMPLETE_MEDIA_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: CompleteMediaUploadingRequestBody,
  ): Promise<CompleteMediaUploadingResponse>;
}

export abstract class CancelMediaUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CANCEL_MEDIA_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: CancelMediaUploadingRequestBody,
  ): Promise<CancelMediaUploadingResponse>;
}

export abstract class StartSubtitleUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = START_SUBTITLE_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: StartSubtitleUploadingRequestBody,
  ): Promise<StartSubtitleUploadingResponse>;
}

export abstract class CompleteSubtitleUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = COMPLETE_SUBTITLE_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: CompleteSubtitleUploadingRequestBody,
  ): Promise<CompleteSubtitleUploadingResponse>;
}

export abstract class CancelSubtitleUploadingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CANCEL_SUBTITLE_UPLOADING;
  public abstract handle(
    loggingPrefix: string,
    body: CancelSubtitleUploadingRequestBody,
  ): Promise<CancelSubtitleUploadingResponse>;
}

export abstract class ProcessUploadedRecordingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_UPLOADED_RECORDING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessUploadedRecordingTaskRequestBody,
  ): Promise<ProcessUploadedRecordingTaskResponse>;
}

export abstract class ListUploadedRecordingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_UPLOADED_RECORDING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListUploadedRecordingTasksRequestBody,
  ): Promise<ListUploadedRecordingTasksResponse>;
}

export abstract class ProcessMediaFormattingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_MEDIA_FORMATTING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessMediaFormattingTaskRequestBody,
  ): Promise<ProcessMediaFormattingTaskResponse>;
}

export abstract class ListMediaFormattingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_MEDIA_FORMATTING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListMediaFormattingTasksRequestBody,
  ): Promise<ListMediaFormattingTasksResponse>;
}

export abstract class CancelMediaFormattingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CANCEL_MEDIA_FORMATTING;
  public abstract handle(
    loggingPrefix: string,
    body: CancelMediaFormattingRequestBody,
  ): Promise<CancelMediaFormattingResponse>;
}

export abstract class ProcessSubtitleFormattingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_SUBTITLE_FORMATTING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessSubtitleFormattingTaskRequestBody,
  ): Promise<ProcessSubtitleFormattingTaskResponse>;
}

export abstract class ListSubtitleFormattingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_SUBTITLE_FORMATTING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListSubtitleFormattingTasksRequestBody,
  ): Promise<ListSubtitleFormattingTasksResponse>;
}

export abstract class CancelSubtitleFormattingHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CANCEL_SUBTITLE_FORMATTING;
  public abstract handle(
    loggingPrefix: string,
    body: CancelSubtitleFormattingRequestBody,
  ): Promise<CancelSubtitleFormattingResponse>;
}

export abstract class ProcessStorageStartRecordingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_STORAGE_START_RECORDING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessStorageStartRecordingTaskRequestBody,
  ): Promise<ProcessStorageStartRecordingTaskResponse>;
}

export abstract class ListStorageStartRecordingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_STORAGE_START_RECORDING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListStorageStartRecordingTasksRequestBody,
  ): Promise<ListStorageStartRecordingTasksResponse>;
}

export abstract class DeleteVideoTrackHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DELETE_VIDEO_TRACK;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteVideoTrackRequestBody,
  ): Promise<DeleteVideoTrackResponse>;
}

export abstract class DropVideoTrackStagingDataHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DROP_VIDEO_TRACK_STAGING_DATA;
  public abstract handle(
    loggingPrefix: string,
    body: DropVideoTrackStagingDataRequestBody,
  ): Promise<DropVideoTrackStagingDataResponse>;
}

export abstract class UpdateAudioTrackHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPDATE_AUDIO_TRACK;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateAudioTrackRequestBody,
  ): Promise<UpdateAudioTrackResponse>;
}

export abstract class DeleteAudioTrackHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DELETE_AUDIO_TRACK;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteAudioTrackRequestBody,
  ): Promise<DeleteAudioTrackResponse>;
}

export abstract class DropAudioTrackStagingDataHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DROP_AUDIO_TRACK_STAGING_DATA;
  public abstract handle(
    loggingPrefix: string,
    body: DropAudioTrackStagingDataRequestBody,
  ): Promise<DropAudioTrackStagingDataResponse>;
}

export abstract class UpdateSubtitleTrackHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPDATE_SUBTITLE_TRACK;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateSubtitleTrackRequestBody,
  ): Promise<UpdateSubtitleTrackResponse>;
}

export abstract class DeleteSubtitleTrackHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DELETE_SUBTITLE_TRACK;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteSubtitleTrackRequestBody,
  ): Promise<DeleteSubtitleTrackResponse>;
}

export abstract class DropSubtitleTrackStagingDataHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DROP_SUBTITLE_TRACK_STAGING_DATA;
  public abstract handle(
    loggingPrefix: string,
    body: DropSubtitleTrackStagingDataRequestBody,
  ): Promise<DropSubtitleTrackStagingDataResponse>;
}

export abstract class ProcessStorageEndRecordingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_STORAGE_END_RECORDING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessStorageEndRecordingTaskRequestBody,
  ): Promise<ProcessStorageEndRecordingTaskResponse>;
}

export abstract class ListStorageEndRecordingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_STORAGE_END_RECORDING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListStorageEndRecordingTasksRequestBody,
  ): Promise<ListStorageEndRecordingTasksResponse>;
}

export abstract class ProcessGcsFileDeletingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_GCS_FILE_DELETING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessGcsFileDeletingTaskRequestBody,
  ): Promise<ProcessGcsFileDeletingTaskResponse>;
}

export abstract class ListGcsFileDeletingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_GCS_FILE_DELETING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListGcsFileDeletingTasksRequestBody,
  ): Promise<ListGcsFileDeletingTasksResponse>;
}

export abstract class ProcessR2KeyDeletingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_R2_KEY_DELETING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessR2KeyDeletingTaskRequestBody,
  ): Promise<ProcessR2KeyDeletingTaskResponse>;
}

export abstract class ListR2KeyDeletingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_R2_KEY_DELETING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListR2KeyDeletingTasksRequestBody,
  ): Promise<ListR2KeyDeletingTasksResponse>;
}
