import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { RSVPForm } from "./RSVPForm";
import styles from "./RSVP.module.scss";

type DirectLine = {
  label: string;
  lines: ReactNode[];
};

type PlaylistSong = {
  id: string;
  song: string;
};

type Playlist = {
  eyebrow: string;
  headline: string;
  emptyMessage: string;
  songs: PlaylistSong[];
};

type Props = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  headlineSuffix?: string;
  intro: ReactNode;
  directLine?: DirectLine;
  thanksHeadlineLead: string;
  thanksHeadlineAccent: string;
  thanksMessage: string;
  submitLabel: string;
  addAnotherLabel: string;
  playlist?: Playlist;
};

export function RSVP({
  eyebrow,
  headlineLead,
  headlineAccent,
  headlineSuffix,
  intro,
  directLine,
  thanksHeadlineLead,
  thanksHeadlineAccent,
  thanksMessage,
  submitLabel,
  addAnotherLabel,
  playlist,
}: Props) {
  return (
    <section className={styles.section} id="rsvp">
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.side}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 className={styles.headline}>
              {headlineLead}{" "}
              <em className={styles.accent}>{headlineAccent}</em>
              {headlineSuffix}
            </h2>
            <p className={styles.intro}>{intro}</p>

            {directLine && (
              <div className={styles.directLine}>
                <span className={styles.directLabel}>{directLine.label}</span>
                {directLine.lines.map((line, i) => (
                  <p key={i} className={styles.directLineRow}>
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <RSVPForm
            thanksHeadlineLead={thanksHeadlineLead}
            thanksHeadlineAccent={thanksHeadlineAccent}
            thanksMessage={thanksMessage}
            submitLabel={submitLabel}
            addAnotherLabel={addAnotherLabel}
          />
        </Reveal>
      </div>

      {playlist && (
        <Reveal delay={180}>
          <div className={styles.playlist}>
            <span className={styles.playlistEyebrow}>{playlist.eyebrow}</span>
            <h3 className={styles.playlistHeadline}>{playlist.headline}</h3>
            {playlist.songs.length === 0 ? (
              <p className={styles.playlistEmpty}>{playlist.emptyMessage}</p>
            ) : (
              <ol className={styles.playlistList}>
                {playlist.songs.map(({ id, song }) => (
                  <li key={id} className={styles.playlistItem}>
                    <span className={styles.playlistSong}>{song}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </Reveal>
      )}
    </section>
  );
}
