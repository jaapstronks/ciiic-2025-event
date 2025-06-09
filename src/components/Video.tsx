import MuxPlayer from '@mux/mux-player-react';
import './Video.css';

interface VideoProps {
  playbackId: string;
  title: string;
  description?: string;
  transcript?: string;
}

export default function Video({
  playbackId,
  title,
  description,
  transcript,
}: VideoProps) {
  return (
    <div className="video-container">
      <MuxPlayer
        playbackId={playbackId}
        metadata={{
          video_title: title,
          viewer_user_id: 'Placeholder (optional)',
        }}
        style={{
          width: '100%',
          aspectRatio: '16/9',
          borderRadius: '8px',
          marginBottom: '1rem',
        }}
      />
      {description && (
        <div className="video-info">
          <p>{description}</p>
        </div>
      )}
      {transcript && (
        <details className="video-transcript">
          <summary>Transcript</summary>
          <div className="transcript-content">
            {transcript
              .split('\n')
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </details>
      )}
    </div>
  );
}
