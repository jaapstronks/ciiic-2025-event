import { useState } from 'react';
import MuxPlayer from '@mux/mux-player-react';

interface VideoPlayerProps {
  playbackId: string;
  title: string;
  description?: string;
  transcript?: string;
}

export default function VideoPlayer({
  playbackId,
  title,
  description,
  transcript,
}: VideoPlayerProps) {
  const [isTranscriptOpen, setIsTranscriptOpen] =
    useState(false);

  return (
    <div className="video-container">
      <MuxPlayer
        playbackId={playbackId}
        metadata={{
          video_title: title,
        }}
        className="video-player"
      />
      <div className="video-info">
        {description && <p>{description}</p>}
        {transcript && (
          <div className="transcript-section">
            <button
              className="transcript-toggle"
              onClick={() =>
                setIsTranscriptOpen(!isTranscriptOpen)
              }
            >
              {isTranscriptOpen
                ? 'Hide Transcript'
                : 'Show Transcript'}
            </button>
            {isTranscriptOpen && (
              <div className="transcript-content">
                {transcript}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
